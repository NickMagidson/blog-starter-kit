"use client"; // if using Next.js App Router

import { useModal } from "@/contexts/ModalContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Check if we're on a blog page (blog listing or individual post)
  const isBlogPage = pathname?.startsWith("/blog") || pathname?.startsWith("/posts");
  
  const { openModal } = useModal();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleModalOpen = (modalType: "About" | "Projects" | "Experience" | "Contact") => {
    // Close mobile menu first, then open modal
    setOpen(false);
    // Small delay to ensure menu closes before modal opens
    setTimeout(() => {
      openModal(modalType);
    }, 100);
  };

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
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
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
            {/* <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium py-2"
            >
              Home
            </Link> */}
            {!isBlogPage && (
              <button
                onClick={() => handleModalOpen("About")}
                className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer w-full text-left py-2"
              >
                About
              </button>
            )}
            {!isBlogPage && (
              <button
                onClick={() => handleModalOpen("Projects")}
                className="block text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium cursor-pointer w-full text-left py-2"
              >
                Projects
              </button>
            )}
            <button
              onClick={() => handleModalOpen("Experience")}
              className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium cursor-pointer w-full text-left py-2"
            >
              Experience
            </button>

            <Link
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium w-full text-left py-2"
            >
              Blog
            </Link>
            <button
              onClick={() => handleModalOpen("Contact")}
              className="block text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium cursor-pointer w-full text-left py-2"
            >
              Contact
            </button>
            
            {/* CTA Button */}
            {/* <button
              onClick={() => handleModalOpen("Contact")}
              className="secondary-button mt-2 lg:mt-0 lg:ml-4 cursor-pointer block lg:inline-block text-center w-auto"
            >
              Get In Touch
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
