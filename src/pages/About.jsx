import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { History, Target, Award, Users, Globe, Zap, Heart } from 'lucide-react';
import { SEO_CONFIG } from '@/utils/constants';
import { motion } from 'framer-motion';
import { fadeUpVariants, defaultViewport } from '@/utils/animations';

export const About = () => {
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SEO_CONFIG.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": `${SEO_CONFIG.siteUrl}/about`
      }
    ]
  };

  const timelineEvents = [
    {
      year: "Early 1900s",
      title: "The Roots",
      description: "Origins in Fujian, China."
    },
    {
      year: "1943",
      title: "Founding",
      description: "Lucio Ngosiok starts business in Cebu."
    },
    {
      year: "1945",
      title: "Re-establishment",
      description: "Post-war restart in Cebu City."
    },
    {
      year: "1973",
      title: "Leadership",
      description: "2nd Gen takes over management."
    },
    {
      year: "Mid-1970s",
      title: "Expansion",
      description: "Formation of Ngosiok Marketing."
    },
    {
      year: "Today",
      title: "Global Reach",
      description: "Exporting worldwide."
    }
  ];

  const commitments = [
    {
      icon: Zap,
      title: "Innovation & Automation",
      description: "We implemented automated processes to eliminate foreign matter exposure and improve production efficiency."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "We revolutionized consumer tastes with our quality bihon, differing from traditional ones in taste, color, and texture."
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Starting from Cebu, our distribution network now spans the entire Philippines and reaches international markets."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our channels are always open to feedback, ensuring we continuously provide the quality our products are known for."
    }
  ];

  return (
    <>
      <Seo
        title="Our Story - 80+ Years of Noodle Excellence"
        description="From humble beginnings in 1945 to becoming the Philippines' trusted noodle brand. Discover the Ngosiok Marketing story and our commitment to quality Filipino noodles."
        canonical={`${SEO_CONFIG.siteUrl}/about`}
        ogImage={`${SEO_CONFIG.siteUrl}/og-about.jpg`}
        schema={breadcrumbSchema}
      />
      <main className="pt-20">

        {/* HERO SECTION */}
        <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/40 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeUpVariants}
            >
              <div className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary-100 shadow-sm">
                <History className="w-4 h-4" />
                <span>Since 1945</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                About <span className="text-primary-600">Ngosiok Marketing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
                A legacy of quality, innovation, and trust spanning over 80 years of noodle making excellence.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* HERITAGE TIMELINE SECTION */}
        <Section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Heritage</h2>
              <p className="text-lg text-gray-600">The journey from humble beginnings to industry leadership</p>
            </div>

            {/* Responsive Timeline Container */}
            <div className="relative">

              {/* DESKTOP: Horizontal Line (Hidden on Mobile) */}
              <div className="hidden md:block absolute top-[138px] left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 rounded-full z-0"></div>

              {/* MOBILE: Vertical Line (Hidden on Desktop) */}
              <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-secondary-400 rounded-full z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-row md:flex-col items-center md:items-start group"
                  >

                    {/* MOBILE LAYOUT */}
                    <div className="md:hidden flex items-start w-full">
                      {/* Circle Node */}
                      <div className="flex-shrink-0 w-16 flex justify-center pt-2">
                        <div className="w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow-md z-10"></div>
                      </div>
                      {/* Content Card */}
                      <div className="flex-grow pb-8">
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative">
                          <span className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded mb-2">
                            {event.year}
                          </span>
                          <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* DESKTOP LAYOUT */}
                    <div className="hidden md:flex flex-col items-center w-full text-center h-[350px] group/card">
                      {/* Alternating Content (Top) */}
                      <div className={`flex-1 flex flex-col justify-end pb-8 w-full transition-opacity duration-300 ${index % 2 === 0 ? 'opacity-100' : 'opacity-0'}`}>
                        {index % 2 === 0 && (
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative transform hover:-translate-y-1 z-10">
                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45"></div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover/card:text-primary-600 transition-colors">{event.title}</h3>
                            <div className="max-h-0 overflow-hidden group-hover/card:max-h-40 transition-[max-height] duration-500 ease-in-out">
                              <p className="text-gray-600 text-sm mt-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 border-t border-gray-100 pt-2">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Middle Node & Year */}
                      <div className="flex-shrink-0 flex flex-col items-center justify-center relative h-12">
                        <div className="w-5 h-5 rounded-full bg-primary-600 border-4 border-white shadow-md z-20 group-hover/card:scale-125 group-hover/card:bg-secondary-500 transition-all duration-300"></div>
                        <div className="absolute top-10 font-bold text-primary-700 text-sm whitespace-nowrap bg-primary-50 px-2 py-1 rounded-full group-hover/card:bg-secondary-100 group-hover/card:text-secondary-700 transition-colors">
                          {event.year}
                        </div>
                      </div>

                      {/* Alternating Content (Bottom) */}
                      <div className={`flex-1 flex flex-col justify-start pt-14 w-full transition-opacity duration-300 ${index % 2 !== 0 ? 'opacity-100' : 'opacity-0'}`}>
                        {index % 2 !== 0 && (
                          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative transform hover:translate-y-1 z-10">
                            <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover/card:text-primary-600 transition-colors">{event.title}</h3>
                            <div className="max-h-0 overflow-hidden group-hover/card:max-h-40 transition-[max-height] duration-500 ease-in-out">
                              <p className="text-gray-600 text-sm mt-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 border-t border-gray-100 pt-2">
                                {event.description}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* MISSION, VISION, VALUES SECTION */}
        <Section className="bg-gray-50 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-heading text-gray-900 mb-4">Evolution & Growth</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Guided by clear principles, we continue to grow and adapt to the changing needs of Filipino families.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  text: "To provide the highest quality noodle products while continuously innovating our processes to ensure food safety and customer satisfaction.",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: Award,
                  title: "Our Vision",
                  text: "To be the leading noodle manufacturer in the Philippines and a trusted name in international markets, known for quality and innovation.",
                  color: "from-yellow-500 to-yellow-600"
                },
                {
                  icon: Users,
                  title: "Our Values",
                  text: "Quality, integrity, innovation, and customer satisfaction guide everything we do, from production to distribution.",
                  color: "from-blue-500 to-blue-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="h-full text-center border-t-4 border-t-primary-500 hover:-translate-y-1 transition-transform duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gray-200 transform rotate-3`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    </CardHeader>
                    <CardBody>
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* COMMITMENT SECTION */}
        <Section className="bg-white py-24 relative">
          <div className="text-center max-w-3xl mx-auto px-4 mb-16">
            <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">Our Commitment</h2>
            <p className="text-xl text-gray-600">
              We are totally committed to product quality and customer satisfaction.
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-primary-50/30 hover:border-primary-100 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 border border-gray-100">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

      </main>
    </>
  );
};