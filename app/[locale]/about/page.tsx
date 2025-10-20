"use client";

import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div className="relative py-20 px-6 bg-gradient-to-r from-yellow-100 via-yellow-50 to-white rounded-lg shadow-lg mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            {t('title')}
          </h1>

          {/* Section 1 1*/}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">{t('sections.section1.title')}</h3>
            <p className="text-blue-700">
              {t('sections.section1.content')}
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-3">{t('sections.section2.title')}</h3>
            <p className="text-yellow-700">
              {t('sections.section2.content')}
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-800 mb-3">{t('sections.section3.title')}</h3>
            <p className="text-yellow-700">
              {t('sections.section3.content')}
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-pink-800 mb-3">{t('sections.section4.title')}</h3>
            <p className="text-pink-700">
              {t('sections.section4.content')}
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-800 mb-3">{t('sections.section5.title')}</h3>
            <p className="text-purple-700">
              {t('sections.section5.content')}
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{t('sections.section6.title')}</h3>
            <p className="text-indigo-700">
              {t('sections.section6.content')}
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-orange-800 mb-3">{t('sections.section7.title')}</h3>
            <p className="text-orange-700">
              {t('sections.section7.content')}
            </p>
            <p className="text-orange-700">
              {t('sections.section7.content2')}
            </p>
          </div>

          {/* Section 8 */}
          <div className="bg-teal-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-teal-800 mb-3">{t('sections.section8.title')}</h3>
            <p className="text-teal-700">
              {t('sections.section8.content')}
            </p>
            <p className="text-teal-700">
              {t('sections.section8.content2')}
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-800 mb-3">{t('sections.section9.title')}</h3>
            <p className="text-red-700">
              {t('sections.section9.content')}
            </p>
          </div>

          {/* Section 10 */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{t('sections.section10.title')}</h3>
            <p className="text-gray-700">{t('sections.section10.content')}</p>
          </div>

          {/* Section 11 */}
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-yellow-900 mb-3">{t('sections.section11.title')}</h3>
            <p className="text-yellow-800">
              {t('sections.section11.content')}
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-900 mb-3">{t('sections.section12.title')}</h3>
            <p className="text-green-800">
              {t('sections.section12.content')}
            </p>
          </div>

          {/* Section 13 */}
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-900 mb-3">{t('sections.section13.title')}</h3>
            <p className="text-blue-800">
              {t('sections.section13.content')}
            </p>
          </div>

          {/* Section 14 */}
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-900 mb-3">{t('sections.section14.title')}</h3>
            <p className="text-purple-800">
              {t('sections.section14.content')}
            </p>
          </div>

          {/* Section 15 */}
          <div className="bg-pink-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-pink-900 mb-3">{t('sections.section15.title')}</h3>

            <div className="text-pink-800 space-y-4">
              <p>
                <strong>{t('sections.section15.questions.q1.question')}</strong><br />
                {t('sections.section15.questions.q1.answer')}
              </p>

              <p>
                <strong>{t('sections.section15.questions.q2.question')}</strong><br />
                {t('sections.section15.questions.q2.answer')}
              </p>

              <p>
                <strong>{t('sections.section15.questions.q3.question')}</strong><br />
                {t('sections.section15.questions.q3.answer')}
              </p>

              <p>
                <strong>{t('sections.section15.questions.q4.question')}</strong><br />
                {t('sections.section15.questions.q4.answer')}
              </p>

              <p>
                <strong>{t('sections.section15.questions.q5.question')}</strong><br />
                {t('sections.section15.questions.q5.answer')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
// generateStaticParams is defined in app/[locale]/layout.tsx