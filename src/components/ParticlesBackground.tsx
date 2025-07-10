'use client';

import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const [error, setError] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    try {
      await loadLinksPreset(engine);
    } catch (e) {
      console.error("Failed to initialize particles:", e);
      setError(true);
    }
  }, []);

  // If there's an error, return nothing to prevent crashing
  if (error) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: { color: { value: "transparent" } },
        fullScreen: { enable: true, zIndex: 0 },
        particles: {
          color: { value: ["#00fff0", "#00bfff"] },
          links: {
            color: "#00fff0",
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: { enable: true, speed: 1.2 },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.7 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
    />
  );
} 