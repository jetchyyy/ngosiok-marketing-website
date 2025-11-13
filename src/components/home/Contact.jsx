import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';

export const Contact = () => {
  return (
    <Section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Have questions about our products or want to become a distributor? 
            We'd love to hear from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Phone</div>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-primary-100 hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
                <br />
                <a href={`tel:${COMPANY_INFO.mobile}`} className="text-primary-100 hover:text-white transition-colors">
                  {COMPANY_INFO.mobile}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-100 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Address</div>
                <p className="text-primary-100">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <Button type="submit" size="lg" className="w-full group">
              Send Message
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Or <Link to="/contact" className="text-primary-600 hover:underline font-medium">visit our contact page</Link>
          </p>
        </div>
      </div>
    </Section>
  );
};