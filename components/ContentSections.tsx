import React from 'react';
import { ShieldCheck, HardHat, Flame, Zap, CheckCircle2, Building2, FileCheck, Users, Clock, Monitor, BookOpen, GraduationCap } from 'lucide-react';
import { GlassPanel, SectionTitle, Button } from './ui/GlassComponents';

export const AboutSection = () => (
  <section id="about" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="О компании SAFETYALL" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassPanel className="p-8 md:p-12 flex flex-col justify-center">
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            ТОО «Safetyall» — более <span className="text-brand-accent font-bold">20 лет</span> на рынке профессионального обучения. 
            Компания специализируется на обучении рабочих, ИТР и руководителей. 
            Все программы официальны, соответствуют законодательству РК и стандартам ISO.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Обучение и оформление документов проходят полностью дистанционно. 
            Мы — надёжный цифровой партнёр для вашего бизнеса.
          </p>
        </GlassPanel>
        
        <GlassPanel className="p-8 md:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-800/20">
          {[
            { icon: Clock, text: "20+ лет опыта" },
            { icon: Building2, text: "Бизнес-клиенты" },
            { icon: CheckCircle2, text: "Проверено аудитами" },
            { icon: FileCheck, text: "Документы без визитов" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/5">
              <item.icon className="w-10 h-10 text-brand-accent mb-3" />
              <span className="font-medium text-white">{item.text}</span>
            </div>
          ))}
        </GlassPanel>
      </div>
    </div>
  </section>
);

export const WhySection = () => (
  <section id="importance" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Почему это критично" subtitle="Безопасность — это не просто документы, это жизнь и стабильность бизнеса" centered />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { text: "Снижение рисков и травматизма на производстве" },
          { text: "Соответствие требованиям проверок и нормативам" },
          { text: "Готовность персонала к нештатным ситуациям" },
          { text: "Официальные документы без визитов в офис" },
          { text: "Единые стандарты качества обучения (ISO)" },
          { text: "Юридическая защита компании при инцидентах" }
        ].map((item, idx) => (
          <GlassPanel key={idx} hoverEffect className="p-8 flex items-start gap-4 h-full">
            <ShieldCheck className="w-8 h-8 text-brand-accent shrink-0" />
            <p className="text-lg text-slate-200 font-medium">{item.text}</p>
          </GlassPanel>
        ))}
      </div>
    </div>
  </section>
);

export const CoursesSection = () => {
  const courses = [
    { 
      title: "Охрана труда", 
      desc: "Базовые нормы и правила безопасности на рабочем месте.", 
      icon: Users 
    },
    { 
      title: "Промышленная безопасность", 
      desc: "Требования и практика для опасных производственных объектов.", 
      icon: HardHat 
    },
    { 
      title: "Пожарная безопасность", 
      desc: "Профилактика возгораний и действия при ЧС.", 
      icon: Flame 
    },
    { 
      title: "Электробезопасность", 
      desc: "Безопасная работа с электроустановками, допуски.", 
      icon: Zap 
    }
  ];

  return (
    <section id="courses" className="py-20 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Наши курсы" subtitle="Актуальные программы, разработанные экспертами отрасли" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <GlassPanel key={idx} hoverEffect className="p-8 flex flex-col items-start h-full group">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent/20 transition-colors">
                <course.icon className="w-8 h-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
              <p className="text-slate-400 mb-8 flex-grow">{course.desc}</p>
              <Button variant="glass" size="sm" className="w-full">Подробнее</Button>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AdvantagesSection = () => (
  <section className="py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Advantage 1: Simplicity */}
      <GlassPanel className="p-10 md:p-16 mb-20 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Простота и удобство</h3>
                <p className="text-slate-400 text-lg mb-8">
                    Мы убрали всю бюрократию. Обучайтесь когда угодно и где угодно, не отрываясь от производства.
                </p>
                <div className="space-y-4">
                    {[
                        { icon: Monitor, text: "Доступ 24/7 из личного кабинета" },
                        { icon: BookOpen, text: "Короткие модули и понятные тесты" },
                        { icon: Users, text: "Поддержка персонального куратора" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-white/10 text-brand-accent"><item.icon size={20} /></div>
                            <span className="text-white font-medium">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative h-64 lg:h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center">
               <div className="text-center p-8">
                  <div className="text-6xl font-bold text-brand-accent mb-2">100%</div>
                  <div className="text-white text-xl">Дистанционно</div>
               </div>
            </div>
        </div>
      </GlassPanel>

      {/* Advantage 2: Automation */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">Автоматизация процессов</h3>
            <p className="text-slate-400">
                Технологии работают на вас. Никаких бумажных писем и ожиданий оператора.
            </p>
         </div>
         <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
                "Автоматический доступ после оплаты",
                "Онлайн-тестирование с мгновенной проверкой",
                "Общая облачная папка с документами",
                "Email-уведомления без задержек"
            ].map((text, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand-accent mb-4 shadow-[0_0_10px_#38bdf8]"></div>
                    <p className="text-slate-200 font-medium">{text}</p>
                </div>
            ))}
         </div>
      </div>
    </div>
  </section>
);