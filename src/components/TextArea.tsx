import React from 'react';

interface TextAreaProps {
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  value,
  placeholder,
  onChange,
  className = '',
}) => {
  return (
    <textarea
      className={`resize-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoFocus={true}
    />
  );
};
