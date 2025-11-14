import { Section } from '@/components/common/Section';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Award, Globe, Users, TrendingUp } from 'lucide-react';
import CountUp from '@/components/common/CountUp';
import { COMPANY_INFO } from '@/utils/constants';
import { fadeUpVariants, scaleVariants, defaultViewport } from '@/utils/animations';

export const About = () => {
  const highlights = [
    'Automated production processes',
    'Quality control at every step',
    'Nationwide distribution network',
    'International export reach',
  ];

  const stats = [
    { icon: Award, value: 80, suffix: '+', label: 'Years', gradient: 'from-primary-500 to-primary-600', iconBg: 'bg-gradient-to-br from-primary-500 to-primary-600' },
    { icon: Globe, value: 5, suffix: '+', label: 'Continents', gradient: 'from-secondary-500 to-secondary-600', iconBg: 'bg-gradient-to-br from-secondary-500 to-secondary-600' },
    { icon: Users, value: 200, suffix: '+', label: 'Employees', gradient: 'from-tertiary-500 to-tertiary-600', iconBg: 'bg-gradient-to-br from-tertiary-500 to-tertiary-600' },
    { icon: TrendingUp, value: 4, suffix: '', label: 'Brands', gradient: 'from-primary-400 to-secondary-500', iconBg: 'bg-gradient-to-br from-primary-400 to-secondary-500' },
  ];

  return (
    <Section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/30 rounded-full blur-3xl -z-10"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Stats Card */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative"
        >
          <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] overflow-hidden p-8 lg:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-secondary-500/10 to-transparent rounded-full blur-2xl"></div>
            
            <div className="relative h-full flex flex-col justify-center items-center text-center">
              {/* Main founding year */}
              <motion.div
                custom={0}
                variants={scaleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8"
              >
                <div className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
                  <CountUp
                    to={new Date().getFullYear()}
                    from={COMPANY_INFO.foundedYear}
                    separator=""
                    direction="down"
                    duration={3.5}
                    className="inline-block"
                  />
                </div>
                <div className="text-xl lg:text-2xl font-semibold text-gray-700">
                  Founded in Cebu
                </div>
              </motion.div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 w-full mt-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={scaleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/60 hover:scale-105"
                  >
                    {/* Branded Icon with custom gradient */}
                    <div className="relative mb-3 mx-auto w-fit">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 ${stat.iconBg} rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      {/* Icon container */}
                      <div className={`relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl ${stat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg ring-2 ring-white/50`}>
                        <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white drop-shadow-md" />
                      </div>
                    </div>
                    
                    {/* Animated CountUp */}
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator=","
                        direction="up"
                        duration={2.5}
                        className="inline-block"
                      />
                      <span>{stat.suffix}</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Content */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-200/50"
          >
            <Award className="w-4 h-4" />
            <span>About Us</span>
          </motion.div>
          
          <motion.h2
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Leading the Way in
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Quality Noodles
            </span>
          </motion.h2>
          
          <motion.p
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-6 leading-relaxed"
          >
            Ngosiok Marketing has been part of the transformation of the noodle industry in the Philippines. 
            Always at the forefront of change, we do not hesitate to try out new processes to improve 
            production efficiency and product quality.
          </motion.p>
          
          <motion.p
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            We have successfully eliminated problems such as exposure to unwanted foreign matter resulting 
            from sun-drying of noodles by implementing automated processes. We have also successfully 
            changed consumers' taste and preference with the introduction of our quality bihon.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 mb-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                custom={4 + index * 0.5}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center space-x-3 group"
              >
                <div className="relative w-6 h-6 flex-shrink-0">
                  {/* Branded glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  {/* Icon with brand colors */}
                  <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md ring-2 ring-primary-100">
                    <CheckCircle className="w-3.5 h-3.5 text-white drop-shadow-sm" />
                  </div>
                </div>
                <span className="text-gray-700 font-medium">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link to="/about" className="inline-block">
              <Button variant="primary" size="lg" className="group shadow-lg hover:shadow-xl transition-shadow">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};