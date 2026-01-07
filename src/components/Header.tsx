"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu as MobileMenuIcon, X, ChevronDown } from "lucide-react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import Link from "next/link";

interface HeaderProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const exams = [
    {
      id: "lgs",
      name: "LGS",
      lessons: ["turkce", "matematik", "fen", "ingilizce", "sosyal"],
    },
    {
      id: "tyt",
      name: "TYT",
      lessons: [
        "turkce",
        "matematik",
        "fizik",
        "kimya",
        "biyoloji",
        "edebiyat",
        "sosyal",
      ],
    },
    {
      id: "ayt",
      name: "AYT",
      lessons: [
        "matematik",
        "fizik",
        "kimya",
        "biyoloji",
        "edebiyat",
        "sosyal",
      ],
    },
  ];

  const lessonNames: Record<string, string> = {
    turkce: "Türkçe",
    matematik: "Matematik",
    fen: "Fen Bilimleri",
    fizik: "Fizik",
    kimya: "Kimya",
    biyoloji: "Biyoloji",
    ingilizce: "İngilizce",
    edebiyat: "Edebiyat",
    sosyal: "Sosyal Bilgiler",
  };

  const routes: Record<string, string> = {
    home: "/",
    lgs: "/lgs",
    tyt: "/tyt",
    ayt: "/ayt",
    matematik: "/matematik",
    fizik: "/fizik",
    kimya: "/kimya",
    biyoloji: "/biyoloji",
    fen: "/fen",
    ingilizce: "/ingilizce",
    edebiyat: "/edebiyat",
    sosyal: "/sosyal",
    turkce: "/turkce",
  };

  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    } else {
      const to = routes[page] || "/";
      router.push(to);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity font-bold z-50"
        >
          MatÖzel
        </button>

        {/* Desktop Menu - Aceternity UI */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Menu setActive={setActive}>
            <Link
              href="/"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Ana Sayfa
            </Link>

            {exams.map((exam) => (
              <MenuItem
                key={exam.id}
                setActive={setActive}
                active={active}
                item={exam.name}
              >
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href={`/${exam.id}`}>Genel Bilgi</HoveredLink>
                  <div className="flex flex-col space-y-2">
                    {exam.lessons.map((lesson) => (
                      <HoveredLink key={lesson} href={`/${lesson}`}>
                        {lessonNames[lesson]}
                      </HoveredLink>
                    ))}
                  </div>
                </div>
              </MenuItem>
            ))}

            <Link
              href="#hizmetler"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Hizmetler
            </Link>

            <Link
              href="#paketler"
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              Paketler
            </Link>
          </Menu>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all z-50 font-medium text-white">
          İletişime Geç
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white z-50"
          aria-label="Mobil menüyü aç/kapat"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MobileMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-800 p-4 shadow-xl">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleNavigation("home")}
              className="text-left text-sm text-slate-300 hover:text-white transition-colors"
            >
              Ana Sayfa
            </button>

            {exams.map((exam) => (
              <div key={exam.id} className="border-l-2 border-slate-800 pl-4">
                <button
                  onClick={() => handleNavigation(exam.id)}
                  className="text-left text-sm text-blue-400 hover:text-blue-300 transition-colors mb-2 font-medium"
                >
                  {exam.name}
                </button>
                <div className="flex flex-wrap gap-2 ml-4">
                  {exam.lessons.map((lesson) => (
                    <button
                      key={lesson}
                      onClick={() => handleNavigation(lesson)}
                      className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 hover:bg-slate-700"
                    >
                      {lessonNames[lesson]}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <a href="#hizmetler" className="text-left text-sm text-slate-300">
              Hizmetler
            </a>
            <a href="#paketler" className="text-left text-sm text-slate-300">
              Paketler
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm text-white font-medium">
              İletişime Geç
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
