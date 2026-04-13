import { useEffect, useState } from "react"
import { getCart } from "../utils/cart"
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    setCart(getCart())
  }, [])


  const firstTwo = cart.slice(0, 2)


  const total = cart.reduce(
    (acc, item) =>
      acc +
      (item.hasDiscount ? item.discountPrice : item.price) *
      item.quantity,
    0
  )

  return (
    <div className="max-w-[1200px] mx-auto mb-[250px] mt-[200px] px-4">

      <p className="text-gray-400 text-sm mb-6">
        {t('productViewCartCheckout')}
      </p>

      <div className="flex gap-[300px] max-sm:flex-col max-sm:gap-[50px]">

        {/* LEFT */}
        <div className="w-[500px] max-sm:w-full bg-white dark:bg-gray-800 shadow-lg rounded p-[30px] max-sm:p-[15px]">

          <h1 className="text-[28px] font-semibold mb-[20px]">
            {t('billingDetails')}
          </h1>

          <div className="flex flex-col gap-[15px]">
            {[
              t('firstNamePh'),
              t('lastNamePh'),
              t('streetAddressPh'),
              t('apartmentPh'),
              t('townCityPh'),
              t('phoneNumberPh'),
              t('emailAddressPh'),
            ].map((item, i) => (
              <input
                key={i}
                placeholder={item}
                className="border border-gray-300 dark:border-gray-600 p-3 rounded bg-[#f5f5f5] dark:bg-gray-700 dark:text-white outline-none"
              />
            ))}

            <label className="flex items-center gap-2 mt-2"> <input type="checkbox" defaultChecked className="accent-red-500" /> <span className="text-sm text-gray-600 dark:text-gray-300"> {t('saveInfoText')} </span> </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[400px] max-sm:w-full">

          {/* PRODUCTS (ТОЛЬКО 2) */}
          <div className="space-y-5">

            {firstTwo.map((item) => (
              <div key={item.id} className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                  <img
                    src={`https://store-api.softclub.tj/images/${item.image}`}
                    className="w-[40px]"
                  />
                  <span>{item.productName}</span>
                </div>

                <span>
                  $
                  {(item.hasDiscount
                    ? item.discountPrice
                    : item.price) * item.quantity}
                </span>
              </div>
            ))}

          </div>

          {/* TOTAL */}
          <div className="mt-6 border-t dark:border-gray-700 pt-4 space-y-3 text-sm">

            <div className="flex justify-between">
              <span>{t('subtotalLabel')}</span>
              <span>${total}</span>
            </div>

            <div className="flex justify-between">
              <span>{t('shippingLabel')}</span>
              <span>{t('freeLabel')}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg">
              <span>{t('totalLabel')}</span>
              <span>${total}</span>
            </div>

          </div>

          {/* PAYMENT */}
          <div className="mt-6 space-y-3">

            <label className="flex items-center gap-2">
              <input type="radio" name="pay" />
              {t('bankLabel')}
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="pay" defaultChecked />
              {t('cashOnDelivery')}
            </label>

          </div>

          {/* BUTTON */}
          <button className="mt-6 w-[200px] max-sm:w-full bg-red-500 text-white py-3 rounded">
            {t('placeOrder')}
          </button>

        </div>

      </div>
    </div>
  )
}

export default Checkout