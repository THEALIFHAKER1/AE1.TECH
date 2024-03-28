'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function WrapperPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className={`h-full px-5 py-16 md:pb-0`}
    >
      {children}
    </motion.div>
  );
}
