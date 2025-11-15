/// <reference path="../../types/react-three-fiber.d.ts" />
"use client";
import { useModal } from "@/contexts/ModalContext";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as motion from "motion/react-client";
import React, { useEffect, useRef, useState } from "react";
import { BufferGeometry, Mesh, Vector3 } from "three";
import Planet from "./Planets";

// Declare the JSX elements inline
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      sphereGeometry: any;
      ringGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      ambientLight: any;
      pointLight: any;
      line: any;
      lineBasicMaterial: any;
      bufferGeometry: any;
    }
  }
}

function Sun(): React.ReactElement {
  const sunTexture = useTexture("/textures/sun.jpg");
  const coronaRef = useRef<Mesh>(null);
  let pulse = 0;

  useFrame(() => {
    pulse += 0.02;
    const scale = 1 + Math.sin(pulse) * 0.05;
    if (coronaRef.current) {
      coronaRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    // @ts-ignore
    <group>
      {/* @ts-ignore */}
      <mesh>
        {/* @ts-ignore */}
        <sphereGeometry args={[2, 64, 64]} />
        {/* @ts-ignore */}
        <meshStandardMaterial
          map={sunTexture}
          emissive={"orange"}
          emissiveIntensity={1.5}
        />
        {/* @ts-ignore */}
      </mesh>

      {/* @ts-ignore */}
      <mesh ref={coronaRef}>
        {/* @ts-ignore */}
        <sphereGeometry args={[2.3, 64, 64]} />
        {/* @ts-ignore */}
        <meshBasicMaterial color="orange" transparent opacity={0.2} side={2} />
        {/* @ts-ignore */}
      </mesh>
      {/* @ts-ignore */}
    </group>
  );
}

// Loading Component
function LoadingScreen({ progress = 0 }: { progress?: number }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mb-8 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          {/* Inner spinning ring */}
          <div
            className="absolute inset-3 border-2 border-transparent border-t-blue-400 rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          {/* Core */}
          <div className="absolute inset-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-white">
            Loading Solar System
          </h2>
          <p className="text-purple-300 text-sm">
            Initializing planets and textures...
          </p>

          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="flex justify-between text-xs text-purple-300 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-purple-900/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          <motion.div
            className="flex justify-center space-x-1 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// Orbit Ring Component
function OrbitRing({
  radius,
  color = "#333333",
}: {
  radius: number;
  color?: string;
}) {
  const orbitRef = useRef<any>(null);

  // Create orbit ring geometry
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(
      new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    );
  }

  const geometry = new BufferGeometry().setFromPoints(points);

  return (
    // @ts-ignore
    <line ref={orbitRef} geometry={geometry}>
      {/* @ts-ignore */}
      <lineBasicMaterial color={color} transparent opacity={0.3} />
      {/* @ts-ignore */}
    </line>
  );
}

export default function SolarSystem() {
  const { openModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const handleSelect = (planetName: string) => {
    if (planetName === "Open Source") {
      // Open external blog in new tab
      window.open('https://your-blog-url.com', '_blank', 'noopener,noreferrer');
    } else {
      openModal(planetName as any);
    }
  };

  // Enhanced loading progress with more realistic timing
  useEffect(() => {
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += Math.random() * 8 + 2; // Random progress between 2-10

      if (progressValue >= 100) {
        progressValue = 100;
        setLoadProgress(100);

        // Small delay after reaching 100% before hiding loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, 500);

        clearInterval(progressInterval);
      } else {
        setLoadProgress(progressValue);
      }
    }, 150); // Update every 150ms for smoother progress

    // Fallback to ensure loading doesn't take too long
    const maxTimer = setTimeout(() => {
      setLoadProgress(100);
      setTimeout(() => setIsLoading(false), 500);
      clearInterval(progressInterval);
    }, 4000); // Max 4 seconds loading time

    return () => {
      clearInterval(progressInterval);
      clearTimeout(maxTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={loadProgress} />;
  }

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Alert Box */}
      <div className="tutorial-alert z-10">
        <motion.div
          className="backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2 shadow-none"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <p className="text-purple-100 text-xs font-normal opacity-80">
            ✨ Select a planet to learn more
          </p>
        </motion.div>
      </div>

      {/* Canvas with Planets */}
      <Canvas camera={{ position: [0, 10, 25], fov: 60 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={2} />
        {/* @ts-ignore */}
        <pointLight position={[0, 0, 0]} intensity={2} />
        {/* @ts-ignore */}
        <Stars />

        <Sun />

        <Planet
          name="About"
          orbitRadius={8}
          orbitSpeed={0.005}
          size={1}
          texturePath="/textures/blue.jpeg"
          color="#33ccff"
          onSelect={handleSelect}
        />

        <Planet
          name="Projects"
          orbitRadius={12}
          orbitSpeed={0.004}
          size={0.8}
          texturePath="/textures/mars-cartoon.jpeg"
          color="#ff4f4f"
          onSelect={handleSelect}
        />

        <Planet
          name="Experience"
          orbitRadius={6}
          orbitSpeed={0.006}
          size={0.9}
          texturePath="/textures/purple.jpeg"
          color="#cc66ff"
          onSelect={handleSelect}
        />

        <Planet
          name="Contact"
          orbitRadius={16}
          orbitSpeed={0.004}
          size={1.2}
          texturePath="/textures/green.jpeg"
          color="#aaff55"
          onSelect={handleSelect}
        />

        <Planet
          name="Blog"
          orbitRadius={20}
          orbitSpeed={0.003}
          size={1.1}
          texturePath="/textures/saturn.jpeg"
          color="#ff6b47"
          onSelect={handleSelect}
          hasRings={true}
        />

        {/* Orbit Rings */}
        <OrbitRing radius={8} color="#33ccff" />
        <OrbitRing radius={12} color="#ff4f4f" />
        <OrbitRing radius={6} color="#cc66ff" />
        <OrbitRing radius={16} color="#aaff55" />
        <OrbitRing radius={20} color="#ff6b47" />

        {/* @ts-ignore */}
        <OrbitControls
          maxDistance={50}
          minDistance={5}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>
    </motion.div>
  );
}
