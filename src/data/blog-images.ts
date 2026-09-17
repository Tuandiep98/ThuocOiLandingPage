// Bộ ảnh blog đã được duyệt sẵn — cắt từ screenshot/screen recording thật của app (marketing
// screenshots trong src/assets/brand/*.png, hoặc UI thật chụp trực tiếp), focus vào đúng một chi
// tiết UI thay vì nhúng nguyên ảnh đầy đủ. Toàn bộ ảnh trong danh sách này đã được kiểm tra không
// còn thông tin cá nhân thật (tên/CCCD/địa chỉ/SĐT của bác sĩ, bệnh nhân...) — ảnh nào nguồn gốc
// có PII đã bị crop bỏ phần đó hoặc làm mờ hoàn toàn trước khi đưa vào đây (xem
// scripts/prepare-blog-image.mjs cho cách tái tạo crop tương tự).
//
// Đây là danh sách CHỐT — quy trình viết bài (thủ công lẫn 2 routine tự động sáng/tối) chỉ được
// chọn ảnh có sẵn trong danh sách này khi `usedWhen` khớp thật với chủ đề bài viết, không được tự
// crop ảnh mới hay dùng ảnh không khớp (xem CLAUDE.md mục "Blog content workflow").
export type CuratedBlogImage = {
  // Định danh dùng trong frontmatter `image` của bài blog (src/content/blog/*.md).
  tag: string;
  // Tên file trong src/assets/brand/blog/.
  file: string;
  // Alt text mô tả đúng nội dung đã crop (không phải alt gốc của ảnh screenshot đầy đủ).
  alt: string;
  // Mô tả 1 dòng: bài viết chủ đề nào thì dùng được ảnh này.
  usedWhen: string;
};

export const blogImages: CuratedBlogImage[] = [
  {
    tag: "bao-thuc-im-lang",
    file: "bao-thuc-im-lang.png",
    alt: "Màn hình báo thức Thuốc ơi trên iPhone lúc 16:35, nội dung uống 3 viên thuốc và nhỏ tai, có nút Snooze",
    usedWhen:
      "Bài viết về báo thức/lời nhắc vẫn kêu khi điện thoại im lặng hoặc ở chế độ Tập trung (iOS 26 trở lên) — ví dụ thuốc cần giờ uống cố định ban đêm, giờ họp/giờ học.",
  },
  {
    tag: "tien-trinh-lieu",
    file: "tien-trinh-lieu.png",
    alt: "Màn hình đơn thuốc trong Thuốc ơi hiển thị đã uống 59/98 liều kèm thanh tiến trình",
    usedWhen:
      "Bài viết về theo dõi số liều đã uống/còn lại, tránh bỏ ngang liệu trình dài ngày, hoặc tránh quên/uống trùng liều.",
  },
  {
    tag: "gia-dinh",
    file: "gia-dinh.png",
    alt: "Màn hình Gia đình trong Thuốc ơi hiển thị hai thành viên Tôi và Thảo",
    usedWhen:
      "Bài viết về quản lý thuốc cho nhiều người/theo dõi hộ người thân qua nhóm Gia đình.",
  },
  {
    tag: "lich-hen-tai-kham",
    file: "lich-hen-tai-kham.png",
    alt: "Thẻ Lịch hẹn sắp tới trong Thuốc ơi hiển thị hẹn tái khám 14 ngày, ngày 03/09/2026",
    usedWhen:
      "Bài viết về chuẩn bị tái khám, lịch hẹn/xét nghiệm đọc được từ đơn thuốc tự xuất hiện trên lịch.",
  },
  {
    tag: "them-don-nhieu-cach",
    file: "them-don-nhieu-cach.png",
    alt: "Hàng nút Thêm đơn thuốc trong Thuốc ơi với 3 lựa chọn Hình ảnh, Camera và PDF",
    usedWhen:
      "Bài viết so sánh cách thêm đơn thuốc (ảnh/PDF quét AI so với nhập tay), hoặc nhấn mạnh có nhiều cách thêm đơn khi ảnh không rõ.",
  },
  {
    tag: "thiet-lap-gio-uong",
    file: "thiet-lap-gio-uong.png",
    alt: "Màn hình 'Lịch uống thuốc của tôi' trong Thuốc ơi, thiết lập giờ Buổi sáng, trưa, chiều, tối và trước khi ngủ theo nhịp sinh hoạt cá nhân",
    usedWhen:
      "Bài viết về việc lịch nhắc được tạo theo đúng nhịp sinh hoạt người dùng tự chọn thay vì giờ cố định của app, hoặc về tuỳ chỉnh giờ uống theo từng buổi.",
  },
  {
    tag: "goi-y-an-toan-tu-ai",
    file: "goi-y-an-toan-tu-ai.png",
    alt: "Màn hình 'Gợi ý từ AI' trong Thuốc ơi hiển thị lưu ý an toàn riêng cho từng loại thuốc, kèm khuyến cáo hỏi bác sĩ/dược sĩ",
    usedWhen:
      "Bài viết về việc app đưa ra lưu ý/cảnh báo an toàn theo từng loại thuốc (tương tác, tác dụng phụ, cách dùng) — luôn phải giữ nguyên tinh thần disclaimer hiển thị trong ảnh, không tự diễn giải thêm thành lời khuyên y khoa.",
  },
  {
    tag: "quan-ly-ton-thuoc",
    file: "quan-ly-ton-thuoc.png",
    alt: "Màn hình 'Tồn thuốc' trong Thuốc ơi hiển thị số viên còn lại của từng loại thuốc, có nút Thêm thuốc/Bắt đầu theo dõi",
    usedWhen:
      "Bài viết về theo dõi số lượng thuốc còn lại, biết khi nào cần mua/lĩnh thêm thuốc trước khi hết.",
  },
  {
    tag: "lich-tat-thong-bao",
    file: "lich-tat-thong-bao.png",
    alt: "Danh sách các liều trong ngày của Thuốc ơi với biểu tượng chuông đã tắt thông báo cho từng liều",
    usedWhen:
      "Bài viết về tắt/bật thông báo riêng cho từng liều cụ thể, hoặc quản lý thông báo linh hoạt theo từng lần uống thay vì bật/tắt cả đơn.",
  },
  {
    tag: "canh-bao-sap-het-thuoc",
    file: "canh-bao-sap-het-thuoc.png",
    alt: "Thông báo 'Đơn thuốc này sắp dùng hết' trong Thuốc ơi kèm nút Quét đơn mới",
    usedWhen:
      "Bài viết về việc app chủ động cảnh báo khi thuốc sắp hết để quét/lĩnh đơn mới kịp thời, không bị gián đoạn liệu trình.",
  },
  {
    tag: "chia-se-don-gia-dinh",
    file: "chia-se-don-gia-dinh.png",
    alt: "Hộp thoại 'Chia sẻ đơn thuốc vào gia đình?' trong Thuốc ơi xác nhận thêm bản sao đơn thuốc vào nhóm gia đình",
    usedWhen:
      "Bài viết về chia sẻ một đơn thuốc cụ thể vào nhóm Gia đình để người thân cùng theo dõi, khác với việc mời thành viên mới bằng QR.",
  },
  {
    tag: "nhap-thuoc-thu-cong",
    file: "nhap-thuoc-thu-cong.png",
    alt: "Form 'Nhập thuốc thủ công' trong Thuốc ơi, chọn người nhận lịch và ngày bắt đầu, không dùng AI",
    usedWhen:
      "Bài viết về cách nhập thuốc bằng tay (không dùng AI quét đơn) — phù hợp thuốc lẻ mua thêm, thực phẩm chức năng, hoặc khi không có đơn giấy/ảnh rõ.",
  },
  {
    tag: "thang-nay-day-du",
    file: "thang-nay-day-du.png",
    alt: "Lịch tháng đầy đủ trong Thuốc ơi hiển thị các ngày đã uống (xanh lá) và sắp tới (vàng) kèm biểu tượng thuốc",
    usedWhen:
      "Bài viết cần minh hoạ cái nhìn tổng quan cả tháng về việc tuân thủ uống thuốc — khác với lịch tuần đã dùng ở tính năng trang chủ.",
  },
  {
    tag: "xac-nhan-doc-don-ai",
    file: "xac-nhan-doc-don-ai.png",
    alt: "Màn hình xác nhận sau khi AI đọc đơn thuốc trong Thuốc ơi, hiển thị danh sách thuốc, ngày tái khám và cảnh báo đối chiếu với đơn gốc trước khi xác nhận",
    usedWhen:
      "Bài viết về bước xác nhận trước khi lưu lịch sau khi quét AI — nhấn mạnh luôn cần đối chiếu với đơn gốc và hỏi bác sĩ/dược sĩ nếu chưa chắc.",
  },
  {
    tag: "quet-don-camera-mo",
    file: "quet-don-camera-mo.png",
    alt: "Giao diện camera quét đơn thuốc trong Thuốc ơi; đơn thuốc trong khung hình đã được làm mờ hoàn toàn để bảo vệ thông tin cá nhân",
    usedWhen:
      "Bài viết về trải nghiệm dùng camera để chụp/quét đơn thuốc — chỉ minh hoạ giao diện chụp (Flash/Filters/Shutter), không hiển thị nội dung đơn thật.",
  },
];

export function findBlogImage(tag: string | undefined): CuratedBlogImage | undefined {
  if (!tag) return undefined;
  return blogImages.find((entry) => entry.tag === tag);
}
