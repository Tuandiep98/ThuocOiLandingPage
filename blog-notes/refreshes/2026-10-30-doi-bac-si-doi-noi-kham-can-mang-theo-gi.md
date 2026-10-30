# 2026-10-30 — làm mới: `doi-bac-si-doi-noi-kham-can-mang-theo-gi`

Chọn bài này vì đây là bài đăng (2026-09-21) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; mọi nhánh `claude/blog-*` còn trên remote
đều đã merge hết vào main nên không nhánh nào đang sửa bài này. Bài cũ có lỗi grounding: khẳng định
mỗi đơn được lưu "cùng với ảnh gốc" để mở lại cho bác sĩ xem (cả trong thân bài lẫn
`ctaDescription`) — `site.ts` không mô tả tính năng đó. Gần như toàn bộ bài là giới thiệu app, chưa
có đoạn trả lời trực tiếp, `faqs`, `sources` hay mục hỏi bác sĩ/dược sĩ.

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp (~60 từ).
- Bỏ khẳng định "lưu ảnh gốc"; viết lại `ctaDescription` theo tính năng có trong `site.ts`
  (tiến trình liều từng đơn, báo cáo PDF/CSV).
- Thêm checklist chuẩn bị trước buổi khám ở nơi mới (có nguồn), mục phân biệt thuốc đang dùng với
  đơn đã xong, nhắc không tự mua lại theo đơn cũ.
- Dồn phần nói về app vào một mục: tiến trình liều, Báo cáo & dữ liệu (khoảng thời gian, lọc đơn
  đang uống/đã hoàn thành, lưu trên máy, không chứa ảnh đơn); thêm link `/tinh-nang/theo-doi-lieu-trinh/`
  và `feature: "theo-doi-lieu-trinh"`.
- Thêm mục "Khi nào nên hỏi bác sĩ, dược sĩ" (kèm gọi 115 khi có dấu hiệu nặng).
- Thêm 4 `faqs` và 5 liên kết nội bộ: `/blog/mat-don-thuoc-phai-lam-sao/`,
  `/blog/don-thuoc-dien-tu-la-gi/`, `/blog/uong-vitamin-thuc-pham-chuc-nang-cung-thuoc-ke-don/`,
  `/blog/quan-ly-thuoc-khi-kham-nhieu-chuyen-khoa-cung-luc/`, `/blog/co-nen-dung-lai-don-thuoc-cu/`.
- Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `ctaTitle`.

Nguồn đã fetch trong phiên (WebFetch) và xác nhận:
- Vinmec — "6 lời khuyên để tránh sai lầm khi dùng thuốc": tạo thói quen cho nhân viên y tế xem
  danh sách thuốc mỗi lần khám; danh sách gồm thuốc kê đơn, không kê đơn và thực phẩm chức năng;
  luôn giữ danh sách bên mình.
- Vinmec — "Những tương tác thuốc nguy hiểm thường gặp": người bệnh cần nói với bác sĩ hoặc dược sĩ
  về các thuốc cùng thực phẩm chức năng, khoáng chất, thảo dược.

Backlog: đã có 11 file (≥ 10), không cần bổ sung lần này.
