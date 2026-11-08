# 2026-11-08 — làm mới: `con-dau-con-re-cham-bo-me-chong-vo-uong-thuoc`

Rà soát toàn bộ `src/content/blog/` (grep tên thuốc/hoạt chất thường gặp đi kèm mg, các cụm
chữa khỏi/cam kết/hiệu quả 100%/cường dương/giảm cân/gây nghiện/hướng thần/phá thai, và các cụm
nhắc tới bác sĩ/dược sĩ biên soạn bài) không thấy bài nào vi phạm guardrail — các kết quả khớp đều
là nhắc chung đến bác sĩ/dược sĩ trong nội dung, không phải claim tác giả. Chọn làm mới bài cũ nhất
chưa từng có file trong `blog-notes/refreshes/` và chưa có `updatedDate`: `con-dau-con-re-cham-bo-me-chong-vo-uong-thuoc`
(đăng 2026-09-26), một trong các bài thuộc nhóm audience-slicing đầu tiên mà CLAUDE.md đã lưu ý
nên không viết thêm kiểu này — bài gần như toàn bộ là pitch tính năng ứng dụng (4 mục con đều về
app), không có đoạn trả lời trực tiếp, không có FAQ.

Đã sửa: thêm đoạn mở đầu trả lời trực tiếp 40–60 từ; gộp 4 mục con pitch app thành đúng một mục
`## Thuốc ơi giúp cả nhà xem chung một nguồn thông tin` (bỏ chi tiết báo thức riêng iOS 26 để giữ
tỉ lệ pitch app ở khoảng 1/4 bài); thêm một mục mới hoàn toàn không nhắc app
`## Cách chủ động nắm thông tin dù không theo dõi từ đầu như con ruột` (xin xem/chụp đơn gốc, ghi
chú chung, đi cùng tái khám nếu tiện); thêm mục `## Khi nào nên hỏi bác sĩ, dược sĩ` rõ ràng (trước
chỉ có một câu ở cuối); thêm `feature: "gia-dinh"` vào frontmatter; thêm 4 FAQ (bao gồm một câu về
quyền riêng tư — nên hỏi trước khi xem đơn của bố mẹ, không tự ý); thêm 2 liên kết nội bộ tới
`/blog/nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan/` và
`/blog/anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc/`. Mọi claim về ứng dụng (quét
AI/nhập tay lưu đơn, mã QR mời một lần tự hết hạn, đơn chỉ hiển thị khi được chủ động thêm vào
nhóm, tiến trình liều, số thành viên theo gói) đối chiếu với mục `featurePages` (slug `gia-dinh`)
trong `src/data/site.ts`. Không thêm `sources` — chủ đề là kỹ năng giao tiếp/chia sẻ thông tin
trong gia đình, không tìm được nguồn chính thức (Bộ Y tế/bệnh viện) phù hợp để trích dẫn trong
phiên này. Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `ctaTitle`, `ctaDescription`.

Bổ sung backlog: `hen-suyen-copd-dung-ong-hit-deu-dan-nhac-gio-xit-thuoc.md` và
`viem-gan-b-man-tinh-uong-thuoc-khang-virus-deu-dan-quen-lieu-co-sao-khong.md` (cụm Thói quen dùng
thuốc cho bệnh mạn tính, góc độ thói quen/tuân thủ — đã xác nhận nhu cầu tìm kiếm thật qua
WebSearch, không trùng bài hoặc backlog hiện có), đưa tổng số file trong `blog-notes/backlog/` lên
11.
