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
      className={`h-full px-5 pb-20 pt-20 md:pb-10`}
    >
      {children}
    </motion.div>
  );
}
