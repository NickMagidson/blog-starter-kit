// /// <reference path="../../types/react-three-fiber.d.ts" />
// "use client";
// import { OrbitControls, Stars, useTexture } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import * as motion from "motion/react-client";
// import React, { useRef, useState } from "react";
// import { BufferGeometry, Mesh, Vector3 } from "three";
// // import "../../types/react-three-fiber.d.ts";
// import { useModal } from "@/contexts/ModalContext";
// import Planet from "./Planets";

// // Declare the JSX elements inline
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       mesh: any;
//       group: any;
//       sphereGeometry: any;
//       meshStandardMaterial: any;
//       meshBasicMaterial: any;
//       ambientLight: any;
//       pointLight: any;
//       line: any;
//       lineBasicMaterial: any;
//       bufferGeometry: any;
//     }
//   }
// }

// function Sun(): React.ReactElement {
//   const sunTexture = useTexture("/textures/sun.jpg");
//   const coronaRef = useRef<Mesh>(null);
//   let pulse = 0;

//   useFrame(() => {
//     pulse += 0.02;
//     const scale = 1 + Math.sin(pulse) * 0.05;
//     if (coronaRef.current) {
//       coronaRef.current.scale.set(scale, scale, scale);
//     }
//   });

//   return (
//     // @ts-ignore
//     <group>
//       {/* @ts-ignore */}
//       <mesh>
//         {/* @ts-ignore */}
//         <sphereGeometry args={[2, 64, 64]} />
//         {/* @ts-ignore */}
//         <meshStandardMaterial
//           map={sunTexture}
//           emissive={"orange"}
//           emissiveIntensity={1.5}
//         />
//         {/* @ts-ignore */}
//       </mesh>

//       {/* @ts-ignore */}
//       <mesh ref={coronaRef}>
//         {/* @ts-ignore */}
//         <sphereGeometry args={[2.3, 64, 64]} />
//         {/* @ts-ignore */}
//         <meshBasicMaterial color="orange" transparent opacity={0.2} side={2} />
//         {/* @ts-ignore */}
//       </mesh>
//       {/* @ts-ignore */}
//     </group>
//   );
// }

// // Orbit Ring Component
// function OrbitRing({
//   radius,
//   color = "#333333",
// }: {
//   radius: number;
//   color?: string;
// }) {
//   const orbitRef = useRef<any>(null);

//   // Create orbit ring geometry
//   const points = [];
//   for (let i = 0; i <= 64; i++) {
//     const angle = (i / 64) * Math.PI * 2;
//     points.push(
//       new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
//     );
//   }

//   const geometry = new BufferGeometry().setFromPoints(points);

//   return (
//     // @ts-ignore
//     <line ref={orbitRef} geometry={geometry}>
//       {/* @ts-ignore */}
//       <lineBasicMaterial color={color} transparent opacity={0.3} />
//       {/* @ts-ignore */}
//     </line>
//   );
// }

// export default function SolarSystem() {
//   const { activeModal, openModal, closeModal } = useModal();

//   const handleSelect = (planetName: string) => {
//     openModal(planetName as any);
//   };

//   return (
//     <div className="relative w-full h-screen">
//       {/* Heading and Subheading */}
//       {/* <div className="absolute top-32 left-1/2 w-full transform -translate-x-1/2 text-center z-10">
//         <motion.h1
//           className="heading-gradient text-5xl font-semibold text-center mb-4 sm:text-7xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         >
//           Nick Magidson
//         </motion.h1>

//         <motion.p
//           className="hero-sub-heading text-2xl text-center text-gray-600 sm:text-4xl lg:text-6xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
//         >
//           Fullstack Engineer
//         </motion.p>
//       </div> */}

//       {/* Alert Box */}
//       <div className="tutorial-alert z-10">
//         <motion.div
//           className="backdrop-blur-md border border-purple-500/30 rounded-lg px-4 py-2 shadow-none"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
//         >
//           <p className="text-purple-100 text-xs font-normal opacity-80">
//             ✨ Select a planet to learn more
//           </p>
//         </motion.div>
//       </div>

//       {/* Canvas with Planets */}
//       <Canvas camera={{ position: [0, 10, 25], fov: 60 }}>
//         {/* @ts-ignore */}
//         <ambientLight intensity={2} />
//         {/* @ts-ignore */}
//         <pointLight position={[0, 0, 0]} intensity={2} />
//         {/* @ts-ignore */}
//         <Stars />

//         <Sun />

//         <Planet
//           name="About"
//           orbitRadius={8}
//           orbitSpeed={0.005}
//           size={1}
//           texturePath="/textures/blue.jpeg"
//           color="#33ccff"
//           onSelect={handleSelect}
//         />

//         <Planet
//           name="Projects"
//           orbitRadius={12}
//           orbitSpeed={0.004}
//           size={0.8}
//           texturePath="/textures/mars-cartoon.jpeg"
//           color="#ff4f4f"
//           onSelect={handleSelect}
//         />

//         <Planet
//           name="Experience"
//           orbitRadius={6}
//           orbitSpeed={0.006}
//           size={0.9}
//           texturePath="/textures/purple.jpeg"
//           color="#cc66ff"
//           onSelect={handleSelect}
//         />

//         <Planet
//           name="Contact"
//           orbitRadius={16}
//           orbitSpeed={0.004}
//           size={1.2}
//           texturePath="/textures/green.jpeg"
//           color="#aaff55"
//           onSelect={handleSelect}
//         />

//         <Planet
//           name="Open Source"
//           orbitRadius={20}
//           orbitSpeed={0.003}
//           size={1.1}
//           texturePath="/textures/saturn.jpeg"
//           color="#ff6b47"
//           onSelect={handleSelect}
//         />

//         {/* Orbit Rings */}
//         <OrbitRing radius={8} color="#33ccff" />
//         <OrbitRing radius={12} color="#ff4f4f" />
//         <OrbitRing radius={6} color="#cc66ff" />
//         <OrbitRing radius={16} color="#aaff55" />
//         <OrbitRing radius={20} color="#ff6b47" />

//         {/* @ts-ignore */}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }
//         <Modal onClose={closeModal}>
//           {activeModal === "About" && (
//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <motion.h1
//                   className="heading-gradient text-5xl font-semibold sm:text-7xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   About Me
//                 </motion.h1>
//                 <CloseButton onClick={closeModal} />
//               </div>
//               <AboutSection2 />
//             </div>
//           )}
//           {activeModal === "Projects" && (
//             <>
//               <div className="flex items-center justify-between mb-4">
//                 <motion.h1
//                   className="heading-gradient text-5xl font-semibold sm:text-7xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   Projects
//                 </motion.h1>
//                 <CloseButton onClick={closeModal} />
//               </div>
//               <ProjectsSection2 />
//             </>
//           )}
//           {activeModal === "Experience" && (
//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <motion.h1
//                   className="heading-gradient text-5xl font-semibold sm:text-7xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   Experience
//                 </motion.h1>
//                 <CloseButton onClick={closeModal} />
//               </div>
//               <ExperienceSection />
//             </div>
//           )}
//           {activeModal === "Contact" && (
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between mb-6 sticky top-0 bg-black/90 backdrop-blur-sm z-10 pb-4">
//                 <motion.h1
//                   className="heading-gradient text-5xl font-semibold sm:text-7xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   Contact
//                 </motion.h1>
//                 <CloseButton onClick={closeModal} />
//               </div>

//               <div className="flex-1 overflow-y-auto pr-2">
//                 <motion.div
//                   className="about-section-content flex flex-col gap-8"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//                 >
//                   {/* Call to Action */}
//                   <motion.div
//                     className="text-center mb-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4, duration: 0.6 }}
//                   >
//                     <p className="text-xl text-gray-300 mb-6 leading-relaxed">
//                       🚀 You can get in touch with me through the options below:
//                     </p>
//                   </motion.div>

//                   {/* Primary Email Button */}
//                   <motion.button
//                     className="primary-button mx-auto group relative overflow-hidden"
//                     onClick={() =>
//                       (window.location.href = "mailto:nickmagidson@gmail.com")
//                     }
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6, duration: 0.6 }}
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       📧 Send me an email
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </motion.button>

//                   {/* Contact Methods Grid */}
//                   <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8, duration: 0.6 }}
//                   >
//                     {/* LinkedIn Card */}
//                     <motion.a
//                       href="https://www.linkedin.com/in/nickmagidson"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group backdrop-blur-sm"
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="32"
//                             height="32"
//                             viewBox="0 0 24 24"
//                             fill="white"
//                           >
//                             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
//                             LinkedIn
//                           </h3>
//                           <p className="text-gray-400 text-sm">
//                             Let's connect professionally
//                           </p>
//                         </div>
//                       </div>
//                     </motion.a>

//                     {/* GitHub Card */}
//                     <motion.a
//                       href="https://github.com/nickmagidson"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="bg-gradient-to-r from-gray-700/20 to-gray-900/20 p-6 rounded-xl border border-gray-500/30 hover:border-gray-400 transition-all duration-300 group backdrop-blur-sm"
//                       whileHover={{ scale: 1.02, y: -5 }}
//                       whileTap={{ scale: 0.98 }}
//                     >
//                       <div className="flex items-center gap-4">
//                         <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             width="32"
//                             height="32"
//                             viewBox="0 0 24 24"
//                             fill="white"
//                           >
//                             <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
//                           </svg>
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
//                             GitHub
//                           </h3>
//                           <p className="text-gray-400 text-sm">
//                             Check out my projects
//                           </p>
//                         </div>
//                       </div>
//                     </motion.a>
//                   </motion.div>

//                   {/* Quick Contact Options */}
//                   {/* <motion.div
//                     className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl border border-purple-500/30 backdrop-blur-sm"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.0, duration: 0.6 }}
//                   >
//                     <h3 className="text-xl font-semibold text-white mb-4 text-center">
//                       ⚡ Quick Actions
//                     </h3>
//                     <div className="flex flex-wrap justify-center gap-4">
//                       <motion.button
//                         className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
//                         onClick={() =>
//                           window.open(
//                             "https://calendly.com/nickmagidson",
//                             "_blank"
//                           )
//                         }
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         📅 Schedule Call
//                       </motion.button>
//                       <motion.button
//                         className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
//                         onClick={() =>
//                           navigator.clipboard.writeText("nick@example.com")
//                         }
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         📋 Copy Email
//                       </motion.button>
//                       <motion.button
//                         className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2"
//                         onClick={() =>
//                           window.open(
//                             "https://twitter.com/nickmagidson",
//                             "_blank"
//                           )
//                         }
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         🐦 Twitter
//                       </motion.button>
//                     </div>
//                   </motion.div> */}

//                   {/* Response Promise */}
//                   <motion.div
//                     className="text-center mt-6"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 1.2, duration: 0.6 }}
//                   >
//                     <p className="text-gray-400 text-sm">
//                       💬 I typically respond within 24 hours. Looking forward to
//                       hearing from you!
//                     </p>
//                   </motion.div>
//                 </motion.div>
//               </div>
//             </div>
//           )}
//           {activeModal === "Open Source" && (
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between mb-6 sticky top-0 bg-black/90 backdrop-blur-sm z-10 pb-4">
//                 <motion.h1
//                   className="heading-gradient text-5xl font-semibold sm:text-7xl"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, ease: "easeOut" }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   Open Source
//                 </motion.h1>
//                 <CloseButton onClick={closeModal} />
//               </div>
//               <div className="flex-1 overflow-y-auto pr-2">
//                 <OpenSourceContributions />
//               </div>
//             </div>
//           )}
//         </Modal>
//       )}
//     </div>
//   );
// }
