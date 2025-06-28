"use client"; // if using Next.js App Router

import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "../planets/Modal";
import AboutSection2 from "./about-section2";
import CloseButton from "./close-button";
import ExperienceSection from "./experience-section";
import OpenSourceContributions from "./open-source-contributions";
import ProjectsSection2 from "./projects-section2";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<string | null>(null);

  const handleModalOpen = (modalName: string) => {
    setSelectedModal(modalName);
    setOpen(false); // Close mobile menu when opening modal
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <div
      style={{ zIndex: "300000000" }}
      className="navbar-main fixed w-full text-white z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between flex-wrap py-4">
          {/* Logo */}
          <Image
            src="/assets/blog/moon.png"
            alt="Logo"
            width={50}
            height={50}
            // className="h-10 w-10 rounded-full"
          />
          {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-semibold text-xl tracking-tight">MySite</span>
          </div> */}

          {/* Hamburger Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 w-10 h-10 relative focus:outline-none bg-white rounded"
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto lg:justify-end space-y-4 lg:space-y-0 lg:space-x-6 ${
              open ? "block mt-4" : "hidden lg:block"
            }`}
          >
            <button
              onClick={() => handleModalOpen("About")}
              className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleModalOpen("Projects")}
              className="block text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleModalOpen("Experience")}
              className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => handleModalOpen("Contact")}
              className="block text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Contact
            </button>
            <button
              onClick={() => handleModalOpen("Open Source")}
              className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Open Source
            </button>
            <Link
              href="/"
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>

      {/* Modal Content */}
      {selectedModal && (
        <Modal onClose={closeModal}>
          {selectedModal === "About" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.h1
                  className="heading-gradient text-5xl font-semibold sm:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  About Me
                </motion.h1>
                <CloseButton onClick={closeModal} />
              </div>
              <AboutSection2 />
            </div>
          )}
          {selectedModal === "Projects" && (
            <>
              <div className="flex items-center justify-between mb-4">
                <motion.h1
                  className="heading-gradient text-5xl font-semibold sm:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Projects
                </motion.h1>
                <CloseButton onClick={closeModal} />
              </div>
              <ProjectsSection2 />
            </>
          )}
          {selectedModal === "Experience" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.h1
                  className="heading-gradient text-5xl font-semibold sm:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Experience
                </motion.h1>
                <CloseButton onClick={closeModal} />
              </div>
              <ExperienceSection />
            </div>
          )}
          {selectedModal === "Contact" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <motion.h1
                  className="heading-gradient text-5xl font-semibold sm:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Contact
                </motion.h1>
                <CloseButton onClick={closeModal} />
              </div>

              <motion.div
                className="about-section-content flex flex-col gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {/* Call to Action */}
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    🚀 You can get in touch with me through the options below:
                  </p>
                </motion.div>

                {/* Primary Email Button */}
                <motion.button
                  className="primary-button mx-auto group relative overflow-hidden"
                  onClick={() =>
                    (window.location.href = "mailto:nickmagidson@gmail.com")
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    📧 Send me an email
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                {/* Contact Methods Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {/* LinkedIn Card */}
                  <motion.a
                    href="https://www.linkedin.com/in/nickmagidson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 group backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          LinkedIn
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Let's connect professionally
                        </p>
                      </div>
                    </div>
                  </motion.a>

                  {/* GitHub Card */}
                  <motion.a
                    href="https://github.com/nickmagidson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-gray-700/20 to-gray-900/20 p-6 rounded-xl border border-gray-500/30 hover:border-gray-400 transition-all duration-300 group backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.64 1.59.24 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                          GitHub
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Check out my projects
                        </p>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>

                {/* Response Promise */}
                <motion.div
                  className="text-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <p className="text-gray-400 text-sm">
                    💬 I typically respond within 24 hours. Looking forward to
                    hearing from you!
                  </p>
                </motion.div>
              </motion.div>
            </div>
          )}
          {selectedModal === "Open Source" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <motion.h1
                  className="heading-gradient text-5xl font-semibold sm:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Open Source
                </motion.h1>
                <CloseButton onClick={closeModal} />
              </div>
              <OpenSourceContributions />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}
