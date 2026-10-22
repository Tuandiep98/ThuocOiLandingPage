# 2026-10-22 — làm mới: `thuoc-nho-mat-mui-tai-boi-ngoai-da-de-quen-hon-thuoc-uong`

Rà lại toàn bộ `src/content/blog/` (tên thuốc/hoạt chất kèm liều cụ thể, lời khuyên tự đổi liều,
chủ đề cấm, số liệu bịa, nhận vơ tác giả bác sĩ/dược sĩ, liều cho trẻ em/phụ nữ mang thai) không
phát hiện bài nào vi phạm guardrail, nên áp dụng ưu tiên 2: chọn bài cũ nhất (đăng 2026-09-17)
chưa từng có file trong `refreshes/` và chưa có `updatedDate`. (Có một bài khác cùng ngày đăng
2026-09-17 — `thuoc-uong-deu-dan-va-thuoc-uong-khi-can` — để lại cho lần làm mới sau.) Đã sửa: viết
lại đoạn mở đầu thành câu trả lời trực tiếp ~60 từ; gộp ba mục giới thiệu tính năng ứng dụng (nhập
tay riêng từng loại, đặt giờ theo buổi, theo dõi tiến trình) thành một mục duy nhất để phần ứng
dụng chỉ còn chiếm khoảng 1/4 bài; thêm mục mới "Khoảng cách giữa hai loại thuốc nhỏ mắt, nhỏ mũi
dùng cùng lúc" dẫn nguồn Vinmec đã xác minh qua WebFetch trong phiên này (khoảng 10–30 phút tuỳ
nguồn, không có số cố định, luôn hỏi lại bác sĩ/dược sĩ); đổi mục cuối thành "Khi nào nên hỏi bác
sĩ, dược sĩ" với các dấu hiệu cụ thể (đơn không ghi rõ thứ tự/khoảng cách, không chắc lọ đã mở còn
dùng được, dấu hiệu bất thường ở mắt/tai/da, không chắc cách xử lý khi quên hoặc dùng trùng); thêm
4 `faqs`; thêm 1 nguồn (`sources`) là bài Vinmec "Hướng dẫn cách dùng thuốc nhỏ mắt"; thêm 2 liên
kết nội bộ tới `thuoc-nho-mat-sau-khi-mo-nap-dung-duoc-bao-lau` và `uong-thuoc-cach-nhau-bao-lau`;
đặt `updatedDate: 2026-10-22`. Giữ nguyên slug, tiêu đề, `publishDate`, `keyword`, `segment`,
`ctaTitle`/`ctaDescription`. Không thêm file backlog mới vì `blog-notes/backlog/` đã có 11 file,
trên mức tối thiểu 10. Build chạy với `SUPABASE_URL`/`SUPABASE_ANON_KEY` tạm trỏ về một stub HTTP
cục bộ (127.0.0.1:8765) vì môi trường phiên này không có biến Supabase thật — stub đã tắt và
`dist/` đã xoá sau khi build xong.
