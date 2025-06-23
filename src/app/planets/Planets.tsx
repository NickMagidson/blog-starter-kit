"use client";
import { Html, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

type PlanetProps = {
  orbitRadius?: number;
  orbitSpeed?: number;
  name: string;
  onSelect: (name: string) => void;
  size?: number;
  color?: string;
  texturePath: string;
};

export default function Planet({
  orbitRadius = 5,
  orbitSpeed = 0.01,
  name,
  onSelect,
  size = 1,
  color = "orange",
  texturePath,
}: PlanetProps) {
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef(); // 🆕 Ref for the whole planet group
  const planetRef = useRef();
  const glowRef = useRef();
  const angleRef = useRef(Math.random() * Math.PI * 2);
  let pulse = Math.random() * Math.PI * 2;

  const texture = useTexture(texturePath);

  useFrame(() => {
    // Orbit motion — move the whole group
    angleRef.current += orbitSpeed;
    const x = Math.cos(angleRef.current) * orbitRadius;
    const z = Math.sin(angleRef.current) * orbitRadius;
    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z);
    }

    // Planet rotation
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.01;
    }

    // Glow pulse
    pulse += 0.03;
    if (glowRef.current) {
      const baseScale = 1.2;
      const pulseAmount = 0.05;
      const scale = hovered ? baseScale + Math.sin(pulse) * pulseAmount : 0;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Persistent Title Label */}
      <Html
        position={[0, size * 1.6, 0]}
        center
        distanceFactor={10}
        style={{
          padding: "2px 6px",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "6px",
          color: "white",
          fontSize: "4rem",
          fontWeight: 500,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        }}
      >
        {name}
      </Html>

      {/* Planet */}
      <mesh
        ref={planetRef}
        onClick={() => onSelect(name)}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
        }}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          emissive={hovered ? color : "black"}
          emissiveIntensity={hovered ? 0.8 : 0}
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>

      {/* Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 1.3, 64, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.7 : 0}
          transparent
          opacity={0.4}
          side={2}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
