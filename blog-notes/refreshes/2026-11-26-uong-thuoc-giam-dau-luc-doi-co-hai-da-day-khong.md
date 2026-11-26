# 2026-11-26 — làm mới: `uong-thuoc-giam-dau-luc-doi-co-hai-da-day-khong`

Chọn bài này vì đây là bài cũ nhất (`publishDate` 2026-10-14) chưa có file trong `refreshes/` và
chưa có `updatedDate` — không phát hiện bài nào vi phạm guardrail khi rà toàn bộ `src/content/blog/`
(tìm tên thuốc/hoạt chất kèm liều lượng, lời khuyên tự đổi liều, nội dung "chữa khỏi"/cam kết... đều
không có trường hợp vi phạm, chỉ là các câu đúng hướng dẫn "không tự ý đổi liều, hỏi bác sĩ"). Nội
dung bài vốn đã khá đầy đủ (đoạn mở trả lời trực tiếp, đã có `faqs`, `sources`, mục "khi nào hỏi bác
sĩ, dược sĩ", phần nhắc app chỉ chiếm một mục) nên thay đổi lần này gọn: thêm `updatedDate:
2026-11-26`, thêm `feature: "nhac-uong-thuoc"` (bài trước đó chưa khai báo tường minh, nay khớp đúng
tính năng nhắc theo buổi mà phần CTA mô tả), và thêm một liên kết nội bộ tới bài [uống thuốc không
có nước, nuốt khan có hại không](/blog/uong-thuoc-ma-khong-co-nuoc-nuot-khan-co-hai-khong/) ở mục
cách uống an toàn cho dạ dày (bài có liên quan trực tiếp đến thói quen uống thuốc đúng cách). Hai
nguồn Vinmec đã có từ trước được fetch lại trong phiên này để xác minh vẫn đúng nội dung được trích
dẫn (cơ chế NSAID gây hại dạ dày, mốc "uống lúc đói" = trước/sau ăn 2 giờ) — không thêm nguồn mới.
Không thêm file backlog mới vì `blog-notes/backlog/` đã có 11 file, đủ mức tối thiểu 10 theo yêu cầu.
