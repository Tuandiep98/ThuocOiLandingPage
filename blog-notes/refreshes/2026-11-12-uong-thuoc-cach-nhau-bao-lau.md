# 2026-11-12 — làm mới: `uong-thuoc-cach-nhau-bao-lau`

Chọn bài này vì đây là bài cũ nhất (`publishDate: 2026-09-30`) chưa từng được làm mới (không có
file nào trong `blog-notes/refreshes/` và chưa có `updatedDate`), và không bị nhánh `claude/blog-*`
nào khác đang dùng. Kiểm tra lại toàn bài theo mọi guardrail trong CLAUDE.md: không nêu tên
thuốc/biệt dược kèm liều, không khuyên đổi liều, không chẩn đoán, phần "Khi nào nên hỏi bác sĩ,
dược sĩ" đã có sẵn, FAQ (4 câu) và nguồn (`suckhoedoisong.vn`) đã có sẵn và vẫn đúng với nội dung,
đoạn mở đầu đã là câu trả lời trực tiếp ~55 từ, chỉ có một đoạn pitch app (~1/5 bài) — toàn bộ nội
dung đã đạt chuẩn hiện tại nên không cần viết lại. Thay đổi duy nhất: thêm `updatedDate: 2026-11-12`
và thêm frontmatter `feature: "nhac-uong-thuoc"` (còn thiếu — khớp với quy tắc suy luận mặc định
trong `src/lib/blog-feature.ts` cho bài không khai báo tường minh, nay khai báo rõ để khối "Tính
năng liên quan" ổn định không phụ thuộc vào từ khoá). Không thêm nguồn mới (nguồn cũ vẫn hợp lệ,
không cần xác minh lại). Backlog `blog-notes/backlog/` đã có đủ 10 file nên không thêm file mới.
