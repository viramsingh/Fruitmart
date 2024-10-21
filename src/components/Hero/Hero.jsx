import React from "react";
import HeroImage from "../../assets/heroimage/heroImg.jpg";
import HeroImage1 from "../../assets/heroimage/heroimg2.jpg";
import HeroImag3 from "../../assets/heroimage/heroimg3.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <section
            className="relative h-screen bg-center bg-cover"
            style={{
              backgroundImage: `url(${HeroImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">
                Fresh Fruits Delivered to Your Doorstep
              </h1>
              <p className="mb-8 text-xl md:text-2xl font-poppins">
                Explore Our Wide Range of Fresh, Organic, and Seasonal Fruits
              </p>
              <div>
                <Link
                  to="/shop"
                  className="px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-primary hover:bg-secondary"
                >
                  Shop Now
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 ml-4 text-lg font-semibold transition border border-white rounded-lg hover:bg-white hover:text-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <section
            style={{
              backgroundImage: `url(${HeroImage1})`,
            }}
            className="relative h-screen bg-gray-800 bg-center bg-cover"
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">
                Organic and Fresh Fruits
              </h1>
              <p className="mb-8 text-xl md:text-2xl font-poppins">
                The best selection of seasonal and fresh fruits, delivered fast.
              </p>
              <div>
                <Link
                  to="/shop"
                  className="px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-primary hover:bg-secondary"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <section
            style={{
              backgroundImage: `url(${HeroImag3})`,
            }}
            className="relative h-screen bg-gray-800 bg-center bg-cover"
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">
                Get 20% Off on Your First Order
              </h1>
              <p className="mb-8 text-xl md:text-2xl font-poppins">
                Grab fresh fruits now and get a special discount on your first
                order!
              </p>
              <div>
                <Link
                  to="/shop"
                  className="px-6 py-3 text-lg font-semibold text-white transition rounded-lg bg-primary hover:bg-secondary"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
