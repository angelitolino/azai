import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ChevronRight, UserCog, Users, Building2, Award, Brain, Target, Focus, Rocket } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    consent: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed w-full z-50 bg-[#030303]/90 backdrop-blur-md border-b border-[#18cb96]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[#18cb96]/20 blur-lg rounded-full group-hover:bg-[#18cb96]/30 transition-all duration-300"></div>
              <img 
                src="https://file.garden/Z-4Z9J-zNAsQ35Ow/a64be4fb-d42e-448e-bafd-997bac0b2844.png" 
                alt="azai Logo" 
                className="h-10 relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problem" className="text-white/70 hover:text-[#18cb96] transition-colors duration-300 relative group">
                Problem
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#18cb96] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#solution" className="text-white/70 hover:text-[#18cb96] transition-colors duration-300 relative group">
                Lösung
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#18cb96] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                className="relative group px-6 py-2.5 overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#18cb96] to-[#15b585] rounded-full transition-all duration-300 ease-out group-hover:w-full"></div>
                <div className="absolute inset-0 border border-[#18cb96] rounded-full"></div>
                <span className="relative text-[#18cb96] group-hover:text-white transition-colors duration-300">
                  Jetzt Beratung vereinbaren
                </span>
              </a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-white/70 hover:text-[#18cb96] transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#030303]/95 border-t border-[#18cb96]/10 backdrop-blur-md">
            <div className="px-4 pt-2 pb-3 space-y-3">
              <a 
                href="#problem" 
                className="block px-3 py-2 text-white/70 hover:text-[#18cb96] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Problem
              </a>
              <a 
                href="#solution" 
                className="block px-3 py-2 text-white/70 hover:text-[#18cb96] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Lösung
              </a>
              <a 
                href="#contact" 
                className="block px-6 py-3 text-center text-[#18cb96] border border-[#18cb96] rounded-full hover:bg-[#18cb96] hover:text-white transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Jetzt Beratung vereinbaren
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroGeometric
        badge="azai Marketing AI"
        title1="Mehr Kunden."
        title2="Mehr Gewinn."
      />

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#373643] gradient-border pb-4">
              Jaja, Marketing ist wichtig...
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 italic">
              Aber genauso sind auch die anderen 99 Dinge auf deiner täglichen To-Do Liste wichtig.
            </p>
            <div className="pt-12 pb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#18cb96] bg-clip-text text-transparent bg-gradient-to-r from-[#18cb96] to-[#373643]">
                Also wie holst du das Maximum aus deinem Marketing raus?
              </h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <UserCog className="w-12 h-12 text-[#18cb96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Einfach selber machen?</h3>
              <p className="text-gray-600">Wenn du wenig zu tun hast, gar kein Problem. Wenn du aber dein Geschäft am Laufen lassen möchtest, ist das nicht machbar.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <Users className="w-12 h-12 text-[#18cb96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Mitarbeiter einstellen</h3>
              <p className="text-gray-600">Ja, ein Mitarbeiter kann das übernehmen... sofern du bereit bist Geld, Mühe und Zeit zu investieren, den passenden dafür zu finden. Und wenn du abhängig von einer einzelnen Person sein möchtest.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
              <Building2 className="w-12 h-12 text-[#18cb96] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Marketing Agentur beauftragen</h3>
              <p className="text-gray-600">Du hast keine tausende von Euros übrig für ihre Marketing Strategie? Für irgendwelche "Funnels" und "Ads"? Dann gib dich zufrieden von einem Marketing-Praktikanten betreut zu werden.</p>
            </div>
          </div>
        </div>
        <div className="wave-divider wave-divider-gray absolute bottom-0 left-0 right-0"></div>
      </section>

      {/* Agitate Section */}
      <section className="py-20 px-4 bg-[#030303] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#18cb96]/[0.05] via-transparent to-[#373643]/[0.05] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,203,150,0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group mb-8"
              >
                <div className="absolute inset-0 bg-[#18cb96]/20 blur-lg rounded-full group-hover:bg-[#18cb96]/30 transition-all duration-300" />
                <img 
                  src="https://file.garden/Z-4Z9J-zNAsQ35Ow/a64be4fb-d42e-448e-bafd-997bac0b2844.png" 
                  alt="azai Logo" 
                  className="h-16 relative z-10"
                />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-12"
              >
                Wenn du dich nicht darum kümmerst, wirst du langfristig verlieren
              </motion.h2>
            </div>

            <div className="grid gap-6">
              {[
                {
                  text: "Deine Wettbewerber ziehen an dir vorbei",
                  delay: 0.3
                },
                {
                  text: "Verschwendetes Marketing-Budget und verpasste Chancen",
                  delay: 0.4
                },
                {
                  text: "Frustrierte Mitarbeiter und stagnierendes Wachstum",
                  delay: 0.5
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/[0.05] transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <ChevronRight className="text-[#18cb96] mt-1 flex-shrink-0" />
                    <span className="text-white/80 text-lg">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#18cb96]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#373643]/10 rounded-full blur-3xl" />
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative">
        <div className="diagonal-box py-20 px-4">
          <div className="diagonal-content max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              "OK... aber was unterscheidet euch denn von anderen?"
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <Award className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Garantie</h3>
                <p className="text-white/80">Wir gewinnen nur, wenn es für dich klappt. Win-Win. <br/><br/>Wir teilen das Risiko und das ist die beste Basis für eine gute Partnerschaft.</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <Target className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Ergebnis</h3>
                <p className="text-white/80">Wir arbeiten immer nur ergebnisorientiert. Das was wir versprechen wird auch eingelöst.</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <Brain className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">KI-Gestützte Automation</h3>
                <p className="text-white/80">Wir sind Spezialisten im Automatisierungsbereich und nehmen gerne die KI zur Hilfe, wenn es sinnvoll oder nötig ist.</p>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                <Focus className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-white">Spezialisierung</h3>
                <p className="text-white/80">Leute die alles können... können gar nichts. <br/><br/>Sich zu spezialisieren ist wichtig und funktioniert, deswegen arbeiten wir nur Industrien, in denen wir uns auskennen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#373643] gradient-border pb-4">
              Meld dich und wir beraten dich kostenlos für:
            </h2>
            <p className="text-2xl md:text-3xl font-semibold text-[#18cb96]">
              Mehr Kunden. Mehr Gewinn.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform mt-12">
              <Rocket className="w-16 h-16 text-[#18cb96] mx-auto mb-4 floating" />
              <h3 className="text-2xl font-semibold mb-4">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-gray-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg mt-12">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18cb96] focus:border-[#18cb96] transition-shadow"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18cb96] focus:border-[#18cb96] transition-shadow"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Unternehmen</label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18cb96] focus:border-[#18cb96] transition-shadow"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18cb96] focus:border-[#18cb96] transition-shadow"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Welche Fragen hast du?</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18cb96] focus:border-[#18cb96] transition-shadow"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 h-4 w-4 text-[#18cb96] focus:ring-[#18cb96] border-gray-300 rounded"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#18cb96] text-white px-6 py-3 rounded-full hover:bg-[#15b585] transition-all transform hover:scale-105 hover:shadow-lg font-semibold"
                >
                  Beratungsgespräch vereinbaren
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#373643] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="https://file.garden/Z-4Z9J-zNAsQ35Ow/905e0aa3-3ac1-46d2-aeb0-ebd15eb1947f.png" alt="azai Logo" className="h-8 mb-4" />
              <p className="text-gray-400">Mehr Kunden. Mehr Gewinn.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center hover:text-[#18cb96] transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:contact@azai.ai">contact@azai.ai</a>
                </li>
                <li className="flex items-center hover:text-[#18cb96] transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+491234567890">+49 123 456 7890</a>
                </li>
                <li className="flex items-center hover:text-[#18cb96] transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Berlin, Deutschland</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#18cb96] transition-colors transform hover:scale-110"><Facebook /></a>
                <a href="#" className="hover:text-[#18cb96] transition-colors transform hover:scale-110"><Twitter /></a>
                <a href="#" className="hover:text-[#18cb96] transition-colors transform hover:scale-110"><Linkedin /></a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} azai. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 mb-4 md:mb-0">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-[#18cb96] text-white px-6 py-2 rounded-full hover:bg-[#15b585] transition-all transform hover:scale-105"
              >
                Akzeptieren
              </button>
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition-all transform hover:scale-105"
              >
                Ablehnen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;