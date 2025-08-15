"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BlobsBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow (spring physics)
  const blob1X = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const blob1Y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2); // center origin
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute w-[500px] h-[500px] bg-base-300 mix-blend-multiply filter blur-md opacity-60"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "70% 30% 50% 50% / 30% 50% 60% 70%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute w-[500px] h-[500px] bg-accent-content mix-blend-multiply filter blur-md opacity-60"
        animate={{
          borderRadius: [
            "50% 50% 33% 67% / 57% 33% 67% 43%",
            "33% 67% 50% 50% / 33% 50% 67% 57%",
            "67% 33% 57% 43% / 50% 33% 50% 67%",
            "50% 50% 33% 67% / 57% 33% 67% 43%",
          ],
          x: [0, -100, 100, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </div>
  );
}
