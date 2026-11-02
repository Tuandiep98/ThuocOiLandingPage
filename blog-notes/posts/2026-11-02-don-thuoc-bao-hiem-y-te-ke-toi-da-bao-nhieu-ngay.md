# 2026-11-02 — bài mới: `don-thuoc-bao-hiem-y-te-ke-toi-da-bao-nhieu-ngay`

Tiêu đề "Đơn thuốc bảo hiểm y tế được kê tối đa bao nhiêu ngày?", keyword "đơn thuốc bảo hiểm y tế
kê tối đa bao nhiêu ngày", cụm Đơn thuốc & giấy tờ y tế (thủ tục lĩnh thuốc BHYT),
`feature: theo-doi-lieu-trinh`.
Góc độ: bài giải thích quy định — mức chung 30 ngày, danh mục 252 bệnh/nhóm bệnh (Phụ lục VII
Thông tư 26/2025/TT-BYT, hiệu lực 1/7/2025) được kê tối đa 90 ngày, bác sĩ quyết định số ngày theo
tình trạng lâm sàng và mức độ ổn định, Công văn 9229/BYT-BH (30/12/2025) áp dụng không phân biệt có
hay không có thẻ BHYT, dự thảo mở rộng lên 372 bệnh (9/2026, chưa có hiệu lực), cần làm gì khi vẫn
được kê 30 ngày. Khác `uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi` (góc độ thói quen canh
ngày lĩnh thuốc, chỉ nhắc quy định trong một đoạn/FAQ — bài mới link sang bài đó) và khác
`don-thuoc-co-thoi-han-bao-lau` (thời hạn lĩnh thuốc của đơn). Không nêu tên bệnh, thuốc cụ thể nào
trong danh mục. Phần app: dự báo ngày hết thuốc, báo trước 3 ngày, nhắc tái khám (đúng `site.ts`),
nói rõ app không biết bệnh có thuộc danh mục 90 ngày hay không.

Nguồn đã fetch trong phiên:
- kcb.vn — "Thực hiện cấp thuốc theo hướng dẫn tại Thông tư 26/2025/TT-BYT": Công văn 9229/BYT-BH
  ngày 30/12/2025, kê đơn ngoại trú tối đa 90 ngày phù hợp tình trạng bệnh theo danh mục, không phân
  biệt có/không có thẻ BHYT.
- kcb.vn — "Một số điểm mới tại Thông tư quy định về đơn thuốc…": Thông tư 26/2025/TT-BYT ngày
  30/6/2025; danh mục bệnh được kê trên 30 ngày; người kê đơn căn cứ tình trạng lâm sàng, mức độ ổn
  định, tối đa không quá 90 ngày.
- baochinhphu.vn — "Đề xuất kê đơn thuốc ngoại trú tối đa 90 ngày" (21/9/2026): dự thảo sửa đổi,
  đang lấy ý kiến, mở rộng 252 → 372 bệnh, nhóm bệnh; chưa nêu ngày hiệu lực.
- tamanhhospital.vn — "252 bệnh mạn tính được kê đơn 90 ngày": hiệu lực 1/7/2025, quy định chung
  không quá 30 ngày, so với giới hạn 30 ngày của Thông tư 52/2017, bác sĩ quyết định (có thể ít hơn
  90 ngày).
- Trang moh.gov.vn trả về 503 khi fetch nên không trích dẫn. Tìm kiếm (extended) không thấy văn bản
  sửa đổi đã ban hành tính đến 2026-11-02.

Lý do chọn: dùng mục backlog `don-thuoc-bao-hiem-y-te-duoc-ke-toi-da-bao-nhieu-ngay-thuoc` — đúng
cụm, không phụ thuộc mùa, xác minh được bằng nguồn chính thức (Cục Quản lý KCB, Báo Chính phủ) ngay
trong phiên. `uong-thuoc-xong-nam-ngay-co-sao-khong` vẫn trùng ý định với bài nuốt khan; các mục
Tết/nhập học/du lịch trái mùa.
