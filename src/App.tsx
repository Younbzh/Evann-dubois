import React, { useState, useEffect } from 'react';
import {
  Hammer, Package, Home, Truck, Star, Layers,
  Award, CheckCircle, Users, MapPin,
  Phone, ChevronDown, Menu, X, Check,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from './config/siteConfig';

const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const map: Record<string, React.ReactNode> = {
    Hammer: <Hammer className={className} />,
    Package: <Package className={className} />,
    Home: <Home className={className} />,
    Truck: <Truck className={className} />,
    Star: <Star className={className} />,
    Layers: <Layers className={className} />,
    Award: <Award className={className} />,
    CheckCircle: <CheckCircle className={className} />,
    Users: <Users className={className} />,
    MapPin: <MapPin className={className} />,
  };
  return <>{map[name] ?? null}</>;
};

const InstagramSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookSVG = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);

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
        scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-md'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            <div className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="L'esprit Dubois" className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
              <div>
                <p className="font-bold text-[#1C1208] text-sm leading-tight">L'esprit Dubois</p>
                <p className="text-[10px] text-[#C4813A] font-bold uppercase tracking-widest">Ébénisterie</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-7">
              <button onClick={() => go('qui-je-suis')} className="text-sm text-gray-600 hover:text-[#1C1208] font-medium transition-colors">Qui je suis</button>
              <button onClick={() => go('services')} className="text-sm text-gray-600 hover:text-[#1C1208] font-medium transition-colors">Ce que je crée</button>
              <button onClick={() => go('realisations')} className="text-sm text-gray-600 hover:text-[#1C1208] font-medium transition-colors">Réalisations</button>
              <button onClick={() => go('contact')} className="text-sm text-gray-600 hover:text-[#1C1208] font-medium transition-colors">Contact</button>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="bg-[#C4813A] text-white text-sm px-5 py-2.5 rounded-full font-bold hover:bg-[#A8702A] transition-all shadow-md"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100 pt-3 flex flex-col gap-2">
              <button onClick={() => go('qui-je-suis')} className="text-left py-2 px-2 text-gray-700 font-medium">Qui je suis</button>
              <button onClick={() => go('services')} className="text-left py-2 px-2 text-gray-700 font-medium">Ce que je crée</button>
              <button onClick={() => go('realisations')} className="text-left py-2 px-2 text-gray-700 font-medium">Réalisations</button>
              <button onClick={() => go('contact')} className="text-left py-2 px-2 text-gray-700 font-medium">Contact</button>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="mt-1 bg-[#C4813A] text-white px-5 py-3 rounded-full font-bold text-sm text-center"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="pt-24 pb-28 bg-[#FAF5EC] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#F0E5D0] rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F5E8D8] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 bg-[#1C1208]/8 text-[#1C1208] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-7">
                <Hammer className="w-3.5 h-3.5 text-[#C4813A]" />
                {siteConfig.hero.badge}
              </div>

              <h1 className="text-5xl lg:text-[3.4rem] font-bold text-[#1C1208] leading-[1.1] mb-6">
                De la planche brute à{' '}
                <em className="text-[#C4813A] not-italic">quelque chose d'unique</em>
                {', '}fait pour vous
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Je suis Evann Dubois, ébéniste installé à Plessala. Je conçois et fabrique{' '}
                <strong className="text-[#1C1208]">sur mesure</strong>{' '}
                des meubles, tables et aménagements qui durent — et qui vous ressemblent.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => go('contact')}
                  className="bg-[#1C1208] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#2E1F0E] transition-all shadow-lg hover:shadow-xl"
                >
                  Me contacter
                </button>
                <button
                  onClick={() => go('realisations')}
                  className="text-[#1C1208] px-7 py-3.5 rounded-full font-bold text-sm border-2 border-[#1C1208]/20 hover:border-[#C4813A] hover:text-[#C4813A] transition-all"
                >
                  Voir mes réalisations
                </button>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                {siteConfig.hero.features.map(f => (
                  <span key={f} className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C4813A]" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-3 bg-[#F0E5D0] rounded-3xl rotate-2" />
                <img
                  src="/Evann Dubois.avif"
                  alt="Evann Dubois – Ébéniste à Plessala"
                  className="relative w-full rounded-2xl shadow-2xl object-cover"
                />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E0D4] whitespace-nowrap hover:shadow-2xl transition-shadow"
                >
                  <div className="w-8 h-8 bg-[#1C1208] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[#1C1208] text-base">{siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Ce que je crée ──────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Mon métier</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4">
              {siteConfig.services.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.services.list.map((service, i) => (
              <div key={i} className="group p-7 rounded-2xl border border-gray-100 hover:border-[#C4813A]/30 hover:shadow-md transition-all bg-white">
                <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] group-hover:bg-[#C4813A]/10 flex items-center justify-center mb-5 transition-colors">
                  <span className="text-[#C4813A]">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1C1208] mb-2">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-500">
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

      {/* ── Qui je suis ────────────────────────────────── */}
      <section id="qui-je-suis" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-[#1C1208]/6 rounded-3xl -rotate-1" />
                <img
                  src="/Evann Dubois.avif"
                  alt="Evann Dubois – Ébéniste"
                  className="relative w-full rounded-2xl shadow-lg object-cover"
                />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-xl border border-[#E8E0D4] whitespace-nowrap">
                  <div className="w-8 h-8 bg-[#1C1208] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-[#C4813A]" />
                  </div>
                  <span className="text-sm font-bold text-[#1C1208]">{siteConfig.whoIAm.formation}</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-4">{siteConfig.whoIAm.sectionLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-2">
                {siteConfig.whoIAm.title}
              </h2>
              <p className="text-xl text-[#C4813A] font-semibold mb-7">{siteConfig.whoIAm.subtitle}</p>

              <p className="text-gray-700 leading-relaxed text-lg mb-5">
                {siteConfig.whoIAm.intro}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-7">
                {siteConfig.whoIAm.story}
              </p>

              <div className="border-l-4 border-[#C4813A] pl-6 py-1 mb-8">
                <p className="text-gray-600 leading-relaxed italic text-lg">
                  « {siteConfig.whoIAm.quote} »
                </p>
              </div>

              <button
                onClick={() => go('contact')}
                className="inline-flex items-center gap-2 bg-[#C4813A] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#A8702A] transition-all shadow-md"
              >
                Me contacter <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mon savoir-faire ─────────────────────────── */}
      <section id="savoir-faire" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Ma façon de travailler</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4">
              {siteConfig.approach.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.approach.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {siteConfig.approach.steps.map((step, i) => (
              <div key={i} className="text-center px-4 py-6 group">
                <div className="text-7xl font-bold text-[#1C1208]/6 group-hover:text-[#C4813A]/15 leading-none mb-4 select-none transition-colors">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-[#1C1208] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF5EC] rounded-3xl p-10 max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 bg-[#1C1208] rounded-xl flex items-center justify-center mx-auto mb-5">
              <Hammer className="w-6 h-6 text-[#C4813A]" />
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#1C1208] leading-relaxed">
              « {siteConfig.whoIAm.quote} »
            </p>
            <p className="text-[#C4813A] font-bold text-sm mt-5 uppercase tracking-widest">Evann Dubois</p>
          </div>
        </div>
      </section>

      {/* ── Réalisations / Portfolio ────────────────────── */}
      <section id="realisations" className="py-20 bg-[#FAF5EC]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4">
              {siteConfig.portfolio.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.portfolio.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {siteConfig.portfolio.projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeProject === i
                    ? 'bg-[#1C1208] text-white shadow-md'
                    : 'bg-white text-[#1C1208] border border-[#E8E0D4] hover:border-[#C4813A]'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mb-8 leading-relaxed max-w-xl mx-auto">
            {siteConfig.portfolio.projects[activeProject].description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {siteConfig.portfolio.projects[activeProject].images.map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={`/${img}`}
                  alt={`${siteConfig.portfolio.projects[activeProject].name} – photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {siteConfig.portfolio.projects[activeProject].images.length < 3 && (
              <div className="aspect-square rounded-2xl bg-[#1C1208] flex flex-col items-center justify-center p-8 text-center gap-4">
                <p className="text-white font-bold text-lg leading-snug">Plus de photos sur Instagram</p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C4813A] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#A8702A] transition-colors"
                >
                  @lespritdubois22
                </a>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Retrouvez toutes mes réalisations sur les réseaux</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E8E0D4] text-[#1C1208] px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-md transition-all"
              >
                <InstagramSVG className="w-4 h-4" />
                Instagram
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E8E0D4] text-[#1C1208] px-5 py-2.5 rounded-full text-sm font-bold hover:shadow-md transition-all"
              >
                <FacebookSVG className="w-4 h-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi moi ───────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">Pourquoi moi</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4">
              {siteConfig.whyChooseUs.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {siteConfig.whyChooseUs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.whyChooseUs.reasons.map((reason, i) => (
              <div key={i} className="bg-[#FAF5EC] rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#1C1208] flex items-center justify-center mb-4">
                  <span className="text-[#C4813A]">
                    <Icon name={reason.icon} className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="font-bold text-[#1C1208] text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote CTA ──────────────────────────────────── */}
      <section className="py-16 bg-[#1C1208]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed mb-4">
            Un projet en tête ?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Appelez-moi ou envoyez un message — je réponds moi-même, rapidement.
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
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all"
            >
              <InstagramSVG className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C4813A] mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-3">
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
                  <span className="font-bold text-[#1C1208] text-base group-hover:text-[#C4813A] transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1208] mb-4">
              {siteConfig.finalCTA.title}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              {siteConfig.finalCTA.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="bg-[#1C1208] text-white rounded-2xl p-8 text-center hover:bg-[#2E1F0E] transition-colors group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                <Phone className="w-7 h-7 text-[#C4813A]" />
              </div>
              <p className="font-bold text-lg mb-1">{siteConfig.contact.phone}</p>
              <p className="text-white/50 text-sm">Appel direct</p>
            </a>

            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center border border-[#E8E0D4] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#FAF5EC] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4813A]/10 transition-colors">
                <InstagramSVG className="w-7 h-7 text-[#C4813A]" />
              </div>
              <p className="font-bold text-[#1C1208] text-lg mb-1">Instagram</p>
              <p className="text-gray-400 text-sm">@lespritdubois22</p>
            </a>

            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 text-center border border-[#E8E0D4] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#FAF5EC] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C4813A]/10 transition-colors">
                <FacebookSVG className="w-7 h-7 text-[#C4813A]" />
              </div>
              <p className="font-bold text-[#1C1208] text-lg mb-1">Facebook</p>
              <p className="text-gray-400 text-sm">L'esprit Dubois</p>
            </a>
          </div>

          <div className="text-center mt-8 flex items-center justify-center gap-2 text-gray-500">
            <MapPin className="w-4 h-4 text-[#C4813A]" />
            <span className="text-sm">Plessala, Côtes-d'Armor (22) — Bretagne</span>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="bg-[#111007] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.jpeg" alt="L'esprit Dubois" className="w-9 h-9 rounded-xl object-cover flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-sm">L'esprit Dubois</p>
                  <p className="text-[10px] text-[#C4813A] font-bold uppercase tracking-widest">Ébénisterie</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Meubles, tables et aménagements sur mesure, fabriqués avec soin dans mon atelier à Plessala.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#C4813A] mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#C4813A]" />
                  {siteConfig.contact.phone}
                </a>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <InstagramSVG className="w-3.5 h-3.5 text-[#C4813A]" />
                  @lespritdubois22
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FacebookSVG className="w-3.5 h-3.5 text-[#C4813A]" />
                  L'esprit Dubois
                </a>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C4813A]" />
                  Plessala, 22330 Côtes-d'Armor
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#C4813A] mb-4">Formation</h4>
              <div className="space-y-1.5 text-sm text-gray-400">
                <p>CAP Menuisier Fabricant</p>
                <p>Brevet Professionnel Menuiserie</p>
                <p>Apprentissage à Lanvollon</p>
                <p>6 ans en entreprise · Guingamp</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} L'esprit Dubois Ébénisterie – Tous droits réservés
          </div>
        </div>
      </footer>

    </div>
  );
}
