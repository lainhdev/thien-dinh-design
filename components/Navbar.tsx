"use client";

import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpenDrawer, setisOpenDrawer] = useState(false);
  return (
    <header className="px-4 lg:px-6 h-28 flex items-center justify-between max-w-screen-2xl mx-auto w-full">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo-full.svg" width={180} height={40} alt="logo" />
      </Link>
      <div className="hidden lg:flex gap-x-5 font-semibold text-xs xl:text-base">
        <Link href="/">TRANG CHỦ</Link>
        <Link href="/thietke3d">CÔNG TRÌNH THIẾT KẾ</Link>
        <Link href="/cong-trinh-thuc-te">CÔNG TRÌNH THỰC TẾ</Link>
        <Link href="/dich-vu-bao-gia">DỊCH VỤ & BÁO GIÁ</Link>
        <Link href="/tin-tuc">TIN TỨC</Link>
        <Link href="/about-us">VỀ CHÚNG TÔI</Link>
      </div>
      <Button
        className="lg:hidden"
        size="icon"
        variant="outline"
        onClick={() => setisOpenDrawer(true)}
      >
        <Menu />
      </Button>
      <div
        onClick={() => setisOpenDrawer(false)}
        className={`fixed left-0 top-0 h-screen w-screen bg-black ease-in-out duration-300 ${
          isOpenDrawer ? "opacity-50 z-20" : "opacity-0 hidden"
        }`}
      ></div>
      <div
        className={`fixed right-0 top-0 h-screen w-screen max-w-xs bg-white z-30 ease-in-out duration-300 ${
          isOpenDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row-reverse justify-between mt-3 mx-3 items-center">
          <Button
            className=""
            size="icon"
            variant="ghost"
            onClick={() => setisOpenDrawer(false)}
          >
            <XIcon />
          </Button>
        </div>
        <Link className="flex items-center justify-center" href="/">
          <Image src="/logo-full.svg" width={180} height={40} alt="logo" />
        </Link>
        <div className="flex flex-col ml-5 gap-y-2 mt-10 font-semibold">
          <Link href="/">TRANG CHỦ</Link>
          <Link href="/thietke3d">CÔNG TRÌNH THIẾT KẾ</Link>
          <Link href="/cong-trinh-thuc-te">CÔNG TRÌNH THỰC TẾ</Link>
          <Link href="/dich-vu-bao-gia">DỊCH VỤ & BÁO GIÁ</Link>
          <Link href="/tin-tuc">TIN TỨC</Link>
          <Link href="/about-us">VỀ CHÚNG TÔI</Link>
        </div>
      </div>
    </header>
  );
}
