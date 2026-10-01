'use client';

import { useSyncExternalStore } from 'react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';
const LARGE_SCREEN = '(min-width: 1024px)';

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(LARGE_SCREEN);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

// Only mount the (heavy) Spline scene on large screens, so phones never download it.
export function HeroRobot({ className }: { className?: string }) {
  const isLarge = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(LARGE_SCREEN).matches,
    () => false,
  );

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`}>
      {isLarge && <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="absolute inset-0" />}
    </div>
  );
}
