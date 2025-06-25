interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CloseButton({
  onClick,
  className = "",
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 flex items-center justify-center text-xl bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition-colors flex-shrink-0 ml-4 lg:w-12 lg:h-12 lg:text-3xl lg:leading-none ${className}`}
    >
      ×
    </button>
  );
}
