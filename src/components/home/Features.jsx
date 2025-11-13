import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { features } from '@/data/features';

export const Features = () => {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16">
        <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Why Choose Us
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
          What Sets Us Apart
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Decades of experience combined with modern innovation to deliver the best noodle products
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.id} hover className="text-center">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};