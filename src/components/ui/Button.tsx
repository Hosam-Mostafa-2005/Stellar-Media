import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  icon,
  iconPosition = 'end',
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#080D1B] disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-8 py-3.5 gap-2.5 rounded-xl',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#168BFF] hover:bg-[#2e9aff] text-[#F5F7FC] shadow-[0_0_25px_rgba(22,139,255,0.35)] hover:shadow-[0_0_35px_rgba(72,217,232,0.4)] focus:ring-[#48D9E8]',
    secondary:
      'bg-[#101E38]/60 hover:bg-[#101E38] text-[#AEBBD0] hover:text-[#F5F7FC] border border-[#AEBBD0]/20 hover:border-[#48D9E8]/40 focus:ring-[#AEBBD0]',
    ghost:
      'bg-transparent hover:bg-[#101E38]/40 text-[#AEBBD0] hover:text-[#48D9E8] border border-transparent hover:border-[#48D9E8]/20 focus:ring-[#48D9E8]',
    cyan:
      'bg-[#48D9E8]/15 hover:bg-[#48D9E8] text-[#48D9E8] hover:text-[#080D1B] border border-[#48D9E8]/30 hover:border-[#48D9E8] shadow-[0_0_20px_rgba(72,217,232,0.2)] focus:ring-[#48D9E8]',
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && <span className="shrink-0 rtl:rotate-180">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
