import React from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
