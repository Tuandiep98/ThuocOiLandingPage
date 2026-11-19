# 2026-11-19 — làm mới: `co-nen-bao-quan-thuoc-trong-tu-lanh-khong`

Chọn bài này vì đây là bài cũ nhất (đăng 2026-10-07) chưa có file nào trong `blog-notes/refreshes/`
và chưa có `updatedDate`, không có bài hay nhánh `claude/blog-*` chưa merge nào khác đang dùng cùng
slug. Thay đổi chính: rút đoạn mở đầu từ 76 xuống 58 từ để đúng chuẩn trả lời trực tiếp 40–60 từ;
thêm frontmatter `feature: "quet-don-thuoc-ai"`; và sửa phần giới thiệu ứng dụng (cả `ctaTitle`,
`ctaDescription` và mục cuối bài) vì bản cũ khẳng định "ảnh gốc của đơn thuốc được lưu lại trong
ứng dụng để xem lại hướng dẫn bảo quản bất cứ khi nào" — một chi tiết không đối chiếu được với
`src/data/site.ts` (không có mô tả nào về lưu/xem lại ảnh gốc sau khi quét, chỉ có bước xác nhận
đối chiếu với đơn gốc trước khi lưu). Phần giới thiệu ứng dụng được viết lại theo hướng đã kiểm
chứng được: quét ảnh/PDF bằng AI hoặc nhập tay tên thuốc, liều dùng, giờ uống (có trong FAQ của
trang tính năng quét đơn) để lịch nhắc không bị gián đoạn với thuốc cần bảo quản đặc biệt, không
còn nhắc đến việc lưu/xem lại ảnh gốc. Không thêm `sources` mới — hai nguồn Vinmec đã có từ trước
vẫn còn phù hợp với nội dung, không cần thay. Không thêm liên kết nội bộ mới vì bài đã có 2 liên
kết tới bài liên quan. Bổ sung backlog: thêm 3 file mới trong `blog-notes/backlog/` (loãng xương
uống thuốc đều đặn, viêm khớp dạng thấp uống thuốc đều đặn, giấy hẹn tái khám có thời hạn bao lâu —
đều đã xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên này) để backlog đạt tối thiểu 10
file theo quy trình.
