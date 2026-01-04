import React from 'react';
import { FileText, Award, BadgeCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { GlassPanel, SectionTitle, Button } from './ui/GlassComponents';

export const ProcessSection = () => {
  const steps = [
    "Заявка и консультация",
    "Оплата курса",
    "Доступ к платформе",
    "Изучение материалов",
    "Тестирование",
    "Получение документов"
  ];

  return (
    <section id="process" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Процесс обучения" subtitle="Всего 6 простых шагов к аттестации" centered />
        
        <div className="relative mt-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-brand-accent text-brand-accent flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-slate-900 transition-all shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  {idx + 1}
                </div>
                <div className="text-center">
                  <p className="text-white font-medium text-sm md:text-base">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const DocumentsSection = () => (
  <section id="documents" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Документы по окончании" subtitle="Полный пакет официальных документов" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Award, title: "Сертификат", desc: "Именной сертификат о прохождении курса установленного образца." },
          { icon: BadgeCheck, title: "Удостоверение", desc: "Официальное удостоверение, подтверждающее допуск к работам." },
          { icon: FileText, title: "Протокол", desc: "Протокол проверки знаний экзаменационной комиссии." },
        ].map((doc, idx) => (
          <GlassPanel key={idx} hoverEffect className="p-8 text-center group border-brand-accent/20">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-brand-accent/10 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <doc.icon className="w-8 h-8 text-brand-accent" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">{doc.title}</h4>
            <p className="text-slate-400 text-sm">{doc.desc}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </section>
);

export const CTASection = () => (
  <section id="cta-block" className="py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <GlassPanel className="p-12 md:p-20 text-center relative overflow-hidden border-brand-accent/30 shadow-[0_0_60px_rgba(56,189,248,0.15)]">
         <div className="absolute inset-0 bg-brand-accent/5"></div>
         <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Готовы повысить безопасность?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Оставьте заявку — мы подберём курс под задачи вашей компании и предоставим доступ в течение 15 минут.
            </p>
            <form className="max-w-md mx-auto flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                />
                 <input 
                  type="tel" 
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full px-6 py-4 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                />
                <Button size="lg" className="w-full shadow-[0_0_20px_rgba(56,189,248,0.4)]">Начать обучение</Button>
            </form>
         </div>
      </GlassPanel>
    </div>
  </section>
);

export const ContactSection = () => (
  <section id="contacts" className="py-20 relative">
    {/* Map Background Placeholder */}
    <div className="absolute inset-0 bg-slate-800 opacity-50 grayscale mix-blend-multiply pointer-events-none">
       {/* Abstract map pattern */}
       <div className="w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <GlassPanel className="p-10 backdrop-blur-2xl bg-slate-900/80">
          <SectionTitle title="Контакты" />
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-bold mb-1">Адрес</h4>
                <p className="text-slate-400">г. Алматы, пр. Аль-Фараби, Бизнес-центр "Нурлы-Тау"</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-bold mb-1">Телефон</h4>
                <p className="text-slate-400">+7 (777) 123-45-67</p>
                <p className="text-slate-400">+7 (727) 123-45-67</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-slate-400">info@safetyall.kz</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-accent mt-1" />
              <div>
                <h4 className="text-white font-bold mb-1">Режим работы</h4>
                <p className="text-slate-400">Пн-Пт: 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  </section>
);