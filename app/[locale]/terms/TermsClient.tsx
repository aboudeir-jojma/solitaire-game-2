"use client";

import { useTranslation } from "react-i18next";

export default function TermsClient() {
  const { t } = useTranslation();

  return (
    <div className="relative py-20 px-6 bg-gradient-to-r from-teal-50 via-white to-teal-100 rounded-lg shadow-lg mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            {t('terms.title')}
          </h1>
          <p className="text-center text-gray-600">{t('terms.lastUpdated')}</p>
          <p className="text-gray-700 text-center">
            {t('terms.intro')}
          </p>

          {/* Section 1 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-800 mb-3">{t('terms.sections.section1.title')}</h2>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{t('terms.sections.section1.subsection1.title')}</h3>
            <p className="text-blue-700">
              {t('terms.sections.section1.subsection1.content')}
            </p>

            <h3 className="text-xl font-semibold text-blue-700 mt-4 mb-2">{t('terms.sections.section1.subsection2.title')}</h3>
            <p className="text-blue-700">{t('terms.sections.section1.subsection2.content')}</p>
            <ul className="list-disc pl-6 text-blue-700 space-y-2">
              {Object.entries(t('terms.sections.section1.subsection2.list') as unknown as Record<string, string>).map(([key, value]) => (
                <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong> {value}</li>
              ))}
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">{t('terms.sections.section2.title')}</h2>
            <p className="text-green-700">
              {t('terms.sections.section2.content1')}
            </p>
            <p className="text-green-700">
              {t('terms.sections.section2.content2')}
            </p>
            <p className="text-green-700">{t('terms.sections.section2.content3')}</p>
            <p className="text-green-700">
              {t('terms.sections.section2.content4')}
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-3">{t('terms.sections.section3.title')}</h2>
            <p className="text-yellow-700">
              {t('terms.sections.section3.content')}
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-pink-800 mb-3">{t('terms.sections.section4.title')}</h2>
            <p className="text-pink-700">
              {t('terms.sections.section4.content')}
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-3">{t('terms.sections.section5.title')}</h2>
            <p className="text-purple-700">
              {t('terms.sections.section5.content')}
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-3">{t('terms.sections.section6.title')}</h2>
            <p className="text-indigo-700">
              {t('terms.sections.section6.content')}
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-red-800 mb-3">{t('terms.sections.section7.title')}</h2>
            <p className="text-red-700">
              {t('terms.sections.section7.content')}
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-orange-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-orange-800 mb-3">{t('terms.sections.section8.title')}</h2>
            <p className="text-orange-700">
              {t('terms.sections.section8.content')}
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-teal-800 mb-3">{t('terms.sections.section9.title')}</h2>
            <h3 className="text-lg font-semibold text-teal-700">{t('terms.sections.section9.subsection1.title')}</h3>
            <p className="text-teal-700">
              {t('terms.sections.section9.subsection1.content')}
            </p>
            <h3 className="text-lg font-semibold text-teal-700 mt-3">{t('terms.sections.section9.subsection2.title')}</h3>
            <p className="text-teal-700">
              {t('terms.sections.section9.subsection2.content')}
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.sections.section10.title')}</h2>
            <p className="text-gray-700">
              {t('terms.sections.section10.content')}
            </p>
          </div>

          {/* Section 11 */}
          <div className="bg-green-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-900 mb-3">{t('terms.sections.section11.title')}</h2>
            <p className="text-green-800">{t('terms.sections.section11.content')}</p>
            <ul className="list-disc pl-6 text-green-800">
              {(t('terms.sections.section11.list') as unknown as string[]).map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}


