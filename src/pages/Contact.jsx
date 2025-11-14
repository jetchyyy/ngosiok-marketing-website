import { useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS, SEO_CONFIG } from '@/utils/constants';
import { isValidEmail } from '@/utils/helpers';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  // LocalBusiness Schema for Google Maps and local search
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    "name": COMPANY_INFO.name,
    "image": `${SEO_CONFIG.siteUrl}/logo.jpg`,
    "description": "Premium Filipino noodle manufacturer since 1945",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "325 B. Aranas Street",
      "addressLocality": "Cebu City",
      "addressRegion": "Cebu",
      "postalCode": "6000",
      "addressCountry": "PH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.3",
      "longitude": "123.9"
    },
    "url": SEO_CONFIG.siteUrl,
    "telephone": COMPANY_INFO.phone,
    "email": COMPANY_INFO.email,
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram
    ]
  };

  return (
    <>
      <Seo
        title="Contact Us - Visit Our Cebu Office"
        description="Ready to partner or order? Contact Ngosiok Marketing today. Visit us in Cebu City or reach out for distributor inquiries and bulk orders. We're here to help!"
        canonical={`${SEO_CONFIG.siteUrl}/contact`}
        ogImage={`${SEO_CONFIG.siteUrl}/og-contact.jpg`}
        schema={localBusinessSchema}
      />
      <main className="pt-20">
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card hover>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
            </CardHeader>
            <CardBody>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-600 hover:text-primary-600 transition-colors block mb-2">
                {COMPANY_INFO.phone}
              </a>
              <a href={`tel:${COMPANY_INFO.mobile}`} className="text-gray-600 hover:text-primary-600 transition-colors block">
                {COMPANY_INFO.mobile}
              </a>
            </CardBody>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
            </CardHeader>
            <CardBody>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-primary-600 transition-colors">
                {COMPANY_INFO.email}
              </a>
            </CardBody>
          </Card>

          <Card hover>
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Address</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                {COMPANY_INFO.address}
              </p>
            </CardBody>
          </Card>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
              </CardHeader>
              <CardBody>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+63 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
                      placeholder="Your message..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                </div>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
              <CardHeader>
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <p className="text-primary-100 mt-2">Stay updated with our latest products and news</p>
              </CardHeader>
              <CardBody>
                <div className="flex space-x-4">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>
    </main>
    </>
  );
};