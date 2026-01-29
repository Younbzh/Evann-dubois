import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Gift, CheckCircle, Clock, Award, Star, Coffee, ShoppingBag, Heart, Sparkles } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-sky-50">
      {/* Wave pattern background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="waves" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <path d="M0 25 Q25 15, 50 25 T100 25" stroke="#1e3a8a" strokeWidth="2" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#waves)"/>
        </svg>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <Gift className="text-amber-100" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">{siteConfig.storeName}</h1>
                <p className="text-sm text-blue-700">{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-900 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('boutique')} className="text-gray-700 hover:text-blue-900 transition-colors">Boutique</button>
              <button onClick={() => scrollToSection('salon-the')} className="text-gray-700 hover:text-blue-900 transition-colors">Salon de thé</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-2 rounded-full hover:from-blue-800 hover:to-blue-600 transition-all shadow-lg">
                Nous trouver
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4">
              {['accueil', 'boutique', 'salon-the', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 capitalize">
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-2 rounded-full mb-6 shadow-lg border border-blue-200">
              <Sparkles className="text-blue-700" size={20} />
              <span className="text-sm font-bold text-blue-900">{siteConfig.hero.opening}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-blue-900">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-700 mb-3 font-bold">
              {siteConfig.hero.subtitle}
            </p>
            
            <div className="inline-block bg-amber-100 px-8 py-4 rounded-2xl mb-6 border-2 border-amber-300">
              <p className="text-lg text-amber-900 font-semibold">{siteConfig.hero.atmosphere}</p>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('boutique')} className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-800 hover:to-blue-600 transition-all shadow-xl">
                {siteConfig.hero.cta}
              </button>
              <button onClick={() => scrollToSection('salon-the')} className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-lg border-2 border-blue-300">
                Découvrir le salon de thé
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Le Concept 3 en 1 */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.concept.title}</h2>
            <p className="text-xl text-blue-700">{siteConfig.concept.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {siteConfig.concept.three_in_one.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all">
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
            <p className="text-xl font-bold">{siteConfig.concept.complementarity}</p>
          </div>
        </div>
      </section>

      {/* Mathieu */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-blue-900">{siteConfig.manager.name}</h2>
                <p className="text-blue-700 font-semibold">{siteConfig.manager.title}</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">{siteConfig.manager.bio}</p>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-700">
              <p className="text-blue-900 italic font-semibold">"{siteConfig.manager.motivation}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Boutique Cadeaux */}
      <section id="boutique" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Gift className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.gifts.title}</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">{siteConfig.gifts.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.gifts.categories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-blue-200">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produits Locaux */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <ShoppingBag className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.localProducts.title}</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">{siteConfig.localProducts.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.localProducts.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border-2 border-amber-200">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon de Thé */}
      <section id="salon-the" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Coffee className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-5xl font-bold mb-4">{siteConfig.teaRoom.title}</h2>
            <p className="text-xl text-blue-100">{siteConfig.teaRoom.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.teaRoom.offers.map((offer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-5xl mb-4 text-center">{offer.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{offer.title}</h3>
                <ul className="space-y-2">
                  {offer.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold">{siteConfig.teaRoom.atmosphere}</p>
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.whyUs.title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.whyUs.reasons.map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-blue-200">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Clock className="w-16 h-16 text-blue-900 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.hours.title}</h2>
            <p className="text-xl text-blue-700 font-semibold">{siteConfig.hours.note}</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
            <div className="space-y-3">
              {Object.values(siteConfig.hours.schedule).map((day, index) => (
                <div key={index} className="flex justify-between items-center pb-3 border-b border-blue-100">
                  <span className="font-bold text-blue-900">{day.day}</span>
                  <span className="text-gray-700 font-medium">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">{siteConfig.contact.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 shadow-xl text-white">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Adresse</h3>
              <p className="text-lg font-semibold mb-1">{siteConfig.contact.address.street}</p>
              <p className="text-lg font-semibold mb-4">{siteConfig.contact.address.city}</p>
              <p className="text-sm opacity-90">{siteConfig.location.access}</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-blue-100 rounded-2xl p-8 shadow-xl border-2 border-blue-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Suivez-nous</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-blue-900">Instagram</p>
                  <p className="text-gray-600">{siteConfig.contact.social.instagram}</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="font-bold text-blue-900">Facebook</p>
                  <p className="text-gray-600">{siteConfig.contact.social.facebook}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 border-t-2 border-amber-500">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-300">{siteConfig.storeName}</h3>
              <p className="text-blue-200 mb-2">{siteConfig.slogan}</p>
              <p className="text-blue-300 text-sm">{siteConfig.manager.name}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Contact</h3>
              <div className="space-y-2 text-blue-200">
                <p>📍 {siteConfig.contact.address.street}</p>
                <p>{siteConfig.contact.address.city}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-300">Horaires</h3>
              <div className="space-y-2 text-blue-200">
                <p>🕐 Ouvert 7j/7</p>
                <p className="text-sm">Lun: 14h30-19h</p>
                <p className="text-sm">Mar-Sam: 8h-12h30 & 14h30-19h</p>
                <p className="text-sm">Dim: 9h30-12h30</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-8 text-center">
            <p className="text-blue-300 text-sm">
              © 2026 {siteConfig.storeName} - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}