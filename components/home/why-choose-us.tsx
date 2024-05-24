import { ClipboardList, Handshake, Home, Users } from "lucide-react";
import React from "react";

export const WhyChooseUs = () => {
  return (
    <div className="mt-20">
      <h3 className="font-bold text-2xl lg:text-3xl text-center">
        WHY CHOOSE US
      </h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
        <div className="w-[15rem] mx-auto">
          <Users className="w-16 h-16 mx-auto mb-3" />
          <p className="text-center text-lg text-gray-700 leading-relaxed">
            Đội ngũ nhân sự có chuyên môn, giàu kinh nghiệm và đầy tâm huyết
          </p>
        </div>
        <div className="w-[15rem] mx-auto">
          <Home className="w-16 h-16 mx-auto mb-3" />
          <p className="text-center text-lg text-gray-700 leading-relaxed">
            Năng lực thiết kế và thi công +500 công trình
          </p>
        </div>
        <div className="w-[15rem] mx-auto">
          <ClipboardList className="w-16 h-16 mx-auto mb-3" />
          <p className="text-center text-lg text-gray-700 leading-relaxed">
            Quy trình làm việc chuyên nghiệp, rõ ràng
          </p>
        </div>
        <div className="w-[15rem] mx-auto">
          <Handshake className="w-16 h-16 mx-auto mb-3" />
          <p className="text-center text-lg text-gray-700 leading-relaxed">
            Đảm bảo bảo hành dài hạn, đồng hành cùng khách hàng trọn đời
          </p>
        </div>
      </div>
    </div>
  );
};
