"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ModalType =
  | "About"
  | "Projects"
  | "Experience"
  | "Contact"
  | "Open Source"
  | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  isModalOpen: (modal: ModalType) => boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const isModalOpen = (modal: ModalType) => {
    return activeModal === modal;
  };

  return (
    <ModalContext.Provider
      value={{ activeModal, openModal, closeModal, isModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
