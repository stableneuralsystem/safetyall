import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button, MenuItem } from './ui/GlassComponents';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'О компании', href: '#about' },
    { label: 'Почему важно', href: '#importance' },
    { label: 'Курсы', href: '#courses' },
    { label: 'Процесс', href: '#process' },
    { label: 'Документы', href: '#documents' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Shield className="w-8 h-8 text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all" />
            <div className="absolute inset-0 bg-brand-accent/20 blur-lg rounded-full animate-pulse-slow"></div>
          </div>
          <span className="text-2xl font-bold tracking-wider text-white">SAFETY<span className="text-brand-accent">ALL</span></span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3">
          {menuItems.map((item) => (
            <MenuItem key={item.label} label={item.label} href={item.href} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button size="sm" onClick={() => document.getElementById('cta-block')?.scrollIntoView({behavior: 'smooth'})}>
            Начать обучение
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-medium text-slate-300 py-2 border-b border-white/5 hover:text-brand-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-4" onClick={() => { setMobileMenuOpen(false); document.getElementById('cta-block')?.scrollIntoView({behavior: 'smooth'})}}>
            Начать обучение
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;