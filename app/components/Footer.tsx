"use client";

import Link from "next/link";
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";
import { Info, Shield, FileText, Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import { i18n } from '../i18n';

export default function Footer() {
  const { t } = useTranslation();
  const params = useParams();
  const activeLocale = typeof params?.locale === 'string' ? params.locale : 'en';

  const footerLinks = [
    { href: `/${activeLocale}/about`, label: t('common.nav.about'), icon: Info },
    { href: `/${activeLocale}/privacy`, label: t('common.nav.privacy'), icon: Shield },
    { href: `/${activeLocale}/terms`, label: t('common.nav.terms'), icon: FileText },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-green-900 text-white shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href={`/${activeLocale}`}>
              <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 hover:text-green-300 transition-colors"
                >
                  <Icon className="w-4 h-4 text-green-400 group-hover:text-green-300" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Social Networks */}
          <div className="flex gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-lg hover:bg-green-800 transition-colors"
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5 text-green-400 group-hover:text-green-300" />
                </a>
              );
            })}
          </div>
        </div>

       
      </div>
    </footer>
  );
}
