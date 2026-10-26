import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'start' | 'center';
  className?: string;
  size?: 'default' | 'large' | 'compact';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'start',
  className = '',
  size = 'default',
}) => {
  const isCenter = align === 'center';

  const titleSizes = {
    compact: 'text-2xl sm:text-3xl',
    default: 'text-3xl sm:text-4xl lg:text-5xl',
    large: 'text-4xl sm:text-5xl lg:text-6xl',
  }[size];

  return (
    <div
      className={`space-y-4 ${
        isCenter
          ? 'text-center mx-auto max-w-3xl flex flex-col items-center'
          : 'text-start max-w-3xl flex flex-col items-start'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101E38]/80 border border-[#48D9E8]/25 text-xs font-semibold text-[#48D9E8] tracking-wider uppercase shadow-[0_0_12px_rgba(72,217,232,0.1)] ${
            isCenter ? 'self-center' : 'self-start'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#48D9E8] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`headline-font ${titleSizes} font-bold text-[#F5F7FC] leading-[1.2] tracking-tight`}
      >
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#168BFF] via-[#48D9E8] to-[#F5F7FC]">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#AEBBD0] leading-relaxed font-normal max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
