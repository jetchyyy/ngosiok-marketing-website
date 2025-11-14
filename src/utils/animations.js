/**
 * Common animation variants for Framer Motion
 * Reusable across components for consistent animation behavior
 */

/**
 * Fade up animation - elements slide up while fading in
 * @param {number} i - Index for staggered delay
 * @param {number} baseDelay - Base delay before animation starts (default: 0.2s)
 * @param {number} stagger - Delay between each element (default: 0.15s)
 * @param {number} duration - Animation duration (default: 0.8s)
 */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/**
 * Customizable fade up animation with configurable parameters
 * @param {Object} config - Configuration object
 * @param {number} config.baseDelay - Base delay before animation starts
 * @param {number} config.stagger - Delay between each element
 * @param {number} config.duration - Animation duration
 * @param {number} config.distance - Distance to travel (y axis)
 */
export const createFadeUpVariants = ({
  baseDelay = 0.2,
  stagger = 0.15,
  duration = 0.8,
  distance = 30,
} = {}) => ({
  hidden: { opacity: 0, y: distance },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay: baseDelay + i * stagger,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
});

/**
 * Scale animation - elements pop in with scale effect
 * @param {number} i - Index for staggered delay
 */
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.4 + i * 0.1,
      ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
    },
  }),
};

/**
 * Customizable scale animation
 * @param {Object} config - Configuration object
 */
export const createScaleVariants = ({
  baseDelay = 0.4,
  stagger = 0.1,
  duration = 0.6,
  initialScale = 0.8,
} = {}) => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay: baseDelay + i * stagger,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
});

/**
 * Fade in animation - simple opacity transition
 */
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

/**
 * Content switch animation - for AnimatePresence mode="wait"
 * Used when content changes dynamically (e.g., tabs, carousels)
 */
export const contentSwitchVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

/**
 * Slide in from left animation
 */
export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/**
 * Slide in from right animation
 */
export const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

/**
 * Stagger children animation - for parent containers
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Common viewport settings for scroll-triggered animations
 */
export const defaultViewport = {
  once: true,
  margin: "-100px",
};

/**
 * Easing curves for consistent animations
 */
export const easings = {
  smooth: [0.25, 0.4, 0.25, 1],
  spring: [0.34, 1.56, 0.64, 1],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.7, 0, 0.84, 0],
};
