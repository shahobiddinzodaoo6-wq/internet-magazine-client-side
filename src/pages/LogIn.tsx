import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

const LogIn = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")

    const form = event.currentTarget

    let obj = {
      userName: (form.userName as HTMLInputElement).value,
      password: (form.password as HTMLInputElement).value,
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/Account/login`,
        obj
      )

      if (data.statusCode === 200) {
        navigate("/")
      } else {
        setError(t('incorrectLoginErr'))
      }
    } catch (error) {
      setError(t('loginFailedErr'))
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] dark:bg-transparent px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col gap-4"
      >
        <div>
          <h1 className="text-3xl font-semibold">
            {t('loginTitle')}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {t('enterDetailsSub')}
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}

        <input
          name="userName"
          type="text"
          placeholder={t('emailOrPhonePh')}
          className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 outline-none focus:ring-1 focus:ring-red-400"
        />

        <div className="relative">
          <input
            name="password"
            type={show ? "text" : "password"}
            placeholder={t('passwordPh')}
            className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md p-3 pr-10 outline-none focus:ring-1 focus:ring-red-400"
          />

          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <p className="text-center text-sm text-red-500 cursor-pointer hover:underline">
          {t('forgetPasswordLink')}
        </p>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition"
        >
          {t('loginBtn')}
        </button>
      </form>
    </div>
  )
}

export default LogIn