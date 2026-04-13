import React from 'react'
import Logo from '../assets/Group 1116606595.png'
import serch from '../assets/Component 2.png'
import IconSend from '../assets/icon-send.png'
import social from '../assets/Frame 741.png'
import { Link, Outlet } from 'react-router'
import { useEffect, useState } from "react"
import { getWishlist } from "../utils/wishlist"
import { IoCartOutline } from "react-icons/io5";
import { getCart } from "../utils/cart"
import { User, LogOut, Globe, Menu, X, Home, Phone, Info, UserPlus, Heart } from "lucide-react"
import { useTranslation } from "react-i18next";
import { Dropdown } from "antd"
import type { MenuProps } from "antd"
import logo from '../assets/Logo.png'
import { ModeToggle } from '../components/ui/ModeToggle'
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";

const Layout = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const [langOpen, setLangOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const activeLang = i18n.language || 'en';

    const languages = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'tj', name: 'Тоҷикӣ', flag: '🇹🇯' }
    ];

    // Item Counts for Header
    const [count, setCount] = useState<number>(0)
    const [cartCount, setCartCount] = useState<number>(0)

    useEffect(() => {
        const update = () => {
            const wishlist = getWishlist()
            const cart = getCart()
            setCount(wishlist.length)
            setCartCount(cart.length)
        }
        update()
        window.addEventListener("storage", update)
        return () => window.removeEventListener("storage", update)
    }, [])

    const items: MenuProps["items"] = [
        {
            key: "1",
            label: (
                <Link to="/Account" className="flex items-center gap-2 text-white">
                    <User size={16} />
                    {t('account')}
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link to={"/LogIn"}>
                    <div className="flex items-center gap-2 text-red-400">
                        <LogOut size={16} />
                        {t('logout')}
                    </div>
                </Link>
            ),
        },
    ]

    const navLinks = [
        { to: '/', icon: <Home size={18} />, label: t('home') },
        { to: '/Contact', icon: <Phone size={18} />, label: t('contact') },
        { to: '/About', icon: <Info size={18} />, label: t('about') },
        { to: '/SignUp', icon: <UserPlus size={18} />, label: t('signup') },
        { to: '/Wishlist', icon: <Heart size={18} />, label: t('wishlist') },
        { to: '/Account', icon: <User size={18} />, label: t('account') },
    ]

    return (
        <>
            <header className="w-full border-b bg-white dark:bg-[#0b0b22] text-black dark:text-white fixed top-0 z-50 shadow-sm">

                {/* ===== MAIN HEADER BAR ===== */}
                <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 px-4">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <img className='dark:hidden h-[36px] w-auto' src={Logo} alt="Logo" />
                        <img className='hidden dark:block brightness-0 invert h-[36px] w-auto' src={Logo} alt="Logo White" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
                        <Link to="/"><span className="hover:text-red-500 dark:hover:text-red-400 transition">{t('home')}</span></Link>
                        <Link to="/Contact"><span className="hover:text-red-500 dark:hover:text-red-400 transition">{t('contact')}</span></Link>
                        <Link to="/About"><span className="hover:text-red-500 dark:hover:text-red-400 transition">{t('about')}</span></Link>
                        <Link to="/SignUp"><span className="hover:text-red-500 dark:hover:text-red-400 transition">{t('signup')}</span></Link>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2">

                        {/* Desktop Search */}
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                className="bg-transparent outline-none text-sm w-[200px] dark:text-white"
                            />
                            <img src={serch} alt="" />
                        </div>

                        <ModeToggle />

                        {/* Language switcher */}
                        <div className="relative">
                            <button
                                className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                onClick={() => setLangOpen(!langOpen)}
                                title="Change Language"
                            >
                                <Globe className={`w-[22px] h-[22px] transition-transform duration-300 ${langOpen ? 'rotate-180 text-red-500' : ''}`} />
                            </button>

                            {langOpen && (
                                <>
                                    <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)}></div>
                                    <div className="absolute right-0 top-[120%] z-50 w-44 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden">
                                        <div className="p-2 flex flex-col gap-1">
                                            {languages.map((lang) => (
                                                <button
                                                    key={lang.code}
                                                    onClick={() => { changeLanguage(lang.code); setLangOpen(false); }}
                                                    className={`flex items-center w-full select-none gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 outline-none
                                                        ${activeLang === lang.code
                                                            ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-semibold'
                                                            : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
                                                        }`}
                                                >
                                                    <span className="text-xl">{lang.flag}</span>
                                                    <span>{lang.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Wishlist — desktop only */}
                        <Link to="/Wishlist" className="hidden md:block">
                            <div className="relative p-1">
                                <IoIosHeartEmpty className='w-[26px] h-[26px]' />
                                {count > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                        {count}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* Cart */}
                        <Link to="/Cart">
                            <div className="relative p-1">
                                <IoCartOutline className='w-[26px] h-[26px]' />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </Link>

                        {/* User dropdown — desktop only */}
                        <Dropdown
                            menu={{ items }}
                            placement="bottomRight"
                            overlayClassName="!p-0"
                            dropdownRender={(menu) => (
                                <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 shadow-xl min-w-[180px]">
                                    {menu}
                                </div>
                            )}
                        >
                            <CiUser className='w-[26px] h-[26px] hidden md:block cursor-pointer' />
                        </Dropdown>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen
                                ? <X className="w-[22px] h-[22px]" />
                                : <Menu className="w-[22px] h-[22px]" />
                            }
                        </button>
                    </div>
                </div>

                {/* ===== MOBILE DRAWER ===== */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="bg-white dark:bg-[#0d0d2b] border-t border-gray-100 dark:border-gray-800 px-4 pb-5 pt-4">

                        {/* Mobile search */}
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl mb-4">
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                className="bg-transparent outline-none text-sm flex-1 dark:text-white"
                            />
                            <img src={serch} alt="" className="w-4 h-4 opacity-60" />
                        </div>

                        {/* Nav links */}
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200 font-medium text-[15px]"
                                >
                                    <span className="text-red-500 dark:text-red-400">{item.icon}</span>
                                    {item.label}
                                </Link>
                            ))}

                            <div className="border-t border-gray-100 dark:border-gray-800 my-2"></div>

                            {/* Logout */}
                            <Link
                                to="/LogIn"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200 font-medium text-[15px]"
                            >
                                <LogOut size={18} />
                                {t('logout')}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="pt-[61px]"><Outlet /></main>

            <footer className="bg-black text-white mt-20">
                <div className="max-w-[1200px] mx-auto px-4 py-12 flex justify-between gap-8 max-sm:flex-col max-sm:items-center">

                    <div className="max-sm:text-center">
                        <h2 className="text-xl font-semibold mb-4">{t('exclusive')}</h2>
                        <p className="mb-3">{t('subscribe')}</p>
                        <p className="text-gray-400 text-sm mb-4">
                            {t('getDiscount')}
                        </p>

                        <div className="flex items-center border border-gray-600 rounded px-3 py-2">
                            <input
                                type="text"
                                placeholder={t('enterEmail')}
                                className="bg-transparent outline-none text-sm w-[160px]"
                            />
                            <img src={IconSend} alt="" />
                        </div>
                    </div>

                    <div className="max-sm:text-center">
                        <h2 className="font-semibold mb-4">{t('support')}</h2>
                        <p className="text-gray-400 text-sm mb-2">
                            {t('address1')}
                            <br /> {t('address2')}
                        </p>
                        <p className="text-gray-400 text-sm mb-2">
                            {t('email')}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {t('phone')}
                        </p>
                    </div>

                    <div className="flex gap-10 max-sm:flex-col max-sm:items-center">

                        <div className="max-sm:text-center">
                            <h2 className="font-semibold mb-4">{t('account')}</h2>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer">{t('myAccount')}</li>
                                <li className="hover:text-white cursor-pointer">{t('cart')}</li>
                                <li className="hover:text-white cursor-pointer">{t('wishlist')}</li>
                                <li className="hover:text-white cursor-pointer">{t('shop')}</li>
                            </ul>
                        </div>

                        <div className="max-sm:text-center">
                            <h2 className="font-semibold mb-4">{t('quickLink')}</h2>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer">{t('privacyPolicy')}</li>
                                <li className="hover:text-white cursor-pointer">{t('termsOfUse')}</li>
                                <li className="hover:text-white cursor-pointer">{t('faq')}</li>
                                <li className="hover:text-white cursor-pointer">{t('contact')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-sm:text-center">
                        <h2 className="font-semibold mb-4">{t('social')}</h2>
                        <img src={social} className="mt-[20px]" alt="" />
                    </div>

                </div>

                <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
                    {t('copyright')}
                </div>
            </footer>
        </>
    )
}

export default Layout