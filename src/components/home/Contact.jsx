import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/utils/constants';
import { fadeUpVariants, slideInLeftVariants, slideInRightVariants, defaultViewport } from '@/utils/animations';

export const Contact = () => {
  return (
    <Section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={slideInLeftVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Have questions about our products or want to become a distributor? 
            We'd love to hear from you.
          </p>

          <div className="space-y-6 mb-8">
            {/* Phone */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeUpVariants}
              custom={0}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
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
            </motion.div>

            {/* Email */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeUpVariants}
              custom={1}
              className="flex items-start space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold mb-1">Email</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-100 hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            custom={2}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Visit Us</div>
                <p className="text-primary-100 text-sm">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>
            
            {/* Embedded Google Map */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-white/20 shadow-lg">
              <iframe
                title="NGOSIOK MARKETING Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.4937!2d123.9!3d10.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzAwLjAiTiAxMjPCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph&q=325+B.+Aranas+Street,+Cebu+City+6000,+Philippines"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] brightness-90 contrast-110 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={slideInRightVariants}
          className="bg-white rounded-2xl p-8 shadow-2xl"
        >
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
            
            {/* Inquiry Type Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What is this about?
              </label>
              <div className="space-y-2">
                <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 cursor-pointer transition-all group">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="general"
                    className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                    defaultChecked
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    General Question
                  </span>
                </label>
                <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 cursor-pointer transition-all group">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="distributor"
                    className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    Distributor Inquiry
                  </span>
                </label>
                <label className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 cursor-pointer transition-all group">
                  <input
                    type="radio"
                    name="inquiryType"
                    value="feedback"
                    className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">
                    Product Feedback
                  </span>
                </label>
              </div>
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
        </motion.div>
      </div>
    </Section>
  );
};