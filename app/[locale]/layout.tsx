import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import I18nProvider from "../components/I18nProvider";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solitaire Games",
  description: "Solitaire Games – Play online for free",
  keywords: ["spider solitaire", "solitaire games","solitaire klondike", "online card games", "herder cripter","solitaire 247 games","Solitaire Klondikeclassic","Solitaire Klondike2 suits","Solitaire Klondike4 suits","Solitaire Klondikeeasy","Solitaire Klondikehard","solitaire games free","free online card games","free solitaire games","play solitaire online","best solitaire games","solitaire card games","solitaire spider","Solitaire Klondikefree","Solitaire Klondikedownload","Solitaire Klondikeapp","Solitaire Klondikegame","Solitaire Klondikeonline free","Solitaire Klondikeclassic free","Solitaire Klondike2 suits free","Solitaire Klondike4 suits free","Solitaire Klondikeeasy free","Solitaire Klondikehard free","247 spider solitaire","Solitaire Klondike247","solitaire 247","solitaire 247 free","solitaire 247 games free","free solitaire 247","free Solitaire Klondike247"],
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }];
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <I18nProvider locale={locale}>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
