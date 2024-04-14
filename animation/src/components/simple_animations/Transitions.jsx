import { motion } from 'framer-motion';

import classes from './css/Transitions.module.css';

export const Transitions = () => {
  return (
    <motion.div
      className={classes.box}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
};
