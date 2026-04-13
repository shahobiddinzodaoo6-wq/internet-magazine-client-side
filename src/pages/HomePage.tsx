import { useEffect, useState } from "react"
import Swiperr from "../component/swiper"
import Category from '../assets/Category-SmartWatch.png'
import Category2 from '../assets/Category-CellPhone.png'
import Category3 from '../assets/Category-Computer.png'
import Category4 from '../assets/Category-Camera.png'
import Category5 from '../assets/Category-Headphone.png'
import category6 from '../assets/Category-Gamepad.png'
import { useTodo } from "../store/Todo"
import { Eye, Heart } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import Rating from '@mui/material/Rating';
import Kalomka from "../assets/Frame 694.png"
import TTime from '../assets/Frame 601.png'
import images from "../assets/Frame 686.png"
import images2 from "../assets/Frame 687.png"
import servise from "../assets/Services.png"
import servise2 from "../assets/Services (1).png"
import servise3 from "../assets/Services (2).png"
import { Link } from "react-router"
import { toggleWishlist, isInWishlist, getWishlist } from "../utils/wishlist"
import { addToCart } from "../utils/cart"

import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();
    const { data: products, getProducts } = useTodo()

    const [time, setTime] = useState({
        days: 3,
        hours: 23,
        minutes: 19,
        seconds: 56,
    })
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
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white"
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


    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => {
                let { days, hours, minutes, seconds } = prev

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    return prev
                }

                seconds--

                if (seconds < 0) {
                    seconds = 59
                    minutes--

                    if (minutes < 0) {
                        minutes = 59
                        hours--

                        if (hours < 0) {
                            hours = 23
                            days--
                        }
                    }
                }

                return { days, hours, minutes, seconds }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>

            <div className="max-w-[1350px]  mx-auto flex gap-4 mt-[100px] max-sm:flex-col max-sm:items-center">


                <div className="w-[250px] border-r pr-4 max-sm:w-full max-sm:border-none">
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex justify-between cursor-pointer hover:text-black">
                            {t('womansFashion')} <span>›</span>
                        </li>
                        <li className="flex justify-between cursor-pointer hover:text-black">
                            {t('mensFashion')} <span>›</span>
                        </li>
                        <li className="cursor-pointer hover:text-black">{t('electronics')}</li>
                        <li className="cursor-pointer hover:text-black">{t('homeLifestyle')}</li>
                        <li className="cursor-pointer hover:text-black">{t('medicine')}</li>
                        <li className="cursor-pointer hover:text-black">{t('sportsOutdoor')}</li>
                        <li className="cursor-pointer hover:text-black">{t('babyToys')}</li>
                        <li className="cursor-pointer hover:text-black">{t('groceriesPets')}</li>
                        <li className="cursor-pointer hover:text-black">{t('healthBeauty')}</li>
                    </ul>
                </div>


                <Swiperr />
            </div>


            <div className="max-w-[1350px] mx-auto mt-30 px-4">


                <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 mt-[50px]">

                    <div className="flex items-center gap-4">
                        <div className="w-[15px] h-[35px] bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">{t('todays')}</span>
                    </div>

                    <Link to={"/Checkout"}>
                        <div className="flex gap-3">
                            <button className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                                ←
                            </button>
                            <button className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                                →
                            </button>
                        </div>
                    </Link>
                </div>


                <div className="flex items-end justify-between mt-4 max-sm:flex-col max-sm:items-start max-sm:gap-4">

                    <div className="flex gap-[100px] max-sm:flex-col max-sm:items-center max-sm:gap-[30px]">
                        <h1 className="text-3xl font-bold mt-[20px]">{t('flashSales')}</h1>

                        <div className="flex items-center gap-6">


                            <div className="text-center">
                                <p className="text-xs text-gray-500">{t('days')}</p>
                                <h2 className="text-3xl font-bold">
                                    {String(time.days).padStart(2, "0")}
                                </h2>
                            </div>
                            <span className="text-red-500 text-2xl">:</span>
                            <div className="text-center">
                                <p className="text-xs text-gray-500">{t('hours')}</p>
                                <h2 className="text-3xl font-bold">
                                    {String(time.hours).padStart(2, "0")}
                                </h2>
                            </div>
                            <span className="text-red-500 text-2xl">:</span>
                            <div className="text-center">
                                <p className="text-xs text-gray-500">{t('minutes')}</p>
                                <h2 className="text-3xl font-bold">
                                    {String(time.minutes).padStart(2, "0")}
                                </h2>
                            </div>
                            <span className="text-red-500 text-2xl">:</span>
                            <div className="text-center">
                                <p className="text-xs text-gray-500">{t('seconds')}</p>
                                <h2 className="text-3xl font-bold">
                                    {String(time.seconds).padStart(2, "0")}
                                </h2>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="mt-[70px]">
                    <Swiper spaceBetween={30} slidesPerView="auto">
                        {products?.slice(0, 4).map((item: any) => (

                            <SwiperSlide key={item.id} style={{ width: "300px" }}>
                                <div className="w-[300px]">

                                    <div className="group relative overflow-hidden rounded-md bg-[#f5f5f5] px-4 py-4">

                                        {item.hasDiscount && (
                                            <span className="absolute left-3 top-3 z-20 rounded bg-red-500 px-3 py-1 text-xs text-white">
                                                {t('sale')}
                                            </span>
                                        )}

                                        {/* Icons */}
                                        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                                            {HeartBtn(item)}
                                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
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
                                            onChange={(event, newValue) => {
                                                console.log(newValue);
                                            }}
                                            defaultValue={2}
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Link to={"/ProductDetailsPage"}>
                    <div className="flex justify-center mt-[40px]">
                        <button className="w-[234px] h-[56px] rounded-[7px] bg-[#DB4444] text-[white] ">{t('viewAllProducts')}</button>
                    </div>
                </Link>
            </div>

            <div className="max-w-[1350px] mx-auto mt-26 px-4">


                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-[15px] h-[35px] bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">{t('categories')}</span>
                    </div>

                    <div className="flex gap-3">
                        <button className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                            ←
                        </button>
                        <button className="w-[40px] h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
                            →
                        </button>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mt-4 mb-8">
                    {t('browseByCategory')}
                </h1>
                <div className="flex gap-10">

                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 ">
                        <img src={Category2} className="w-[60px] mb-2" />
                        <p className="text-sm">{t('phones')}</p>
                    </div>

                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100">
                        <img src={Category3} className="w-[60px] mb-2" />
                        <p className="text-sm">{t('computers')}</p>
                    </div>

                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 ">
                        <img src={Category} className="w-[60px] mb-2" />
                        <p className="text-sm">{t('smartWatch')}</p>
                    </div>


                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center bg-red-500 text-white border-red-500 ">
                        <img src={Category4} className="w-[30px] mb-2" />
                        <p className="text-sm">{t('camera')}</p>
                    </div>


                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 ">
                        <img src={Category5} className="w-[60px] mb-2" />
                        <p className="text-sm">{t('headPhones')}</p>
                    </div>

                    <div className="w-[190px] h-[160px] border rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 cursor-pointer">
                        <img src={category6} className="w-[60px] mb-2" />
                        <p className="text-sm">{t('gaming')}</p>
                    </div>

                </div>


                <div className="border-b mt-10"></div>

            </div>

            <div className="max-w-[1350px] mx-auto mt-26 px-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-[15px] h-[35px] bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">{t('categories')}</span>
                    </div>

                    <button className="w-[159px] h-[56px] rounded-[7px] bg-[#DB4444] text-[white] mt-[20px]">
                        {t('viewAll')}
                    </button>
                </div>

                <h1 className="text-3xl font-bold mt-4 mb-8">
                    {t('thisMonth')}
                </h1>

                <div className="mt-[70px]">
                    <Swiper spaceBetween={30} slidesPerView="auto">
                        {products?.slice(4, 8).map((item: any) => (
                            <SwiperSlide key={item.id} style={{ width: "300px" }}>
                                <div className="w-[300px]">

                                    <div className="group relative overflow-hidden rounded-md bg-[#f5f5f5] px-4 py-4">

                                        {item.hasDiscount && (
                                            <span className="absolute left-3 top-3 z-20 rounded bg-red-500 px-3 py-1 text-xs text-white">
                                                {t('sale')}
                                            </span>
                                        )}

                                        {/* Icons */}
                                        <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                                            {HeartBtn(item)}
                                            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
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
                                            Add To Cart
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
                                            onChange={(event, newValue) => {
                                                console.log(newValue);
                                            }}
                                            defaultValue={2}
                                        />
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="flex justify-center mt-[60px] max-sm:px-4">
                <div className="w-[1170px] max-sm:w-full h-[500px] max-sm:h-auto max-sm:py-8 bg-[black] ">
                    <div className="flex justify-center gap-[30px] max-sm:flex-col max-sm:items-center">
                        <div className="mt-[50px] w-[400px] max-sm:w-full max-sm:px-4 max-sm:mt-0 max-sm:text-center">
                            <h1 className="text-[#00FF66]">{t('categories')}</h1>
                            <h1 className="text-[white] text-[45px] mt-[30px]">{t('enhanceMusic')}</h1>
                            <img src={TTime} className="mt-[20px]" alt="" />
                            <button className="w-[171px] h-[56px] rounded-[5px] bg-[#00FF66] text-[black] mt-[30px]"> {t('buyNow')}</button>
                        </div>
                        <img src={Kalomka} alt="" className="max-sm:w-full max-sm:px-4" />
                    </div>
                </div>
            </div>

            <div className="max-w-[1350px] mx-auto mt-26 px-4">


                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-[15px] h-[35px] bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">{t('ourProducts')}</span>
                    </div>

                </div>
                <h1 className="text-3xl font-bold mt-4 mb-8">
                    {t('exploreProducts')}
                </h1>
                <div className="mt-[70px] grid grid-cols-4 gap-[30px] max-sm:grid-cols-1 max-sm:grid-rows-6 max-sm:items-center">
                    {products?.slice(0, 8).map((item: any) => (
                        <div key={item.id} className="w-[300px]">

                            <div className="group relative overflow-hidden rounded-md bg-[#f5f5f5] px-4 py-4">

                                {item.hasDiscount && (
                                    <span className="absolute left-3 top-3 z-20 rounded bg-red-500 px-3 py-1 text-xs text-white">
                                        {t('sale')}
                                    </span>
                                )}

                                {/* Icons */}
                                <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
                                    {HeartBtn(item)}
                                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
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
                                    onChange={(event, newValue) => {
                                        console.log(newValue);
                                    }}
                                    defaultValue={2}
                                />
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <Link to={"/ProductDetailsPage"}>
                <div className="flex justify-center mt-[40px]">
                    <button className="w-[234px] h-[56px] rounded-[7px] bg-[#DB4444] text-[white] ">{t('viewAllProducts')}</button>
                </div>
            </Link>


            <div className="max-w-[1350px] mx-auto mt-26 px-4">

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">
                        <div className="w-[15px] h-[35px] bg-red-500 rounded"></div>
                        <span className="text-red-500 font-semibold">{t('featured')}</span>
                    </div>

                </div>
                <h1 className="text-3xl font-bold mt-4 mb-8">
                    {t('newArrival')}
                </h1>
                <div className="mt-[60px]">
                    <div className="flex justify-center gap-[40px] max-sm:flex-col max-sm:items-center">
                        <div className="w-[570px] h-[600px] bg-[black] bg-[url(./assets/ps5.png)] bg-cover bg-center bg-no-repeat  max-sm:w-full max-sm:max-w-[570px] max-sm:h-[400px]">
                            <div className="pl-[60px] pt-[390px] max-sm:pl-4 max-sm:pt-[250px]">
                                <h1 className="text-[white] text-[35px] ">{t('ps5')}</h1>
                                <p className="text-[white] mt-[20px] text-[18px]" style={{ whiteSpace: 'pre-line' }}>{t('ps5Desc')}</p>
                                <h1 className="text-[30px] text-[white]">{t('shopNow')}</h1>
                            </div>
                        </div>
                        <div className="max-sm:w-full max-sm:max-w-[570px]">
                            <div className="w-[570px] h-[284px] bg-[url(./assets/women.png)] bg-cover bg-center bg-no-repeat max-sm:w-full max-sm:h-[284px]">
                                <div className="pl-[60px] pt-[100px] max-sm:pl-4" >
                                    <h1 className="text-[white] text-[30px] ">{t('womensCollection')}</h1>
                                    <p className="text-[white] text-[18px] mt-[30px]" style={{ whiteSpace: 'pre-line' }}>{t('womensCollectionDesc')}</p>
                                    <h1 className="text-[25px] text-[white]">{t('shopNow')}</h1>
                                </div>

                            </div>
                            <div className=" flex gap-[40px] mt-[40px] max-sm:flex-col max-sm:items-center ">
                                <img src={images} alt="" />
                                <img src={images2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-[80px] mt-[100px] max-sm:flex-col max-sm:items-center max-sm:px-4">
                <div className="text-center">
                    <img src={servise} className="m-[60px_110px] max-sm:m-0 max-sm:mb-4 mx-auto" alt="" />
                    <h1 className="text-[25px]">{t('freeDeliveryTitle')}</h1>
                    <p>{t('freeDeliveryDesc')}</p>
                </div>
                <div className="text-center">
                    <img src={servise2} className="m-[60px_110px] max-sm:m-0 max-sm:mb-4 mx-auto" alt="" />
                    <h1 className="text-[25px]">{t('customerServiceTitle')}</h1>
                    <p>{t('customerServiceDesc')}</p>
                </div>
                <div className="text-center">
                    <img src={servise3} className="m-[60px_110px] max-sm:m-0 max-sm:mb-4 mx-auto" alt="" />
                    <h1 className="text-[25px]">{t('moneyBackTitle')}</h1>
                    <p>{t('moneyBackDesc')}</p>
                </div>
            </div>
        </>
    )
}

export default HomePage