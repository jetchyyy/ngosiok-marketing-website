import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { products } from '@/data/products';
import { ArrowRight, Package } from 'lucide-react';

export const Products = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Our Products
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6">
          Premium Quality Noodles
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From traditional Chinese noodles to innovative cornstarch-based products
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProducts.map((product) => (
          <Card key={product.id} hover>
            <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <Package className="w-24 h-24 text-primary-400" />
            </div>
            <CardHeader>
              <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                {product.category}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link to="/products">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Section>
  );
};