/// <reference path="../../types/react-three-fiber.d.ts" />
"use client";
import { useModal } from "@/contexts/ModalContext";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as motion from "motion/react-client";
import React, { useRef } from "react";
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

  const handleSelect = (planetName: string) => {
    openModal(planetName as any);
  };

  return (
    <div className="relative w-full h-screen">
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
          name="Open Source"
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
        <OrbitControls />
      </Canvas>
    </div>
  );
}
