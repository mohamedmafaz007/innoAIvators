import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

// Import local logos
import clientLogo1 from '../cilents/eae1499f-5f52-4311-8a8d-5fe1923bdb0f.jpeg';
import clientLogo2 from '../cilents/glossix logo.jpg';
import clientLogo3 from '../cilents/Screenshot 2025-10-22 140518.png';

const logos = [
  clientLogo1,
  clientLogo2,
  clientLogo3,
];

const duplicatedLogos = [...logos, ...logos];

export function ClientCarousel() {
  return (
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Our Clients and Partnership</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          className="mySwiper"
        >
          {duplicatedLogos.map((logo, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '200px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-24 max-w-full object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
