"use client";

export default function Modal({ onClose, children }) {
  return (
    <div
      style={{ zIndex: "200000000" }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
    >
      <div className="rounded-xl p-6 shadow-xl  ">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
