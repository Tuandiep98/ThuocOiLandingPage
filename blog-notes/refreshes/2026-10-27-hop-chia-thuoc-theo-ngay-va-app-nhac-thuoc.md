# 2026-10-27 — làm mới: `hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc`

Chọn bài này vì đây là bài đăng (2026-09-20) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; không có nhánh `claude/blog-*` chưa merge nào
đang sửa bài này. Không phát hiện vi phạm guardrail nào cần ưu tiên ở các bài ứng viên (rà theo mẫu
tên thuốc + hàm lượng, "chữa khỏi", "100%").

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp câu hỏi mục tiêu (~55 từ).
- Gom phần "không làm được" thành danh sách, bổ sung ý thuốc nên giữ trong bao bì gốc (có nguồn).
- Thêm mục nguyên tắc chung "Dùng hộp chia thuốc sao cho an toàn" (không nhắc app; không khuyên
  uống bù/gộp liều, luôn chuyển về tờ hướng dẫn + bác sĩ/dược sĩ).
- Dồn phần nói về app vào một mục duy nhất, rút gọn, chỉ nêu tính năng có trong `site.ts` (nhập tay
  không tính lượt quét, nút Đã uống/Báo lại 10 phút, nhắc lần hai sau 45 phút, báo thức iOS 26,
  tiến trình liều); thêm link `/tinh-nang/nhac-uong-thuoc/` và frontmatter `feature: "nhac-uong-thuoc"`.
- Thay mục "Nên dùng cái nào" bằng mục "Khi nào nên hỏi bác sĩ, dược sĩ".
- Thêm 4 `faqs` và 3 liên kết nội bộ: `/blog/cach-bao-quan-thuoc-tai-nha/`,
  `/blog/dau-hieu-quen-lieu-uong-trung-lieu-thuoc/`, `/blog/quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien/`.
- Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `ctaTitle`/`ctaDescription`, `imageTag`.

Nguồn đã fetch trong phiên (WebFetch) và xác nhận:
- Vinmec — "Làm thế nào để tăng tuân thủ điều trị thuốc": nêu hộp chia thuốc là phương tiện hỗ trợ
  tuân thủ, phần mềm nhắc lịch, và khuyên trao đổi với bác sĩ/dược sĩ.
- Vinmec — "Những điều cần biết về bảo quản thuốc tại nhà": bao bì gốc giúp ngăn một phần ảnh hưởng
  của độ ẩm, ánh sáng; tránh nơi nóng ẩm, ánh nắng trực tiếp.

Backlog: đã có 12 file (≥ 10), không cần bổ sung lần này.
