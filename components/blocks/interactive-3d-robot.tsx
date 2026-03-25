'use client';

import { motion } from 'framer-motion';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

function fadeUp(i: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.13, duration: 0.7, ease: 'easeOut' as const },
  };
}

export function Section() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0 translate-y-32"
      />

      <div className="absolute inset-0 z-10 pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 pointer-events-none">
        <div className="text-center text-white drop-shadow-lg w-full max-w-2xl mx-auto">

          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-blue-300 mb-3 font-medium"
            {...fadeUp(0)}
          >
            PhD Researcher · AI/ML · Full-Stack
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            {...fadeUp(1)}
          >
            Shahaddin Gafarov
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg text-white/70 max-w-lg mx-auto"
            {...fadeUp(2)}
          >
            Building intelligent systems at the intersection of deep learning, bioinformatics, and software engineering.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center pointer-events-auto"
            {...fadeUp(3)}
          >
            <a href="#research" className="px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
              See Research
            </a>
            <a href="#contact" className="px-6 py-2.5 border border-white/40 text-white rounded-full font-medium text-sm hover:bg-white/10 transition">
              Contact
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
