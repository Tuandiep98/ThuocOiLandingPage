# 2026-11-17 — làm mới: `co-nen-dung-lai-don-thuoc-cu`

Chọn bài này vì đây là bài cũ nhất (publishDate 2026-10-05) chưa có file trong `blog-notes/refreshes/`
và chưa có `updatedDate`, không có bài nào chưa refresh cũ hơn, và không phát hiện vi phạm guardrail
nào trong các bài đang có (đã rà soát toàn bộ `src/content/blog/*.md` bằng grep cho các cụm chỉ định
đổi liều/thuốc, chủ đề cấm và tuyên bố tác giả là bác sĩ/dược sĩ — không có kết quả đáng lo). Bài
`co-nen-dung-lai-don-thuoc-cu` vốn đã đạt hầu hết yêu cầu định dạng từ lúc viết (đoạn mở trả lời trực
tiếp ~57 từ, 4 FAQ, một nguồn đã kiểm chứng, mục "Khi nào nên hỏi bác sĩ, dược sĩ", 2 link nội bộ, chỉ
một đoạn nhắc đến app) nên lần làm mới này chỉ bổ sung phần còn thiếu: thêm frontmatter `feature:
"theo-doi-lieu-trinh"` (bài này đã được `featurePages` ở `src/data/site.ts` trỏ tới từ trang tính năng
"Theo dõi liệu trình" nên khớp với luật trong `src/lib/blog-feature.ts`) và đặt `updatedDate:
2026-11-17`.

Nguồn: giữ nguyên nguồn đã có (Bệnh viện Đa khoa Tâm Anh) — đã fetch lại trong phiên này để xác nhận
nội dung vẫn đúng với bài viết (khuyên không tự ý dùng lại đơn cũ, chỉ dùng lại dưới hướng dẫn bác sĩ
trong thời gian ngắn, cần đi khám khi có dấu hiệu nặng). Có tìm thêm nguồn chính thức
moh.gov.vn/dav.gov.vn nhưng không ra kết quả phù hợp sát với nội dung bài, nên không thêm nguồn mới.

Backlog: `blog-notes/backlog/` hiện có 11 file, đã trên mức tối thiểu 10 nên không cần thêm file mới
lần này.
