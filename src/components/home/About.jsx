import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const About = () => {
  const highlights = [
    'Automated production processes',
    'Quality control at every step',
    'Nationwide distribution network',
    'International export reach',
  ];

  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary-600 mb-4">1943</div>
                <div className="text-2xl font-semibold text-gray-800">
                  Founded in Cebu
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-primary-600">4</div>
                    <div className="text-sm text-gray-600">Brands</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-3xl font-bold text-primary-600">5+</div>
                    <div className="text-sm text-gray-600">Continents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Us
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
            Leading the Way in Quality Noodles
          </h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Ngosiok Marketing has been part of the transformation of the noodle industry in the Philippines. 
            Always at the forefront of change, we do not hesitate to try out new processes to improve 
            production efficiency and product quality.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            We have successfully eliminated problems such as exposure to unwanted foreign matter resulting 
            from sun-drying of noodles by implementing automated processes. We have also successfully 
            changed consumers' taste and preference with the introduction of our quality bihon.
          </p>

          <div className="space-y-3 mb-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>

          <Link to="/about">
            <Button size="lg" className="group">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};