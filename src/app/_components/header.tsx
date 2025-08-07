"use client"; // if using Next.js App Router

// import { useModal } from "@/contexts/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a blog page (blog listing or individual post)
  const isBlogPage = pathname?.startsWith("/blog") || pathname?.startsWith("/posts");
  
  // const { openModal } = useModal();

  const scrollToSection = (sectionId: string) => {
    // First try to find the element
    let element = document.getElementById(sectionId);
    
    // If not found, try with a slight delay (for dynamic content)
    if (!element) {
      setTimeout(() => {
        element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        } else {
          console.warn(`Element with ID "${sectionId}" not found`);
        }
      }, 100);
    } else {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setOpen(false); // Close mobile menu when navigating
  };

  return (
    <div
      style={{ zIndex: "300000000" }}
      className="navbar-main fixed w-full text-white z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between flex-wrap py-4">
          {/* Logo and Name */}
            <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/blog/moon.png"
              alt="Logo"
              width={50}
              height={50}
              // className="h-10 w-10 rounded-full"
            />
            <span className="heading-gradient font-semibold text-xl tracking-tight">
              Nick Magidson
            </span>
            </Link>
          {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-semibold text-xl tracking-tight">MySite</span>
          </div> */}

          {/* Hamburger Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 w-10 h-10 relative focus:outline-none bg-slate-300 rounded"
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
            <Link
              href="/"
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            {!isBlogPage && (
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                About
              </button>
            )}
            {!isBlogPage && (
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer"
              >
                Projects
              </button>
            )}
            {/* <button
              onClick={() => scrollToSection("experience")}
              className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Experience
            </button> */}
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="block text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Contact
            </button> */}
            {/* <button
              onClick={() => scrollToSection("open-source")}
              className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium cursor-pointer"
            >
              Open Source
            </button> */}
            <Link
              href="/blog"
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
