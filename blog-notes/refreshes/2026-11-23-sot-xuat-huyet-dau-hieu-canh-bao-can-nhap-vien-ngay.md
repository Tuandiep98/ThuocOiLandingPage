# 2026-11-23 — làm mới: `sot-xuat-huyet-dau-hieu-canh-bao-can-nhap-vien-ngay`

Chọn bài này vì đây là bài cũ nhất (publishDate 2026-10-11) chưa từng có file trong
`blog-notes/refreshes/` và chưa có `updatedDate` — không phát hiện bài nào vi phạm guardrail trong
lượt rà soát (grep các mẫu claim tác giả bác sĩ/dược sĩ, chủ đề cấm, lời khuyên tự đổi liều, số liệu
bịa trên toàn bộ `src/content/blog/`). Bài vốn đã khá đầy đủ: đoạn trả lời trực tiếp đầu bài, FAQ,
nguồn Vinmec, mục "Khi nào nên hỏi bác sĩ, dược sĩ" và một liên kết nội bộ đều đã có sẵn, nên lần
làm mới này tập trung vào phần còn thiếu theo yêu cầu CLAUDE.md: thêm frontmatter `feature:
"nhac-uong-thuoc"` (bài trước đó không khai báo tường minh, chỉ dựa vào luật suy đoán theo
keyword/segment — tính năng chính bài nói tới là nhắc đúng giờ và theo dõi tiến trình liều khi theo
dõi tại nhà), thêm liên kết nội bộ thứ hai tới bài `bi-di-ung-thuoc-phai-lam-sao` (dấu hiệu dị ứng
thuốc hạ sốt cần cấp cứu — liên quan trực tiếp đến đoạn khuyên không tự mua thuốc hạ sốt), và set
`updatedDate: 2026-11-23`. Đã dùng WebFetch xác minh lại hai nguồn Vinmec sẵn có vẫn còn truy cập
được và vẫn khớp với nội dung bài (giai đoạn nguy hiểm ngày 3-7, các dấu hiệu cảnh báo) — không
thêm nguồn mới vì không tìm được văn bản gốc Bộ Y tế, chỉ có các bài tóm tắt thứ cấp.

Backlog: thêm 2 file mới trong `blog-notes/backlog/` (đã xác nhận nhu cầu tìm kiếm thật qua
WebSearch) — `thuoc-vien-boc-khoi-vi-de-ngoai-dung-duoc-bao-lau.md` (cụm Uống thuốc đúng cách) và
`mat-so-kham-benh-so-y-ba-phai-lam-sao.md` (cụm Đơn thuốc & giấy tờ y tế) — để giữ backlog trên 10
file sau khi routine sáng mai dùng một mục.
