import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="bg-black text-white pl-10 lg:pl-28 py-10">
        <h1 className="font-bold text-3xl lg:text-4xl">Dịch vụ & báo giá</h1>
        <div className="flex flex-row mt-3">
          <Link href="/" className="underline">
            Trang chủ
          </Link>{" "}
          <ChevronsRight />
          <span>Dịch vụ & báo giá</span>
        </div>
      </div>
      <div className="px-5 max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl mt-20 mb-10 font-bold">QUY TRÌNH THIẾT KẾ</h2>
        <div className="grid grid-cols-3">
          <div className="border"></div>
          <div className="border font-bold text-center py-3 text-sm lg:text-base">
            THIÊN ĐỈNH DESIGN
          </div>
          <div className="border font-bold text-center py-3 text-sm lg:text-base">
            QUÝ KHÁCH HÀNG
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            01/ TIẾP NHẬN THÔNG TIN
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Tiếp nhận thông tin sơ bộ của khách hàng và đặt lịch hẹn trao
                đổi trực tiếp.
              </li>
              <li>
                Dựa vào thông tin được cung cấp để chuẩn bị tư vấn phù hợp với
                nhu cầu khách hàng.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Khách hàng có nhu cầu thiết kế liên hệ đến hotline 0905 560 500
                hoặc đến trực tiếp văn phòng 97 Lê Lợi, Quy Nhơn.
              </li>
              <li>
                Để lại thông tin sơ bộ bao gồm: Địa chỉ, Số điện thoại, Hiện
                trạng công trình, Mức độ đầu tư, can thiệp,...
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            02/ TRAO ĐỔI TƯ VẤN
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Từ các thông tin, ý tưởng, yêu cầu của khách hàng, KTS sẽ tư vấn
                các thông tin ban đầu về phong cách thiết kế, bố trí không gian,
                lựa chọn đồ nội thất phù hợp với mong muốn và mức độ đầu tư của
                khách hàng.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Cung cấp bản vẽ mặt bằng hiện trạng.</li>
              <li>Cung cấp thêm các thông tin theo yêu cầu của KTS.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            03/ KHẢO SÁT MẶT BẰNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Khảo sát mặt bằng thực tế, thu thập kích thước chính xác, khảo
                sát các ưu nhược điểm của công trình để đưa ra giải pháp tối ưu
                cho không gian.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Trao đổi thêm về nhu cầu, công năng mong muốn với KTS.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            04/ LÊN CONCEPT SƠ BỘ
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                KTS lên ý tưởng layout sơ bộ, nghiên cứu mặt bằng bố trí và định
                vị phong cách thiết kế.
              </li>
              <li>Chuẩn bị hồ sơ trình bày concept sơ bộ với khách hàng.</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Sắp xếp cuộc gặp trao đổi trực tiếp, xác nhận và chốt concept để
                triển khai thiết kế.
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            05/ BÁO GIÁ & KÝ HỢP ĐỒNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Gửi khách hàng báo giá và hợp đồng thiết kế</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Xác nhận hợp đồng thiết kế và tạm ứng trước 50% chi phí thiết kế
                theo điều khoản hợp đồng.
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            06/ THIẾT KẾ PHỐI CẢNH 3D
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                KTS triển khai thiết kế phối cảnh các không gian theo concept đã
                thống nhất.
              </li>
              <li>
                Chủ động lựa chọn vật liệu, phối màu sắc phù hợp cho tổng thể.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Trao đổi với KTS để chỉnh sửa (nếu có) để chốt phương án tối ưu
                nhất.
              </li>
              <li>Xác nhận thiết kế phối cảnh 3D.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            07/ BÀN GIAO HỒ SƠ & THANH LÝ HỢP ĐỒNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Triển khai chi tiết kỹ thuật và bàn giao hồ sơ bản vẽ.</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Thanh toán 50% chi phí còn lại.</li>
              <li>Thanh lý hợp đồng.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 max-w-screen-xl mx-auto">
        <h2 className="text-center text-3xl mt-20 mb-10 font-bold">QUY TRÌNH THI CÔNG</h2>
        <div className="grid grid-cols-3">
          <div className="border"></div>
          <div className="border font-bold text-center py-3">
            THIÊN ĐỈNH DESIGN
          </div>
          <div className="border font-bold text-center py-3">
            QUÝ KHÁCH HÀNG
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            01/ TIẾP NHẬN THÔNG TIN
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Tiếp nhận thông tin sơ bộ của khách hàng và đặt lịch hẹn trao
                đổi trực tiếp.
              </li>
              <li>
                Dựa vào thông tin được cung cấp để chuẩn bị tư vấn phù hợp với
                nhu cầu khách hàng.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Khách hàng có nhu cầu thiết kế liên hệ đến hotline 0905 560 500
                hoặc đến trực tiếp văn phòng 97 Lê Lợi, Quy Nhơn.
              </li>
              <li>
                Để lại thông tin sơ bộ bao gồm: Địa chỉ, Số điện thoại, Hiện
                trạng công trình, Mức độ đầu tư, can thiệp,...
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            02/ TRAO ĐỔI TƯ VẤN
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Tiến hành gặp gỡ trao đổi, tư vấn để nắm bắt nhu cầu và mong
                muốn của khách hàng.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Cung cấp thêm các thông tin theo yêu cầu của KTS.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            03/ KHẢO SÁT MẶT BẰNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Khảo sát mặt bằng thực tế, thu thập kích thước chính xác, khảo
                sát các ưu nhược điểm của công trình để đưa ra giải pháp hợp lý
                cho không gian.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Trao đổi thêm về nhu cầu, công năng mong muốn với KTS.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            04/ TRÌNH MẪU VẬT LIỆU
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Dựa trên thiết kế đã có, KTS chủ động chọn vật liệu, màu sắc phù
                hợp.
              </li>
              <li>
                Chuẩn bị vật liệu và sắp xếp cuộc hẹn trình mẫu cho khách hàng.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Sắp xếp cuộc gặp trao đổi trực tiếp, xác nhận và chốt concept để
                triển khai thiết kế.
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            05/ BÁO GIÁ & KÝ HỢP ĐỒNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Gửi khách hàng báo giá nhiều phương án để khách hàng có sự so
                sánh, lựa chọn phù hợp với nhu cầu.
              </li>
              <li>
                Gửi hợp đồng thi công kèm điều khoản thanh toán và tiến độ thi
                công.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Xác nhận báo giá và hợp đồng thi công.</li>
              <li>Tạm ứng trước 40% giá trị hợp đồng.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            06/ THI CÔNG PHẦN THÔ
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Triển khai thi công cải tạo phần thô (nếu có).</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Bàn giao mặt bằng đủ tiêu chuẩn để thi công.</li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            07/ SẢN XUẤT & THI CÔNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Tiến hành sản xuất trực tiếp tại xưởng THIÊN ĐỈNH DESIGN.</li>
              <li>
                Sau khi hoàn thiện sản xuất, vận chuyển đến công trình để lắp
                đặt hoàn thiện theo thiết kế.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Tạm ứng các đợt thanh toán tiếp theo theo điều khoản trong hợp
                đồng.
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            07/ SẢN XUẤT & THI CÔNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Tiến hành sản xuất trực tiếp tại xưởng THIÊN ĐỈNH DESIGN.</li>
              <li>
                Sau khi hoàn thiện sản xuất, vận chuyển đến công trình để lắp
                đặt hoàn thiện theo thiết kế.
              </li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Tạm ứng các đợt thanh toán tiếp theo theo điều khoản trong hợp
                đồng.
              </li>
            </ul>
          </div>
          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            08/ NGHIỆM THU BÀN GIAO & THANH LÝ HỢP ĐỒNG
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Hoàn thiện bàn giao công trình.</li>
              <li>Nghiệm thu & Thanh lý hợp đồng.</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>Thanh toán giá trị quyết toán còn lại.</li>
            </ul>
          </div>

          <div className="border font-bold italic pt-3 pl-2 lg:pl-5 text-sm lg:text-base">
            09/ BẢO HÀNH, BẢO TRÌ
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Chính sách bảo hành, bảo trì trong vòng 05 - 10 năm kể từ ngày
                bàn giao cho khách hàng.
              </li>
              <li>Có trách nhiệm sửa chữa hoặc thay thế sản phẩm bị lỗi.</li>
            </ul>
          </div>
          <div className="border py-3 pl-4 lg:px-5 leading-loose">
            <ul className="text-gray-500 list-disc lg:pl-10 text-xs">
              <li>
                Liên hệ THIÊN ĐỈNH DESIGN khi gặp vấn đề trong quá trình sử
                dụng.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-5 w-full max-w-screen-xl mx-auto mb-20">
        <h2 className="text-center text-3xl mt-20 mb-10 font-bold">BẢNG GIÁ THIẾT KẾ</h2>
        <div className="grid grid-cols-3">
          <div className="border font-bold text-center py-3 text-xs lg:text-base">
            THIẾT KẾ NỘI THẤT
          </div>
          <div className="border font-bold text-center py-3 text-xs lg:text-base">
            THIẾT KẾ KIẾN TRÚC
          </div>
          <div className="border font-bold text-center py-3 text-xs lg:text-base">
            THIẾT KẾ TRỌN GÓI
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>
              <b>Nhà phố:</b> 120.000 – 160.000
            </p>
            <p>
              <b>Biệt thự:</b> 140.000 – 200.000
            </p>
            <p className="italic">(Đơn giá cho m2 thiết kế)</p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>
              <b>Hiện đại:</b> 120.000
            </p>
            <p>
              <b>Tân cổ điển:</b> 160.000
            </p>
            <p className="italic">(Đơn giá cho m2 thiết kế)</p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>
              <b>Nhà phố:</b> 240.000 – 300.000
            </p>
            <p>
              <b>Biệt thự:</b> 270.000 – 350.000
            </p>
            <p className="italic">(Đơn giá cho m2 thiết kế)</p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>Thời gian thực hiện:</p>
            <p>
              <b>10 – 20 ngày</b>
            </p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>Thời gian thực hiện:</p>
            <p>
              <b>20 – 30 ngày</b>
            </p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p>Thời gian thực hiện:</p>
            <p>
              <b>30 – 45 ngày</b>
            </p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p className="font-bold">Hồ sơ bàn giao:</p>
            <p>– Phối cảnh 3D nội thất</p>
            <p>– Hồ sơ bố trí nội thất</p>
            <p>– Hồ sơ thiết kế sàn, tường, trần</p>
            <p>– Hồ sơ thiết kế chiếu sáng</p>
            <p>– Hồ sơ triển khai nội thất</p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p className="font-bold">Hồ sơ bàn giao:</p>
            <p>– Phối cảnh 3D nội thất</p>
            <p>– Hồ sơ thiết kế kiến trúc</p>
            <p>– Hồ sơ thiết kế kết cấu</p>
            <p>– Hồ sơ thiết kế điện nước</p>
          </div>
          <div className="border pt-3 text-gray-500 text-center leading-loose pb-5 text-xs lg:text-base">
            <p className="font-bold">Hồ sơ bàn giao:</p>
            <p>– Phối cảnh 3D nội thất</p>
            <p>– Hồ sơ thiết kế kiến trúc</p>
            <p>– Hồ sơ thiết kế kết cấu</p>
            <p>– Hồ sơ thiết kế điện nước</p>
            <p>– Hồ sơ triển khai nội thất</p>
          </div>
        </div>
      </div>
    </>
  );
}
