# 2026-10-29 — làm mới: `con-uong-thuoc-giua-gio-hoc-o-truong`

Chọn bài này vì đây là bài đăng (2026-09-21) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; mọi nhánh `claude/blog-*` còn trên remote
đều đã merge hết vào main nên không nhánh nào đang sửa bài này. Bài cũ có điểm cần sửa về grounding:
gợi ý mời cô giáo vào nhóm Gia đình (chia sẻ dữ liệu sức khoẻ của trẻ ra ngoài gia đình, `site.ts`
không mô tả cách dùng đó) và ngụ ý con tự đánh dấu liều trên máy của con; mở đầu nêu tên nhóm thuốc
cho trẻ (kháng sinh, hạ sốt, dị ứng). Phần nói về app chiếm phần lớn bài.

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp (~60 từ).
- Bỏ tên nhóm thuốc ở mở đầu; bỏ mục mời người ở trường vào nhóm Gia đình.
- Thêm mục hỏi bác sĩ/dược sĩ lúc nhận đơn xem lịch có xếp lại được không (có nguồn), checklist
  chuẩn bị trước khi đến trường, mục xác nhận cuối ngày trước cữ tối (không tự cho uống thêm).
- Dồn phần nói về app vào một mục, chỉ nêu tính năng trong `site.ts` (nhập tay không tính lượt
  quét, thông báo có nút Đã uống / Báo lại 10 phút, nhắc lần hai sau 45 phút, tiến trình liều);
  thêm link `/tinh-nang/nhac-uong-thuoc/` và `feature: "nhac-uong-thuoc"`.
- Thay mục cuối bằng "Khi nào nên hỏi bác sĩ, dược sĩ" (kèm gọi 115 khi có dấu hiệu nặng).
- Thêm 4 `faqs` và 4 liên kết nội bộ: `/blog/dau-hieu-quen-lieu-uong-trung-lieu-thuoc/`,
  `/blog/uong-thuoc-cach-nhau-bao-lau/`, `/blog/quen-uong-thuoc-1-lan-co-sao-khong/`,
  `/blog/cach-nhac-con-uong-thuoc-dung-gio/`.
- Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `ctaTitle`/`ctaDescription`.

Nguồn đã fetch trong phiên (WebFetch) và xác nhận:
- Vinmec — "Làm thế nào để tăng tuân thủ điều trị thuốc?": trao đổi với dược sĩ để có lịch dùng
  thuốc phù hợp lịch sinh hoạt; nhắc lại tóm tắt cách dùng trong một ngày; không tự đổi liều/ngừng
  thuốc; dùng công cụ nhắc (hộp chia thuốc, ứng dụng điện thoại).
- (Đã fetch thêm Vinmec "Vì sao uống kháng sinh phải đủ liều" nhưng không dùng, vì bài đã bỏ tên
  nhóm thuốc.)

Backlog: đã có 11 file (≥ 10), không cần bổ sung lần này.
