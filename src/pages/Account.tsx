import { useTranslation } from 'react-i18next'

const Account = () => {
  
  const { t } = useTranslation()
  return (
    <>
      <div className="max-w-[1200px] mx-auto mt-[100px] px-4">

        {/* breadcrumb */}
        <p className="text-gray-400 text-sm mb-6">
          {t('home')} / <span className="text-black dark:text-white">{t('myAccount')}</span>
        </p>

        <div className="flex gap-[80px] max-sm:flex-col max-sm:gap-6">


          {/* LEFT MENU */}
          <div className="w-[250px] text-sm max-sm:w-full max-sm:flex max-sm:overflow-x-auto max-sm:gap-6">

            <div className="max-sm:min-w-[200px]">
              <h2 className="font-semibold mb-3">{t('manageMyAccount')}</h2>
              <ul className="space-y-2">
                <li className="text-red-500 cursor-pointer">{t('myProfile')}</li>
                <li className="text-gray-500 cursor-pointer">{t('addressBook')}</li>
                <li className="text-gray-500 cursor-pointer">{t('myPaymentOptions')}</li>
              </ul>
            </div>

            <div className="max-sm:min-w-[200px]">
              <h2 className="font-semibold mb-3 mt-6 max-sm:mt-0">{t('myOrders')}</h2>
              <ul className="space-y-2">
                <li className="text-gray-500 cursor-pointer">{t('myReturns')}</li>
                <li className="text-gray-500 cursor-pointer">{t('myCancellations')}</li>
              </ul>
            </div>

            <div className="max-sm:min-w-[200px]">
              <h2 className="font-semibold mt-6 max-sm:mt-0">{t('myWishlistMenu')}</h2>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="flex-1 bg-white dark:bg-gray-800 shadow-lg rounded p-[30px] max-sm:p-4">

            <h1 className="text-red-500 text-lg font-semibold mb-6">
              {t('profileTitle')}
            </h1>

            {/* FORM */}
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('firstNamePh')} />
              <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('lastNamePh')} />

              <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('emailAddressPh')} />
              <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('streetAddressPh')} />

            </div>

            {/* PASSWORD */}
            <h2 className="mt-8 mb-4 font-medium">{t('passwordChanges')}</h2>

            <div className="flex flex-col gap-4">

              <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('currentPasswordPh')} />

              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('newPasswordPh')} />
                <input className="border dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none" placeholder={t('confirmNewPasswordPh')} />
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-6 mt-8 items-center max-sm:flex-col max-sm:items-stretch">

              <button className="text-gray-500 hover:text-black dark:hover:text-white max-sm:text-center">
                {t('cancelBtn')}
              </button>

              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 w-auto max-sm:w-full">
                {t('saveChangesBtn')}
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Account













