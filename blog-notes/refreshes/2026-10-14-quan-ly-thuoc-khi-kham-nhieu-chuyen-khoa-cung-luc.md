# 2026-10-14 — làm mới: `quan-ly-thuoc-khi-kham-nhieu-chuyen-khoa-cung-luc`

Bài cũ nhất chưa được làm mới và
không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-12; `nguoi-cham-soc-chuyen-
nghiep-quan-ly-thuoc-nguoi-gia` 09-07 vẫn chờ merge trên `claude/blog-maintenance-2026-10-04`,
`meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung` 09-11 trên `claude/blog-maintenance-2026-10-12`, và
`uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca` 09-12 trên `claude/blog-maintenance-2026-10-13` nên cả
ba vẫn bị bỏ qua), không có vi phạm guardrail nào (đã rà soát toàn bộ bài, không tên thuốc kèm liều,
không hướng dẫn tự đổi/ngừng thuốc, app chỉ nêu đúng tính năng tách riêng từng loại thuốc/lịch
tuần/nhóm Gia đình có trong `site.ts`, không tự nhận kiểm tra tương tác thuốc). Đã: thay đoạn mở đầu
bằng câu trả lời trực tiếp ~60 từ; thêm mục riêng "Khi nào nên hỏi bác sĩ, dược sĩ ngay" với 4 tình
huống cụ thể (trước đó không có mục này, chỉ có một câu chung ở cuối bài); gộp 2 đoạn giới thiệu tính
năng app liền nhau thành đúng 1 mục cuối bài, cắt bớt câu lặp ý; thêm `faqs` (4 câu); thêm `sources`
(bài "Những tương tác thuốc nguy hiểm thường gặp" của Vinmec, đã fetch trong phiên này — lấy đúng
phần khuyến cáo khai báo đầy đủ thuốc/thực phẩm chức năng/dược liệu đang dùng cho bác sĩ, dược sĩ,
không suy diễn thêm); thêm 2 liên kết nội bộ tới `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` và
`doi-bac-si-doi-noi-kham-can-mang-theo-gi`; đặt `updatedDate`. Không đổi title/publishDate/keyword/
segment. Phần giới thiệu tính năng app giữ trong đúng 1/4 mục (~25%, đúng khuyến nghị). Không đặt
`imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật chủ đề nhiều đơn từ nhiều chuyên
khoa. Dọn backlog: bỏ 4 mục đã trùng (nghiền thuốc viên + giảm đau bụng đói — đang chờ merge trên
nhánh `claude/blog-2026-10-13`/`claude/blog-2026-10-14`; đơn thuốc điện tử + thuốc hết hạn — đã có
bài `don-thuoc-dien-tu-la-gi` và `vut-bo-thuoc-het-han-dung-cach`), đánh số lại, bổ sung 3 mục mới
(#8 siro/thuốc nước sau khi mở nắp, #9 danh mục thuốc BHYT chi trả, #10 uống nhầm thuốc của người
khác), tổng còn 10 mục, cả ba mục mới đã xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên
này.
