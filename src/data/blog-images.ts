// Bộ ảnh blog đã được duyệt sẵn — cắt từ screenshot marketing thật trong src/assets/brand/*.png
// (xem scripts/prepare-blog-image.mjs), focus vào đúng một chi tiết UI thay vì nhúng nguyên ảnh
// marketing đầy đủ (nền đen + headline chữ to, không hợp bố cục cột bài viết).
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
];

export function findBlogImage(tag: string | undefined): CuratedBlogImage | undefined {
  if (!tag) return undefined;
  return blogImages.find((entry) => entry.tag === tag);
}
