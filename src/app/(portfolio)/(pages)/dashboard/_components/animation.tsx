'use client';
import { motion } from 'framer-motion';
export function CardAnimation({ children }: { children: React.ReactNode }) {
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

export function CardContentCardAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
