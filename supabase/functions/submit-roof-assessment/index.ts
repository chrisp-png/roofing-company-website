import { createClient } from 'jsr:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const LEADS_EMAIL =
  Deno.env.get('LEADS_EMAIL') ?? 'leads@allphaseusa.com';

interface AssessmentFormData {
  fullName: string;
  phone: string;
  email: string;
  streetAddress?: string;
  city: string;
  zipCode?: string;
  heardAboutUs?: string;
  propertyType: string;
  preferredContactMethod?: string;
  preferredTimeOfDay?: string;
  message?: string;
  source?: string;
  pageUrl?: string;
  submittedAt?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const formData: AssessmentFormData = await req.json();

    const { data: assessment, error: dbError } = await supabase
      .from('roof_assessments')
      .insert({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        street_address: formData.streetAddress || '',
        city: formData.city,
        zip_code: formData.zipCode || '',
        heard_about_us: formData.heardAboutUs || '',
        property_type: formData.propertyType,
        preferred_contact_method: formData.preferredContactMethod || 'Phone Call',
        preferred_time_of_day: formData.preferredTimeOfDay || '',
        message: formData.message || '',
        source: formData.source || 'Website Roof Assessment Form',
        page_url: formData.pageUrl || '',
        submitted_at: formData.submittedAt || new Date().toISOString(),
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error('Failed to save assessment');
    }

    let emailSent = false;
    let jobnimbusSent = false;

    try {
      const emailBody = `
New Roof Assessment Request

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.streetAddress || 'Not provided'}
City: ${formData.city}
Zip Code: ${formData.zipCode || 'Not provided'}
Property Type: ${formData.propertyType}

Preferred Contact: ${formData.preferredContactMethod || 'Phone Call'}
Preferred Time: ${formData.preferredTimeOfDay || 'No preference'}
Heard About Us: ${formData.heardAboutUs || 'Not specified'}

Message:
${formData.message || 'No message provided'}

Source: ${formData.source || 'Website'}
Page: ${formData.pageUrl || 'Unknown'}
Submitted: ${formData.submittedAt || new Date().toISOString()}
      `;

      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY') || ''}`,
        },
        body: JSON.stringify({
          from: 'All Phase Roofing <noreply@allphaseusa.com>',
          to: ['leads@allphaseusa.com'],
          subject: `New Roof Assessment Request - ${formData.city}`,
          text: emailBody,
        }),
      });

      if (emailResponse.ok) {
        emailSent = true;
      } else {
        console.error('Email send failed:', await emailResponse.text());
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    const jobnimbusWebhookUrl = Deno.env.get('JOBNIMBUS_WEBHOOK_URL');
    if (jobnimbusWebhookUrl) {
      try {
        const jobnimbusPayload = {
          first_name: formData.fullName.split(' ')[0] || formData.fullName,
          last_name: formData.fullName.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          address_line1: formData.streetAddress || '',
          city: formData.city,
          zip: formData.zipCode || '',
          property_type: formData.propertyType,
          source: formData.heardAboutUs || 'Website',
          notes: formData.message || '',
          preferred_contact: formData.preferredContactMethod || 'Phone Call',
          preferred_time: formData.preferredTimeOfDay || 'No preference',
        };

        const jobnimbusResponse = await fetch(jobnimbusWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jobnimbusPayload),
        });

        if (jobnimbusResponse.ok) {
          jobnimbusSent = true;
        } else {
          console.error('JobNimbus webhook failed:', await jobnimbusResponse.text());
        }
      } catch (jobnimbusError) {
        console.error('JobNimbus error:', jobnimbusError);
      }
    }

    await supabase
      .from('roof_assessments')
      .update({
        email_sent: emailSent,
        jobnimbus_sent: jobnimbusSent,
      })
      .eq('id', assessment.id);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Assessment submitted successfully',
        id: assessment.id,
        emailSent,
        jobnimbusSent,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error processing assessment:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});