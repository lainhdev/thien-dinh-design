"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export const HomeBanner = () => {
  const [imgSelected, setImgSelected] = useState(0);
  return (
    <div className="hidden xl:block w-full max-w-screen-2xl mx-auto relative overflow-hidden">
      <div>
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
      <div className="h-[800px] text-white pl-40 pt-60">
        <div
          className={`${
            imgSelected === 0
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="font-semibold text-xl">Thiết kế độc bản</p>
          <h3 className="text-7xl font-bold">Tư vấn thiết kế</h3>
        </div>
        <div
          className={`${
            imgSelected === 1
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="duration-300 font-semibold text-xl">
            Quản lý dự án toàn diện
          </p>
          <h3 className="duration-300 text-7xl font-bold">Thi công trọn gói</h3>
        </div>
        <div
          className={`${
            imgSelected === 2
              ? "transition-all opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          } duration-300 absolute`}
        >
          <p className="duration-300 font-semibold text-xl">
            Cung cấp dịch vụ A - Z
          </p>
          <h3 className="duration-300 text-7xl font-bold">
            Chìa khóa trao tay
          </h3>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 right-0">
        <div className="flex flex-row">
          <button
            onClick={() => setImgSelected(0)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-white py-10 pr-32 text-lg pl-10 font-semibold"
          >
            <span className="">01.</span>
            <span>Tư vấn</span>
            <span>thiết kế</span>
          </button>
          <button
            onClick={() => setImgSelected(1)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-white py-10 pr-32 text-lg pl-10 font-semibold border border-y-0"
          >
            <span className="">02.</span>
            <span>Thi công</span>
            <span>trọn gói</span>
          </button>
          <button
            onClick={() => setImgSelected(2)}
            className="flex flex-col bg-white bg-opacity-25 hover:bg-opacity-20 text-white py-10 pr-32 text-lg pl-10 font-semibold"
          >
            <span className="">03.</span>
            <span>Chìa khóa</span>
            <span>trao tay</span>
          </button>
        </div>
      </div>
    </div>
  );
};
