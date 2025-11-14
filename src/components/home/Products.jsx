import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { products } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { scaleVariants, staggerContainerVariants, defaultViewport } from '@/utils/animations';

export const Products = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainerVariants}
        className="text-center mb-16"
      >
        <motion.div
          variants={scaleVariants}
          className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          Our Products
        </motion.div>
        <motion.h2
          variants={scaleVariants}
          custom={1}
          className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6"
        >
          Premium Quality Noodles
        </motion.h2>
        <motion.p
          variants={scaleVariants}
          custom={2}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From traditional Chinese noodles to innovative cornstarch-based products
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={scaleVariants}
            custom={index}
            className="group relative h-[480px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            {/* Product Image Background */}
            <div
              className="absolute inset-0 bg-contain bg-top bg-no-repeat transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundColor: '#f8f9fa',
              }}
            >
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            </div>

            {/* Frosted Glass Text Panel */}
            <div className="absolute inset-x-0 bottom-0 bg-white/80 backdrop-blur-md p-6 transform transition-all duration-500">
              {/* Category Badge */}
              <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                {product.category}
              </div>

              {/* Product Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
                {product.description}
              </p>

              {/* Features List */}
              <ul className="space-y-1.5 mb-4">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-800">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button - Appears on Hover */}
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Button
                  size="sm"
                  variant="primary"
                  className="w-full group/btn"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 ring-2 ring-primary/50 rounded-2xl" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Link to="/products">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
};