'use client';

import { motion } from 'framer-motion';

export default function Sun() {
  return (
    <motion.div
      aria-hidden
      animate={{
        scale: [1, 1.1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
      className={
        'absolute bottom-0 right-0 rounded-tl-full bg-white/10 pl-2 pt-2 md:pl-4 md:pt-4 '
      }
    >
      <motion.div>
        <div
          className={
            'bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4'
          }
        >
          <div
            className={
              'bottom-0 right-0 rounded-tl-full bg-white/20 pl-10 pt-10 md:pl-4 md:pt-4'
            }
          >
            <motion.div
              initial={false}
              animate={{ scale: [1, 0.8, 1.1, 1, 1, 1, 2] }}
              transition={{
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className={
                'relative h-[50px] w-[50px] rounded-tl-full bg-yellow-200 md:h-5 md:w-5'
              }
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
