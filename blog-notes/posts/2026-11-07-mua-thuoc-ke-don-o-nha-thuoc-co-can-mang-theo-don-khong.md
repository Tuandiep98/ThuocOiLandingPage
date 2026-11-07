# 2026-11-07 — bài mới: `mua-thuoc-ke-don-o-nha-thuoc-co-can-mang-theo-don-khong`

Tiêu đề "Mua thuốc kê đơn ở nhà thuốc có cần mang theo đơn không?", keyword "mua thuốc kê đơn ở nhà
thuốc có cần mang theo đơn không", cụm Đơn thuốc & giấy tờ y tế, feature `theo-doi-lieu-trinh`.
Góc độ: việc phải có/mang đơn (giấy gốc, đơn hoặc mã đơn điện tử) khi mua thuốc kê đơn ở nhà thuốc,
nhà thuốc làm gì với đơn (bán đúng đơn, ghi chép số hiệu đơn/người kê đơn, có quyền từ chối), cách
nhận biết thuốc kê đơn qua nhãn (Rx + "Thuốc kê đơn"), vì sao giữ đơn và khi nào cần tái khám để có
đơn mới. Khác `don-thuoc-co-thoi-han-bao-lau` (thời hạn — chỉ nhắc mốc 5 ngày rồi link),
`don-thuoc-dien-tu-la-gi` (đơn điện tử là gì), `don-thuoc-viet-tay-khong-co-dau-co-hop-le-khong`
(tính hợp lệ của đơn viết tay) và `co-nen-dung-lai-don-thuoc-cu` (dùng lại đơn cũ). Không hướng dẫn
mua thuốc kê đơn không cần đơn, không nêu tên thuốc nào, không bàn kháng sinh; nhóm thuốc kiểm soát
đặc biệt chỉ nhắc chung.

Mục app liên kết `/tinh-nang/theo-doi-lieu-trinh/`: chỉ nêu những gì `site.ts` có (tính số liều cả
liệu trình, ghi nhận liều đã uống, tồn thuốc tự trừ, dự báo ngày hết thuốc và thông báo trước ba
ngày, nhắc lịch tái khám đọc từ đơn). Không nói app lưu ảnh gốc đơn thuốc (site.ts không nêu).

Nguồn đã fetch bằng WebFetch trong phiên: Thông tư 26/2025/TT-BYT trên LuatVietnam (Điều 10 đơn điện
tử có giá trị như đơn giấy; Điều 12 k6 điểm đ gửi đơn/mã đơn điện tử cho người bệnh; Điều 12 k7 điểm
c chỉ bán thuốc ngoài Danh mục thuốc không kê đơn khi có đơn; Điều 12 k9 điểm b lĩnh thuốc trong 5
ngày; mẫu đơn "Khám bệnh lại xin mang theo đơn này"; Phụ lục II chú thích 11 xuất trình căn cước),
Văn bản hợp nhất 05/VBHN-BYT về GPP trên LuatVietnam (Phụ lục I-1a mục III.2.c bán đúng đơn, từ chối,
thông báo người kê đơn, thay thế thuốc chỉ do dược sĩ; mục II.4.b ghi số hiệu đơn, người kê đơn, cơ
sở hành nghề), Thông tư 01/2018/TT-BYT trên Caselaw (Điều 15 k1 điểm b: nhãn bao bì ngoài thuốc kê
đơn có "Rx" góc trên bên trái tên thuốc và dòng "Thuốc kê đơn"); đã đối chiếu Thông tư 23/2023/TT-BYT
sửa đổi (hethongphapluat.com): với Điều 15 chỉ bãi bỏ tiết 6 điểm c khoản 1, không đụng điểm b.

Lý do chọn: mục backlog đúng cụm, nguồn chính thức đọc được ngay trong phiên; đang là tháng 11 nên
không có mục theo mùa phù hợp (cúm đã có bài `cum-mua-khi-nao-can-di-kham-bac-si`). Đã `git rm` mục
backlog `mua-thuoc-ke-don-o-nha-thuoc-co-can-mang-theo-don-khong.md`.
