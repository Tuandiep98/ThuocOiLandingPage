# 2026-11-04 — làm mới: `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone`

Chọn bài này vì không phát hiện bài nào vi phạm guardrail trong lượt rà soát (grep các từ khoá rủi
ro: kháng sinh, "chữa khỏi"/"cam kết", gây nghiện/hướng thần, liều cho trẻ em/mang thai — các bài
có nhắc từ khoá này đều đã hedging đúng, dẫn về hỏi bác sĩ/dược sĩ, không vi phạm). Trong các bài
`publishDate` 2026-09-24 chưa có file `refreshes/` và chưa có `updatedDate` (44 bài), đây và
`me-sau-sinh-uong-thuoc-bo-loi-sua-dung-gio` cùng là bài cũ nhất; chọn bài này vì cấu trúc cũ pitch
tính năng app nặng nhất (4 mục H3 liên tiếp, gần nửa bài) và hoàn toàn chưa có `faqs`, `feature`,
liên kết nội bộ.

Thay đổi: viết lại đoạn mở đầu thành câu trả lời trực tiếp ~40–60 từ ngay dưới tiêu đề; gộp 4 mục
con H3 "Thuốc ơi giúp gì" thành một đoạn duy nhất dưới một `##` (còn khoảng 1/4 bài); đổi mục "Lưu
ý khi thiết lập hộ" thành mục `## Khi nào nên hỏi bác sĩ, dược sĩ` với danh sách mốc cụ thể (thông
tin không chắc, đơn thuốc đổi sau tái khám, dấu hiệu bất thường, quên nhiều liều liên tiếp); thêm
`faqs` (4 câu, trong đó có câu về Android không có báo thức riêng vượt im lặng, đối chiếu đúng với
FAQ trang tính năng Nhắc uống thuốc); thêm `feature: gia-dinh` (khớp quy tắc đoán tự động trong
`src/lib/blog-feature.ts` vì từ khoá có "cha mẹ"); thêm 2 liên kết nội bộ tới
`nhac-bo-me-uong-thuoc-tu-xa` và `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh`; đặt
`updatedDate: 2026-11-04`. Không sửa `ctaTitle`/`ctaDescription` (bài đăng 2026-09-24, sau mốc
2026-09-17, đã có CTA tuỳ biến phù hợp, giữ nguyên). Không tìm được nguồn chính thống nào xác minh
được cho nội dung bài (bài thuần về cách thao tác app, không có claim y khoa cần trích dẫn), nên
không thêm `sources` — đúng theo CLAUDE.md ("không bịa link").

Mọi claim về app (quét đơn AI, nhập tay không giới hạn và không tính lượt quét, báo thức riêng iOS
26+, nhóm Gia đình mời bằng mã QR hết hạn 10 phút, tối đa 10 thành viên gói Gia đình) đối chiếu
đúng với `src/data/site.ts` (phần `featurePages` — `nhac-uong-thuoc`, `gia-dinh` — và `plans`).

`npx astro check` và `npm run build` đều sạch (0 lỗi) — build dùng stub Supabase tạm trên
127.0.0.1:8765 vì không có `SUPABASE_URL`/`SUPABASE_ANON_KEY` trong môi trường, đã tắt stub và xoá
`dist/`/`.astro/` sau khi build xong.

Backlog: thêm 2 file mới — `don-thuoc-viet-tay-khong-co-dau-bac-si-co-hop-le-khong.md` (cụm đơn
thuốc & giấy tờ, câu hỏi về tính hợp lệ của đơn giấy thiếu chữ ký/dấu) và
`the-bao-hiem-y-te-dien-tu-vssid-co-dung-thay-the-giay-khi-di-kham-khong.md` (cụm đơn thuốc & giấy
tờ, dùng VssID/VNeID/CCCD gắn chip thay thẻ BHYT giấy — đã xác nhận nhu cầu tìm kiếm thật qua
WebSearch trong phiên, khác bài đã có về mất thẻ giấy) — nâng tổng số file backlog từ 10 lên 12.
Không sửa hay xoá file backlog nào có sẵn.
