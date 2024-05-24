import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-20">
      <div className="md:w-1/3 lg:w-1/2 px-10 md:pl-5 md:px-0">
        <div className="relative mx-auto lg:w-max">
          <Image
            src="/imgs/about-1.jpg"
            width={400}
            height={600}
            alt="about us"
            className="block mx-auto"
          />
          <div className="hidden lg:block p-1 bg-white absolute -bottom-28 -left-10 xl:-left-20 z-10">
            <Image
              src="/imgs/about-2.jpg"
              width={220}
              height={300}
              alt="about us"
            />
          </div>
        </div>
        <div className="hidden lg:block h-[100px]"></div>
      </div>
      <div className="md:w-2/3 lg:w-1/2 px-10 md:px-5 lg:px-0 flex items-center">
        <div>
          <h5 className="font-semibold text-lg text-gray-700 mt-10 md:mt-0">Về Chúng Tôi</h5>
          <h3 className="font-bold text-lg lg:text-2xl my-5">
            THIÊN ĐỈNH DESIGN - Nơi biến ý tưởng của bạn thành hiện thực.
          </h3>
          <p className="text-gray-500 leading-loose text-sm lg:text-base">
            Trải qua nhiều năm hoạt động, THIÊN ĐỈNH DESIGN đã dần khẳng định
            được uy tín và chất lượng của mình trên thị trường. Từ việc tư vấn
            chi tiết, lựa chọn vật liệu, thiết kế bản vẽ đến quy trình sản xuất,
            quy trình thi công, THIÊN ĐỈNH DESIGN luôn đảm bảo mức độ tỉ mỉ và
            sự hoàn thiện trong mỗi công việc. Đối với THIÊN ĐỈNH DESIGN, điều
            quan trọng nhất không chỉ là hoàn thành công trình mà còn là sự hài
            lòng và niềm vui của khách hàng khi công trình được bàn giao.
          </p>
        </div>
      </div>
    </div>
  );
};
