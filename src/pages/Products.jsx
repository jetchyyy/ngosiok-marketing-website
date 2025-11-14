import { useState } from 'react';
import { Seo } from '@/components/common/Seo';
import { Section } from '@/components/common/Section';
import { Card, CardHeader, CardBody } from '@/components/common/Card';
import { products } from '@/data/products';
import { Package, CheckCircle } from 'lucide-react';
import { classNames } from '@/utils/helpers';
import { SEO_CONFIG } from '@/utils/constants';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Cornstarch-based Noodles', name: 'Cornstarch-based' },
    { id: 'Wheat-based Noodles', name: 'Wheat-based' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
        "name": "Products",
        "item": `${SEO_CONFIG.siteUrl}/products`
      }
    ]
  };

  return (
    <>
      <Seo
        title="Premium Bihon & Pancit Canton | Our Products"
        description="Browse our complete range of premium Filipino noodles. Super Q Golden Bihon, Eagle VSP, First Choice, and more. Find the perfect noodles for your family's pancit today!"
        canonical={`${SEO_CONFIG.siteUrl}/products`}
        ogImage={`${SEO_CONFIG.siteUrl}/og-products.jpg`}
        schema={breadcrumbSchema}
      />
      <main className="pt-20">
      <Section className="bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Products
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-heading text-gray-900 mb-6">
            Premium Quality Noodles
          </h1>
          <p className="text-xl text-gray-600">
            Discover our range of traditional and innovative noodle products, 
            crafted with care and dedication
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={classNames(
                'px-6 py-3 rounded-lg font-medium transition-all duration-300',
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} hover>
              <div className="h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <Package className="w-32 h-32 text-primary-400 relative z-10" />
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </CardHeader>
              
              <CardBody>
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us to learn more about our distribution options, 
            bulk orders, or to become a retail partner.
          </p>
          <a
            href="mailto:sales@ngosiokmarketing.com"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </Section>
    </main>
    </>
  );
};