# 2026-11-15 — làm mới: `cach-nho-uong-thuoc-huyet-ap-moi-ngay`

Chọn bài này vì đây là bài cũ nhất (`publishDate: 2026-10-03`) chưa có file trong
`blog-notes/refreshes/` và chưa có `updatedDate`. Bài vốn đã khá đầy đủ (đoạn mở trả lời trực tiếp,
4 FAQ, 1 nguồn Vinmec, mục "Khi nào nên hỏi bác sĩ, dược sĩ", 2 link nội bộ, phần giới thiệu app chỉ
nằm trong một mục ~1/6 bài) nên lần làm mới này chủ yếu bổ sung những gì còn thiếu: thêm frontmatter
`feature: "nhac-uong-thuoc"` (bài vốn chưa khai báo tường minh, trước đây rơi vào luật đoán theo
keyword), thêm một link nội bộ tới bài `tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong` (cùng chủ
đề tăng huyết áp, góc độ bổ sung: vì sao cần điều trị lâu dài) ngay trong đoạn giải thích vì sao
huyết áp ổn định không phải dấu hiệu đã khỏi bệnh, và đặt `updatedDate: 2026-11-15`. Không thêm
`sources` mới: đã tìm nguồn Bộ Y tế/WHO chính thức về tuân thủ thuốc huyết áp trong phiên này nhưng
không tìm được văn bản nào đủ cụ thể và fetch xác nhận được nội dung hỗ trợ trực tiếp, nên giữ
nguyên nguồn Vinmec đã có từ trước. Không phát hiện vấn đề guardrail nào trong bài. Đồng thời quét
nhanh toàn bộ `src/content/blog/` theo các mẫu vi phạm phổ biến (tên thuốc + liều, chủ đề cấm, "chữa
khỏi"/"cam kết"/"hiệu quả 100%", tuyên bố do bác sĩ/dược sĩ viết) — không thấy vi phạm nào khác cần
sửa trước.

Bổ sung backlog: thêm 2 file mới trong `blog-notes/backlog/` để đạt tối thiểu 10 file (từ 9 lên 11)
— `giay-xac-nhan-tiem-chung-co-thoi-han-bao-lau.md` và
`don-thuoc-kham-tu-xa-online-co-duoc-nha-thuoc-chap-nhan-khong.md`, cả hai thuộc cụm Đơn thuốc &
giấy tờ y tế, đã kiểm tra bằng WebSearch là câu hỏi tìm kiếm thật và chưa trùng ý định với bài hoặc
backlog hiện có; mỗi file đều ghi rõ cảnh báo cần xác minh văn bản gốc trước khi viết vì kết quả tìm
kiếm sơ bộ chưa cho câu trả lời chắc chắn.
