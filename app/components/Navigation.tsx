"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { Car, Menu, X, Info, Shield, FileText, Mail, Globe } from "lucide-react";
import { i18n } from '../i18n';

export default function Navigation() {
  const { t, i18n: i18nInstance } = useTranslation();
  const params = useParams();
  const activeLocale = typeof params?.locale === 'string' ? params.locale : i18n.language || 'en';
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    closeMenu();
  };

  const menuItems = [
    { href: `/${activeLocale}/about`, label: t('common.nav.about'), icon: Info },
    { href: `/${activeLocale}/privacy`, label: t('common.nav.privacy'), icon: Shield },
    { href: `/${activeLocale}/terms`, label: t('common.nav.terms'), icon: FileText },
    { href: `/${activeLocale}`, label: t('common.nav.home'), icon: Car },
  ];

  const languageItems = [
    { code: "en", label: t('common.nav.english'), icon: Globe },
    { code: "fr", label: t('common.nav.french'), icon: Globe },
  ];

  const navOpacity = scrollY > 50 ? 'bg-teal-700/90 backdrop-blur-md' : 'bg-teal-700';

  return (
    <nav className={`text-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navOpacity} border-b border-blue-800/60` }>
    <div className="max-w-7xl mx-auto px-4 py-2">

        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 ml-18">
            <Link href={`/${activeLocale}`} onClick={closeMenu} className="flex items-center">
              <img src="/logo.png" alt="Logo"  className="h-12 sm:h-13 md:h-14  w-auto max-w-[300px] object-contain" />
            </Link>
          </div>

          {/* Hamburger button (always visible) */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-30"
            onClick={closeMenu}
          />
        )}

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div
            className="absolute top-full right-0 bg-black/95 border border-blue-700 shadow-2xl z-40 w-56 rounded-lg mt-2 mr-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-3">
              <div className="flex flex-col">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className={`group flex items-center gap-4 px-5 py-3 transition-all duration-200 text-left border-l-4 ${isActive ? 'bg-blue-800 text-white border-blue-300' : 'border-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-white hover:border-blue-300 hover:translate-x-1'}`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0 text-white group-hover:text-blue-100 transition-colors" />
                      <span className="font-medium text-white group-hover:text-blue-50">{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Language Switcher Section */}
              <div className="border-t border-blue-700 mt-3 pt-3">
                <div className="px-5 mb-2">
                  <span className="text-xs font-semibold text-blue-100 uppercase tracking-wider">
                    {t('common.nav.language')}
                  </span>
                </div>
                <div className="flex flex-col">
                  {languageItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = i18n.language === item.code;
                    return (
                      <button
                        key={item.code}
                        onClick={() => changeLanguage(item.code)}
                        className={`group flex items-center gap-4 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-white transition-all duration-200 text-left border-l-4 ${
                          isActive
                            ? 'border-blue-300 bg-blue-800 text-white'
                            : 'border-transparent hover:border-blue-300 hover:translate-x-1'
                        }`}
                      >
                        <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${
                          isActive
                            ? 'text-white'
                            : 'text-white group-hover:text-blue-100'
                        }`} />
                        <span className={`font-medium ${
                          isActive
                            ? 'text-white'
                            : 'text-white group-hover:text-blue-50'
                        }`}>
                          {item.label}
                        </span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-blue-300 rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          </div>
        )}
      </div>
    </nav>
  );
}
