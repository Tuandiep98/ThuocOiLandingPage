# 2026-10-12 — làm mới: `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung`

Bài cũ nhất chưa được làm mới
và không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-11; bài cùng ngày
`quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` đang chờ merge trên nhánh
`claude/blog-maintenance-2026-10-11`, và bài 2026-09-07
`nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
`claude/blog-maintenance-2026-10-04`, nên cả hai vẫn bị bỏ qua; bài sáng cùng ngày hôm nay
`uong-thuoc-chung-voi-sua-co-sao-khong` trên nhánh `claude/blog-2026-10-12` chưa merge là bài mới,
không liên quan). Đã rà soát toàn bộ 58 bài hiện có để tìm vi phạm guardrail trước khi chọn bài
làm mới (tên thuốc/hoạt chất kèm liều hoặc cách dùng, hướng dẫn tự đổi/bỏ/uống bù liều, chẩn đoán,
chủ đề cấm, số liệu bịa, nhận là được bác sĩ/dược sĩ biên soạn, claim tính năng ngoài `site.ts`) —
không phát hiện vi phạm nào, nên chuyển sang tiêu chí 2 (bài cũ nhất chưa làm mới). Đã: thay đoạn
mở đầu bằng câu trả lời trực tiếp ~54 từ (trước đó dài hơn khuyến nghị và không nêu rõ cách làm
ngay từ câu đầu); thêm mục riêng "Khi nào nên hỏi lại bác sĩ, dược sĩ thay vì tự đoán" (trước đó
nội dung này nằm trong mục "Vẫn nên xem kỹ lại trước khi lưu", nay đổi tên mục và bổ sung rõ các
dấu hiệu cụ thể nên hỏi lại — tên thuốc lạ so với lần khám trước, liều dùng ghi không rõ); thêm
`faqs` (4 câu, các câu hỏi thực tế khi chụp đơn — đèn flash, vết gạch xoá/ghi chú lề, ảnh mờ một
góc, nhận đơn qua bản scan người khác gửi); thêm 2 liên kết nội bộ tới
`nhap-tay-hay-quet-ai-chon-cach-them-thuoc` và `doc-hieu-don-thuoc-bac-si-ghi-tat`; đặt
`updatedDate`. Không đổi title/publishDate/keyword/segment. Không tìm được nguồn chính thức nào
viết riêng về kỹ thuật chụp ảnh đơn thuốc để quét AI nên không thêm `sources`. Phần giới thiệu
tính năng app giữ nguyên trong đúng 1 mục cuối bài (~1/4, đúng khuyến nghị). Không đặt `imageTag`
— ảnh `them-don-nhieu-cach` trong danh sách duyệt sẵn chỉ khớp chủ đề so sánh cách thêm đơn, không
khớp thật trọng tâm bài này (kỹ thuật chụp ảnh rõ nét). Bổ sung 1 mục backlog mới (#11, "mỡ máu cao
có phải uống thuốc suốt đời không", đã xác minh nhu cầu tìm kiếm thật qua WebSearch) để danh sách
có 11 mục — dự phòng cho việc mục #3 "uống thuốc chung với sữa" nhiều khả năng sẽ được nhánh
`claude/blog-2026-10-12` (bài sáng hôm nay) dùng và xoá khỏi danh sách khi merge, nên vẫn còn ít
nhất 10 mục sau đó.
