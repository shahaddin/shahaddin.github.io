'use client';

import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

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
          <p className="text-sm md:text-base uppercase tracking-widest text-blue-300 mb-3 font-medium">
            PhD Researcher · AI/ML · Full-Stack
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            Shahaddin Gafarov
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-lg mx-auto">
            Building intelligent systems at the intersection of deep learning, bioinformatics, and software engineering.
          </p>
          <div className="mt-8 flex gap-4 justify-center pointer-events-auto">
            <a href="#research" className="px-6 py-2.5 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition">
              See Research
            </a>
            <a href="#contact" className="px-6 py-2.5 border border-white/40 text-white rounded-full font-medium text-sm hover:bg-white/10 transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
