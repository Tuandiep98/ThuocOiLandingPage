# 2026-11-13 — bài mới: `bo-thuoc-lao-giua-chung-co-sao-khong`

Tiêu đề "Bỏ thuốc lao giữa chừng có sao không? Vì sao phải uống đủ cả liệu trình", keyword "bỏ
thuốc lao giữa chừng có sao không", cụm Thói quen dùng thuốc cho bệnh mạn tính/điều trị dài ngày
(góc độ tuân thủ, không chọn thuốc hay liều). Góc độ: chưa có bài nào về bệnh lao; khác
`uong-thuoc-xong-nam-ngay-co-sao-khong`, `viem-gan-b-...` và các bài bệnh mạn tính khác ở chỗ đây là
liệu trình dài nhiều tháng có điểm kết thúc, người bệnh dễ bỏ dở khi đỡ ho/hết sốt, và hậu quả
riêng là lao kháng thuốc + tiếp tục lây cho người xung quanh. Nội dung: vì sao kéo dài nhiều tháng,
hậu quả bỏ dở, vì sao hay bỏ dở, mẹo giữ lịch, quên liều dẫn về cán bộ y tế/dược sĩ/tờ hướng dẫn,
dấu hiệu cần báo bác sĩ/đi khám. Không nêu tên thuốc/hoạt chất nào (dù trang WHO có liệt kê),
không nêu liều; thời gian điều trị chỉ trích nguyên văn nguồn (WHO 4–6 tháng hằng ngày với lao nhạy
thuốc; Tâm Anh ít nhất 6 tháng, lao kháng thuốc trung bình khoảng 2 năm). Không nhắc thuốc lao
được cấp miễn phí (chỉ thấy trong tài liệu không chính thức, chưa xác minh được).

Mục app liên kết `/tinh-nang/theo-doi-lieu-trinh/` (`feature: theo-doi-lieu-trinh`,
`imageTag: tien-trinh-lieu` — khớp `usedWhen` "tránh bỏ ngang liệu trình dài ngày"); chỉ nêu những
gì `site.ts` có (nhập tay hoặc chụp đơn + kiểm tra lại, thông báo Đã uống / Báo lại 10 phút, nhắc
lần hai sau 45 phút, số liều đã uống trên tổng số liều, báo sắp hết thuốc, nhắc tái khám, xuất báo
cáo PDF/CSV).

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- WHO fact sheet Tuberculosis — lây qua không khí khi ho/hắt hơi/khạc nhổ; phòng và điều trị được;
  thuốc dùng hằng ngày 4–6 tháng; kháng thuốc khi dùng thuốc không đúng, gồm việc ngừng điều trị
  sớm; "nguy hiểm khi ngừng thuốc sớm hoặc không có chỉ dẫn y tế".
- Bệnh viện Đa khoa Tâm Anh "Điều trị lao phổi" — ít nhất 6 tháng, phối hợp thuốc dài ngày để diệt
  hết vi khuẩn; lao kháng thuốc trung bình ~2 năm; tự ngưng/giảm liều → kháng thuốc; không tuân thủ
  → tổn thương phổi vĩnh viễn; bác sĩ dựa vào xét nghiệm để kết luận khỏi; tác dụng phụ (sốt kéo
  dài, buồn nôn, chóng mặt, dễ bầm tím/chảy máu); ho ra máu, khó thở.
Không tìm được trang Bộ Y tế/Bệnh viện Phổi Trung ương phù hợp trong phiên.

Lý do chọn: mục backlog đúng mùa duy nhất (Tết) chưa tới thời điểm; các mục cụm "Đơn thuốc & giấy
tờ" còn lại cần đọc văn bản pháp luật gốc (vd giấy khám sức khỏe — Thông tư 32/2023 vừa được sửa
bởi Thông tư 25/2026, kết quả tìm kiếm mâu thuẫn), chưa xác minh được trong phiên. Mùa cúm đã có
bài. Chọn câu hỏi tìm kiếm thật mới trong cụm bệnh mạn tính, có nguồn WHO + bệnh viện lớn. Không
dùng file backlog nào.
