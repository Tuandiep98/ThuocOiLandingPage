# 2026-11-08 — bài mới: `mang-thuoc-len-may-bay-can-giay-to-gi`

Tiêu đề "Mang thuốc lên máy bay cần giấy tờ gì?", keyword "mang thuốc theo người khi đi máy bay cần
giấy tờ gì", cụm Uống thuốc đúng cách (mang/bảo quản thuốc khi di chuyển), feature
`theo-doi-lieu-trinh`. Góc độ: qua cửa an ninh sân bay — giới hạn chất lỏng nội địa vs quốc tế,
ngoại lệ cho thuốc có đơn và đơn phải ghi gì, thuốc dạng xịt/gel, xách tay hay ký gửi, luật nước đến
khi bay quốc tế. Khác `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich` (giữ đúng giờ uống khi
lệch múi giờ — chỉ link sang) và `mat-don-thuoc-phai-lam-sao` (link khi đơn thất lạc). Không nêu tên
thuốc nào; thuốc kiểm soát đặc biệt chỉ nhắc chung "cần giấy tờ riêng, hỏi hãng bay/nước đến".

Mục app liên kết `/tinh-nang/theo-doi-lieu-trinh/`: chỉ nêu những gì `site.ts` có (tính số liều cả
liệu trình, ghi nhận liều đã uống, tồn thuốc tự trừ khi nhập, dự báo ngày hết thuốc, nhắc trước ba
ngày). Không nói app lưu đơn hay thay giấy tờ.

Nguồn đã fetch bằng WebFetch trong phiên: Vietnam Airlines — trang Chất lỏng (nội địa không giới hạn
dung tích xách tay; quốc tế 100ml/lọ, 1 lít/người; miễn cho thuốc có đơn ghi rõ họ tên, địa chỉ
người kê đơn, tên người dùng khớp vé; chuyến đi/đến Mỹ chất lỏng chỉ ký gửi) và trang Thuốc y tế/đồ
trang điểm/bình xịt (0,5kg/0,5 lít mỗi bình, tổng 2kg/2 lít, nắp van xả); Cục Hàng không Việt Nam
(caa.gov.vn, bài tăng cường kiểm tra chất lỏng chuyến Hà Nội–Úc: 1000ml/100ml trên chuyến quốc tế,
không áp dụng với thuốc chữa bệnh có đơn, có thể phỏng vấn hành khách). Không tìm được văn bản
chính thức về giấy tờ nhập cảnh nước ngoài — chỉ nêu nguyên tắc chung, không trích số liệu.

Lý do chọn: mục backlog có nguồn chính thức (hãng bay, Cục Hàng không) đọc được ngay trong phiên;
mục VssID trùng ý định với bài `mat-the-bao-hiem-y-te-co-linh-thuoc-duoc-khong` nên bỏ qua; cúm mùa
đã có bài. Đã `git rm` mục backlog `mang-thuoc-theo-nguoi-khi-di-may-bay-can-giay-to-gi.md`.
