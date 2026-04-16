import Rating from '@mui/material/Rating';
import { Eye, Heart } from 'lucide-react';
import { useEffect, useState } from 'react'
import { useTodo } from '../store/Todo';
import { Link } from 'react-router';
import { toggleWishlist, getWishlist } from "../utils/wishlist"
import { useTranslation } from "react-i18next";
import { addToCart } from '../utils/cart';

const ProductDetailsPage = () => {
  const { t } = useTranslation();
  const { data: products, getProducts } = useTodo()

  useEffect(() => {
    getProducts()
  }, [])


  const [wishlistIds, setWishlistIds] = useState<number[]>([])
  

  useEffect(() => {
    getProducts()
    const data = getWishlist()
    setWishlistIds(data.map((item: any) => item.id))
  }, [])

  const handleWishlist = (item: any) => {
    toggleWishlist(item)
    const data = getWishlist()
    setWishlistIds(data.map((i: any) => i.id))
  }

  const HeartBtn = (item: any) => (
    <button
      onClick={() => handleWishlist(item)}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-700 dark:text-white"
    >
      <Heart
        size={18}
        className={
          wishlistIds.includes(item.id)
            ? "text-red-500 fill-red-500"
            : ""
        }
      />
    </button>)


  return (
    <>
      <div className='flex justify-center gap-[50px] mt-[100px] max-sm:flex-col max-sm:items-center px-4'>
        <div className="w-[290px] max-sm:w-full bg-[#f7f7f7] dark:bg-gray-800 p-[16px] text-[14px] text-gray-700 dark:text-gray-300 rounded">


          <div className="border-b border-gray-200 dark:border-gray-700 pb-[14px] mb-[14px]">
            <div className="flex justify-between items-center mb-[10px]">
              <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                {t('categoryLabel')}
              </h3>

            </div>

            <div className="flex flex-col gap-[8px]">
              <span className="text-red-500 cursor-pointer">
                {t('allProducts')}
              </span>

              <span className="cursor-pointer hover:text-black dark:hover:text-white transition">
                {t('electronics')}
              </span>

              <span className="cursor-pointer hover:text-black dark:hover:text-white transition">
                {t('homeLifestyle')}
              </span>

              <span className="cursor-pointer hover:text-black dark:hover:text-white transition">
                {t('medicine')}
              </span>

              <span className="cursor-pointer hover:text-black dark:hover:text-white transition">
                {t('sportsOutdoor')}
              </span>

              <span className="text-red-500 cursor-pointer mt-[6px]">
                {t('seeAll')}
              </span>
            </div>
          </div>

          {/* BRANDS */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-[14px]">
            <div className="flex justify-between items-center mb-[10px]">
              <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                {t('brandsLabel')}
              </h3>
              {/* <FiChevronDown className="text-[16px] text-gray-500" /> */}
            </div>

            <div className="flex flex-col gap-[10px]">

              {["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-[10px] cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="w-[16px] h-[16px] border border-gray-300 rounded-sm cursor-pointer accent-red-500"
                  />

                  <span className="group-hover:text-black dark:group-hover:text-white transition">
                    {item}
                  </span>
                </label>
              ))}

              <span className="text-red-500 cursor-pointer mt-[6px]">
                {t('seeAll')}
              </span>
            </div>
          </div>
          <div className="w-[260px] max-sm:w-full bg-[#f7f7f7] dark:bg-gray-800 p-[16px] text-[14px] text-gray-700 dark:text-gray-300 rounded">

            {/* FEATURES */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-[14px] mb-[14px]">
              <div className="flex justify-between items-center mb-[10px]">
                <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                  {t('featuresLabel')}
                </h3>
                {/* <FiChevronDown className="text-[16px] text-gray-500" /> */}
              </div>

              <div className="flex flex-col gap-[10px]">
                {[t('featureMetallic'), t('featurePlastic'), t('featureRam'), t('featureSuper'), t('featureMemory')].map((item) => (
                  <label key={item} className="flex items-center gap-[10px] cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px] border border-gray-300 rounded-sm accent-red-500"
                    />
                    <span className="group-hover:text-black dark:group-hover:text-white transition">
                      {item}
                    </span>
                  </label>
                ))}

                <span className="text-red-500 cursor-pointer mt-[6px]">
                  {t('seeAll')}
                </span>
              </div>
            </div>

            {/* PRICE RANGE */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-[16px] mb-[14px]">
              <div className="flex justify-between items-center mb-[14px]">
                <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                  {t('priceRangeLabel')}
                </h3>
                {/* <FiChevronDown className="text-[16px] text-gray-500" /> */}
              </div>

              {/* SLIDER */}
              <div className="relative mb-[16px]">
                <div className="h-[4px] bg-red-200 rounded-full relative">
                  <div className="absolute left-[20%] right-[20%] h-[4px] bg-red-500 rounded-full" />

                  {/* circles */}
                  <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white border-2 border-red-500 rounded-full cursor-pointer" />
                  <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-white border-2 border-red-500 rounded-full cursor-pointer" />
                </div>
              </div>

              {/* INPUTS */}
              <div className="flex gap-[10px] mb-[12px]">
                <div className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-[10px] py-[8px] text-gray-500">
                  {t('minLabel')}
                  <div className="text-gray-700 dark:text-gray-300">0</div>
                </div>

                <div className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-[10px] py-[8px] text-gray-500">
                  {t('maxLabel')}
                  <div className="text-gray-700 dark:text-gray-300">999999</div>
                </div>
              </div>

              {/* BUTTON */}
              <button className="w-full border border-red-500 text-red-500 py-[8px] rounded-md hover:bg-red-500 hover:text-white transition">
                {t('applyBtn')}
              </button>
            </div>

            {/* CONDITION */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-[14px] mb-[14px]">
              <div className="flex justify-between items-center mb-[10px]">
                <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                  {t('conditionLabel')}
                </h3>
                {/* <FiChevronDown className="text-[16px] text-gray-500" /> */}
              </div>

              <div className="flex flex-col gap-[10px]">
                {[t('anyLabel'), t('refurbishedLabel'), t('brandNewLabel'), t('oldItemsLabel')].map((item, i) => (
                  <label key={item} className="flex items-center gap-[10px] cursor-pointer group">
                    <input
                      type="radio"
                      name="condition"
                      defaultChecked={i === 0}
                      className="w-[16px] h-[16px] accent-red-500"
                    />
                    <span className="group-hover:text-black dark:group-hover:text-white transition">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* RATINGS */}
            <div>
              <div className="flex justify-between items-center mb-[10px]">
                <h3 className="text-[15px] font-semibold text-gray-800 dark:text-gray-200">
                  {t('ratingsLabel')}
                </h3>
                {/* <FiChevronDown className="text-[16px] text-gray-500" /> */}
              </div>

              <div className="flex flex-col gap-[10px]">
                {[5, 4, 3, 2].map((stars) => (
                  <label key={stars} className="flex items-center gap-[10px] cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-[16px] h-[16px] accent-red-500"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>







        </div>
        <div className="mt-[70px] grid grid-cols-4 max-sm:grid-cols-1 grid-rows-6 gap-[30px] max-sm:w-full">
          {products?.map((item: any) => (
            <div key={item.id}>

              <div className="group relative overflow-hidden rounded-md bg-[#f5f5f5] dark:bg-gray-800 px-4 py-4">

                {item.hasDiscount && (
                  <span className="absolute left-3 top-3 z-20 rounded bg-red-500 px-3 py-1 text-xs text-white">
                    {t('sale')}
                  </span>
                )}

                {/* Icons */}
                <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                  {HeartBtn(item)}
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-gray-700 dark:text-white">
                    <Link to={`/Info/${item.id}`}>
                      <Eye size={18} />
                    </Link>
                  </button>
                </div>

                {/* Image */}
                <div className="flex h-[200px] items-center justify-center">
                  <img
                    src={`https://store-api.softclub.tj/images/${item.image}`}
                    alt={item.productName}
                    className="max-h-[160px] object-contain transition group-hover:scale-105"
                  />
                </div>

                <button
                  onClick={() => {
                    addToCart(item)
                  }}
                  className="absolute bottom-0 left-0 w-full translate-y-full bg-black py-3 text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {t('addToCart')}
                </button>
              </div>

              <div className="pt-4">
                <h3 className="text-base font-medium">
                  {item.productName}
                </h3>

                <div className="mt-2 flex items-center gap-3">
                  <span className="text-red-500 font-semibold">
                    ${item.hasDiscount ? item.discountPrice : item.price}
                  </span>

                  {item.hasDiscount && (
                    <span className="line-through text-gray-400">
                      ${item.price}
                    </span>
                  )}
                </div>

                <Rating
                  name="simple-uncontrolled"
                  onChange={(_event, newValue) => {
                    console.log(newValue);
                  }}
                  defaultValue={3}
                />
              </div>

            </div>
          ))}
        </div>
      </div >
    </>
  )
}

export default ProductDetailsPage