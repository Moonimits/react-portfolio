import { motion } from "framer-motion";

export function AnimateIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: .5 }}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
}
export function ScaleIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: .5 }}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
}
