# 2026-11-28 — làm mới: `tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong`

Quét toàn bộ 106 bài trong `src/content/blog/` cho vi phạm guardrail (tên thuốc/hoạt chất kèm
liều, lời khuyên tự đổi liều, chẩn đoán, chủ đề cấm, số liệu bịa, ngụ ý bác sĩ/dược sĩ viết/duyệt)
— không tìm thấy vi phạm nào; các cụm từ khớp mẫu tìm kiếm ("chữa khỏi", "tự ngừng", "mg"…) đều là
ngữ cảnh an toàn (khẳng định bệnh mạn tính chưa có cách chữa khỏi, hoặc khuyên không tự ngừng/đổi
liều). Vì vậy chuyển sang ưu tiên 2: chọn bài cũ nhất (theo `publishDate`) chưa có file trong
`blog-notes/refreshes/` và chưa có `updatedDate` — là bài `tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong`
(đăng 2026-10-16). Bài `vo-chong-lon-tuoi-nhac-thuoc-cho-nhau` (đăng 2026-09-25) già hơn nhưng đã có
`updatedDate: 2026-11-07` nên bị loại theo tiêu chí ưu tiên 2.

Bài này đã đạt hầu hết chuẩn hiện hành (đoạn mở trả lời trực tiếp ~55 từ, FAQ 4 câu, có nguồn Vinmec
đã xác minh trước đó, có mục "Khi nào nên hỏi bác sĩ, dược sĩ", 2 link nội bộ, chỉ 1 mục nhắc app) —
không cần sửa nội dung. Thay đổi duy nhất: thêm `feature: "theo-doi-lieu-trinh"` (bài nói về theo
dõi tỉ lệ liều uống và lịch tái khám — khớp đúng nội dung trang tính năng Theo dõi liệu trình hơn là
suy luận mặc định "nhắc uống thuốc" của `blog-feature.ts` khi không khai `feature`), và set
`updatedDate: 2026-11-28`. Không thêm `sources` mới (nguồn Vinmec có từ trước vẫn phù hợp với nội
dung, không cần fetch lại).

Bổ sung backlog 2 mục mới (đã xác nhận nhu cầu tìm kiếm qua WebSearch trong phiên): `giay-ra-vien-dung-de-lam-gi-co-thoi-han-bao-lau`
(cụm Đơn thuốc & giấy tờ y tế) và `uong-nham-thuoc-het-han-moi-phat-hien-co-sao-khong` (cụm Uống
thuốc đúng cách) — nâng backlog từ 9 lên 11 file.
