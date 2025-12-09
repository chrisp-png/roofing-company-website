import { useState, FormEvent } from 'react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import BreadcrumbSchema from '../components/schema/BreadcrumbSchema';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  streetAddress: string;
  city: string;
  zipCode: string;
  heardAboutUs: string;
  propertyType: string;
  preferredContactMethod: string;
  preferredTimeOfDay: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  propertyType?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    heardAboutUs: '',
    propertyType: '',
    preferredContactMethod: 'Phone Call',
    preferredTimeOfDay: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Please select a property type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        source: 'Website Roof Assessment Form',
        pageUrl: '/contact',
        submittedAt: new Date().toISOString(),
      };

      // TODO: Wire this to send email to leads@allphaseusa.com or JobNimbus webhook in production
      console.log('Form submission:', payload);

      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        zipCode: '',
        heardAboutUs: '',
        propertyType: '',
        preferredContactMethod: 'Phone Call',
        preferredTimeOfDay: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <SEO
        title="Contact All Phase Construction USA | Request Roof Assessment"
        description="Contact All Phase Construction USA for a free roof assessment in Broward and Palm Beach Counties. Residential, commercial, and HOA roofing services. Call 754-227-5605."
        canonical="/contact"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/" },
          { name: "Contact", url: "https://chrisp-png-roofing-c-gxj0.bolt.host/contact" }
        ]}
      />

      <div className="bg-black text-white min-h-screen">
        <section className="relative bg-gradient-to-br from-neutral-950 to-black border-b border-neutral-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Request a Roof Assessment
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                All Phase Construction USA serves homeowners, businesses, and HOA properties throughout Broward and Palm Beach Counties. A roof assessment includes photos, explanation of your options, and estimated pricing—all at no charge.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div id="form" className="bg-black border border-neutral-800 rounded-2xl p-8 md:p-10">
                  {submitStatus === 'success' && (
                    <div className="mb-8 p-6 bg-green-900/20 border border-green-500/30 rounded-xl flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Request Received!</h3>
                        <p className="text-neutral-300">
                          Thank you! Your request has been received. A team member from All Phase Construction USA will contact you shortly to schedule your roof assessment.
                        </p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-8 p-6 bg-red-900/20 border border-red-500/30 rounded-xl flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Submission Error</h3>
                        <p className="text-neutral-300">
                          Something went wrong submitting your request. Please try again, or call us at{' '}
                          <a href="tel:754-227-5605" className="text-red-500 hover:text-red-400 font-semibold">
                            754-227-5605
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-white mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-neutral-900 border ${
                            errors.fullName ? 'border-red-500' : 'border-neutral-700'
                          } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors`}
                          placeholder="John Smith"
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-neutral-900 border ${
                            errors.phone ? 'border-red-500' : 'border-neutral-700'
                          } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors`}
                          placeholder="(754) 555-1234"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-neutral-900 border ${
                          errors.email ? 'border-red-500' : 'border-neutral-700'
                        } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-white mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-neutral-900 border ${
                            errors.city ? 'border-red-500' : 'border-neutral-700'
                          } rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors`}
                          placeholder="Boca Raton"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="zipCode" className="block text-sm font-semibold text-white mb-2">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                          placeholder="33431"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="streetAddress" className="block text-sm font-semibold text-white mb-2">
                        Street Address
                      </label>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-semibold text-white mb-2">
                        What best describes your property? <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-neutral-900 border ${
                          errors.propertyType ? 'border-red-500' : 'border-neutral-700'
                        } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors`}
                      >
                        <option value="">Select property type</option>
                        <option value="Single-Family Home">Single-Family Home</option>
                        <option value="Townhome / Villa">Townhome / Villa</option>
                        <option value="Condo (top floor)">Condo (top floor)</option>
                        <option value="HOA / Condo Association">HOA / Condo Association</option>
                        <option value="Commercial Building">Commercial Building</option>
                      </select>
                      {errors.propertyType && (
                        <p className="mt-1 text-sm text-red-500">{errors.propertyType}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="heardAboutUs" className="block text-sm font-semibold text-white mb-2">
                        How did you hear about us?
                      </label>
                      <input
                        type="text"
                        id="heardAboutUs"
                        name="heardAboutUs"
                        value={formData.heardAboutUs}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="Google, referral, etc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="preferredContactMethod" className="block text-sm font-semibold text-white mb-2">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContactMethod"
                          name="preferredContactMethod"
                          value={formData.preferredContactMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        >
                          <option value="Phone Call">Phone Call</option>
                          <option value="Text Message">Text Message</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="preferredTimeOfDay" className="block text-sm font-semibold text-white mb-2">
                          Preferred Time of Day
                        </label>
                        <select
                          id="preferredTimeOfDay"
                          name="preferredTimeOfDay"
                          value={formData.preferredTimeOfDay}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        >
                          <option value="">No preference</option>
                          <option value="Morning">Morning</option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                        Message / Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your roof or any specific concerns..."
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-500 transition-all duration-200 shadow-lg shadow-red-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Free Assessment'}
                      </button>
                    </div>

                    <p className="text-xs text-neutral-400 text-center pt-2">
                      By submitting this form, you agree to be contacted by All Phase Construction USA by phone, text, or email. We respect your privacy and do not sell your information.
                    </p>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-2 border-red-500/30 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Office Location</h4>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                          590 Goolsby Blvd<br />
                          Deerfield Beach, FL 33442
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                          <Phone className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Phone</h4>
                        <a
                          href="tel:754-227-5605"
                          className="text-neutral-300 text-sm hover:text-red-500 transition-colors"
                        >
                          754-227-5605
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600/10 border border-red-500/30 rounded-lg flex items-center justify-center">
                          <Mail className="w-6 h-6 text-red-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">Email</h4>
                        <a
                          href="mailto:leads@allphaseusa.com"
                          className="text-neutral-300 text-sm hover:text-red-500 transition-colors"
                        >
                          leads@allphaseusa.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-700">
                    <h4 className="text-sm font-semibold text-white mb-3">Florida Licenses</h4>
                    <div className="space-y-1 text-sm text-neutral-300">
                      <p>General Contractor: CGC1526236</p>
                      <p>Roofing Contractor: CCC1331464</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-700">
                    <h4 className="text-sm font-semibold text-white mb-3">Service Areas</h4>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      We serve Broward and Palm Beach Counties including Boca Raton, Deerfield Beach, Coral Springs, Pompano Beach, Delray Beach, and surrounding areas.
                    </p>
                  </div>

                  <div className="mt-8 pt-8 border-t border-neutral-700">
                    <h4 className="text-sm font-semibold text-white mb-4">Connect With Us</h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.facebook.com/AllPhaseConstructionUsA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50"
                        aria-label="Follow us on Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/all_phase_construction_usa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-pink-900/50"
                        aria-label="Follow us on Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/@allphaseconstructionusa5626"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-800 hover:bg-red-600 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-red-900/50"
                        aria-label="Subscribe on YouTube"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@allphaseusa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-800 hover:bg-black rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-neutral-900/50"
                        aria-label="Follow us on TikTok"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/all-phase-construction-usa-llc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-neutral-800 hover:bg-blue-700 rounded-full flex items-center justify-center text-neutral-200 hover:text-white transition-all duration-200 shadow-lg hover:shadow-blue-900/50"
                        aria-label="Connect on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
