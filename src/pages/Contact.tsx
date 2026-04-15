import type { FC } from "react"
import { Phone, Mail } from "lucide-react"
import { useTranslation } from "react-i18next";

const Contact: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#f5f5f5] dark:bg-transparent min-h-screen">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto pt-50 px-4">

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 mb-6">
          {t('homeContact')}
        </p>

        {/* MAIN */}
        <div className="flex gap-8 max-md:flex-col">

          {/* LEFT CARD */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 w-[300px] max-md:w-full">

            {/* CALL */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
                <Phone size={18} />
              </div>

              <div>
                <h3 className="font-semibold">{t('callToUs')}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t('callAvailableText')}
                </p>
                <p className="text-sm mt-1">
                  {t('callPhoneText')}
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

            {/* WRITE */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
                <Mail size={18} />
              </div>

              <div>
                <h3 className="font-semibold">{t('writeToUs')}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {t('writeFillText')}
                </p>
                <p className="text-sm mt-1">
                  {t('writeEmailText1')}
                </p>
                <p className="text-sm">
                  {t('writeEmailText2')}
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex-1">

            {/* TOP INPUTS */}
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">

              <input
                type="text"
                placeholder={t('namePh')}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                placeholder={t('emailPh')}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                placeholder={t('phonePh')}
                className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />

            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder={t('yourMessagePh')}
              className="w-full h-[150px] border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm mt-4 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            {/* BUTTON */}
            <div className="flex justify-end mt-4">
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
                {t('sendMessageBtn')}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact