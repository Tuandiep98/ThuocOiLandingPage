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

## 2026-09-10

- `cach-nhac-con-uong-thuoc-dung-gio` — "Cách nhắc con uống thuốc đúng giờ khi cha mẹ bận rộn cả
  ngày" — keyword: `cách nhắc con uống thuốc đúng giờ` — segment: cha mẹ có con nhỏ đang trong
  đợt uống thuốc. Góc độ mới, chưa từng dùng: phụ huynh chăm con nhỏ uống thuốc (đợt ốm ngắn ngày
  như sốt/ho/kháng sinh), khác hẳn "con cái chăm sóc cha mẹ già từ xa" và "người trẻ tự quản lý
  bệnh mãn tính" đã làm trước — ở đây người uống thuốc và người theo dõi lịch là hai người khác
  nhau, giờ giấc phải né giờ học/giờ ngủ của trẻ, và rủi ro chính là bỏ dở đợt kháng sinh giữa
  chừng khi con đã hết sốt. Khai thác nhóm Gia đình mời bằng QR không giới hạn huyết thống (ông
  bà/người giữ trẻ cùng theo dõi khi đổi ca trông con), nhập tay cho toa đơn giản, và theo dõi
  tiến trình liều đã uống/tổng liệu trình. Không đưa hướng dẫn liều dùng cụ thể — chỉ nhắc hỏi lại
  bác sĩ/dược sĩ.

- `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich` — "Đi công tác, du lịch dài ngày: làm sao vẫn
  uống thuốc đúng giờ?" — keyword: `uống thuốc đúng giờ khi đi du lịch` — segment: người phải
  uống thuốc dài ngày nhưng đi công tác/du lịch xa hoặc lệch múi giờ. Bài thứ 2 trong ngày (routine
  tự động 2 bài/ngày) — góc độ mới chưa từng dùng, khác hẳn bài sáng cùng ngày (cha mẹ nhắc con nhỏ
  uống thuốc): tập trung vào việc di chuyển làm xáo trộn giờ ăn/nơi cất thuốc/múi giờ, cách ước
  tính đủ thuốc mang theo dựa trên tiến trình liệu trình, giữ ảnh/PDF đơn thuốc gốc trong máy, và
  đặt lời nhắc theo buổi thay vì giờ cố định để thích ứng khi lệch múi giờ. Không đưa cách tự điều
  chỉnh giờ uống thuốc cụ thể khi lệch múi giờ — chỉ khuyến cáo hỏi bác sĩ/dược sĩ trước chuyến đi.

## 2026-09-11

- `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` — "Xuất viện về nhà phải uống nhiều loại
  thuốc cùng lúc: sắp xếp sao cho không nhầm?" — keyword: `quản lý nhiều loại thuốc cùng lúc sau
  khi xuất viện` — segment: người mới xuất viện phải uống nhiều loại thuốc khác nhau cùng lúc.
  Góc độ mới, chưa từng dùng: đơn thuốc lúc xuất viện thường dài hơn và có nhiều loại xen kẽ (mỗi
  loại một nhịp uống — trước/sau ăn, một lần/nhiều lần một ngày) hơn hẳn đơn thông thường, khác
  các bài trước vốn tập trung vào một liệu trình/một nhóm thuốc hoặc một segment người chăm sóc cụ
  thể. Khai thác việc AI tách riêng từng loại thuốc trong đơn thay vì gộp chung, theo dõi tiến
  trình liều theo từng loại riêng để phát hiện loại nào đang bị bỏ sót, và nhóm Gia đình hỗ trợ
  giai đoạn đầu mới xuất viện còn yếu. Không đưa hướng dẫn cụ thể về khoảng cách giữa các loại
  thuốc hay thứ tự uống — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

- `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung` — "Mẹo chụp ảnh đơn thuốc rõ nét để AI đọc đúng
  ngay từ lần đầu" — keyword: `chụp ảnh đơn thuốc để quét AI` — segment: người muốn quét đơn thuốc
  bằng AI chính xác ngay từ lần đầu. Bài thứ 2 trong ngày (routine tự động 2 bài/ngày) — góc độ
  mới, chưa từng dùng: không phải so sánh quét AI với nhập tay (đã làm ở bài
  `nhap-tay-hay-quet-ai-chon-cach-them-thuoc`) mà là mẹo thực hành khi *đã chọn* quét AI — ánh
  sáng, góc chụp, chụp đủ trang — để đọc đúng ngay từ đầu, đỡ phải quét lại tốn lượt quét AI vốn
  có hạn theo từng gói. Khác hẳn segment/sub-topic bài sáng cùng ngày (xuất viện uống nhiều loại
  thuốc cùng lúc). Không đưa hướng dẫn y khoa — chỉ nhắc đối chiếu đơn gốc và hỏi lại bác sĩ/dược
  sĩ khi không chắc chắn.

## 2026-09-12

- `uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca` — "Làm ca đêm, xoay ca: uống thuốc đúng giờ theo
  nhịp sinh hoạt nào?" — keyword: `uống thuốc đúng giờ khi làm ca đêm` — segment: người làm ca
  đêm hoặc xoay ca, giờ giấc sinh hoạt đảo lộn thường xuyên. Góc độ mới, chưa từng dùng: khác
  "đi công tác/du lịch" (xáo trộn tạm thời, có ngày kết thúc) ở chỗ đây là nhịp sinh hoạt đảo lộn
  lâu dài/lặp lại do lịch làm việc (ca ngày/ca đêm đổi liên tục), khiến "buổi sáng/tối" theo đơn
  thuốc không còn khớp với đồng hồ thật. Nhấn mạnh việc cần hỏi bác sĩ/dược sĩ để quy đổi nhịp
  uống theo sinh hoạt thay vì tự suy đoán, rồi khai thác tính năng nhắc theo buổi tự chọn (không
  phải giờ cố định), có thể chỉnh lại khi đổi ca, báo thức riêng iOS 26 khi ngủ ban ngày/điện
  thoại im lặng, và theo dõi tiến trình liều để phát hiện sớm liều bị bỏ lỡ. Không đưa hướng dẫn
  y khoa cụ thể về cách quy đổi giờ uống — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

- `quan-ly-thuoc-khi-kham-nhieu-chuyen-khoa-cung-luc` — "Khám nhiều chuyên khoa, nhiều đơn
  thuốc: làm sao không bị chồng chéo?" — keyword: `quản lý thuốc khi khám nhiều chuyên khoa` —
  segment: người có nhiều bệnh nền, khám nhiều chuyên khoa khác nhau, nhận nhiều đơn thuốc chồng
  lên nhau theo thời gian. Bài thứ 2 trong ngày (routine tự động 2 bài/ngày) — góc độ mới, chưa
  từng dùng: khác "xuất viện nhiều loại thuốc cùng lúc" (một đợt ra viện, một đơn dài) ở chỗ đây
  là nhiều đơn *riêng biệt* từ nhiều bác sĩ chuyên khoa khác nhau theo thời gian, chồng lên đơn
  đang uống dở, và rủi ro chính là không ai (kể cả người bệnh) nhìn thấy toàn cảnh để tránh trùng
  hoạt chất. Không để app tự nhận là kiểm tra/cảnh báo tương tác thuốc — chỉ nhấn mạnh việc chủ
  động cho bác sĩ/dược sĩ xem toàn bộ thuốc đang dùng, rồi khai thác việc AI tách riêng từng loại
  thuốc trong đơn, theo dõi tiến trình liều riêng từng loại, lịch tuần gom mọi đơn đang hiệu lực,
  và nhóm Gia đình hỗ trợ người thân cùng theo dõi. Khác hẳn segment/sub-topic bài sáng cùng ngày
  (làm ca đêm, xoay ca).

## Backlog góc độ chưa làm

Tham khảo trước khi chọn góc độ cho bài tiếp theo, để không lặp lại:

(hiện trống — bổ sung góc độ mới khi nghĩ ra, tránh trùng các bài đã liệt kê ở trên)
