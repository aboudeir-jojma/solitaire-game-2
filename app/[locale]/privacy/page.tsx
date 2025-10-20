"use client";

import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
  const { t } = useTranslation('privacy');

  return (
    <div className="relative py-20 px-6 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg shadow-lg mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            {t('title')}
          </h1>
          <p className="text-center text-gray-600">{t('lastUpdated')}</p>

          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">
              {t('sections.section1.title')}
            </h2>
            <p className="text-blue-700">
              {t('sections.section1.content1')}
            </p>
            <p className="text-blue-700">
              {t('sections.section1.content2')}
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              {t('sections.section2.title')}
            </h2>
            <h3 className="text-xl font-semibold text-green-700 mb-2">{t('sections.section2.subsection1.title')}</h3>
            <p className="text-green-700">
              {t('sections.section2.subsection1.content')}
            </p>
            <h3 className="text-xl font-semibold text-green-700 mt-4 mb-2">{t('sections.section2.subsection2.title')}</h3>
            <p className="text-green-700">{t('sections.section2.subsection2.content')}</p>
            <ul className="list-disc pl-6 text-green-700 space-y-2">
              {Object.entries(t('sections.section2.subsection2.list') as unknown as Record<string, string>).map(([key, value]) => (
                <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong> {value}</li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-3">
              {t('sections.section3.title')}
            </h2>
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">{t('sections.section3.subsection1.title')}</h3>
            <h4 className="font-semibold text-yellow-700">{t('sections.section3.subsection1.personalData.title')}</h4>
            <p className="text-yellow-700">
              {t('sections.section3.subsection1.personalData.content')}
            </p>
            <ul className="list-disc pl-6 text-yellow-700 space-y-1">
              {(t('sections.section3.subsection1.personalData.list') as unknown as string[]).map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-800 mb-3">
              {t('sections.section4.title')}
            </h2>
            <p className="text-pink-700">
              {t('sections.section4.content')}
            </p>
            <ul className="list-disc pl-6 text-pink-700">
              {(t('sections.section4.list') as unknown as string[]).map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ⚠️ Tu peux continuer avec d'autres sections (Tracking, Retention, Transfer, Security, Children's Privacy, Links, Changes, etc.)
              en suivant le même modèle de bloc coloré */}
        </div>
      </div>
    </div>
  );
}
// generateStaticParams is defined in app/[locale]/layout.tsx
