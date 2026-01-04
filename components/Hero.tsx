import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button, GlassPanel } from './ui/GlassComponents';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <GlassPanel className="p-8 md:p-16 text-center border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-sm font-semibold mb-8 animate-float">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            Официальная аттестация РК
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            SAFETY<span className="text-brand-accent">ALL</span> — Профессиональное <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              обучение по безопасности
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Центр обучения: официальные курсы, аттестация и переобучение по охране труда, 
            промышленной, пожарной и электробезопасности. 
            Онлайн-обучение на интерактивной платформе.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})}>
              Начать обучение
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => document.getElementById('courses')?.scrollIntoView({behavior: 'smooth'})}>
              Посмотреть курсы
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-brand-accent" />
            </Button>
          </div>

        </GlassPanel>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
                { label: 'Лет на рынке', val: '20+' },
                { label: 'Довольных клиентов', val: '5k+' },
                { label: 'Выдано сертификатов', val: '10k+' },
                { label: 'Формат обучения', val: '100% Online' }
            ].map((stat, idx) => (
                <GlassPanel key={idx} className="p-4 text-center border-white/5 bg-slate-800/20">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</div>
                    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </GlassPanel>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;