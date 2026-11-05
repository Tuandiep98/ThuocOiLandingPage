# 2026-11-05 — làm mới: `me-sau-sinh-uong-thuoc-bo-loi-sua-dung-gio`

Rà soát toàn bộ `src/content/blog/` không thấy bài nào vi phạm guardrail (grep các từ khoá rủi ro:
liều lượng mg/ml kèm tên thuốc/hoạt chất, "chữa khỏi"/"cam kết"/"hiệu quả 100%", claim được bác
sĩ/dược sĩ biên soạn hoặc kiểm duyệt, kháng sinh tự dùng, liều cho trẻ em/mang thai, an thần/hướng
thần/phá thai/giảm cân/cường dương — các bài có nhắc những từ khoá này đều hedging đúng, chỉ nhắc
tên nhóm thuốc chung khi nói về tương tác hoặc thời hạn đơn, không vi phạm). Trong các bài chưa có
file `refreshes/` và chưa có `updatedDate`, bài cũ nhất theo `publishDate` là
`me-sau-sinh-uong-thuoc-bo-loi-sua-dung-gio` (2026-09-24, cùng ngày với
`cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone` đã được làm mới hôm 2026-11-04) — chọn
bài này theo đúng thứ tự ưu tiên "bài cũ nhất chưa từng làm mới".

Thay đổi: viết lại đoạn mở đầu thành câu trả lời trực tiếp ~59 từ ngay dưới tiêu đề; gộp 4 mục con
H3 "Thuốc ơi giúp mẹ sau sinh giữ đúng lịch" thành một đoạn duy nhất dưới một `##` (còn ~24% tổng số
từ của bài, từ gần 41% trước đó); đổi mục "Lưu ý an toàn" thành `## Khi nào nên hỏi bác sĩ, dược sĩ`
với danh sách mốc cụ thể (quên/trùng liều, muốn đổi hoặc ngừng thuốc, thời điểm uống ảnh hưởng đến
bé bú mẹ, dấu hiệu bất thường); thêm `faqs` (4 câu, trước đó chưa có); thêm
`feature: "nhac-uong-thuoc"` tường minh (nội dung trọng tâm là giữ giờ nhắc linh hoạt giữa nhịp
thức/ngủ xáo trộn — nếu không khai báo, quy tắc đoán tự động trong `src/lib/blog-feature.ts` sẽ bắt
nhầm sang `gia-dinh` chỉ vì khớp từ khoá "cho con"); thêm 2 liên kết nội bộ tới
`uong-thuoc-bo-thai-ky-dung-gio` (giai đoạn trước đó, mang thai — bài kia đã link ngược lại bài
này từ trước) và `cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai`; đặt `updatedDate: 2026-11-05`.
Không sửa `ctaTitle`/`ctaDescription` (bài đăng 2026-09-24, sau mốc 2026-09-17, CTA tuỳ biến đã phù
hợp, giữ nguyên).

Nguồn: thêm 1 `sources` — bài "Phụ nữ sau sinh 1 tháng có nên bổ sung sắt và canxi không?" của
Vinmec (Ths.Bs Phan Ngọc Hải, Vinmec Đà Nẵng), đã fetch và đọc trong phiên này, hỗ trợ đúng câu
"nhiều mẹ sau sinh được khuyên tiếp tục bổ sung sắt, canxi, vitamin tổng hợp tương tự như khi mang
thai" — không lấy thông tin về liều lượng hay thời điểm cụ thể từ nguồn này (bài không có), nên
phần đó của bài vẫn giữ nguyên hướng dẫn chung "hỏi bác sĩ/dược sĩ", không bổ sung chi tiết không
kiểm chứng được.

Mọi claim về app (nhập tay không giới hạn và không tính lượt quét AI, lời nhắc theo buổi mẹ tự
chọn, theo dõi tiến trình liệu trình, nhóm Gia đình mời bằng mã QR) đối chiếu đúng với
`src/data/site.ts` (`featurePages` — `nhac-uong-thuoc`, `gia-dinh`).

`npx astro check` và `npm run build` đều sạch (0 lỗi) — build dùng stub Supabase tạm trên
127.0.0.1:8765 vì không có `SUPABASE_URL`/`SUPABASE_ANON_KEY` trong môi trường, đã tắt stub và xoá
`dist/` sau khi build xong.

Backlog: không thêm file mới — `blog-notes/backlog/` đã có 11 file, vượt mức tối thiểu 10, và
không có mục nào cần thay thế trong lượt này.
