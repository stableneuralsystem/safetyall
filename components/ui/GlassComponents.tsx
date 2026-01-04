import React from 'react';

// Base Glass Panel
interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div
      className={`
        bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20
        ${hoverEffect ? 'transition-all duration-500 hover:bg-slate-800/50 hover:border-white/20 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Primary CTA Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-brand-accent text-slate-900 hover:bg-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]",
    secondary: "bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Section Title
export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// Menu Item Button
export const MenuItem: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a 
    href={href} 
    className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-slate-200 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] transition-all duration-300"
  >
    {label}
  </a>
);
