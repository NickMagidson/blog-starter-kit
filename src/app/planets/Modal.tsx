"use client";

import * as motion from "motion/react-client";

import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div
      style={{ zIndex: "200000000" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="rounded-xl p-6 shadow-xl h-[31rem] overflow-y-auto relative lg:h-4/5"
      >
        {children}
        {/* <button
          onClick={onClose}
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Close
        </button> */}
      </motion.div>
    </div>
  );
}
