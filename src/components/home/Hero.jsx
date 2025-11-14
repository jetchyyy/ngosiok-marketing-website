import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import CountUp from '@/components/common/CountUp';
import TiltedCard from '@/components/common/TiltedCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/ngosiok.jpg)' }}
      ></div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div> */}

      {/* --- UI/UX ADVICE --- */}
      {/* A slightly stronger, uniform overlay provides the most consistent contrast. */}
      {/* I've changed your gradient to this single value (70% black). */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <Container className="relative z-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Quality Noodles Since 1945</span>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-4 sm:mb-6 leading-tight">
                <span className="text-white">Transforming</span>
                <br />
                {/* This drop-shadow is a perfect implementation of the 2nd fix! */}
                <span className="text-white drop-shadow-lg">
                  Philippine Noodles
                </span>
              </h1>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md px-4 lg:px-0">
                From our humble beginnings in 1945 to becoming a leader in the
                noodle industry, we're committed to delivering quality products
                that Filipinos love and trust.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
              <Link to="/products" className="group">
                <Button
                  variant="outline-tertiary"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center">
                    Explore Products
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline-tertiary"
                  size="lg"
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-[250px] sm:max-w-[320px] lg:max-w-md mx-auto">
              {/* TiltedCard Image */}
              <div className="sm:hidden">
                <TiltedCard
                  imageSrc="/KimCNgosiok.jpg"
                  altText="NGOSIOK MARKETING - 80+ Years of Excellence"
                  captionText={
                    <div className="text-tertiary">
                      <div className="text-2xl font-bold mb-1 drop-shadow-lg">
                        <CountUp
                          from={0}
                          to={80}
                          separator=","
                          direction="up"
                          duration={2.5}
                          className="inline-block"
                        />
                        <span>+</span>
                      </div>
                      <div className="text-xs font-medium drop-shadow-lg">
                        Years of Excellence
                      </div>
                    </div>
                  }
                  containerHeight="333px"
                  containerWidth="250px"
                  imageHeight="333px"
                  imageWidth="250px"
                  rotateAmplitude={14}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
              <div className="hidden sm:block lg:hidden">
                <TiltedCard
                  imageSrc="/KimCNgosiok.jpg"
                  altText="NGOSIOK MARKETING - 80+ Years of Excellence"
                  captionText={
                    <div className="text-tertiary">
                      <div className="text-3xl font-bold mb-2 drop-shadow-lg">
                        <CountUp
                          from={0}
                          to={80}
                          separator=","
                          direction="up"
                          duration={2.5}
                          className="inline-block"
                        />
                        <span>+</span>
                      </div>
                      <div className="text-sm font-medium drop-shadow-lg">
                        Years of Excellence
                      </div>
                    </div>
                  }
                  containerHeight="427px"
                  containerWidth="320px"
                  imageHeight="427px"
                  imageWidth="320px"
                  rotateAmplitude={14}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
              <div className="hidden lg:block">
                <TiltedCard
                  imageSrc="/KimCNgosiok.jpg"
                  altText="NGOSIOK MARKETING - 80+ Years of Excellence"
                  captionText={
                    <div className="text-tertiary">
                      <div className="text-4xl font-bold mb-2 drop-shadow-lg">
                        <CountUp
                          from={0}
                          to={80}
                          separator=","
                          direction="up"
                          duration={2.5}
                          className="inline-block"
                        />
                        <span>+</span>
                      </div>
                      <div className="text-base font-medium drop-shadow-lg">
                        Years of Excellence
                      </div>
                    </div>
                  }
                  containerHeight="533px"
                  containerWidth="400px"
                  imageHeight="533px"
                  imageWidth="400px"
                  rotateAmplitude={14}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={false}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};