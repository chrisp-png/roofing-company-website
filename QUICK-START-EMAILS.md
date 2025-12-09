# Quick Start - Email Automation

## ✅ Setup Complete!

Your contact form now automatically sends emails when leads are submitted. Here's what you need to do to activate it:

---

## 🚀 3 Steps to Activate

### Step 1: Get Resend API Key (5 minutes)
1. Go to https://resend.com and create a free account
2. Add and verify your domain (`allphaseusa.com`)
3. Go to **API Keys** → **Create API Key**
4. Copy the key (starts with `re_`)

### Step 2: Add to Supabase (2 minutes)
1. Go to https://supabase.com/dashboard/project/flpmxlyvdprupupotlxm/functions
2. Click **send-new-lead-emails** function
3. Click **Settings** tab
4. Under **Secrets**, add:
   ```
   RESEND_API_KEY = re_your_actual_key_here
   LEAD_SETTER_EMAIL = leads@allphaseusa.com
   FROM_EMAIL = All Phase Construction USA <info@allphaseusa.com>
   ```

### Step 3: Test (1 minute)
1. Submit a test form on your website
2. Check your email inbox
3. Done!

---

## 📧 What Emails Are Sent?

### Email 1: Lead Notification (to your team)
- **To:** leads@allphaseusa.com (or whatever you set)
- **Subject:** 🏠 New Roofing Lead: [Name] - [City]
- **Contains:** All contact details, message, source tracking, action prompt

### Email 2: Customer Thank-You (to homeowner)
- **To:** The customer's email address
- **Subject:** We've Received Your Request - All Phase Construction USA
- **Contains:** Thank you message, next steps, emergency number, why choose us

---

## 🔍 How to Check It's Working

### View Logs
1. Supabase Dashboard → **Edge Functions** → **send-new-lead-emails** → **Logs**
2. Look for: `Processing new lead: [ID] - [Name]`
3. Look for: `Email sent successfully`

### Check Database
```sql
SELECT * FROM roof_assessments ORDER BY submitted_at DESC LIMIT 5;
```

All leads are saved even if emails fail!

---

## 🎯 Key Points

✅ **Front-end unchanged** - Form works exactly as before
✅ **Database always saves** - Email failures don't block submissions
✅ **Easy to update** - Change email addresses anytime in Supabase settings
✅ **Professional emails** - Branded HTML templates with your colors
✅ **Async/non-blocking** - Users see success immediately
✅ **Easy to extend** - Add webhooks, SMS, or CRM integrations later

---

## 🆘 Quick Troubleshooting

**No emails sent?**
→ Check RESEND_API_KEY is set in Supabase

**"Email address not verified" error?**
→ Verify your domain in Resend dashboard

**Lead setter email works but customer email doesn't?**
→ Check customer entered a valid email address

**Want to change who receives lead notifications?**
→ Update LEAD_SETTER_EMAIL in Supabase secrets

---

## 📖 Full Documentation

See `EMAIL-AUTOMATION-SETUP.md` for detailed documentation including:
- Complete testing instructions
- Log interpretation guide
- Email template customization
- Workflow diagrams
- Troubleshooting guide
