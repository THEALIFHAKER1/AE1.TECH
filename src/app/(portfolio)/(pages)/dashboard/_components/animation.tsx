'use client';
import { motion } from 'framer-motion';
export default function Animation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ height: 80 }}
      animate={{ height: 'inherit' }}
      transition={{ duration: 0.5 }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}
