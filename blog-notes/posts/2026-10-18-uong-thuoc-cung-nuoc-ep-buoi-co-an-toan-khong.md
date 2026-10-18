# 2026-10-18 — bài mới: `uong-thuoc-cung-nuoc-ep-buoi-co-an-toan-khong`

`uong-thuoc-cung-nuoc-ep-buoi-co-an-toan-khong` — "Uống thuốc cùng nước ép bưởi có an toàn
không?" — keyword: `uống thuốc cùng nước ép bưởi có an toàn không` — cụm Uống thuốc đúng cách,
lấy từ backlog `uong-thuoc-cung-nuoc-ep-buoi-co-an-toan-khong.md` (đã xác nhận trước đó 3 bài
Vinmec riêng về chủ đề này). Góc độ: cơ chế chung vì sao bưởi/nước ép bưởi có thể làm tăng hoặc
giảm tác dụng của một số loại thuốc (enzyme CYP3A4 ở ruột non bị ảnh hưởng, protein vận chuyển
thuốc trong ruột), vì sao chỉ đổi giờ ăn bưởi xa giờ uống thuốc không chắc tránh được tương tác
(khác với tương tác thức ăn thông thường), và các nhóm thuốc chung (huyết áp, rối loạn nhịp tim,
mỡ máu — không nêu tên hoạt chất cụ thể) thường được nhắc kỹ hơn. Explicit: Thuốc ơi không kiểm
tra/cảnh báo tương tác thuốc–thực phẩm (không có trong `site.ts`) — chỉ nêu việc lưu ảnh đơn gốc
và theo dõi tiến trình liều giúp có danh sách đầy đủ khi hỏi dược sĩ. Không nêu tên hoạt chất cụ
thể nào (bỏ qua simvastatin, metformin, amiodarone mà nguồn Vinmec có nhắc, chỉ giữ nhóm thuốc
rộng). Liên kết nội bộ tới `uong-thuoc-chung-voi-sua-co-sao-khong` và
`cach-nho-uong-thuoc-huyet-ap-moi-ngay`. Không đặt `imageTag` — không có ảnh nào trong
`blog-images.ts` khớp chủ đề bưởi/tương tác thực phẩm.

Nguồn đã fetch trực tiếp trong phiên này: "Cảnh báo: Bưởi có thể tương tác với các loại thuốc
thông thường" (vinmec.com/vie/bai-viet/canh-bao-buoi-co-tuong-tac-voi-cac-loai-thuoc-thong-thuong-vi)
và "Ăn bưởi và uống thuốc: Một số lưu ý cần thận trọng"
(vinmec.com/vi/thong-tin-duoc/su-dung-thuoc-toan/buoi-va-uong-thuoc-mot-so-luu-y-can-trong) — chỉ
lấy phần cơ chế chung (enzyme CYP3A4, protein vận chuyển), lượng tham khảo (một trái bưởi hoặc
200ml nước ép), và khuyến nghị hỏi bác sĩ/dược sĩ; không lấy danh sách tên thuốc/hoạt chất cụ thể
mà hai bài này có nêu, không dùng số liệu "43 loại thuốc" hay "tăng 84%" (gắn với hoạt chất cụ
thể, không cần cho góc độ nguyên tắc chung của bài).

Guard check: đã fetch `origin`, xác nhận không có file `blog-notes/posts/2026-10-18-*` và không
có nhánh `origin/claude/blog-2026-10-18`. Ba nhánh `origin/claude/blog-2026-10-17`,
`origin/claude/blog-maintenance-2026-10-16`, `origin/claude/blog-maintenance-2026-10-17` đều đã
merge vào `main` (`git merge-base --is-ancestor` xác nhận), chỉ còn sót lại chưa bị xoá — không
có mục backlog nào bị khoá bởi nhánh chưa merge. Các mục backlog khác bị bỏ qua: Tết (`chuan-bi-
thuoc-khi-ve-que-an-tet`) và túi thuốc nhập học/du lịch nắng nóng đều chưa tới mùa (tháng 10,
theo `seasonal.md`); 4 mục BHYT/giấy chuyển tuyến cần đọc văn bản pháp luật gốc chưa làm trong
phiên này; 2 mục hạn dùng sau mở nắp (thuốc nhỏ mắt, siro) và mục uống nhầm thuốc người khác giữ
lại cho lần sau (ưu tiên mục đã có sẵn nguồn Vinmec rõ và ít rủi ro guardrail hơn).
