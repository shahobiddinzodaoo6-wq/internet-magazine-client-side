import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import iphone from '../assets/iphone.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    title: "iPhone 14 Series",
    heading1: "Up to 10%",
    heading2: "off Voucher",
    img: iphone,
  },
  {
    title: "Samsung Galaxy",
    heading1: "Big Sale",
    heading2: "20% Off",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
  },
  {
    title: "Macbook",
    heading1: "New Arrival",
    heading2: "15% Off",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
]



const Swiperr = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-6 max-sm:w-[500px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="rounded-lg overflow-hidden h-[320px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black text-white flex items-center justify-between px-16 h-full">

              {/* LEFT */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl"></span>
                  <p className="text-sm">{slide.title}</p>
                </div>

                <h1 className="text-5xl font-semibold leading-tight mb-6">
                  {slide.heading1} <br /> {slide.heading2}
                </h1>

                <button className="flex items-center gap-2 border-b border-white pb-1 text-sm">
                  Shop Now →
                </button>
              </div>

              {/* RIGHT IMAGE */}
              <img
                src={slide.img}
                className="h-[260px] object-contain"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Swiperr