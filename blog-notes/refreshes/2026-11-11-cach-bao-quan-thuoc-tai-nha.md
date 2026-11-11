# 2026-11-11 — làm mới: `cach-bao-quan-thuoc-tai-nha`

Chọn bài này vì đây là bài cũ nhất (`publishDate: 2026-09-29`) chưa từng được làm mới (không có
`updatedDate`, không có file trong `blog-notes/refreshes/`) — đúng ưu tiên 2 trong quy trình bảo
trì buổi tối, sau khi quét toàn bộ `src/content/blog/` không thấy bài nào vi phạm guardrail cần
sửa trước (các cụm từ "chữa khỏi", "hướng thần", "thuốc an thần", "kháng sinh" tìm thấy ở vài bài
khác đều nằm trong ngữ cảnh phủ định hoặc mô tả nhóm thuốc chung, không phải lời khuyên dùng/đổi
liều).

Bài gốc đã khá đầy đủ: có đoạn mở đầu trả lời trực tiếp, FAQ, nguồn Vinmec, mục "Khi nào nên hỏi
bác sĩ, dược sĩ", mục nhắc app ở một đoạn duy nhất. Đã xác minh lại nguồn Vinmec đang dẫn
(`nhung-dieu-can-biet-ve-bao-quan-thuoc-tai-nha-vi`) vẫn còn truy cập được và vẫn khớp với nội dung
bài (mốc nhiệt độ 15–25°C, tránh phòng tắm/bếp/ánh nắng, để xa tầm tay trẻ em). Tìm thêm nguồn
chính thống của Bộ Y tế riêng cho hộ gia đình nhưng không có — Thông tư 36/2018/TT-BYT về "thực
hành tốt bảo quản thuốc" chỉ áp dụng cho cơ sở sản xuất/kinh doanh dược, không phù hợp để trích dẫn
cho ngữ cảnh bảo quản tại nhà, nên không thêm vào `sources`.

Cải thiện: thêm một đoạn ngắn về thuốc dạng siro/thuốc nước/thuốc bột pha sẵn không giữ hạn dùng
như in trên hộp sau khi mở nắp (lấy từ chính nguồn Vinmec đã dẫn, mục này trước đó bài chưa nhắc),
liên kết sang bài chuyên sâu [thuốc siro, thuốc nước sau khi mở nắp dùng được bao lâu]
(/blog/thuoc-siro-thuoc-nuoc-sau-khi-mo-nap-dung-duoc-bao-lau/); và thêm liên kết sang
[cách xem hạn sử dụng thuốc](/blog/cach-xem-han-su-dung-thuoc/) ở mục kiểm tra định kỳ. Đặt
`updatedDate: 2026-11-11`. Không đổi slug, tiêu đề, `publishDate`, `keyword`, `segment`,
`ctaTitle`/`ctaDescription`.

Không thêm file backlog mới — `blog-notes/backlog/` đã có 11 file, vượt mức tối thiểu 10, và không
mục nào đang được một nhánh `claude/blog-*` chưa merge sử dụng (tất cả nhánh `claude/blog-*` hiện
có đều đã merge vào `main`).
