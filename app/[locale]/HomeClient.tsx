"use client";

import Link from "next/link";
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";

export default function HomeClient() {
  const { t } = useTranslation("global");
  const params = useParams();
  const activeLocale = typeof params?.locale === 'string' ? params.locale : 'en';

  return (
    <main className="flex flex-col min-h-screen w-full bg-gray-100">
      <div className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg shadow-lg">
        <section className="flex-1 flex justify-center mt-6">
          <iframe
            src="/game/index.html"
            className="w-full max-w-5xl h-[85vh] border-0 shadow-lg rounded-lg"
          ></iframe>
        </section>
      </div>

      <section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            {t("home.title") || "Popular Games"}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "uno", image: "/uno.jpg", link: "https://www.tmdisplay.com/en/game/Uno" },
              { id: "spider", image: "/spider.jpg", link: "https://www.tmdisplay.com/en/game/spider-solitaire" },
              { id: "ludo-king", image: "/ludo-king.png", link: "https://www.tmdisplay.com/en/game/ludo-king" },
            ].map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={game.image}
                    alt={t(`games.${game.id}.title`)}
                    className="w-full h-full rounded-full border-4 border-green-500 shadow-md object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {t(`games.${game.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`games.${game.id}.description`)}
                </p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-700 shadow-md transition-all duration-300"
                >
                  {t("common.playNow")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg shadow-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
            {t("home.section2.title")}
          </h2>
          <p
            className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: t("home.section2.description") }}
          ></p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="/spider.jpg"
                alt="Spider Solitaire"
                className="w-80 h-80 object-cover rounded-xl shadow-lg border border-gray-200"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {t("home.section2.whyTitle")}
              </h3>
              <ul className="space-y-4 text-gray-700 leading-relaxed">
                {Object.values(
                  t("home.section2.whyList", { returnObjects: true })
                ).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="mt-8 flex ">
              <Link
                href={`/${activeLocale}`}
               className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t("home.section2.playNow")}
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg shadow-lg overflow-hidden">
  {/* Cercles décoratifs foncés */}
  <div className="absolute top-10 left-10 w-40 h-40 bg-green-700/40 rounded-full blur-3xl z-0"></div>
  <div className="absolute bottom-20 right-20 w-56 h-56 bg-emerald-600/50 rounded-full blur-3xl z-0"></div>
  <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-800/30 rounded-full blur-2xl z-0"></div>
  <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-green-900/40 rounded-full blur-2xl z-0"></div>

  {/* Nouveaux cercles */}
  <div className="absolute top-5 right-1/4 w-36 h-36 bg-emerald-700/40 rounded-full blur-2xl z-0"></div>
  <div className="absolute bottom-5 left-1/5 w-28 h-28 bg-green-600/50 rounded-full blur-2xl z-0"></div>

  {/* Image centrée */}
  <div className="max-w-5xl mx-auto relative z-10 flex justify-center items-center">
    <img
      src="/spider&solitaire.jpg"
      alt="Spider Solitaire"
      className="w-full max-w-2xl rounded-lg shadow-2xl"
    />
  </div>
</section>





    </main>
  );
}
