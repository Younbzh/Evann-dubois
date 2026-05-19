import React, { useState, useEffect } from 'react';
import {
  Apple, Wind, Heart, Droplets, Moon,
  Award, CheckCircle, Users, MapPin,
  Phone, MessageCircle, Clock, ChevronDown, Menu, X, Check,
  GraduationCap, Leaf, BatteryLow, Scale, UtensilsCrossed, Coffee, Flame, Brain,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const ServiceIcon = ({ name }: { name: string }) => {
  if (name === 'Apple') return <Apple className="w-5 h-5" />;
  if (name === 'Wind') return <Wind className="w-5 h-5" />;
  if (name === 'Heart') return <Heart className="w-5 h-5" />;
  if (name === 'Droplets') return <Droplets className="w-5 h-5" />;
  if (name === 'Moon') return <Moon className="w-5 h-5" />;
  return null;
};

const PainIcon = ({ name }: { name: string }) => {
  if (name === 'BatteryLow') return <BatteryLow className="w-5 h-5" />;
  if (name === 'Scale') return <Scale className="w-5 h-5" />;
  if (name === 'UtensilsCrossed') return <UtensilsCrossed className="w-5 h-5" />;
  if (name === 'Coffee') return <Coffee className="w-5 h-5" />;
  if (name === 'Flame') return <Flame className="w-5 h-5" />;
  if (name === 'Brain') return <Brain className="w-5 h-5" />;
  return null;
};

const WhyIcon = ({ name }: { name: string }) => {
  if (name === 'Award') return <Award className="w-5 h-5 text-[#C4813A]" />;
  if (name === 'CheckCircle') return <CheckCircle className="w-5 h-5 text-[#C4813A]" />;
  if (name === 'Users') return <Users className="w-5 h-5 text-[#C4813A]" />;
  if (name === 'Wrench') return <Check className="w-5 h-5 text-[#C4813A]" />;
  if (name === 'MapPin') return <MapPin className="w-5 h-5 text-[#C4813A]" />;
  if (name === 'Euro') return <GraduationCap className="w-5 h-5 text-[#C4813A]" />;
  return null;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Nav ───────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-sm border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1C3424] flex items-center justify-center flex-shrink-0">
                <Leaf className="w-4 h-4 text-[#C4813A]" />
              </div>
              <div>
                <p className="font-bold text-[#1C3424] text-sm leading-tight">Yann Berthelot</p>
                <p className="text-[10px] text-[#C4813A] font-bold uppercase tracking-widest">Coach en Neuro-Nutrition</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => go('about')} className="text-sm text-gray-600 hover:text-[#1C3424] font-medium transition-colors">Mon approche</button>
              <button onClick={() => go('services')} className="text-sm text-gray-600 hover:text-[#1C3424] font-medium transition-colors">Les 5 Facteurs</button>
              <button onClick={() => go('faq')} className="text-sm text-gray-600 hover:text-[#1C3424] font-medium transition-colors">FAQ</button>
              <button
                onClick={() => go('contact')}
                className="bg-[#C4813A] text-white text-sm px-5 py-2.5 rounded-full font-bold hover:bg-[#A8702A] transition-all shadow-md"
              >
                Entretien gratuit
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-3 flex flex-col gap-2">
              <button onClick={() => go('about')} className="text-left py-2 px-2 text-gray-700 font-medium">Mon approche</button>
              <button onClick={() => go('services')} className="text-left py-2 px-2 text-gray-700 font-medium">Les 5 Facteurs</button>
              <button onClick={() => go('faq')} className="text-left py-2 px-2 text-gray-700 font-medium">FAQ</button>
              <button onClick={() => go('contact')} className="mt-1 bg-[#C4813A] text-white px-5 py-3 rounded-full font-bold text-sm">
                Entretien gratuit
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-24 pb-24 bg-[#FAF5EC] relative overflow-hidden">
        {/* Blobs organiques */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E8F0EA] rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5E8D8] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texte gauche */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1C3424]/8 text-[#1C3424] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-7">
                <GraduationCap className="w-3.5 h-3.5 text-[#C4813A]" />
                Formation certifiée École 5.3 · Qualiopi
              </div>

              <h1 className="text-5xl lg:text-[3.6rem] font-bold text-[#1C3424] leading-[1.1] mb-6">
                Retrouvez l'énergie et{' '}
                <em className="text-[#C4813A] not-italic">l'équilibre</em>{' '}
                que vous méritez
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Vous êtes épuisé(e), stressé(e) ou votre poids résiste malgré vos efforts ?
                Je vous accompagne avec la méthode des{' '}
                <strong className="text-[#1C3424]">5 Facteurs Vivants</strong>{' '}
                pour retrouver un équilibre durable — sans régime frustrant.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => go('contact')}
                  className="bg-[#1C3424] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#2E5541] transition-all shadow-lg hover:shadow-xl"
                >
                  Premier entretien gratuit
                </button>
                <button
                  onClick={() => go('services')}
                  className="text-[#1C3424] px-7 py-3.5 rounded-full font-bold text-sm border-2 border-[#1C3424]/20 hover:border-[#C4813A] hover:text-[#C4813A] transition-all"
                >
                  Découvrir la méthode
                </button>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                {['Sans engagement', 'Bretagne & visio', 'Réponse sous 24h'].map(f => (
                  <span key={f} className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C4813A]" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Image droite */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-3 bg-[#E8F0EA] rounded-3xl -rotate-2" />
                <img
                  src="/1000009306.jpg"
                  alt="Les 5 Facteurs Vivants – Méthode Dr Yann Rougier"
                  className="relative w-full rounded-2xl shadow-2xl"
                />
                {/* Badge téléphone */}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E0D4] whitespace-nowrap hover:shadow-2xl transition-shadow"
                >
                  <div className="w-8 h-8 bg-[#1C3424] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[#1C3424] text-base">{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pain Points ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-3">
              {siteConfig.painPoints.title}
            </h2>
            <p className="text-gray-400 italic">Cochez mentalement ce qui vous correspond.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-14">
            {siteConfig.painPoints.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl hover:bg-[#FAF5EC] transition-colors group cursor-default"
              >
                <div className="flex-shrink-0 mt-0.5 w-10 h-10 rounded-xl bg-[#FAF5EC] group-hover:bg-[#C4813A]/15 flex items-center justify-center transition-colors">
                  <span className="text-[#C4813A]"><PainIcon name={item.icon} /></span>
                </div>
                <div>
                  <p className="font-bold text-[#1C3424] mb-0.5 leading-snug">{item.text}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phrase de bascule */}
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-[#1C3424] leading-relaxed mb-4">
              "{siteConfig.painPoints.conclusion}"
            </blockquote>
            <p className="text-gray-500 text-lg mb-6">
              La neuro-nutrition agit sur les{' '}
              <span className="font-semibold text-[#C4813A]">vraies causes</span>{' '}
              — pas seulement sur ce que vous mangez.
            </p>
            <button
              onClick={() => go('services')}
              className="inline-flex items-center gap-2 text-[#C4813A] font-bold text-sm hover:gap-3 transition-all"
            >
              Voir comment ça fonctionne <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ── About ──────────────────────────────────────── */}
      <section id="about" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Texte */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-4">Mon approche</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-8">
                {siteConfig.about.title}
              </h2>

              <div className="space-y-5 mb-8">
                {siteConfig.about.content.map((p, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-lg">{p}</p>
                ))}
              </div>

              <div className="border-l-4 border-[#C4813A] pl-6 py-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Pourquoi ce métier</p>
                <p className="text-gray-600 leading-relaxed italic">
                  "{siteConfig.histoire}"
                </p>
              </div>
            </div>

            {/* Droite : carte credential + valeurs */}
            <div className="space-y-6 lg:pt-16">
              <div className="relative">
                <div className="absolute -inset-2 bg-[#1C3424]/6 rounded-3xl rotate-1" />
                <img
                  src="/1000009307.jpg"
                  alt="Yann Berthelot – Coach en Neuro-Nutrition"
                  className="relative w-full rounded-2xl shadow-lg"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8E0D4]">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-4">Mon engagement</p>
                <div className="grid grid-cols-2 gap-4">
                  {siteConfig.about.values.map((v, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#C4813A] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-[#1C3424] text-sm">{v.title}</p>
                        <p className="text-xs text-gray-500 leading-snug mt-0.5">{v.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5 Facteurs ─────────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">La méthode</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {siteConfig.services.list.map((service, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-[72px_1fr_1fr] gap-6 items-start p-7 rounded-2xl border border-gray-100 hover:border-[#C4813A]/30 hover:shadow-md transition-all bg-white"
              >
                {/* Numéro + icône */}
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2">
                  <span className="text-5xl font-bold text-[#1C3424]/8 group-hover:text-[#C4813A]/15 transition-colors leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] group-hover:bg-[#C4813A]/10 flex items-center justify-center transition-colors flex-shrink-0">
                    <span className="text-[#C4813A]"><ServiceIcon name={service.icon} /></span>
                  </div>
                </div>

                {/* Titre + description */}
                <div>
                  <h3 className="text-xl font-bold text-[#1C3424] mb-2">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Points clés */}
                <ul className="space-y-2 md:pt-1">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4813A] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi moi ───────────────────────────────── */}
      <section className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Pourquoi moi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.whyChooseUs.reasons.map((reason, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E8E0D4] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#1C3424] flex items-center justify-center mb-4">
                  <WhyIcon name={reason.icon} />
                </div>
                <h3 className="font-bold text-[#1C3424] text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote CTA ──────────────────────────────────── */}
      <section className="py-16 bg-[#1C3424]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-4">
            Prêt(e) à retrouver votre équilibre ?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Premier entretien gratuit · Loudéac ou visioconférence · Réponse sous 24h
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 bg-[#C4813A] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#A8702A] transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-3">
              {siteConfig.faq.title}
            </h2>
            <p className="text-gray-500">{siteConfig.faq.subtitle}</p>
          </div>

          <div className="divide-y divide-gray-100">
            {siteConfig.faq.questions.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full py-5 flex items-center justify-between text-left gap-4 group"
                >
                  <span className="font-bold text-[#1C3424] text-base group-hover:text-[#C4813A] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C4813A] flex-shrink-0 transition-transform duration-200 ${activeAccordion === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeAccordion === i && (
                  <div className="pb-5 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C3424] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="bg-[#1C3424] text-white rounded-2xl p-8 text-center hover:bg-[#2E5541] transition-colors group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="w-7 h-7 text-[#C4813A]" />
              </div>
              <p className="font-bold text-lg mb-1">{siteConfig.contact.phone}</p>
              <p className="text-white/50 text-sm">Appel direct</p>
            </a>

            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center border border-[#E8E0D4] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#FAF5EC] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4813A]/10 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#C4813A]" />
              </div>
              <p className="font-bold text-[#1C3424] text-lg mb-1">WhatsApp</p>
              <p className="text-gray-400 text-sm">Message direct</p>
            </a>

            <div className="bg-white rounded-2xl p-8 text-center border border-[#E8E0D4]">
              <div className="w-14 h-14 bg-[#FAF5EC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-[#C4813A]" />
              </div>
              <div className="space-y-2">
                {siteConfig.hours.details.map((h, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-bold text-[#1C3424]">{h.day}</p>
                    <p className="text-gray-500">{h.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="bg-[#111D18] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1C3424] border border-[#C4813A]/30 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 text-[#C4813A]" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Yann Berthelot</p>
                  <p className="text-[10px] text-[#C4813A] font-bold uppercase tracking-widest">Coach en Neuro-Nutrition</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Retrouvez énergie, équilibre et bien-être grâce à la méthode des 5 Facteurs Vivants.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#C4813A] mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C4813A]" />
                  {siteConfig.contact.phone}
                </a>
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <MessageCircle className="w-3.5 h-3.5 text-[#C4813A]" />
                  WhatsApp
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C4813A]" />
                  22600 Loudéac · Bretagne
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#C4813A] mb-4">Formation</h4>
              <div className="space-y-1.5 text-sm text-gray-400">
                <p>Coach en Neuro-Nutrition</p>
                <p>Formation certifiante École 5.3</p>
                <p>Organisme certifié Qualiopi</p>
                <p>Méthode Dr Yann Rougier</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} {siteConfig.businessName} – Tous droits réservés
          </div>
        </div>
      </footer>

    </div>
  );
}
