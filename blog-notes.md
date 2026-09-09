# Blog notes

Nhật ký triển khai theo quy trình "mỗi ngày một bài" mô tả trong `CLAUDE.md` (mục "Blog content
workflow"). Đọc file này trước khi viết bài mới — mục đích chính là tránh trùng góc độ/segment
đã làm, không phải để liệt kê lịch sử.

## 2026-09-04 — 3 bài thử nghiệm đầu tiên

- `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh` — "Cách quản lý thuốc cho người già sống một
  mình" — keyword: `cách quản lý thuốc cho người già` — segment: người cao tuổi tự chăm sóc bản
  thân.
- `nhac-bo-me-uong-thuoc-tu-xa` — "Con ở xa, làm sao chắc bố mẹ uống thuốc đúng giờ?" — keyword:
  `nhắc bố mẹ uống thuốc từ xa` — segment: con cái chăm sóc cha mẹ từ xa. Cùng chủ đề gốc (quản lý
  thuốc cho người già) với bài trên nhưng khác góc nhìn — người chăm sóc thay vì người uống thuốc
  — và khai thác tính năng nhóm Gia đình thay vì luồng quét đơn AI.
- `doc-hieu-don-thuoc-bac-si-ghi-tat` — "Đơn thuốc bác sĩ ghi tắt là gì? Cách đọc để không uống
  sai" — keyword: `đơn thuốc bác sĩ ghi tắt nghĩa là gì` — segment: bệnh nhân nói chung, không
  giới hạn độ tuổi. Sub-topic khác hẳn (đọc hiểu đơn thuốc) thay vì biến thể của chủ đề người già.

## 2026-09-05

- `quan-ly-thuoc-man-tinh-cho-nguoi-tre` — "Người trẻ mắc bệnh mãn tính: vì sao hay quên thuốc
  hơn bạn nghĩ?" — keyword: `quản lý thuốc mãn tính cho người trẻ` — segment: người trẻ tự quản
  lý bệnh mãn tính. Góc nhìn khác các bài trước (không phải người già/con cái chăm sóc) — tập
  trung vào lịch sinh hoạt bận rộn/hay thay đổi, lời nhắc theo buổi thay vì giờ cố định, theo dõi
  tỉ lệ tuân thủ liệu trình, và báo thức riêng iOS 26 khi điện thoại im lặng/Tập trung.

## 2026-09-06

- `nhap-tay-hay-quet-ai-chon-cach-them-thuoc` — "Nhập tay hay quét AI: nên chọn cách nào để thêm
  đơn thuốc?" — keyword: `nhập đơn thuốc bằng AI hay thủ công` — segment: người dùng cân nhắc
  cách thêm đơn thuốc phù hợp. Sub-topic so sánh 2 luồng nhập thuốc thật của app (quét AI ảnh/PDF
  vs nhập tay), khi nào nên dùng cách nào, và cách phân bổ lượt quét AI hằng tháng (3 lượt Free /
  30 Pro / 150 Gia đình) hợp lý — không phải biến thể segment người già/người trẻ đã làm trước.

## 2026-09-07

- `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` — "Người chăm sóc thuê ngoài quản lý
  thuốc cho người già như thế nào?" — keyword: `quản lý thuốc cho người già thuê người chăm sóc`
  — segment: người chăm sóc chuyên nghiệp / điều dưỡng tại nhà. Khác "con cái chăm sóc từ xa" đã
  làm — người chăm sóc chuyên nghiệp ở cạnh trực tiếp nên cần *ghi nhận/báo cáo lại* cho gia đình
  bằng số liệu (tiến trình liều đã uống), không phải *biết từ xa*. Khai thác nhóm Gia đình mời
  bằng QR không giới hạn huyết thống, và quét AI đơn mới sau tái khám.

## 2026-09-08

- `cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai` — "Cách đặt lời nhắc uống thuốc trên điện thoại
  — và vì sao vẫn hay quên" — keyword: `cách đặt lời nhắc uống thuốc trên điện thoại` — segment:
  người tự đặt lịch nhắc thuốc bằng công cụ có sẵn trên điện thoại. Góc độ mới: hướng dẫn 3 cách
  thủ công có thật (Lời nhắc/Reminders, ứng dụng Sức khỏe, Siri/Google Assistant) — cụm từ khoá
  này được nhiều báo công nghệ lớn (GenK, Tuổi Trẻ, Quản Trị Mạng) viết hướng dẫn, cho thấy nhu
  cầu tìm kiếm thật — rồi chỉ ra giới hạn thực tế của cách thủ công (dễ bị vuốt tắt thông báo,
  không tự dừng khi hết đợt thuốc, không biết đã uống hay chưa) để dẫn vào tính năng quét AI,
  theo dõi tiến trình liều và báo thức riêng iOS 26 của Thuốc ơi. Không trùng segment/sub-topic
  các bài trước.

- `dau-hieu-quen-lieu-uong-trung-lieu-thuoc` — "Quên liều hay uống trùng liều thuốc: dấu hiệu
  nhận biết và nên làm gì?" — keyword: `dấu hiệu quên liều thuốc uống trùng liều` — segment:
  người dùng thuốc dài ngày muốn tránh quên liều hoặc uống trùng liều. Bài thứ 2 trong ngày (theo
  routine tự động 2 bài/ngày) — sub-topic từ backlog, khác hẳn bài sáng cùng ngày (hướng dẫn dùng
  công cụ nhắc có sẵn trên điện thoại): tập trung vào dấu hiệu nhận biết đã quên/trùng liều (đếm
  lại vỉ thuốc, cảm giác không chắc chắn lặp lại), vì sao trí nhớ và lịch giấy không đủ tin cậy,
  và cách Thuốc ơi theo dõi tỉ lệ liều đã uống/tổng liều theo thời gian thực thay vì chỉ nhắc giờ.
  Không đưa hướng dẫn xử trí y khoa cụ thể (uống bù/bỏ liều) — chỉ khuyến cáo hỏi bác sĩ/dược sĩ.

## 2026-09-09

- `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi` — "Chuẩn bị gì trước khi tái khám để đơn thuốc
  mới không bị đọc nhầm?" — keyword: `chuẩn bị trước khi tái khám đơn thuốc mới` — segment: người
  sắp tái khám, muốn đơn thuốc mới được nhập đúng ngay từ đầu. Góc độ lấy từ backlog. Khác các bài
  trước ở chỗ tập trung vào thời điểm *nhận đơn mới sau tái khám* (dễ đọc nhầm hơn đơn đầu tiên vì
  tâm lý chỉ lướt xem "có gì khác" thay vì đọc kỹ) chứ không phải đọc hiểu đơn nói chung hay quản
  lý thuốc dài hạn — gồm việc chuẩn bị trước khi vào khám, xác nhận lại với bác sĩ/dược sĩ ngay
  tại chỗ, chụp ảnh đơn khi còn rõ nét, và tính năng đối chiếu màn hình xác nhận + đánh dấu đoạn
  chữ không chắc chắn + theo dõi lịch tái khám của Thuốc ơi.

- `cac-kieu-lich-uong-thuoc-mau-thuong-gap` — "Lịch uống thuốc mẫu: các kiểu nhịp uống thường
  gặp trong một đơn thuốc" — keyword: `lịch uống thuốc mẫu` — segment: người mới nhận đơn thuốc
  dài ngày, cần hình dung lịch uống phù hợp. Bài thứ 2 trong ngày (routine tự động 2 bài/ngày) —
  lấy từ mục backlog "lịch uống thuốc mẫu theo từng loại bệnh phổ biến" nhưng đổi khung an toàn
  hơn: thay vì liệt kê theo *loại bệnh* (dễ bịa thông tin y khoa cụ thể), bài phân loại theo
  *kiểu nhịp uống* chung (uống 1 lần cố định giờ, nhiều lần cách đều, theo bữa ăn, đủ liệu trình
  dù đỡ bệnh) — không gắn với bệnh hay thuốc cụ thể nào, luôn nhắc hỏi lại bác sĩ/dược sĩ để biết
  đơn của mình thuộc kiểu nào. Khác hẳn segment/sub-topic bài sáng cùng ngày (chuẩn bị trước tái
  khám).

## Backlog góc độ chưa làm

Tham khảo trước khi chọn góc độ cho bài tiếp theo, để không lặp lại:

(hiện trống — bổ sung góc độ mới khi nghĩ ra, tránh trùng các bài đã liệt kê ở trên)
