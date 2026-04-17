import { useEffect, useState } from "react"
import { getCart } from "../utils/cart"
import { Link } from "react-router"
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(getCart())
  }, [])

  const updateQty = (id: number, value: number) => {
    let cart = getCart().map((item: any) =>
      item.id === id
        ? { ...item, quantity: value }
        : item
    )
    

    localStorage.setItem("cart", JSON.stringify(cart))
    setData(cart)

  }

  const remove = (id: number) => {
    let cart = getCart().filter((item: any) => item.id !== id)
    localStorage.setItem("cart", JSON.stringify(cart))
    setData(cart)
  }

  const subtotal = data.reduce(

    (acc, item) =>
      acc + (item.hasDiscount ? item.discountPrice : item.price) * item.quantity,
    0
  )

  return (
    <div className="max-w-[1200px] mx-auto mt-[200px] px-4">

      <p className="text-gray-400 mb-6">{t('home')} / {t('cart')}</p>

      {/* TABLE */}
      <div className="space-y-4">

        {data.map((item) => (
          
          <div
            key={item.id}
            className="flex max-sm:flex-col items-center justify-between bg-white dark:bg-gray-800 shadow p-4 rounded max-sm:gap-4"
          >

            {/* PRODUCT */}
            <div className="flex items-center gap-4 w-[300px] max-sm:w-full max-sm:justify-center">
              <img
                src={`https://store-api.softclub.tj/images/${item.image}`}
                className="w-[60px]"
              />
              <span>{item.productName}</span>
            </div>

            {/* PRICE */}
            <span className="w-[100px]">
              ${item.hasDiscount ? item.discountPrice : item.price}
            </span>

            {/* QUANTITY */}
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQty(item.id, Number(e.target.value))
              }
              className="w-[70px] border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-2 text-center"
            />

            {/* SUBTOTAL */}
            <span className="w-[100px] font-semibold">
              $
              {(item.hasDiscount ? item.discountPrice : item.price) *
                item.quantity}
            </span>

            {/* REMOVE */}
            <button
              onClick={() => remove(item.id)}
              className="text-red-500 text-xl"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between mt-6 max-sm:flex-col max-sm:gap-4">
        <Link to="/">
          <button className="border dark:border-gray-600 px-6 py-3 max-sm:w-full">{t('returnToShop')}</button>
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("cart")
            setData([])
          }}
          className="border border-red-500 text-red-500 px-6 py-3 max-sm:w-full"
        >
          {t('removeAll')}
        </button>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between mt-10 max-sm:flex-col max-sm:gap-10">

        {/* COUPON */}
        <div className="flex gap-3 max-sm:flex-col max-sm:w-full">
          <input className="border dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 h-[45px] outline-none max-sm:w-full" placeholder={t('couponCodePh')} />
          <button className="border border-red-500 px-6 h-[45px] text-red-500 max-sm:w-full">{t('applyBtn')}</button>
        </div>

        {/* TOTAL */}
        <div className="w-[300px] max-sm:w-full border dark:border-gray-600 dark:bg-gray-800 p-5 rounded space-y-3">

          <h2 className="text-lg font-semibold">{t('cartTotal')}</h2>

          <div className="flex justify-between">
            <span>{t('subtotalLabel')}</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>{t('shippingLabel')}</span>
            <span>{t('freeLabel')}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>{t('totalLabel')}</span>
            <span>${subtotal}</span>
          </div>

          <Link to={"/Checkout"}>
            <button className="w-full bg-red-500 text-white py-3 rounded">
              {t('processToCheckout')}
            </button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Cart