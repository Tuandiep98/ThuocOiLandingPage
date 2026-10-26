# 2026-10-26 — làm mới: `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc`

Chọn bài này vì đây là bài đăng (2026-09-19) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate` — không phát hiện vi phạm guardrail nào cần
ưu tiên xử lý trước (đã rà toàn bộ 72 bài theo các mẫu nghi vấn: tên thuốc + hàm lượng, "chữa khỏi",
tự xưng được bác sĩ/dược sĩ biên tập — không thấy vi phạm thật). Đã thêm đoạn mở đầu trả lời trực
tiếp câu hỏi mục tiêu; thêm trích dẫn nguồn WHO (đã fetch trong phiên này, xác nhận số liệu tuân thủ
thuốc dài hạn ~50% ở nước phát triển) vào mục giải thích vì sao tuần đầu dễ quên; tách một mục nguyên
tắc chung xây thói quen (không nhắc đến app) ra khỏi phần quảng bá tính năng; dồn toàn bộ phần quảng
bá app (quét đơn, lịch nhắc theo buổi, theo dõi tiến trình) từ ba mục rải rác thành một mục duy nhất;
thêm frontmatter `feature: "nhac-uong-thuoc"`; thêm 4 câu hỏi thường gặp (`faqs`); thêm 2 liên kết nội
bộ tới `/blog/dau-hieu-quen-lieu-uong-trung-lieu-thuoc/` và `/blog/cach-nho-uong-thuoc-huyet-ap-moi-ngay/`
trong mục "Khi nào nên hỏi bác sĩ, dược sĩ". Giữ nguyên slug, `publishDate`, `keyword`, `segment`,
`ctaTitle`/`ctaDescription` (bài đăng sau 2026-09-17 nên không bắt buộc giữ, nhưng nội dung CTA hiện
tại vẫn đúng với `site.ts` nên không đổi). Backlog đã có 11 file (đủ ngưỡng tối thiểu 10), nhưng vẫn
bổ sung thêm 2 file mới để dự phòng cho các routine sau (đã kiểm tra bằng WebSearch là câu hỏi tìm
kiếm thật, khác ý định với bài/backlog đã có):
`blog-notes/backlog/uong-thuoc-xong-nam-ngay-co-sao-khong.md` và
`blog-notes/backlog/mat-so-kham-benh-giay-y-ba-phai-lam-sao.md`.
