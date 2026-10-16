# 2026-10-11 — làm mới: `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien`

Bài cũ nhất chưa được làm mới và
không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-11; bài 2026-09-07
`nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
`claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua), không có vi phạm guardrail nào (đã rà soát
toàn bộ 58 bài trong `src/content/blog/` tìm tên thuốc cụ thể kèm liều, hướng dẫn tự đổi liều,
chủ đề off-limits, số liệu bịa đặt, claim bác sĩ/dược sĩ biên tập — không phát hiện vi phạm nào).
Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; thêm mục riêng "Khi nào nên hỏi bác sĩ,
dược sĩ ngay" với 4 tình huống cụ thể (thuốc nào thêm/giữ/ngừng, mua thuốc nếu nhà thuốc đóng cửa,
thuốc giảm đau an toàn tự dùng thêm, báo vitamin/thực phẩm bổ sung đang dùng song song) — trước đó
chỉ có một câu chung lồng trong mục giới thiệu app; thêm `faqs` (4 câu); thêm `sources` (tài liệu
"Các Bước Tiếp Theo: Chuẩn bị xuất viện" của Alberta Health Services, bản dịch tiếng Việt chính
thức, đã fetch và đọc toàn văn trong phiên này — lấy đúng phần "Sử dụng thuốc an toàn" và "Thuốc
của tôi", không suy diễn thêm); thêm 2 liên kết nội bộ tới
`quan-ly-thuoc-khi-kham-nhieu-chuyen-khoa-cung-luc` và `nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan`;
đặt `updatedDate`. Không đổi title/publishDate/keyword/segment. Phần giới thiệu tính năng app giữ
nguyên trong đúng 1 mục cuối bài (~1/5, trong khuyến nghị ~1/4). Không đặt `imageTag` — không có
ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề nhiều loại thuốc xen kẽ sau xuất viện. Bổ
sung backlog thêm 2 mục (#11 đơn thuốc điện tử, #12 thuốc hết hạn sử dụng vài ngày), nâng tổng số
lên 12 mục, cả hai đã xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên này.
