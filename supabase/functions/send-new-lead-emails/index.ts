import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RoofAssessment {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  street_address?: string;
  city: string;
  zip_code?: string;
  heard_about_us?: string;
  property_type: string;
  preferred_contact_method?: string;
  preferred_time_of_day?: string;
  message?: string;
  source?: string;
  page_url?: string;
  submitted_at: string;
}

interface ResendEmailPayload {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

async function sendEmail(apiKey: string, payload: ResendEmailPayload): Promise<boolean> {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error(`Resend API error: ${response.status} - ${error}`);
      return false;
    }

    const result = await response.json();
    console.log(`Email sent successfully:`, result);
    return true;
  } catch (error) {
    console.error(`Failed to send email:`, error);
    return false;
  }
}

function generateLeadSetterEmail(data: RoofAssessment, fromEmail: string, leadSetterEmail: string): ResendEmailPayload {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: #dc2626; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">🏠 New Roofing Lead</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">All Phase Construction USA</p>
      </div>

      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #1f2937; margin-top: 0;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.full_name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${data.phone}" style="color: #dc2626;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${data.email}" style="color: #dc2626;">${data.email}</a></td>
          </tr>
          ${data.street_address ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Address:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.street_address}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>City:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.city || 'Not provided'}</td>
          </tr>
          ${data.zip_code ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Zip Code:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.zip_code}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Property Type:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.property_type}</td>
          </tr>
          ${data.preferred_contact_method ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Contact:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.preferred_contact_method}</td>
          </tr>
          ` : ''}
          ${data.preferred_time_of_day ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Preferred Time:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.preferred_time_of_day}</td>
          </tr>
          ` : ''}
          ${data.heard_about_us ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Heard About Us:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.heard_about_us}</td>
          </tr>
          ` : ''}
        </table>

        ${data.message ? `
        <h2 style="color: #1f2937; margin-top: 30px; margin-bottom: 10px;">Customer Message</h2>
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626;">
          <p style="margin: 0; color: #374151; white-space: pre-wrap;">${data.message}</p>
        </div>
        ` : ''}

        <h2 style="color: #1f2937; margin-top: 30px; margin-bottom: 10px;">Source Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Source:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.source || 'Website'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><strong>Page URL:</strong></td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${data.page_url || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0;"><strong>Submitted:</strong></td>
            <td style="padding: 10px 0;">${new Date(data.submitted_at).toLocaleString('en-US', { timeZone: 'America/New_York' })} ET</td>
          </tr>
        </table>

        <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-radius: 6px; border: 1px solid #fecaca;">
          <p style="margin: 0; color: #991b1b; font-weight: bold;">⚡ Action Required</p>
          <p style="margin: 10px 0 0 0; color: #7f1d1d;">Contact this lead within 5 minutes for best conversion rate. Call: <a href="tel:${data.phone}" style="color: #dc2626;">${data.phone}</a></p>
        </div>
      </div>

      <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
        <p>Lead ID: ${data.id}</p>
        <p>All Phase Construction USA | Licensed Roofing Contractor</p>
        <p>CCC1333268 • CGC1519065</p>
      </div>
    </div>
  `;

  return {
    from: fromEmail,
    to: [leadSetterEmail],
    subject: `🏠 New Roofing Lead: ${data.full_name} - ${data.city || 'South Florida'}`,
    html,
  };
}

function generateCustomerThankYouEmail(data: RoofAssessment, fromEmail: string): ResendEmailPayload {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
      <div style="background-color: #dc2626; color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 28px;">Thank You!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">We've received your roofing request</p>
      </div>

      <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="color: #1f2937; font-size: 16px; line-height: 1.6; margin-top: 0;">
          Hi ${data.full_name.split(' ')[0]},
        </p>

        <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
          Thank you for contacting <strong>All Phase Construction USA</strong>! We've received your request for ${data.property_type.toLowerCase()} service and our team is reviewing your information right now.
        </p>

        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; margin: 25px 0; border-left: 4px solid #dc2626;">
          <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">What Happens Next?</h2>
          <ul style="color: #374151; margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>A roofing specialist will contact you within 24 hours</li>
            <li>We'll schedule a free, no-obligation roof assessment</li>
            <li>Our licensed contractor will inspect your property</li>
            <li>You'll receive a detailed estimate with multiple options</li>
          </ul>
        </div>

        <div style="background-color: #fef2f2; padding: 20px; border-radius: 6px; margin: 25px 0; border: 1px solid #fecaca;">
          <h2 style="color: #991b1b; margin: 0 0 10px 0; font-size: 18px;">⚡ Urgent Leak or Emergency?</h2>
          <p style="color: #7f1d1d; margin: 0; line-height: 1.6;">
            Don't wait! Call us immediately at <a href="tel:754-227-5605" style="color: #dc2626; font-weight: bold; font-size: 18px; text-decoration: none;">754-227-5605</a>
          </p>
          <p style="color: #7f1d1d; margin: 10px 0 0 0; font-size: 14px;">
            We offer 24/7 emergency roofing services throughout South Florida.
          </p>
        </div>

        <div style="background-color: #eff6ff; padding: 20px; border-radius: 6px; margin: 25px 0; border-left: 4px solid #2563eb;">
          <h2 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">Why Choose All Phase Construction USA?</h2>
          <ul style="color: #1e3a8a; margin: 0; padding-left: 20px; line-height: 1.8;">
            <li><strong>Dual Licensed:</strong> General Contractor (CGC1519065) & Roofing Contractor (CCC1333268)</li>
            <li><strong>30+ Years:</strong> Serving South Florida with excellence</li>
            <li><strong>Hurricane Rated:</strong> Florida Building Code certified materials</li>
            <li><strong>Full Service:</strong> From permits to final inspection</li>
            <li><strong>Warranty Protected:</strong> Comprehensive labor & material warranties</li>
          </ul>
        </div>

        <p style="color: #1f2937; font-size: 16px; line-height: 1.6;">
          We're excited to help protect your home with a quality roof built to last!
        </p>

        <p style="color: #1f2937; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
          Best regards,<br>
          <strong>The All Phase Construction USA Team</strong>
        </p>
      </div>

      <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 14px; line-height: 1.6;">
        <p style="margin: 5px 0;"><strong>All Phase Construction USA</strong></p>
        <p style="margin: 5px 0;">590 Goolsby Blvd, Deerfield Beach, FL 33442</p>
        <p style="margin: 5px 0;">
          <a href="tel:754-227-5605" style="color: #dc2626; text-decoration: none;">754-227-5605</a> |
          <a href="mailto:leads@allphaseusa.com" style="color: #dc2626; text-decoration: none;">leads@allphaseusa.com</a>
        </p>
        <p style="margin: 5px 0;">Licensed & Insured: CCC1333268 • CGC1519065</p>
        <p style="margin: 15px 0 5px 0; font-size: 12px; color: #9ca3af;">
          Serving Boca Raton, Delray Beach, Fort Lauderdale, Pompano Beach, Coral Springs & All of South Florida
        </p>
      </div>
    </div>
  `;

  return {
    from: fromEmail,
    to: [data.email],
    subject: "We've Received Your Request - All Phase Construction USA",
    html,
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const LEAD_SETTER_EMAIL = Deno.env.get("LEAD_SETTER_EMAIL") || "leads@allphaseusa.com";
    const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "All Phase Construction USA <info@allphaseusa.com>";

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service not configured",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { record }: { record: RoofAssessment } = await req.json();

    if (!record) {
      console.error("No record data provided");
      return new Response(
        JSON.stringify({
          success: false,
          error: "No record data provided",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log(`Processing new lead: ${record.id} - ${record.full_name}`);

    const results = {
      leadSetterEmailSent: false,
      customerEmailSent: false,
      errors: [] as string[],
    };

    const leadSetterEmailPayload = generateLeadSetterEmail(record, FROM_EMAIL, LEAD_SETTER_EMAIL);
    results.leadSetterEmailSent = await sendEmail(RESEND_API_KEY, leadSetterEmailPayload);

    if (!results.leadSetterEmailSent) {
      results.errors.push("Failed to send lead setter email");
    }

    if (record.email && record.email.includes("@")) {
      const customerEmailPayload = generateCustomerThankYouEmail(record, FROM_EMAIL);
      results.customerEmailSent = await sendEmail(RESEND_API_KEY, customerEmailPayload);

      if (!results.customerEmailSent) {
        results.errors.push("Failed to send customer thank-you email");
      }
    } else {
      console.log("Skipping customer email - no valid email address provided");
      results.errors.push("No valid customer email address");
    }

    console.log("Email processing completed:", results);

    return new Response(
      JSON.stringify({
        success: true,
        leadId: record.id,
        results,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in send-new-lead-emails function:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});