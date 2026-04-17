import type { FC } from "react"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router"
import { useTranslation } from "react-i18next"

const SignUp: FC = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] dark:bg-transparent px-4">
      
      {/* CARD */}
      <div className="w-full max-w-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col gap-4">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            {t('createAccountTitle')}
          </h1>
          <p className="text-sm text-gray-500 mt-1 mb-2">
            {t('enterDetailsSub')}
          </p>
        </div>

        {/* NAME */}
        <input
          type="text"
          placeholder={t('namePh')}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* EMAIL */}
        <input
          type="text"
          placeholder={t('emailOrPhonePh')}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />

        {/* PASSWORD */}
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder={t('passwordPh')}
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        {/* CREATE BUTTON */}
        <button className="w-full bg-red-500 text-white rounded-md py-3 font-medium hover:bg-red-600 transition">
          {t('createAccountBtn')}
        </button>

        {/* GOOGLE BUTTON */}
        <button className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md py-3 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-[20px]"
            alt="google"
          />
          {t('signUpGoogleBtn')}
        </button>
        



        {/* FOOTER */}
        <p className="text-sm text-gray-500 text-center">
          {t('alreadyHaveAccount')}{" "}
          <Link
            to="/login"
            className="text-black dark:text-gray-300 hover:underline"
          >
            {t('logInLink')}
          </Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp