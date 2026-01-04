import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-brand-accent" />
                <span className="text-xl font-bold tracking-wider text-white">SAFETY<span className="text-brand-accent">ALL</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Современный центр дистанционного обучения по безопасности труда. Официально, удобно, технологично.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {['О компании', 'Курсы', 'Процесс', 'Контакты'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Информация</h4>
            <ul className="space-y-3">
              {['Публичная оферта', 'Политика конфиденциальности', 'Лицензии', 'Реквизиты'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-accent text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacts Small */}
          <div>
            <h4 className="text-white font-bold mb-6">Связь</h4>
            <p className="text-slate-400 text-sm mb-2">info@safetyall.kz</p>
            <p className="text-brand-accent font-bold text-lg">+7 (777) 123-45-67</p>
            <div className="mt-4 flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-accent/20 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-accent/20 cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-accent/20 cursor-pointer transition-colors"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">© 2025 SAFETYALL. Все права защищены.</p>
          <p className="text-slate-600 text-xs">Разработано для безопасности вашего бизнеса.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;