import React from 'react'
import image from "../assets/Side Image.png"
import Category from '../assets/Services (3).png'
import Category2 from '../assets/Services (4).png'
import Category3 from '../assets/Services (5).png'
import Category4 from '../assets/Services (7).png'
import images from '../assets/Frame 874.png'
import images2 from '../assets/Frame 875.png'
import images3 from '../assets/Frame 876.png'
import social from '../assets/Frame 877.png'
import servise from "../assets/Services.png"
import servise2 from "../assets/Services (1).png"
import servise3 from "../assets/Services (2).png"
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* TOP */}
      <div className='flex justify-center gap-[70px] mt-[100px] max-sm:flex-col max-sm:items-center max-sm:gap-[30px] max-sm:px-4'>
        <div className='w-[550px] max-sm:w-full'>
          <h1 className='text-[45px] max-sm:text-[28px]'>{t('ourStoryTitle')}</h1>
          <p className='mt-[50px] max-sm:mt-[20px]'>{t('ourStoryP1')}</p>
          <p className='mt-[30px]'>{t('ourStoryP2')}</p>
        </div>
        <img className='w-[570px] h-[415px] max-sm:w-full max-sm:h-auto' src={image} alt="" />
      </div>

      {/* CARDS */}
      <div className="flex justify-center mt-[100px] gap-10 max-sm:flex-col max-sm:items-center">

        <div className="w-[270px] h-[230px] border dark:border-gray-700 rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src={Category2} className="w-[70px] mb-2" />
          <p className="text-sm">{t('phones')}</p>
        </div>

        <div className="w-[270px] h-[230px] border rounded-[5px] flex flex-col items-center justify-center bg-red-500 text-white border-red-500 ">
          <img src={Category4} className="w-[70px] mb-2" />
          <p className="text-sm">{t('camera')}</p>
        </div>

        <div className="w-[270px] h-[230px] border dark:border-gray-700 rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src={Category3} className="w-[70px] mb-2" />
          <p className="text-sm">{t('computers')}</p>
        </div>

        <div className="w-[270px] h-[230px] border dark:border-gray-700 rounded-[5px] flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800">
          <img src={Category} className="w-[70px] mb-2" />
          <p className="text-sm">{t('smartWatch')}</p>
        </div>

      </div>

      {/* TEAM */}
      <div className='flex justify-center gap-[40px] mt-[150px] max-sm:flex-col max-sm:items-center'>
        <div>
          <img src={images} alt="" />
          <h1 className='text-[20px] mt-[20px]'>{t('tomCruise')}</h1>
          <p className='mt-[10px]'>{t('founderRole')}</p>
          <img src={social} className='mt-[10px]' alt="" />
        </div>
        <div>
          <img src={images2} alt="" />
          <h1 className='text-[20px] mt-[20px]'>{t('tomCruise')}</h1>
          <p className='mt-[10px]'>{t('emmaWatson')}</p>
          <img src={social} className='mt-[10px]' alt="" />
        </div>
        <div>
          <img src={images3} alt="" />
          <h1 className='text-[20px] mt-[20px]'>{t('tomCruise')}</h1>
          <p className='mt-[10px]'>{t('willSmith')}</p>
          <img src={social} className='mt-[10px]' alt="" />
        </div>
      </div>

      {/* SERVICES */}
      <div className="flex justify-center gap-[80px] mt-[100px] mb-[100px] max-sm:flex-col max-sm:items-center">
        <div className="text-center">
          <img src={servise} className="m-[60px_110px] max-sm:m-0" alt="" />
          <h1 className="text-[25px]">{t('freeDeliveryTitle')}</h1>
          <p>{t('freeDeliveryDesc')}</p>
        </div>
        <div className="text-center">
          <img src={servise2} className="m-[60px_110px] max-sm:m-0" alt="" />
          <h1 className="text-[25px]">{t('customerServiceTitle')}</h1>
          <p>{t('customerServiceDesc')}</p>
        </div>
        <div className="text-center">
          <img src={servise3} className="m-[60px_110px] max-sm:m-0" alt="" />
          <h1 className="text-[25px]">{t('moneyBackTitle')}</h1>
          <p>{t('moneyBackDesc')}</p>
        </div>
      </div>
    </>
  )
}

export default About