'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function isIOS() {
  return (
    typeof window !== 'undefined' &&
    // @ts-expect-error - requestPermission is iOS-only
    typeof DeviceOrientationEvent !== 'undefined' &&
    // @ts-expect-error - requestPermission is iOS-only
    typeof DeviceOrientationEvent.requestPermission === 'function'
  );
}

function isAndroid() {
  return (
    typeof window !== 'undefined' &&
    typeof DeviceOrientationEvent !== 'undefined' &&
    // @ts-expect-error - requestPermission is iOS-only
    typeof DeviceOrientationEvent.requestPermission !== 'function' &&
    navigator.maxTouchPoints > 0
  );
}

export function Section() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";
  const tiltRef = useRef<HTMLDivElement>(null);
  const [showTiltBtn, setShowTiltBtn] = useState(false);
  const [tiltActive, setTiltActive] = useState(false);

  function applyTilt(beta: number, gamma: number) {
    if (!tiltRef.current) return;
    const x = Math.max(-15, Math.min(15, beta * 0.3));
    const y = Math.max(-15, Math.min(15, gamma * 0.3));
    tiltRef.current.style.transform = `perspective(800px) rotateX(${-x}deg) rotateY(${y}deg)`;
  }

  // Android: auto-enable on mount
  useEffect(() => {
    if (!isAndroid()) {
      if (isIOS()) setShowTiltBtn(true);
      return;
    }
    function handleOrientation(e: DeviceOrientationEvent) {
      applyTilt(e.beta ?? 0, e.gamma ?? 0);
    }
    window.addEventListener('deviceorientation', handleOrientation);
    setTiltActive(true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  // iOS: called directly from button click (must be synchronous)
  function enableTiltIOS() {
    // @ts-expect-error - requestPermission is iOS-only
    DeviceOrientationEvent.requestPermission()
      .then((permission: string) => {
        if (permission === 'granted') {
          function handleOrientation(e: DeviceOrientationEvent) {
            applyTilt(e.beta ?? 0, e.gamma ?? 0);
          }
          window.addEventListener('deviceorientation', handleOrientation);
          setTiltActive(true);
          setShowTiltBtn(false);
        }
      })
      .catch(() => setShowTiltBtn(false));
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Robot — wrapped for tilt effect */}
      <div
        ref={tiltRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{ transition: 'transform 0.12s ease-out' }}
      >
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="absolute inset-0 translate-y-32"
        />
      </div>

      {/* Staggered slide-in text overlay */}
      <div className="absolute inset-0 z-10 pt-20 md:pt-32 lg:pt-40 px-4 md:px-8 pointer-events-none">
        <div className="text-center text-white drop-shadow-lg w-full max-w-2xl mx-auto">

          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-blue-300 mb-3 font-medium"
            variants={fadeUp} custom={0} initial="hidden" animate="show"
          >
            PhD Researcher · AI/ML · Full-Stack
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
            variants={fadeUp} custom={1} initial="hidden" animate="show"
          >
            Shahaddin Gafarov
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg text-white/70 max-w-lg mx-auto"
            variants={fadeUp} custom={2} initial="hidden" animate="show"
          >
            Building intelligent systems at the intersection of deep learning, bioinformatics, and software engineering.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center pointer-events-auto"
            variants={fadeUp} custom={3} initial="hidden" animate="show"
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

      {/* iOS tilt enable button */}
      <AnimatePresence>
        {showTiltBtn && !tiltActive && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={enableTiltIOS}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/60 text-xs pointer-events-auto"
          >
            <span>🌀</span> Tap to enable tilt
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
