import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { products } from '@/data/products';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { scaleVariants, staggerContainerVariants, defaultViewport } from '@/utils/animations';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

export const Products = () => {
  // Use all products for the carousel
  const carouselProducts = products;
  /* Update config to scroll 1 but align for 4 visible */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3"></div>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={scaleVariants}
            className="inline-block bg-white text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-primary-100 shadow-sm"
          >
            Our Products
          </motion.div>
          <motion.h2
            variants={scaleVariants}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 mb-6"
          >
            Premium Quality <span className="text-primary-600">Noodles</span>
          </motion.h2>
          <motion.p
            variants={scaleVariants}
            custom={2}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            From traditional Chinese noodles to innovative cornstarch-based products, crafted with care for every Filipino family.
          </motion.p>
        </motion.div>
      </Container>

      {/* Carousel Container - Full Width with Margins */}
      <div className="relative w-full max-w-[1920px] mx-auto group/carousel px-4 md:px-12 lg:px-24">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 py-8">
            {carouselProducts.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_25%] pl-6 min-w-0"
              >
                <div className="h-full flex flex-col group relative">
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/95 backdrop-blur-md text-primary-700 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-primary-100 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-primary-600 text-primary-600" />
                      {product.category}
                    </span>
                  </div>

                  {/* Product Image Area - Full Portrait */}
                  <Link to="/products" className="block relative aspect-[3/4] overflow-hidden rounded-3xl bg-white mb-5 shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 group-hover:border-primary-100 group-hover:-translate-y-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Quick View Button (Overlay) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </Link>

                  {/* Details Section - Below Image */}
                  <div className="flex-1 flex flex-col px-2">
                    <Link to="/products">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading line-clamp-1 group-hover:text-primary-600 transition-colors" title={product.name}>
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-medium">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <ul className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-1 rounded-md">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons - Styled */}
        <button
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary-600 hover:scale-110 hover:border-primary-100 transition-all focus:outline-none z-10 opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl border border-gray-100 flex items-center justify-center text-gray-700 hover:text-primary-600 hover:scale-110 hover:border-primary-100 transition-all focus:outline-none z-10 opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/products">
            <Button size="lg" variant="primary" className="group shadow-primary/25 shadow-lg hover:shadow-primary/40 hover:shadow-xl transition-all px-8 py-6 text-lg rounded-full">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};