# 2026-11-06 — làm mới: `anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc`

Rà soát toàn bộ `src/content/blog/` (grep các từ khoá rủi ro: tên thuốc/hoạt chất thường gặp đi kèm
mg/ml, "tăng liều/giảm liều/ngừng thuốc/bỏ thuốc", claim do bác sĩ/dược sĩ biên soạn hoặc kiểm
duyệt, hướng thần/gây nghiện/phá thai/giảm cân/cường dương/kháng sinh tự mua) không thấy bài nào vi
phạm guardrail — các kết quả khớp đều là hedging đúng (ví dụ nhắc "insulin" chung khi nói nhiệt độ
bảo quản hoặc nguyên tắc vận động, không kèm liều cụ thể; nhắc "gây nghiện, hướng thần" chỉ để nói
nhóm này có quy trình riêng, không hướng dẫn cách dùng). Trong các bài chưa có file `refreshes/` và
chưa có `updatedDate`, bài cũ nhất theo `publishDate` là `anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc`
(2026-09-25, cùng ngày với `vo-chong-lon-tuoi-nhac-thuoc-cho-nhau` — chọn bài có phần ứng dụng
chiếm tỷ trọng cao hơn và chưa có `faqs`/mục hỏi bác sĩ để ưu tiên làm mới).

Thay đổi: viết lại đoạn mở đầu thành câu trả lời trực tiếp ~60 từ ngay dưới tiêu đề; gộp 3 mục con
H3 thuộc phần "Cách anh chị em bàn giao..." thành một đoạn duy nhất dưới một `##` (còn ~24% tổng số
từ của bài, trước đó không có câu trả lời trực tiếp nên không tính được tỷ lệ cũ nhưng phần ứng
dụng trải trên 3 H3 chiếm phần lớn thân bài); đổi câu kết thành `## Khi nào nên hỏi bác sĩ, dược sĩ`
với các mốc cụ thể (đơn thuốc mới chưa rõ cách dùng, nghi uống trùng/bỏ sót nhiều liều liên tiếp,
dấu hiệu bất thường sau khi uống thuốc); thêm `faqs` (4 câu, trước đó chưa có, nội dung lấy từ đúng
`featurePages` mục `gia-dinh` trong `site.ts`: giới hạn thành viên theo gói, phạm vi chia sẻ đơn
thuốc trong nhóm, cách hệ thống chỉ hiển thị liều đã đánh dấu); thêm `feature: "gia-dinh"` tường
minh (khớp `imageTag: gia-dinh` đã có từ trước); thêm 2 liên kết nội bộ tới
`nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan` và `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh`;
đặt `updatedDate: 2026-11-06`. Giữ nguyên slug, tiêu đề, `publishDate`, `keyword`, `segment`; không
sửa `ctaTitle`/`ctaDescription` theo đúng quy tắc cho bài đăng trước 2026-09-17.

Không thêm `sources` mới — chủ đề là quy trình bàn giao ca chăm sóc trong gia đình, không có số
liệu/chính sách y tế cần trích nguồn chính thức, và không có nguồn nào được fetch trong phiên này.

Mọi claim về app (nhóm Gia đình mời bằng mã QR dùng một lần, tiến trình uống thuốc hiển thị chung,
ảnh đơn thuốc gốc lưu lại trong nhóm, mỗi liều được đánh dấu khi đã uống, giới hạn thành viên theo
gói Miễn phí/Pro/Gia đình) đối chiếu đúng với `src/data/site.ts` (`featurePages` — mục `gia-dinh`).

`npx astro check` và `npm run build` đều sạch (0 lỗi) — build dùng stub Supabase tạm trên
127.0.0.1:8765 vì không có `SUPABASE_URL`/`SUPABASE_ANON_KEY` trong môi trường, đã tắt stub và xoá
`dist/` sau khi build xong.

Backlog: không thêm file mới — `blog-notes/backlog/` đã có 11 file, vượt mức tối thiểu 10, và
không có mục nào cần thay thế trong lượt này.
