import { Swiper, SwiperSlide } from "swiper/react";
import slider from "../../assets/slider.jpg";
import slider2 from "../../assets/slider1.jpg";
import slider3 from "../../assets/slider2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <div className="mt-8 text-center space-y-4">
      <h1 className="text-6xl font-bold text-center">
        Springdale Public School
      </h1>
      <p>
        Welcome to Springdale Public School, where we nurture young minds for a
        brighter future
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="flex items-center justify-center bg-cover h-screen bg-no-repeat bg-opacity-50"
            style={{
              backgroundImage: `url(${slider})`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="text-white  space-y-2 ">
              <p className="text-6xl font-bold text-left">Annual Sports Day</p>
              <p className="text-xl font-bold text-left">
                {" "}
                Celebrating Excellence in Sports
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
                  See more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center justify-center bg-cover h-screen bg-no-repeat bg-opacity-50"
            style={{
              backgroundImage: `url(${slider2})`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="text-white  space-y-2 ">
              <p className="text-6xl font-bold text-left">Science Exhibition</p>
              <p className="text-xl font-bold text-left">
                {" "}
                Showcasing Student Innovations
              </p>
              <div className="flex gap-4">
              <button className="px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
                  See more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center justify-center bg-cover h-screen bg-no-repeat bg-opacity-50"
            style={{
              backgroundImage: `url(${slider3})`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="text-white  space-y-2 ">
              <p className="text-6xl font-bold text-left">Cultural Fest</p>
              <p className="text-xl font-bold text-left">
                {" "}
                Embracing Diversity and Creativity
              </p>
              <div className="flex gap-4">
              <button className="px-6 py-2 sm:px-4 rounded-md focus:bg-gradient-to-r focus:from-[#0035F5] focus:to-[#A600F5] hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF]  bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] ">
                  See more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
