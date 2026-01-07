"use client";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const router = useRouter();
  const routes: Record<string, string> = {
    lgs: '/lgs',
    tyt: '/tyt',
    ayt: '/ayt',
    matematik: '/matematik',
    fizik: '/fizik',
    kimya: '/kimya',
    turkce: '/turkce',
    ingilizce: '/ingilizce',
  };
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    } else {
      const to = routes[page] || '/';
      router.push(to);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              MatÖzel
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Kaliteli eğitim hizmetiyle öğrencilerimizi geleceğe hazırlıyoruz.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Sınavlar */}
          <div>
            <h4 className="text-white mb-4">Sınavlar</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('lgs')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  LGS Hazırlık
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('tyt')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  TYT Hazırlık
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('ayt')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  AYT Hazırlık
                </button>
              </li>
            </ul>
          </div>

          {/* Dersler */}
          <div>
            <h4 className="text-white mb-4">Dersler</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('matematik')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  Matematik
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('fizik')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  Fizik
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('kimya')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  Kimya
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('turkce')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  Türkçe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('ingilizce')}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  İngilizce
                </button>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@matozel.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; 2025 MatÖzel. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
