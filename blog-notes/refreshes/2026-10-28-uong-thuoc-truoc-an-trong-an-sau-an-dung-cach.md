# 2026-10-28 — làm mới: `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach`

Chọn bài này vì đây là bài đăng (2026-09-20) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; không có nhánh `claude/blog-*` chưa merge nào
đang sửa bài này (các nhánh `claude/blog-*` còn trên remote đều đã merge hết vào main). Không phát
hiện vi phạm guardrail rõ ràng ở các bài ứng viên khác cần ưu tiên. Bài cũ gần như toàn bộ là phần
giới thiệu app (4/5 mục), chưa trả lời câu hỏi "vì sao có mốc trước/trong/sau ăn".

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp câu hỏi mục tiêu (~55 từ).
- Thêm mục giải thích nguyên tắc chung vì sao có các mốc lúc đói / trong bữa / sau ăn (có nguồn),
  không nêu tên thuốc hay nhóm thuốc cụ thể nào, luôn chuyển về đơn + tờ hướng dẫn.
- Thêm mục mẹo giữ đúng mốc cho từng loại (không khuyên tự đổi/gộp mốc).
- Dồn phần nói về app vào một mục duy nhất, chỉ nêu tính năng có trong `site.ts` (đề xuất lịch kèm
  trước/sau ăn nếu đơn ghi, màn hình xác nhận, nhập tay không tính lượt quét, mốc giờ theo nhịp
  sinh hoạt, nút Đã uống/Báo lại 10 phút, tiến trình liều); thêm link `/tinh-nang/nhac-uong-thuoc/`.
- Thay mục cuối bằng "Khi nào nên hỏi bác sĩ, dược sĩ".
- Thêm 4 `faqs` và 5 liên kết nội bộ: `/blog/doc-hieu-don-thuoc-bac-si-ghi-tat/`,
  `/blog/uong-thuoc-chung-voi-sua-co-sao-khong/`, `/blog/uong-thuoc-cach-nhau-bao-lau/`,
  `/blog/uong-thuoc-giam-dau-luc-doi-co-hai-da-day-khong/`, `/blog/quen-uong-thuoc-1-lan-co-sao-khong/`.
- Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `feature`, `ctaTitle`/`ctaDescription`.

Nguồn đã fetch trong phiên (WebFetch) và xác nhận:
- Vinmec — "Thời điểm uống thuốc có quan trọng?": tương tác thuốc–thức ăn quyết định thời điểm
  uống; thuốc uống xa bữa ăn (1 giờ trước hoặc 1–2 giờ sau ăn); thuốc uống trong bữa; thuốc dễ kích
  ứng tiêu hoá uống sau ăn; bác sĩ quyết định thời điểm uống.
- Vinmec — "Tại sao một số loại thuốc phải uống khi đói?": thức ăn có thể cản trở hấp thu; "uống
  khi đói" = trước hoặc sau ăn 2 giờ; đọc nhãn, hỏi bác sĩ/dược sĩ. (Hai bài định nghĩa khác nhau
  1 vs 2 giờ → bài viết ghi "khoảng 1–2 giờ, tuỳ thuốc".)
- Vinmec — "Tại sao một số loại thuốc phải được uống cùng hoặc sau thức ăn?": giảm kích ứng dạ dày,
  buồn nôn, hỗ trợ hấp thu; không uống bù khi quên liều; hỏi bác sĩ/dược sĩ.

Backlog: đã có 12 file (≥ 10), không cần bổ sung lần này.
