import { useState } from 'react';
import { Section } from '@/components/common/Section';
import { motion, AnimatePresence } from 'framer-motion';
import BounceCards from '@/components/common/BounceCards';
import { features } from '@/data/features';
import { fadeUpVariants, contentSwitchVariants, defaultViewport } from '@/utils/animations';

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Prepare images array from features data
  const featureImages = features.map(feature => feature.image || '/ngosiok.jpg');

  return (
    <Section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <motion.div
        custom={0}
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-secondary-200/50">
          <span>Why Choose Us</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            What Sets Us
          </span>
          <br />
          <span className="bg-gradient-to-r from-secondary-600 to-secondary-700 bg-clip-text text-transparent">
            Apart
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Decades of experience combined with modern innovation to deliver the best noodle products
        </p>
      </motion.div>

      {/* Interactive Two-Column Layout */}
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto mt-8">
        {/* Left Column - BounceCards */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex justify-center items-center order-2 lg:order-1 py-16 lg:py-24"
        >
          <div className="relative w-full max-w-[600px]">
            {/* Glassmorphic container */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-sm rounded-3xl -z-10 transform scale-110"></div>
            
            <BounceCards
              images={featureImages}
              containerWidth={600}
              containerHeight={600}
              enableHover={true}
              onCardHover={(index) => setActiveFeature(index)}
              transformStyles={[
                'rotate(10deg) translate(-240px)',
                'rotate(5deg) translate(-120px)',
                'rotate(-3deg)',
                'rotate(-10deg) translate(120px)',
              ]}
            />

            {/* Feature indicators */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-secondary-600 w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Dynamic Text */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="order-1 lg:order-2 lg:pl-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              variants={contentSwitchVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Icon */}
              <div className="relative mb-6 w-fit">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-white/50">
                  {(() => {
                    const Icon = features[activeFeature].icon;
                    return <Icon className="w-8 h-8 text-white" />;
                  })()}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {features[activeFeature].title}
                </span>
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {features[activeFeature].description}
              </p>

              {/* Feature number indicator */}
              <div className="flex items-center gap-3">
                <div className="text-6xl font-bold bg-gradient-to-r from-secondary-200 to-secondary-300 bg-clip-text text-transparent">
                  {String(activeFeature + 1).padStart(2, '0')}
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-secondary-200 to-transparent"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};