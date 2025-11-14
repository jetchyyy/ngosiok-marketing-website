import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { History, Target, Award, Users } from 'lucide-react';
import { SEO_CONFIG } from '@/utils/constants';

export const About = () => {
  // Breadcrumb Schema for better site structure in search results
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
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            About Ngosiok Marketing
          </h1>
          <p className="text-xl text-gray-600">
            A legacy of quality and innovation spanning over 80 years
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <History className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-bold font-heading text-gray-900">
                Our Heritage
              </h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Ngosiok Marketing traces its humble beginnings to the early 20th century when the father 
                of Lucio Ngosiok opened the business of making Chinese noodles in the coastal town of 
                Fujian, China. Unfortunately, he did not live long enough to pass on the business to the 
                next generation as the orphaned children were aged five and three.
              </p>
              <p>
                With the desire to continue his father's business, Lucio Ngosiok (known to his friends 
                and peers only as Ngo Siok and the founder of the present enterprise) learned the rudiments 
                of noodle making to start this business in Cebu City, Philippines, during World War II in 1943. 
                With a pair of hands and simple implements, he produced noodles from rice to cater to a few 
                but growing market. This heralded the start of the noodle industry in Cebu.
              </p>
              <p>
                The lingering menace of war forced the business to move from place to place. For a short time, 
                the business was established in Bato, Leyte. After the war, the patriarch re-established the 
                business in Cebu.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-primary-600 mb-4">80+</div>
                <div className="text-2xl font-semibold text-gray-800">Years Strong</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6 text-center">
            Evolution & Growth
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
            <p>
              With the passing of the patriarch in 1973, two descendants of Ngo Siok assumed the management 
              of the business. Their able leadership has steered the business to its present innovativeness 
              and stature.
            </p>
            <p>
              In mid-1970's, Ngosiok Marketing was established to represent four affiliated companies 
              producing different types of noodles. Two companies are producing the wheat-based Chinese 
              noodles under the brand names First Choice and Long Life. Two other separate facilities 
              manufacture the cornstarch-based noodles under the brand names Eagle VSP and Super Q.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card hover className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                To provide the highest quality noodle products while continuously innovating our processes 
                to ensure food safety and customer satisfaction.
              </p>
            </CardBody>
          </Card>

          <Card hover className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                To be the leading noodle manufacturer in the Philippines and a trusted name in international 
                markets, known for quality and innovation.
              </p>
            </CardBody>
          </Card>

          <Card hover className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">
                Quality, integrity, innovation, and customer satisfaction guide everything we do, 
                from production to distribution.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-900 mb-6">
            Our Commitment
          </h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>
              Ngosiok Marketing has been part of the transformation of the noodle industry in the Philippines. 
              Always at the forefront of change, we do not hesitate to try out new processes to improve 
              production efficiency and product quality.
            </p>
            <p>
              We have successfully eliminated problems such as exposure to unwanted foreign matter resulting 
              from sun-drying of noodles by implementing automated processes. We have also successfully 
              changed the consumers' taste and preference with the introduction of our quality bihon 
              (cornstarch-based noodles), which differs from the traditional ones in terms of taste, colour, 
              and shape.
            </p>
            <p>
              With dedication and hard work, the company has been able to significantly change the process 
              of making bihon and to successfully expand our distribution network. Initially catering only 
              to local (Cebu) customers, we have now reached all-over Philippines and have exports to other 
              countries in Asia, Europe, Middle East, and North America.
            </p>
            <p className="text-xl font-semibold text-primary-600 mt-8">
              We are totally committed to product quality and customer satisfaction. Our channels are always 
              open to comments and suggestions so that we can continuously provide the quality that our 
              products have come to be known for.
            </p>
          </div>
        </div>
      </Section>
    </main>
    </>
  );
};