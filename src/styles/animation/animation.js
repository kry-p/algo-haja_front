/**
 * framer-motion animations
 */
const animation = {
  initial: {
    transform: `translateY(5%)`,
    opacity: 0,
    transition: `transform 0.33s ease-in-out`,
  },
  animate: {
    transform: `translateY(0%)`,
    opacity: 1,
    transition: `transform 0.33s ease-in-out`,
  },
  exit: {
    transform: `translateY(100%)`,
    opacity: 0,
    transition: `transform 0.33s ease-in-out`,
  },
};

export default animation;
