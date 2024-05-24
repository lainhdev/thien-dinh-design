"use client";
import Image from "next/image";
import { useState } from "react";

export const HomeBannerMobile = () => {
  const [imgSelected, setImgSelected] = useState(0);
  return (
    <div className="block xl:hidden w-full max-w-screen-2xl mx-auto relative overflow-hidden">
      <div className="">
        <Image
          className={`${
            imgSelected === 0 ? "transition-opacity opacity-100" : "opacity-0"
          } absolute -z-10 duration-300`}
          src="/imgs/home-banner-1.jpg"
          width={1536}
          height={1024}
          alt="banner"
        />
        <Image
          className={`${
            imgSelected === 1 ? "transition-opacity opacity-100" : "opacity-0"
          } absolute -z-10 duration-300`}
          src="/imgs/home-banner-2.jpg"
          width={1536}
          height={1024}
          alt="banner"
        />
        <Image
          className={`${
            imgSelected === 2 ? "transition-opacity opacity-100" : "opacity-0"
          } absolute -z-10 duration-300`}
          src="/imgs/home-banner-3.jpg"
          width={1536}
          height={1024}
          alt="banner"
        />
      </div>
      <div className="text-white pt-10 pl-10 sm:pl-20 sm:pt-28 lg:pl-32 lg:pt-40 h-[240px] sm:h-[465px] lg:h-[670px]">
        <div
          className={`${
            imgSelected === 0
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="font-semibold text-sm lg:text-lg">Thiết kế độc bản</p>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Tư vấn thiết kế</h3>
        </div>
        <div
          className={`${
            imgSelected === 1
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="duration-300 font-semibold text-sm lg:text-lg">
            Quản lý dự án toàn diện
          </p>
          <h3 className="duration-300 text-2xl sm:text-4xl lg:text-5xl font-bold">Thi công trọn gói</h3>
        </div>
        <div
          className={`${
            imgSelected === 2
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="duration-300 font-semibold text-sm lg:text-lg">
            Cung cấp dịch vụ A - Z
          </p>
          <h3 className="duration-300 text-2xl sm:text-4xl lg:text-5xl font-bold">
            Chìa khóa trao tay
          </h3>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 w-full">
        <div className="flex flex-row w-full">
          <button
            onClick={() => setImgSelected(0)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-sm sm:text-base text-white font-semibold text-center w-1/3 pl-4 py-2 sm:pl-10 sm:py-3"
          >
            <span className="text-xs font-normal">01.</span>
            <span>Tư vấn</span>
            <span>thiết kế</span>
          </button>
          <button
            onClick={() => setImgSelected(1)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-sm sm:text-base text-white font-semibold border border-y-0 w-1/3 text-center pl-4 py-2 sm:pl-10 sm:py-3"
          >
            <span className="text-xs font-normal">02.</span>
            <span>Thi công</span>
            <span>trọn gói</span>
          </button>
          <button
            onClick={() => setImgSelected(2)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-sm sm:text-base text-white font-semibold w-1/3  text-center pl-4 py-2 sm:pl-10 sm:py-3"
          >
            <span className="text-xs font-normal">03.</span>
            <span>Chìa khóa</span>
            <span>trao tay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
