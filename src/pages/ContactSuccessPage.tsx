import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactSuccessPage() {
  return (
    <>
      <SEO
        title="Message Sent Successfully - All Phase Construction USA"
        description="Thank you for contacting All Phase Construction USA. We'll get back to you shortly."
        canonical="https://allphaseusa.com/contact-success"
      />

      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Message Sent Successfully!
          </h1>

          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Thank you for contacting All Phase Construction USA. We've received your message and will get back to you within 24 hours.
          </p>

          <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>

            <div className="space-y-4">
              <a
                href="tel:7542275605"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-200 font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now: 754-227-5605
              </a>

              <a
                href="mailto:leads@allphaseusa.com"
                className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-neutral-700 text-white rounded-lg hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-200 font-semibold"
              >
                <Mail className="w-5 h-5" />
                leads@allphaseusa.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-all duration-200 font-medium"
            >
              Return to Homepage
            </Link>

            <Link
              to="/calculator"
              className="px-8 py-3 border-2 border-neutral-700 text-white rounded-lg hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-200 font-medium"
            >
              Get a Roof Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
