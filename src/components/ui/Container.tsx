import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const sizeClasses = {
    narrow: 'max-w-5xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  }[size];

  return (
    <div className={`mx-auto px-6 sm:px-8 lg:px-12 w-full ${sizeClasses} ${className}`}>
      {children}
    </div>
  );
};
