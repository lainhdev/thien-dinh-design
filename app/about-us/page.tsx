import { AboutUsSection } from "@/components/about-us/about-us-section";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="mb-20">
      <div className="bg-black text-white pl-10 lg:pl-28 py-10">
        <h1 className="font-bold text-3xl lg:text-4xl">Về chúng tôi</h1>
        <div className="flex flex-row mt-3">
          <Link href="/" className="underline">
            Trang chủ
          </Link>{" "}
          <ChevronsRight />
          <span>Về chúng tôi</span>
        </div>
      </div>
      <AboutUsSection />
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto mt-20 gap-x-10 px-5">
        <div className="items-center justify-center flex lg:hidden">
          <Image src="/imgs/SHOWROOM.jpg" width={590} height={350} alt="" />
        </div>
        <div className="leading-relaxed flex items-center justify-center">
          <div className="mb-5">
            <h6 className="text-2xl font-bold mt-5">SHOWROOM</h6>
            <p className="my-5 text-gray-500">
              Showroom THIÊN ĐỈNH DESIGN với diện tích 300m2 được đầu tư xây
              dựng tại 97 Lê Lợi, P. Trần Hưng Đạo, Quy Nhơn.
            </p>
            <p className="text-gray-500">
              Showroom THIÊN ĐỈNH DESIGN mô phỏng nhiều không gian với đầy đủ
              các tiện nghi hiện đại, đa dạng phong cách thiết kế. Khách hàng
              khi đến tham quan showroom sẽ có những trải nghiệm chân thật nhất
              về không gian sống mà mình mong muốn hướng tới.{" "}
            </p>
          </div>
        </div>
        <div className="items-center justify-center hidden lg:flex">
          <Image src="/imgs/SHOWROOM.jpg" width={590} height={350} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto mt-20 gap-x-10 px-5">
        <div className="flex items-center justify-center">
          <Image src="/imgs/fatory.jpg" width={590} height={350} alt="" />
        </div>
        <div className="leading-relaxed flex items-center justify-center mt-5">
          <div>
            <h6 className="text-2xl font-bold">Xưởng Sản Xuất</h6>
            <p className="my-5 text-gray-500">
              Xưởng sản xuất KIDU INTERIOR với quy mô gần 1000m2, được trang bị
              hệ thống máy móc hiện đại, tiên tiến, là cốt lõi tạo nên những sản
              phẩm dẫn đầu thị trường.
            </p>
            <p className="text-gray-500">
              Nhờ hiện đại hóa quy trình sản xuất, khắt khe từ khâu lựa chọn
              nguyên vật liệu đầu vào, áp dụng công nghệ máy móc tiên tiến cho
              đến kiểm soát chất lượng đầu ra.
            </p>
            <p className="text-gray-500">
              Điều này giúp chúng tôi không chỉ tối ưu hóa hiệu suất sản xuất mà
              còn đảm bảo chất lượng, thẩm mỹ cho mỗi sản phẩm mang đến khách
              hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
