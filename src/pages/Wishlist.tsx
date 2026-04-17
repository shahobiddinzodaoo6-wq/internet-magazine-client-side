import { useEffect, useState } from "react"
import { getWishlist, toggleWishlist } from "../utils/wishlist"
import Rating from "@mui/material/Rating"
import { useTranslation } from "react-i18next"

const Wishlist = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(getWishlist())
  }, [])

  const remove = (item: any) => {
    toggleWishlist(item)
    setData(getWishlist())
  }
  
  

  return (
    <div className="max-w-[1200px] mx-auto mt-[100px] px-4">
      <h1 className="text-2xl font-bold mb-6">{t('wishlistTitle')}</h1>

      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6">
        {data.map((item) => (
          <div key={item.id} className="border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4">

            <div className="h-[150px] flex items-center justify-center">
              <img
                src={`https://store-api.softclub.tj/images/${item.image}`}
                className="max-h-[140px] object-contain"
              />
            </div>

            <h3 className="mt-3">{item.productName}</h3>

            <p className="text-red-500 mt-1">
              ${item.hasDiscount ? item.discountPrice : item.price}
            </p>
            <Rating
              name="simple-uncontrolled"
              onChange={(_event, newValue) => {
                console.log(newValue);
              }}
              defaultValue={3}
            />

            <button
              onClick={() => remove(item)}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded"
            >
              {t('removeBtn')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist