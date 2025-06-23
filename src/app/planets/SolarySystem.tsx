"use client";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
// import Modal from "./components/Modal";
import AboutSection from "../_components/about-section";
import ProjectsSection from "../_components/projects-section";
import Modal from "./Modal";
import Planet from "./Planets";

function Sun() {
  const sunTexture = useTexture("/textures/sun.jpg");
  const coronaRef = useRef();
  let pulse = 0;

  useFrame(() => {
    pulse += 0.02;
    const scale = 1 + Math.sin(pulse) * 0.05;
    if (coronaRef.current) {
      coronaRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          map={sunTexture}
          emissive={"orange"}
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh ref={coronaRef}>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshBasicMaterial color="orange" transparent opacity={0.2} side={2} />
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (planetName) => {
    setSelected(planetName);
  };

  const closeModal = () => {
    setSelected(null);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Heading and Subheading */}
      {/* <div className="absolute top-32 left-1/2 w-full transform -translate-x-1/2 text-center z-10">
        <motion.h1
          className="heading-gradient text-5xl font-semibold text-center mb-4 sm:text-7xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Nick Magidson
        </motion.h1>

        <motion.p
          className="hero-sub-heading text-2xl text-center text-gray-600 sm:text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Fullstack Engineer
        </motion.p>
      </div> */}

      {/* Canvas with Planets */}
      <Canvas camera={{ position: [0, 10, 25], fov: 60 }}>
        <ambientLight intensity={2} />
        <pointLight position={[0, 0, 0]} intensity={2} />
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

        <OrbitControls />
      </Canvas>

      {/* Modal Content */}
      {selected && (
        <Modal onClose={closeModal}>
          {selected === "About" && (
            <div>
              <h2 className="text-xl font-bold mb-2">About Me</h2>
              <AboutSection />
            </div>
          )}
          {selected === "Projects" && (
            <div>
              <ProjectsSection />
            </div>
          )}
          {selected === "Experience" && (
            <div>
              <h2 className="text-xl font-bold mb-2">Experience</h2>
              <p>
                I've worked as a React contractor and LLM QA Engineer. I
                specialize in performant UI, component systems, and building for
                both humans and machines.
              </p>
            </div>
          )}
          {selected === "Contact" && (
            <div>
              <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
              <p>Email: nick@example.com</p>
              <p>LinkedIn: /in/nickmagidson</p>
              <p>GitHub: @nickcodes</p>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
