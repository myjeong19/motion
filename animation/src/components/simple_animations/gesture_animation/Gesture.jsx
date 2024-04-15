import { motion } from 'framer-motion';

import classes from './css/Gesture.module.css';

export const Gesture = () => {
  return (
    <motion.button
      className={classes.box}
      initial={{ opacity: 0.6 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ opacity: 1 }}
    />
  );
};
