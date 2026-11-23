# 2026-11-23 — bài mới: `benh-parkinson-uong-thuoc-dung-gio`

Tiêu đề "Bệnh Parkinson: vì sao phải uống thuốc đúng giờ?", keyword `bệnh Parkinson uống thuốc đúng
giờ`, cụm Thói quen dùng thuốc cho bệnh mạn tính (góc tuân thủ, không chọn thuốc hay liều), feature
`nhac-uong-thuoc`. Góc độ: chưa có bài nào về Parkinson; khác các bài mạn tính đã có (tuyến giáp, huyết
áp, tiểu đường, glôcôm…) ở chỗ với Parkinson độ chính xác về giờ uống quan trọng hơn hẳn — trễ liều có
thể khiến triệu chứng quay lại trước liều sau (thời gian "off"). Không nêu tên hoạt chất/nhóm thuốc,
không liều, không khoảng cách cụ thể với bữa ăn (chỉ nói bữa nhiều đạm/no có thể ảnh hưởng → hỏi bác
sĩ); quên liều dẫn về tờ hướng dẫn + bác sĩ/dược sĩ, không uống gộp. Không đưa lời khuyên "uống ngay
khi nhớ ra" của Parkinson's UK (guardrail không hướng dẫn xử trí liều).

Mục app liên kết `/tinh-nang/nhac-uong-thuoc/`, chỉ nêu những gì `site.ts` có (nhập tay/chụp đơn +
kiểm tra, lịch theo buổi hoặc theo giờ, Đã uống / Báo lại 10 phút, nhắc lần hai 45 phút, không cần
mạng, báo thức iOS 26+, Cảnh báo người chăm sóc trong nhóm Gia đình, xuất PDF/CSV); nói rõ app không
đánh giá triệu chứng, không tính liều/giờ thay bác sĩ. Không đặt `imageTag`.

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Vinmec "Khám ngoại trú đối với bệnh Parkinson" (ThS.BS Vũ Duy Dũng) — "một bệnh của sự tính toán thời
  gian"; nhật ký thời điểm uống thuốc và đáp ứng trong 24 giờ thường rất có ích; hiện tượng wearing off.
- WHO "Parkinson disease" — triệu chứng vận động (chậm, run, cứng, khó đi, mất thăng bằng); chưa chữa
  khỏi, thuốc/phẫu thuật/phục hồi chức năng giảm triệu chứng.
- Parkinson's UK "Q&A: the importance of getting Parkinson's medication on time" — trễ/quên liều khiến
  triệu chứng không được kiểm soát tốt, có thể tăng trong ngày hoặc hôm sau; cẩn thận lái xe; đặt báo
  thức, nhờ người nhà, hộp chia thuốc; khi nằm viện báo cần uống giờ cố định, hỏi được tự giữ thuốc.
- Parkinson's UK "Get It On Time" — cần thuốc đúng giờ mọi lần; trễ gây căng thẳng, lo âu, bất động,
  run nặng.
- Parkinson's Foundation "Managing Off Time" — định nghĩa "off"; uống đúng giờ giảm đợt off khó lường;
  bữa nhiều đạm/no ảnh hưởng, hỏi bác sĩ về thời điểm; ghi nhật ký triệu chứng.
(Trang NHS Parkinson's treatment đã fetch nhưng không hỗ trợ nhận định về giờ uống nên không dùng.)

Lý do chọn: mục backlog `benh-parkinson-uong-thuoc-dung-gio.md` (đã xoá) kiểm chứng được bằng bệnh viện
lớn trong nước + WHO ngay trong phiên; mục Tết chưa tới mùa (giữa tháng 12), các mục giấy tờ BHYT cần
văn bản gốc chưa kiểm chứng trong phiên này.
