# Email Automation Setup Guide

## ✅ What Has Been Created

### 1. Edge Function: `send-new-lead-emails`
- **Location:** `supabase/functions/send-new-lead-emails/index.ts`
- **Status:** Deployed and Active
- **Purpose:** Sends two emails when a new lead is submitted:
  - Lead setter notification (with all contact details)
  - Customer thank-you email (with next steps)

### 2. Database Trigger: `on_roof_assessment_created`
- **Table:** `roof_assessments`
- **Type:** AFTER INSERT trigger
- **Function:** `notify_new_lead()`
- **Behavior:** Automatically calls the Edge Function for each new submission

### 3. How It Works
```
User submits form → Row inserted in roof_assessments → Trigger fires → Edge Function called → Emails sent
```

**Important:** Email failures do NOT prevent the form submission from succeeding. The green success checkmark always shows, and the lead data is always saved.

---

## 🔧 Required Configuration

### Environment Variables (Set in Supabase Dashboard)

You need to configure these three environment variables in your Supabase Dashboard:

1. **RESEND_API_KEY** (Required)
   - Get this from your Resend account: https://resend.com/api-keys
   - Format: `re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

2. **LEAD_SETTER_EMAIL** (Optional - defaults to `leads@allphaseusa.com`)
   - The email address that receives lead notifications
   - Your team's inbox for new roofing leads

3. **FROM_EMAIL** (Optional - defaults to `All Phase Construction USA <info@allphaseusa.com>`)
   - The "from" address for all outgoing emails
   - Must be a verified domain in Resend
   - Format: `"Display Name <email@domain.com>"`

---

## 📝 How to Set Environment Variables

### Step 1: Go to Supabase Dashboard
1. Visit: https://supabase.com/dashboard/project/flpmxlyvdprupupotlxm
2. Click on **Edge Functions** in the left sidebar
3. Click on the **send-new-lead-emails** function
4. Click the **Settings** tab
5. Scroll to **Secrets / Environment Variables**

### Step 2: Add Your Variables
Click **Add Secret** and add each variable:

```
Name: RESEND_API_KEY
Value: re_your_actual_api_key_here
```

```
Name: LEAD_SETTER_EMAIL
Value: leads@allphaseusa.com
```

```
Name: FROM_EMAIL
Value: All Phase Construction USA <info@allphaseusa.com>
```

### Step 3: Save
After adding all three variables, the Edge Function will automatically use them.

**Note:** You can update these values anytime without changing any code.

---

## 🧪 Testing Instructions

### Test 1: Submit a Form from Homepage
1. Go to your website homepage
2. Fill out the contact form with test data:
   - Name: Test Lead
   - Phone: 754-555-0123
   - Email: **your-personal-email@domain.com** (use your real email to verify receipt)
   - Service: Any option
   - Message: "This is a test submission"
3. Click "Submit"
4. Verify the green success checkmark appears
5. Check your email inbox for the customer thank-you email

### Test 2: Check Lead Setter Email
1. Check the inbox for `LEAD_SETTER_EMAIL` (leads@allphaseusa.com by default)
2. You should receive a formatted lead notification with:
   - All contact details
   - Customer message
   - Source/page information
   - "Action Required" banner

### Test 3: Verify Database Entry
Query the database to confirm the lead was saved:

```sql
SELECT id, full_name, phone, email, source, submitted_at
FROM roof_assessments
ORDER BY submitted_at DESC
LIMIT 1;
```

---

## 📊 Checking Logs & Debugging

### View Edge Function Logs
1. Go to Supabase Dashboard → **Edge Functions**
2. Click on **send-new-lead-emails**
3. Click the **Logs** tab
4. You'll see real-time logs showing:
   - When the function was called
   - Which emails were sent
   - Any errors that occurred

### Example Log Output (Success)
```
Processing new lead: abc123-uuid - John Smith
Email sent successfully: { id: "msg_xyz..." }
Email sent successfully: { id: "msg_abc..." }
Email processing completed: {
  leadSetterEmailSent: true,
  customerEmailSent: true,
  errors: []
}
```

### Example Log Output (Error)
```
RESEND_API_KEY environment variable is not set
```
**Solution:** Add the RESEND_API_KEY in Edge Function settings

```
Resend API error: 401 - Invalid API key
```
**Solution:** Check that your Resend API key is correct

```
Resend API error: 422 - Email address not verified
```
**Solution:** Verify your FROM_EMAIL domain in Resend

---

## 🎯 Email Templates

### Lead Setter Email
**Subject:** 🏠 New Roofing Lead: [Customer Name] - [City]

**Content:**
- Professional red/white branded design
- Contact information table (name, phone, email, address)
- Property details (type, preferences)
- Customer message in highlighted box
- Source/tracking information (page URL, timestamp)
- "Action Required" banner with click-to-call phone number

### Customer Thank-You Email
**Subject:** We've Received Your Request - All Phase Construction USA

**Content:**
- Professional branded design
- Personalized greeting
- "What Happens Next?" section with 4-step process
- Emergency contact information (754-227-5605)
- "Why Choose All Phase?" benefits list
- Company contact information and licenses
- Service area footer

---

## 🔄 Workflow Diagram

```
┌─────────────────────┐
│  User Fills Form    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  React Submits to   │
│  Supabase DB        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Row Inserted in    │
│  roof_assessments   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Trigger Fires      │
│  (on_roof_assessment│
│   _created)         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Edge Function      │
│  Called via HTTP    │
│  (async/non-blocking)│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Resend API Called  │
│  Two emails sent:   │
│  1. Lead setter     │
│  2. Customer        │
└─────────────────────┘
```

---

## 🚨 Important Notes

### Front-End Unchanged
- The React forms continue to work exactly as before
- Success message shows immediately (doesn't wait for emails)
- No changes to form components or styling
- Zero impact on user experience

### Database Safety
- Lead data is ALWAYS saved, even if emails fail
- Email errors are logged but don't throw exceptions
- The trigger returns successfully regardless of email status
- No data loss from email service issues

### Future Extensions
The Edge Function is structured to easily add:
- Webhooks to AI calling systems
- CRM integrations (JobNimbus, Salesforce, etc.)
- SMS notifications via Twilio
- Slack notifications
- Additional email recipients

To extend, simply add code after the email sending section in the Edge Function.

---

## 📧 Resend Setup (If Not Done Already)

### 1. Create Resend Account
- Visit: https://resend.com
- Sign up for free account
- Free tier includes 100 emails/day (3,000/month)

### 2. Verify Your Domain
1. Go to **Domains** in Resend dashboard
2. Click **Add Domain**
3. Enter `allphaseusa.com` (or your domain)
4. Add the DNS records provided by Resend
5. Wait for verification (usually 5-10 minutes)

### 3. Get API Key
1. Go to **API Keys** in Resend dashboard
2. Click **Create API Key**
3. Name it "Supabase Production"
4. Copy the key (starts with `re_`)
5. Add it to Supabase Edge Function secrets

---

## ✅ Verification Checklist

- [ ] Edge Function deployed (`send-new-lead-emails`)
- [ ] Database trigger created (`on_roof_assessment_created`)
- [ ] RESEND_API_KEY environment variable set
- [ ] LEAD_SETTER_EMAIL environment variable set (or using default)
- [ ] FROM_EMAIL environment variable set (or using default)
- [ ] Domain verified in Resend dashboard
- [ ] Test form submission completed
- [ ] Lead setter email received
- [ ] Customer thank-you email received
- [ ] Database entry confirmed
- [ ] Logs checked (no errors)

---

## 🆘 Troubleshooting

### "Email service not configured" error
**Problem:** RESEND_API_KEY is not set
**Solution:** Add RESEND_API_KEY in Supabase Dashboard → Edge Functions → Secrets

### Emails not being sent
**Problem:** Trigger might not be firing
**Solution:** Check Edge Function logs to see if it's being called

### "Email address not verified" error from Resend
**Problem:** FROM_EMAIL domain not verified
**Solution:** Verify your domain in Resend dashboard

### Customer email not received but lead setter email works
**Problem:** Customer's email might be invalid or bouncing
**Solution:** Check Resend dashboard → Logs for delivery status

### Want to change email recipients
**Problem:** Need to update LEAD_SETTER_EMAIL
**Solution:** Edit the secret in Supabase Dashboard (no code changes needed)

---

## 📞 Support

If you need to modify the email templates:
- Edit: `supabase/functions/send-new-lead-emails/index.ts`
- Redeploy using Supabase CLI or dashboard

For issues with:
- Resend API: Check https://resend.com/docs
- Supabase Edge Functions: Check https://supabase.com/docs/guides/functions
- Database triggers: Check logs in Supabase Dashboard → Database → Logs
