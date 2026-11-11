# 2026-11-11 — bài mới: `dong-kinh-uong-thuoc-deu-dan-quen-lieu-co-nguy-hiem-khong`

Tiêu đề "Động kinh: vì sao phải uống thuốc đều đặn, quên liều có nguy hiểm không?", keyword
"động kinh uống thuốc đều đặn quên liều có nguy hiểm không", cụm Thói quen dùng thuốc cho bệnh mạn
tính phổ biến (góc độ tuân thủ/nhắc giờ, không chọn thuốc hay liều). Góc độ: chưa có bài nào về
động kinh; khác bài viêm gan B hôm qua ở chỗ với động kinh, chỉ một liều bị bỏ cũng có thể làm cơn
tái phát bất ngờ (rủi ro tai nạn tức thời chứ không âm thầm), nên bài có thêm mục sơ cứu cho người
nhà và các dấu hiệu gọi cấp cứu 115. Không nêu tên thuốc hay hoạt chất nào, không nói liều, không
nêu lịch xét nghiệm cụ thể; không đề cập trẻ em/thai kỳ ngoài câu "báo bác sĩ nếu có kế hoạch mang
thai".

Mục app liên kết `/tinh-nang/nhac-uong-thuoc/` (`feature: nhac-uong-thuoc`); chỉ nêu những gì
`site.ts` có (nhập tay hoặc quét đơn + kiểm tra lại, Đã uống / Báo lại 10 phút, nhắc lần hai sau
45 phút, báo người thân trong nhóm Gia đình khi có thể đã lỡ liều, báo sắp hết thuốc, nhắc tái khám).

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- WHO fact sheet Epilepsy — tới 70% có thể hết cơn nếu dùng thuốc phù hợp; ngừng thuốc có thể cân
  nhắc sau 2 năm không cơn; té ngã, đuối nước, bỏng, cơn kéo dài là nguyên nhân tử vong có thể phòng.
- Vinmec "Lưu ý khi dùng thuốc chống động kinh" — dùng hằng ngày đúng đủ liều; không tự tăng/giảm/
  ngừng; bỏ một lần có thể làm nồng độ dưới ngưỡng, tăng nguy cơ tái phát; thường dùng lâu dài/suốt
  đời; ngừng phải giảm dần; xét nghiệm định kỳ.
- Tâm Anh "Sai lầm khi sơ cứu người bệnh động kinh" — gọi cấp cứu khi cơn > 5 phút, nhiều cơn liên
  tiếp, khó thở/không tỉnh lại; các bước sơ cứu và sai lầm cần tránh.
Không nguồn nào nêu cách xử trí khi quên một liều đơn lẻ, nên bài chỉ dẫn về tờ hướng dẫn + dược
sĩ/bác sĩ. Hai bài Vinmec tiếng Anh về trạng thái động kinh/sơ cứu trả về HTTP 410 nên không dùng.

Lý do chọn: mục backlog đúng cụm, không phụ thuộc mùa, nguồn chính thức truy cập được; các mục cụm
"Đơn thuốc & giấy tờ" còn lại (sổ khám bệnh, BHYT) đang có quy định vừa sửa đổi, chưa đọc được văn
bản gốc chính thức trong phiên nên chưa viết.
Đã `git rm` `backlog/dong-kinh-uong-thuoc-deu-dan-quen-lieu-co-nguy-hiem-khong.md`.
