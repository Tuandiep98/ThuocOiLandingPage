# 2026-11-22 — bài mới: `glocom-tang-nhan-ap-quen-nho-thuoc-co-sao-khong`

Tiêu đề "Glôcôm (tăng nhãn áp) quên nhỏ thuốc có sao không?", keyword `glôcôm tăng nhãn áp quên nhỏ
thuốc`, cụm Thói quen dùng thuốc cho bệnh mạn tính (góc tuân thủ, không chọn thuốc hay liều), feature
`nhac-uong-thuoc`. Góc độ: chưa có bài nào về glôcôm; khác `thuoc-nho-mat-mui-tai-boi-ngoai-da-de-quen-hon-thuoc-uong`
(dạng thuốc nhỏ nói chung, mẹo đặt nhắc) và `thuoc-nho-mat-sau-khi-mo-nap-dung-duoc-bao-lau` (hạn dùng
sau mở nắp) ở chỗ đây là câu hỏi về một bệnh cụ thể: glôcôm góc mở không có triệu chứng ở giai đoạn đầu
nên quên thuốc không "báo động", trong khi tổn thương thị lực khó hồi phục. Không nêu tên hoạt chất/
nhóm thuốc, không liều, không thời gian giữa hai loại thuốc nhỏ; quên liều dẫn về tờ hướng dẫn + dược
sĩ/bác sĩ mắt, không tự nhỏ bù. Dấu hiệu cấp cứu lấy nguyên từ NHS, kèm 115.

Mục app liên kết `/tinh-nang/nhac-uong-thuoc/`, chỉ nêu những gì `site.ts` có (nhập tay/chụp đơn +
kiểm tra, Đã uống / Báo lại 10 phút, nhắc lần hai 45 phút, không cần mạng, màn hình khoá không hiện tên
thuốc, báo thức iOS 26+, nhắc tái khám, báo sắp hết thuốc); nói rõ app không đo nhãn áp/đánh giá bệnh.
Không đặt `imageTag`.

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Bệnh viện Tâm Anh "Glocom góc mở" — giai đoạn đầu thường không có triệu chứng sớm cho tới khi tổn hại
  thị lực; nguyên nhân mù lòa khó hồi phục; chưa chữa khỏi hoàn toàn nhưng chẩn đoán/điều trị sớm tránh
  phần lớn nguy cơ mất thị lực; thuốc nhỏ mắt hạ nhãn áp phổ biến; tuân thủ đúng chỉ dẫn dùng thuốc;
  khám mắt định kỳ, nhất là trên 40 tuổi.
- NEI (NIH) "Glaucoma" — lúc đầu thường không triệu chứng; điều trị không phục hồi tổn thương nhưng
  ngăn nặng thêm; thuốc nhỏ mắt kê đơn là điều trị phổ biến nhất; được kê thì dùng mỗi ngày; khám định kỳ.
- WHO "Blindness and vision impairment" — glôcôm trong các nguyên nhân hàng đầu, có thể gây mất thị
  lực không hồi phục.
- NHS "Glaucoma" — không bỏ lỡ tái khám; triệu chứng đột ngột (đau mắt dữ dội, đỏ mắt, nhức đầu, buồn
  nôn, quầng sáng cầu vồng) → cấp cứu, không tự lái xe.

Lý do chọn: mục backlog `glocom-tang-nhan-ap-quen-nho-thuoc-co-sao-khong.md` (đã xoá) kiểm chứng được
bằng nguồn bệnh viện lớn + WHO/NEI ngay trong phiên; mục Tết chưa tới mùa (giữa tháng 12), các mục giấy
tờ BHYT cần văn bản gốc chưa kiểm chứng trong phiên này.
