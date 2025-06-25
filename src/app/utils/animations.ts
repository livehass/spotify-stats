import { easeIn, easeOut } from "framer-motion";

export const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: i * 0.1,
      ease: [easeIn],
    },
  }),
};
export const buttonEntry = {
  hidden: { y: -20, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [easeOut],
      delay: custom * 0.4,
    },
  }),
};

export const RangesVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [easeOut],
      delay: custom * 0.5,
    },
  }),
};
export const titleVariants = {
  left: {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [easeIn],
      },
    },
  },
  right: {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [easeOut],
      },
    },
  },
  top: {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [easeIn],
      },
    },
  },
  bottom: {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [easeOut],
      },
    },
  },
};
