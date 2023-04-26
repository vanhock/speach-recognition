import React from 'react';

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<H1Props> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-2xl mb-3 font-bold leading-tight ${className}`}>
      {children}
    </h1>
  );
};
