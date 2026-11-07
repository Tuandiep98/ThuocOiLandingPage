# 2026-11-07 — làm mới: `vo-chong-lon-tuoi-nhac-thuoc-cho-nhau`

Chọn bài này vì đây là bài đăng (2026-09-25) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; mọi nhánh `claude/blog-*` còn trên remote
đều đã merge hết vào main nên không nhánh nào đang sửa bài này. Không có lỗi vi phạm guardrail nào
(đã rà lại toàn bài trước khi chọn) — đây là làm mới theo thứ tự ưu tiên 2, không phải sửa lỗi.

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp ngay dưới tiêu đề.
- Thêm `feature: "gia-dinh"` (khớp `imageTag` đã có) và `updatedDate: 2026-11-07`.
- Thêm 4 `faqs`, bám theo đúng tính năng nhóm Gia đình trong `site.ts` (đơn thuốc cá nhân tách
  riêng, báo thức riêng chỉ có trên iOS 26+, mời thêm người là tuỳ chọn).
- Thêm mục "Khi nào nên hỏi bác sĩ, dược sĩ" với các dấu hiệu cụ thể, kèm chỉ dẫn đến cơ sở y tế/gọi
  cấp cứu khi có dấu hiệu nặng.
- Thêm 2 liên kết nội bộ: `/blog/dau-hieu-quen-lieu-uong-trung-lieu-thuoc/` và
  `/blog/cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh/`, và link thẳng tới `/tinh-nang/gia-dinh/`
  trong đoạn đã nói về nhóm Gia đình.
- Không thêm `sources` — không có số liệu hay quy định chính thức nào cần trích nguồn riêng cho
  góc độ bài này (thói quen nhắc nhau giữa hai vợ chồng), chỉ dựa trên tính năng app đã có trong
  `site.ts`.

Backlog: không thêm file mới — `blog-notes/backlog/` đã có đủ 10 file theo yêu cầu tối thiểu.
