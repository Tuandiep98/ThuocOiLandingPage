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

## 2026-09-13

- `nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan` — "Nhà có nhiều người cùng uống thuốc: làm sao
  không lẫn thuốc của ai vào của ai?" — keyword: `quản lý thuốc cho nhiều người trong gia đình` —
  segment: gia đình nhiều thế hệ, nhiều thành viên cùng uống thuốc khác nhau trong cùng một
  khoảng thời gian (ông bà, cha mẹ, con nhỏ). Góc độ mới, chưa từng dùng: khác các bài nhóm Gia
  đình trước (con cái chăm sóc từ xa — một người bệnh, người thân theo dõi; cha mẹ nhắc con — một
  phụ huynh một trẻ ốm ngắn ngày; người chăm sóc chuyên nghiệp — báo cáo lại cho gia đình) ở chỗ
  đây là NHIỀU người trong cùng một nhà cùng uống thuốc khác nhau cùng lúc, và rủi ro chính là lẫn
  hộp thuốc/giờ nhắc của người này sang người khác chứ không phải quên liều hay không biết tiến
  trình từ xa. Khai thác việc đơn thuốc và lời nhắc của mỗi người trong nhóm Gia đình được tách
  riêng theo tài khoản, tên thuốc hiển thị rõ trên thông báo/báo thức, và mời thành viên bằng QR
  không giới hạn huyết thống. Không đưa hướng dẫn xử trí khi uống nhầm thuốc — chỉ khuyến cáo liên
  hệ ngay bác sĩ/dược sĩ.

- `con-mac-benh-man-tinh-uong-thuoc-dai-han` — "Con mắc bệnh mãn tính, uống thuốc dài hạn: cha mẹ
  theo dõi sao cho không đứt quãng?" — keyword: `quản lý thuốc dài hạn cho con` — segment: cha mẹ
  có con mắc bệnh mãn tính, cần uống thuốc dài hạn nhiều tháng hoặc nhiều năm. Bài thứ 2 trong
  ngày (routine tự động 2 bài/ngày) — góc độ mới, chưa từng dùng: khác "cha mẹ nhắc con uống thuốc
  đúng giờ" (đợt ốm ngắn ngày như sốt/ho/kháng sinh, có điểm kết thúc rõ) ở chỗ đây là bệnh mãn
  tính của con kéo dài nhiều tháng/năm, đơn thuốc thay đổi qua từng lần tái khám, và rủi ro chính
  là lơ là dần theo thời gian chứ không phải quên một đợt ngắn. Cũng khác "người trẻ tự quản lý
  bệnh mãn tính" (đó là chính người bệnh trưởng thành tự quản lý) vì ở đây là cha mẹ quản lý thay
  cho con. Khai thác việc chụp lại đơn mới mỗi lần tái khám để AI đọc và đối chiếu, theo dõi tỉ lệ
  liều đã uống/tổng liều theo thời gian dài để phát hiện xu hướng bỏ liều dần, lịch tái khám tự
  xuất hiện từ đơn đọc được, và nhóm Gia đình chia sẻ theo dõi giữa cha, mẹ, ông bà, người trông
  trẻ. Không đưa hướng dẫn đổi liều/ngừng thuốc cụ thể — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

## 2026-09-14

- `uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi` — "Uống thuốc theo bảo hiểm y tế: làm sao
  canh đúng ngày lãnh thuốc mới, không bị đứt quãng?" — keyword: `uống thuốc bảo hiểm y tế đúng
  hẹn tái khám` — segment: người khám chữa bệnh bằng bảo hiểm y tế, lãnh thuốc theo từng đợt tái
  khám định kỳ. Góc độ mới, chưa từng dùng: khác các bài quản lý thuốc dài hạn/tái khám trước
  (chuẩn bị trước tái khám để đơn mới không bị đọc nhầm; con mắc bệnh mãn tính cha mẹ theo dõi) ở
  chỗ đây là rủi ro riêng của cơ chế lãnh thuốc theo bảo hiểm y tế — đơn chỉ đủ cho một đợt cố
  định, phải canh ngày thuốc sắp hết để chủ động tái khám lãnh đợt mới, tránh đứt quãng vài ngày
  giữa hai lần lãnh thuốc. Khai thác việc app tính toán số lượng thuốc trong cả liệu trình và
  theo dõi tiến trình liều thực tế đã uống để biết còn bao nhiêu ngày thuốc thay vì tự đếm vỉ
  thuốc, cùng lịch tái khám tự xuất hiện từ đơn đọc được hiển thị chung với lịch uống thuốc cả
  tuần. Không đưa hướng dẫn cụ thể về số ngày nên tái khám sớm hay quy định bảo hiểm — chỉ khuyến
  cáo theo hướng dẫn của bác sĩ/cơ sở khám chữa bệnh.

- `uong-vitamin-thuc-pham-chuc-nang-cung-thuoc-ke-don` — "Uống vitamin, thực phẩm chức năng cùng
  thuốc kê đơn: làm sao không trùng giờ, không quên lẫn?" — keyword: `uống vitamin cùng thuốc kê
  đơn` — segment: người dùng thêm vitamin, thực phẩm chức năng ngoài đơn thuốc bác sĩ kê, cần quản
  lý chung một lịch. Bài thứ 2 trong ngày (routine tự động 2 bài/ngày) — góc độ mới, chưa từng
  dùng: khác hẳn bài sáng cùng ngày (lãnh thuốc bảo hiểm y tế theo đợt tái khám) ở chỗ đây là
  sub-topic về việc kết hợp hai *nguồn* khác nhau — thuốc kê đơn (có trên đơn, AI đọc được) và
  vitamin/thực phẩm chức năng tự mua thêm (không có trên đơn, phải nhập tay) — dễ bị trùng giờ hoặc
  quên vì được nhớ theo hai cách khác nhau. Khai thác việc nhập tay không giới hạn và không tính
  vào lượt quét AI để đưa cả hai nhóm vào chung một lịch nhắc theo buổi, cùng theo dõi tiến trình
  liều đã uống/tổng liều cho từng loại. Không để app tự nhận là kiểm tra/cảnh báo tương tác giữa
  vitamin và thuốc kê đơn — chỉ nhấn mạnh việc hỏi lại bác sĩ/dược sĩ trước khi kết hợp.

## 2026-09-15

- `sinh-vien-o-tro-tu-uong-thuoc-khi-om-lan-dau` — "Sinh viên ở trọ, ký túc xá: tự uống thuốc khi
  ốm lần đầu không có ai nhắc" — keyword: `sinh viên uống thuốc đúng giờ khi ở trọ` — segment:
  sinh viên/người trẻ mới sống xa nhà lần đầu (ký túc xá/ở trọ), tự uống thuốc khi ốm mà không có
  cha mẹ nhắc. Góc độ mới, chưa từng dùng: khác "người trẻ tự quản lý bệnh mãn tính" (đó là bệnh
  dài hạn của người đã quen tự quản lý) và khác "cha mẹ nhắc con uống thuốc" (đó là phụ huynh chủ
  động nhắc) ở chỗ đây là người trẻ lần đầu tự chịu trách nhiệm hoàn toàn cho một đợt ốm ngắn ngày
  (cảm, đau họng) mà không có ai nhắc hộ, giữa lịch học lệch giờ mỗi ngày và không gian ký túc xá
  đông người bất tiện để đặt nhắc công khai. Khai thác nhập tay không giới hạn cho đơn ngắn ngày,
  thông báo nhắc không cần mạng (hữu ích khi wifi ký túc xá chập chờn), báo thức riêng iOS 26 khi
  điện thoại im lặng giờ học/Tập trung khi ôn thi, theo dõi tiến trình liều để tránh dừng thuốc sớm
  khi mới thấy đỡ, và nhắc nhẹ nhóm Gia đình chỉ là lựa chọn thêm chứ không bắt buộc. Không đưa
  hướng dẫn xử trí triệu chứng cụ thể — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ khi ốm kéo dài hoặc
  nặng hơn bình thường.

- `uong-thuoc-truoc-ngay-xet-nghiem-mau` — "Trước ngày xét nghiệm máu: có cần tạm dừng thuốc đang
  uống không?" — keyword: `uống thuốc trước khi xét nghiệm máu` — segment: người có lịch xét
  nghiệm máu hoặc khám sức khỏe định kỳ, cần biết cách xử lý lịch uống thuốc quanh ngày xét
  nghiệm. Bài thứ 2 trong ngày (routine tự động 2 bài/ngày) — góc độ mới, chưa từng dùng: khác
  hẳn bài sáng cùng ngày (sinh viên ở trọ tự uống thuốc khi ốm lần đầu) và khác "chuẩn bị trước
  tái khám" (đó là đọc đúng đơn thuốc mới) ở chỗ đây là ngày xét nghiệm/khám định kỳ làm xáo trộn
  mốc giờ quen thuộc (phải nhịn ăn, có thể phải tạm ngưng một loại thuốc) chứ không phải nhận đơn
  mới hay quên liều thông thường. Khai thác việc ngày xét nghiệm/tái khám đọc được từ đơn tự xuất
  hiện trên lịch tuần cùng lịch uống thuốc, và lời nhắc đặt theo buổi tự chọn nên có thể tạm dời
  giờ nhắc quanh ngày xét nghiệm mà không mất dấu liều trong tiến trình theo dõi. Không đưa hướng
  dẫn nên ngưng thuốc nào hay ngưng bao lâu — chỉ khuyến cáo hỏi trước bác sĩ/dược sĩ.

## 2026-09-16

- `uong-thuoc-mat-ngu-dung-gio-co-dinh` — "Uống thuốc trị mất ngủ đúng giờ mỗi tối: vì sao lệch
  giờ dễ phản tác dụng?" — keyword: `uống thuốc mất ngủ đúng giờ` — segment: người đang điều trị
  mất ngủ hoặc rối loạn giấc ngủ, cần uống thuốc an thần theo đúng một giờ cố định mỗi tối. Bài
  sáng (routine tự động 2 bài/ngày) — góc độ mới, chưa từng dùng: khác các bài lịch uống thuốc
  theo nhịp sinh hoạt trước (ca đêm/xoay ca, du lịch lệch múi giờ) ở chỗ đây không phải xáo trộn
  từ bên ngoài mà là đặc thù của chính loại thuốc — cần một "giờ neo" cố định mỗi tối để hỗ trợ
  nhịp sinh học, và rào cản chính là điện thoại thường im lặng/Không làm phiền đúng vào ban đêm.
  Khai thác báo thức riêng iOS 26 vẫn kêu khi điện thoại im lặng/Tập trung (đặc biệt hợp bối cảnh
  ban đêm), theo dõi tiến trình liều để tránh tự ý bỏ ngang liệu trình khi thấy ngủ ngon hơn, và
  nhập tay đơn giản cho đơn chỉ có một loại thuốc. Không đưa khung giờ uống cụ thể hay hướng dẫn
  đổi liều — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

- `uong-thuoc-tranh-thai-dung-gio-moi-ngay` — "Uống thuốc tránh thai đúng giờ mỗi ngày: vì sao
  lệch giờ đáng lo hơn bạn nghĩ?" — keyword: `uống thuốc tránh thai đúng giờ` — segment: người
  đang dùng thuốc tránh thai hàng ngày (nội tiết đường uống), cần giữ đúng một giờ uống cố định
  mỗi ngày để đảm bảo hiệu quả. Bài tối (routine tự động 2 bài/ngày) — góc độ mới, chưa từng dùng:
  khác hẳn bài sáng cùng ngày (thuốc trị mất ngủ, cần "giờ neo" hỗ trợ nhịp sinh học) ở chỗ đây là
  thuốc không cần đơn bác sĩ với hầu hết trường hợp, lệch giờ ảnh hưởng trực tiếp đến hiệu quả
  tránh thai chứ không phải nhịp sinh học, và người dùng thường muốn nhắc kín đáo thay vì nhắc
  công khai. Khai thác nhập tay không giới hạn và không tính lượt quét AI (phù hợp vì không có
  đơn kê), theo dõi tiến trình liều đều đặn qua thời gian dài, và báo thức riêng iOS 26 khi điện
  thoại im lặng/Tập trung đúng lúc khung giờ cố định mỗi ngày dễ trùng giờ họp/học/ngủ. Không đưa
  hướng dẫn xử trí khi quên liều — chỉ khuyến cáo hỏi ngay bác sĩ/dược sĩ hoặc đọc tờ hướng dẫn sử
  dụng.

## 2026-09-17

- `thuoc-uong-deu-dan-va-thuoc-uong-khi-can` — "Thuốc uống đều đặn và thuốc uống khi cần: quản lý
  chung sao cho không lẫn lộn?" — keyword: `phân biệt thuốc uống đều đặn và thuốc uống khi cần` —
  segment: người có đơn thuốc kết hợp cả thuốc uống theo giờ cố định và thuốc chỉ dùng khi cần
  thiết (giảm đau, dị ứng, ho). Bài sáng (routine tự động 2 bài/ngày) — góc độ mới, chưa từng
  dùng: khác hẳn các bài trước vốn xoay quanh việc giữ đúng giờ cho MỘT kiểu lịch uống (cố định
  hoặc theo buổi) — ở đây là sub-topic về việc MỘT đơn thuốc có cả hai kiểu cùng lúc (uống đều đặn
  và uống khi cần), dễ bị gộp nhầm vào cùng một lịch nhắc tự động. Khai thác việc nhập tay không
  giới hạn và không tính vào lượt quét AI để tách riêng thuốc "khi cần" ra khỏi lịch tự động, và
  theo dõi tiến trình liều đã ghi nhận/tổng liều để biết đã dùng bao nhiêu lần. Không đưa giới hạn
  số lần/khoảng cách dùng cụ thể cho bất kỳ loại thuốc nào — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

- `thuoc-nho-mat-mui-tai-boi-ngoai-da-de-quen-hon-thuoc-uong` — "Thuốc nhỏ mắt, nhỏ mũi, thuốc
  bôi ngoài da: vì sao dễ quên hơn thuốc uống?" — keyword: `cách nhớ giờ nhỏ thuốc mắt mũi tai
  đúng giờ` — segment: người đang dùng thuốc nhỏ mắt, nhỏ mũi, nhỏ tai hoặc thuốc bôi ngoài da
  nhiều lần trong ngày, cùng lúc với thuốc uống. Bài tối (routine tự động 2 bài/ngày) — góc độ
  mới, chưa từng dùng: khác hẳn bài sáng cùng ngày (thuốc uống đều đặn và thuốc uống khi cần —
  vẫn là thuốc uống) ở chỗ đây là dạng dùng thuốc hoàn toàn khác (nhỏ/bôi ngoài da), không gắn với
  bữa ăn nên khó nhớ hơn, và không có vỉ thuốc để nhận biết trực quan đã bỏ sót liều nào. Khai
  thác việc nhập tay không giới hạn và không tính vào lượt quét AI để tách riêng từng loại thuốc
  dùng ngoài khỏi lịch thuốc uống, đặt giờ nhắc theo buổi tự chọn thay vì giờ cố định app đặt sẵn,
  và theo dõi tiến trình liều đã ghi nhận/tổng liều để biết đã dùng đủ số lần trong ngày. Đây cũng
  là bài đầu tiên đặt frontmatter `ctaTitle`/`ctaDescription` tuỳ biến theo góc độ (theo điều
  chỉnh 2b của routine tự động, áp dụng từ 2026-09-17). Không đưa hướng dẫn về khoảng cách giữa
  các loại thuốc nhỏ mắt/mũi hay thứ tự dùng trước sau — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

## 2026-09-18

- `uong-thuoc-sau-phau-thuat-khong-bo-do-khang-sinh` — "Uống thuốc sau phẫu thuật tại nhà: sao để
  không bỏ dở kháng sinh, không lố giờ giảm đau?" — keyword: `uống thuốc sau phẫu thuật đúng giờ`
  — segment: người vừa phẫu thuật hoặc làm thủ thuật y tế, mới xuất viện về nhà, cần hoàn thành
  đúng liệu trình kháng sinh và giảm đau trong vài ngày đầu hồi phục. Bài sáng (routine tự động 2
  bài/ngày) — góc độ mới, chưa từng dùng: khác "xuất viện nhiều loại thuốc cùng lúc" (đó là sắp
  xếp NHIỀU loại thuốc xen kẽ không bị nhầm lẫn) ở chỗ đây là một liệu trình NGẮN NGÀY, tính chất
  bắt buộc hoàn thành nghiêm ngặt (kháng sinh không được bỏ dở dù đã hết đau/hết sốt) và một loại
  thuốc cần đúng khoảng cách tối thiểu giữa các liều (giảm đau, rủi ro lố tay/uống sớm khi đang
  đau), trong bối cảnh người bệnh còn choáng/còn yếu vài ngày đầu sau mổ. Khai thác theo dõi tiến
  trình liều đã uống/tổng liều để biết còn thiếu bao nhiêu liều kháng sinh, nhập tay không giới
  hạn và không tính lượt quét AI cho đơn ngắn ngày, và mời người thân vào nhóm Gia đình bằng QR để
  hỗ trợ nhắc hộ trong lúc còn yếu. Không đưa hướng dẫn liều lượng/khoảng cách cụ thể hay cách xử
  trí khi đau không giảm — chỉ khuyến cáo liên hệ ngay bác sĩ/dược sĩ hoặc cơ sở y tế đã phẫu
  thuật.

- `quan-ly-tu-thuoc-gia-dinh-khong-ke-don` — "Tủ thuốc gia đình: quản lý thuốc không kê đơn sao
  cho không mua trùng, không hết lúc cần gấp?" — keyword: `quản lý tủ thuốc gia đình tại nhà` —
  segment: gia đình có tủ thuốc dự phòng tại nhà (hạ sốt, giảm đau, dị ứng, oresol) không kèm đơn
  bác sĩ, muốn biết còn gì và khi nào cần mua thêm. Bài tối (routine tự động 2 bài/ngày) — góc độ
  mới, chưa từng dùng: khác hẳn mọi bài trước ở chỗ đây không phải một đơn thuốc điều trị theo
  bệnh/liệu trình mà là kho thuốc không kê đơn dùng rải rác không theo lịch, nên rủi ro chính là
  mua trùng hoặc hết đúng lúc cần gấp chứ không phải quên liều hay bỏ dở liệu trình. Khác hẳn bài
  sáng cùng ngày (thuốc sau phẫu thuật — một liệu trình ngắn ngày bắt buộc hoàn thành nghiêm ngặt).
  Khai thác nhập tay không giới hạn và không tính lượt quét AI (phù hợp vì không có đơn để quét),
  và tính năng theo dõi tồn thuốc để biết số lượng còn lại của từng loại, cùng nhóm Gia đình để cả
  nhà nhìn thấy chung một tủ thuốc thay vì mỗi người tự nhớ riêng. Không claim app theo dõi hạn sử
  dụng (không có trong site.ts) — chỉ nhắc tự kiểm tra hạn dùng trên bao bì và hỏi dược sĩ/bác sĩ
  trước khi dùng, nhất là cho trẻ nhỏ/người lớn tuổi/phụ nữ mang thai.

## 2026-09-19

- `uong-thuoc-bo-thai-ky-dung-gio` — "Uống thuốc bổ, vitamin thai kỳ đúng giờ: vì sao mẹ bầu hay
  quên hơn bạn nghĩ?" — keyword: `uống thuốc bổ thai kỳ đúng giờ` — segment: phụ nữ mang thai cần
  uống vitamin, thuốc bổ theo chỉ định bác sĩ đều đặn suốt thai kỳ. Bài sáng (routine tự động 2
  bài/ngày) — góc độ hoàn toàn mới, chưa từng dùng: khác các bài vitamin/thực phẩm chức năng trước
  (`uong-vitamin-thuc-pham-chuc-nang-cung-thuoc-ke-don`, tập trung vào việc kết hợp hai *nguồn*
  thuốc kê đơn và vitamin tự mua) ở chỗ đây là segment phụ nữ mang thai — rủi ro chính là ốm nghén/
  mệt mỏi/đổi sinh hoạt trong thai kỳ làm xáo trộn thói quen uống thuốc bổ đều đặn nhiều tháng liền,
  không phải việc nhớ hai nguồn thuốc khác nhau. Khai thác nhập tay không giới hạn và không tính
  lượt quét AI (phù hợp vì thuốc bổ thai kỳ thường ghi trong sổ khám hoặc dặn miệng, không phải
  đơn in rõ để quét), nhắc theo buổi tự chọn linh hoạt theo từng giai đoạn thai kỳ, theo dõi tiến
  trình liều để biết còn bao nhiêu ngày thuốc, lịch tái khám tự xuất hiện từ đơn đọc được, và nhóm
  Gia đình để chồng/người thân cùng theo dõi. Không đưa liều lượng/khoảng cách cụ thể giữa các loại
  thuốc bổ — chỉ khuyến cáo hỏi bác sĩ đang theo dõi thai kỳ.

- `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc` — "Mới phát hiện bệnh mãn tính: làm sao
  xây thói quen uống thuốc đều đặn ngay từ đầu?" — keyword: `mới phát hiện bệnh mãn tính uống
  thuốc đều đặn` — segment: người trưởng thành vừa được chẩn đoán bệnh mãn tính lần đầu (tăng
  huyết áp, tiểu đường, mỡ máu...), chưa quen uống thuốc hằng ngày. Bài tối (routine tự động 2
  bài/ngày) — góc độ mới, chưa từng dùng: khác hẳn bài sáng cùng ngày (thai kỳ) và khác "người trẻ
  tự quản lý bệnh mãn tính" (đã quen, tập trung vào lịch bận rộn/hay thay đổi) và "con mắc bệnh
  mãn tính dài hạn" (góc nhìn cha mẹ quản lý thay cho con) ở chỗ đây là người mới được chẩn đoán
  lần đầu, đang ở đúng những tuần đầu tiên chưa hình thành phản xạ/thói quen uống thuốc — rủi ro
  chính là chủ quan vì chưa thấy triệu chứng rõ rệt, không phải bận rộn hay quên vì lịch xáo trộn.
  Khai thác quét AI đơn thuốc mới để giảm gánh nặng tự ghi chép trong giai đoạn còn bỡ ngỡ, lời
  nhắc theo buổi tự chọn gắn với mốc sinh hoạt quen thuộc thay vì giờ cố định app đặt sẵn, và theo
  dõi tiến trình liều như một cách cụ thể để thấy thói quen mới đang hình thành dần (không chỉ dựa
  cảm giác). Không đưa hướng dẫn xử trí khi quên liều hay điều chỉnh liều — chỉ khuyến cáo hỏi lại
  bác sĩ/dược sĩ đang theo dõi.

## 2026-09-20

- `hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc` — "Đã có hộp chia thuốc theo ngày, có cần dùng
  thêm app nhắc thuốc không?" — keyword: `hộp chia thuốc theo ngày có cần dùng thêm app nhắc
  thuốc không` — segment: người đang dùng hộp chia thuốc (vỉ chia theo ngày/tuần) vật lý, cân
  nhắc có cần dùng thêm app nhắc thuốc hay không. Bài sáng (routine tự động 2 bài/ngày) — góc độ
  mới, chưa từng dùng: khác hẳn "cách đặt lời nhắc uống thuốc trên điện thoại" (đó là so sánh các
  công cụ nhắc *số* có sẵn trên điện thoại — Lời nhắc/Sức khỏe/Siri) ở chỗ đây là so sánh với một
  công cụ *vật lý* hoàn toàn khác (hộp chia thuốc nhiều ngăn), phân tích rõ điểm mạnh (trực quan
  trong ngày) và giới hạn (không tự nhắc giờ, không theo dõi tiến trình cả liệu trình dài, không
  hợp với thuốc ngắn ngày/khi cần/thuốc nhỏ-bôi) trước khi đề xuất dùng kết hợp cả hai. Khai thác
  nhập tay không giới hạn và không tính lượt quét AI (phù hợp vì chỉ ghi lại thuốc đã có sẵn trên
  đơn/trong hộp), nhắc theo buổi tự chọn, báo thức riêng iOS 26 khi điện thoại im lặng/Tập trung,
  và theo dõi tiến trình liều đã uống/tổng liều xuyên suốt liệu trình. Không đưa hướng dẫn cụ thể
  về thuốc nào nên/không nên chia sẵn trước nhiều ngày hay cách bảo quản — chỉ khuyến cáo hỏi lại
  bác sĩ/dược sĩ.

- `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach` — "Uống thuốc trước ăn, trong bữa hay sau ăn:
  sao cho khỏi lẫn từng loại?" — keyword: `uống thuốc trước ăn hay sau ăn đúng cách` — segment:
  người có đơn thuốc gồm nhiều loại thuốc với yêu cầu thời điểm uống khác nhau so với bữa ăn
  (trước ăn, trong bữa, sau ăn, xa bữa ăn). Bài tối (routine tự động 2 bài/ngày, backlog trống nên
  tự đề xuất góc độ mới) — góc độ mới, chưa từng dùng: khác hẳn bài sáng cùng ngày (hộp chia thuốc
  vật lý so với app) và khác "thuốc uống đều đặn và thuốc uống khi cần" (đó là phân biệt hai KIỂU
  lịch uống) ở chỗ đây là sub-topic về việc MỘT đơn có nhiều loại thuốc với mốc khác nhau *so với
  bữa ăn* — dễ bị gộp chung vào một giờ nhắc "buổi sáng" dù mỗi loại quy định trước/trong/sau ăn
  riêng. Khai thác nhập tay không giới hạn và không tính lượt quét AI để tách riêng từng loại theo
  đúng mốc bữa ăn của nó, màn hình xác nhận sau khi AI đọc đơn để đối chiếu kỹ mốc bữa ăn với đơn
  gốc, thiết lập giờ từng buổi theo đúng giờ ăn thật, và theo dõi tiến trình liều riêng từng loại
  để phát hiện loại nào (thường là loại uống trước ăn) hay bị bỏ sót. Không khẳng định mức độ
  nghiêm trọng khi lỡ uống sai mốc bữa ăn cho loại thuốc cụ thể nào — chỉ khuyến cáo hỏi lại bác
  sĩ/dược sĩ.

## 2026-09-21

- `doi-bac-si-doi-noi-kham-can-mang-theo-gi` — "Đổi bác sĩ, đổi nơi khám: làm sao để người khám
  mới biết bạn đang uống thuốc gì?" — keyword: `đổi bác sĩ đổi nơi khám mang theo đơn thuốc gì`
  — segment: người đang điều trị dài hạn nhưng đổi bác sĩ, đổi phòng khám hoặc bệnh viện điều trị
  (chuyển nơi ở, đổi nơi khám bảo hiểm, muốn hỏi ý kiến thứ hai). Bài sáng (routine tự động 2
  bài/ngày, backlog trống nên tự đề xuất góc độ mới) — góc độ hoàn toàn mới, chưa từng dùng: khác
  các bài tái khám trước (chuẩn bị trước tái khám để đơn mới không bị đọc nhầm; lãnh thuốc bảo
  hiểm y tế theo đợt) ở chỗ đây là tình huống chuyển hẳn sang một bác sĩ/nơi khám khác — người
  khám mới không có sẵn lịch sử điều trị, rủi ro chính là bỏ sót một loại thuốc đang uống dở khi
  kể lại bằng trí nhớ hoặc mang thiếu đơn giấy cũ. Khai thác việc mỗi đơn thêm vào app đều lưu lại
  ảnh gốc (không chỉ tên thuốc đã đọc), và theo dõi tiến trình liều/tổng liều để phân biệt đơn nào
  còn hiệu lực, đơn nào đã dùng xong khi trình bày lại cho bác sĩ mới. Không đưa hướng dẫn nên
  ngừng/tiếp tục thuốc nào khi đổi phác đồ — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ trực tiếp. Không
  đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề lưu lịch sử đơn
  khi đổi nơi khám.

- `con-uong-thuoc-giua-gio-hoc-o-truong` — "Con phải uống thuốc giữa giờ học ở trường: cha mẹ
  chuẩn bị và phối hợp thế nào?" — keyword: `con uống thuốc ở trường giữa giờ học` — segment: cha
  mẹ có con trong độ tuổi đi học, cần uống một cữ thuốc rơi đúng giờ ở trường (bán trú/nội trú)
  chứ không phải ở nhà. Bài tối (routine tự động 2 bài/ngày, backlog trống nên tự đề xuất góc độ
  mới) — góc độ mới, chưa từng dùng: khác "cách nhắc con uống thuốc đúng giờ" (đó là cha mẹ bận
  rộn nhắc con nói chung, con vẫn ở nhà) ở chỗ đây là cữ thuốc cụ thể rơi vào giờ con đang ở
  trường, không có cha mẹ bên cạnh — trọng tâm là chuẩn bị thông tin rõ ràng trước khi con đi học
  và biết chắc cữ ở trường đã uống hay chưa để tránh cho uống trùng khi về nhà, khác hẳn bài sáng
  cùng ngày (đổi bác sĩ, đổi nơi khám). Khai thác nhập tay không giới hạn và không tính lượt quét
  AI để ghi lại cữ thuốc cần mang theo, theo dõi tiến trình liều đã uống/tổng liều để biết cữ ở
  trường đã được đánh dấu hay chưa, và mời thêm người vào nhóm Gia đình bằng QR không giới hạn
  huyết thống nếu trường đồng ý phối hợp theo dõi cùng (không khẳng định trường sẽ đồng ý, chỉ nêu
  là lựa chọn thêm). Không đưa hướng dẫn xử trí cụ thể khi quên cữ ở trường (uống bù hay bỏ qua) —
  chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ. Không đặt `imageTag` — không có ảnh nào trong danh sách
  duyệt sẵn khớp thật với chủ đề phối hợp nhà-trường.

## 2026-09-22

- `ca-nha-cung-om-mua-cum-uong-thuoc-sao-cho-khong-nham` — "Cả nhà cùng ốm mùa cúm: uống thuốc
  sao cho không nhầm ai đã uống chưa?" — keyword: `cả nhà bị cảm cúm cùng lúc uống thuốc` —
  segment: gia đình có nhiều thành viên cùng ốm một đợt cảm cúm theo mùa, mỗi người dùng thuốc và
  cữ giờ khác nhau trong vài ngày ngắn ngày. Bài sáng (routine tự động 2 bài/ngày, backlog trống
  nên tự đề xuất góc độ mới) — góc độ mới, chưa từng dùng: khác `nha-nhieu-nguoi-cung-uong-thuoc-
  khong-nham-lan` (nhiều thế hệ cùng uống thuốc khác nhau dài hạn, ông bà/cha mẹ/con nhỏ, rủi ro
  lẫn hộp thuốc/giờ nhắc lâu dài) ở chỗ đây là một đợt ốm cấp tính ngắn ngày, cả nhà cùng lúc vừa
  là bệnh nhân vừa phải tự nhớ thuốc của mình trong lúc mệt, rủi ro chính là quên đã hỏi/uống
  chưa trong chính vài ngày ốm chứ không phải quản lý dài hạn. Khai thác nhập tay không giới hạn
  và không tính lượt quét AI (phù hợp vì thuốc mùa cúm thường ngắn ngày, ít có đơn giấy đầy đủ),
  theo dõi tiến trình liều đã uống/tổng liều tách riêng theo từng tài khoản trong nhóm Gia đình để
  biết ai đã uống hôm nay mà không cần hỏi lại, và mời thêm người thân bằng QR không giới hạn
  huyết thống khi cần thêm người phụ chăm sóc. Dùng `imageTag: gia-dinh` (khớp chủ đề theo dõi
  thuốc nhiều thành viên qua nhóm Gia đình). Không đưa hướng dẫn thuốc cảm cúm cụ thể (tên
  thuốc/liều dùng) — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ, đặc biệt khi có người có bệnh nền hoặc
  triệu chứng không đỡ sau vài ngày.

- `tre-so-sinh-uong-vitamin-d-moi-ngay-cha-me-de-quen` — "Trẻ sơ sinh uống vitamin D mỗi ngày:
  cha mẹ lần đầu có con dễ quên ra sao?" — keyword: `trẻ sơ sinh uống vitamin D mỗi ngày` —
  segment: cha mẹ lần đầu có con, con còn nhỏ cần uống vitamin D/canxi bổ sung mỗi ngày theo chỉ
  định bác sĩ nhi. Bài tối (routine tự động 2 bài/ngày, backlog trống nên tự đề xuất góc độ mới) —
  góc độ hoàn toàn mới, chưa từng dùng: khác các bài vitamin/thuốc bổ trước
  (`uong-vitamin-thuc-pham-chuc-nang-cung-thuoc-ke-don` — kết hợp hai nguồn thuốc kê đơn và tự
  mua; `uong-thuoc-bo-thai-ky-dung-gio` — mẹ bầu tự uống cho chính mình) ở chỗ đây là cha mẹ uống
  hộ/cho con sơ sinh uống, chỉ định chỉ dặn miệng không có đơn in, và rủi ro chính là quên vì
  không có triệu chứng nhắc nhở giữa guồng chăm con mới sinh còn bỡ ngỡ. Khác hẳn bài sáng cùng
  ngày (cả nhà cùng ốm mùa cúm — bệnh cấp tính ngắn ngày, người lớn tự uống thuốc cho bản thân).
  Khai thác nhập tay không giới hạn và không tính lượt quét AI (phù hợp vì không có đơn giấy để
  quét), nhắc theo buổi tự chọn theo nhịp sinh hoạt của bé, theo dõi tiến trình liều đã cho uống,
  và nhóm Gia đình để cả bố mẹ (hoặc ông bà phụ chăm) cùng theo dõi tránh quên hoặc cho uống
  trùng. Dùng `imageTag: nhap-thuoc-thu-cong` (khớp chủ đề nhập tay không có đơn giấy). Không đưa
  liều lượng/thời điểm bắt đầu-kết thúc cụ thể — chỉ khuyến cáo hỏi lại bác sĩ nhi/dược sĩ.

## 2026-09-23

- `uong-thuoc-dung-gio-khi-di-lam-van-phong-hop-lien-tuc` — "Dân văn phòng họp liên tục cả ngày:
  uống thuốc giữa giờ làm sao cho không trôi mất lời nhắc?" — keyword: `uống thuốc đúng giờ khi đi
  làm văn phòng` — segment: người đi làm văn phòng, lịch họp dày đặc cả ngày, thường xuyên để điện
  thoại im lặng/Tập trung nên dễ bỏ lỡ lời nhắc uống thuốc giữa giờ làm. Bài sáng (routine tự động
  2 bài/ngày, backlog trống nên tự đề xuất góc độ mới) — góc độ mới, chưa từng dùng: khác "làm ca
  đêm, xoay ca" (nhịp sinh hoạt đảo lộn dài hạn do lịch ca) và "đi công tác/du lịch" (xáo trộn tạm
  thời do di chuyển) ở chỗ đây là giờ hành chính cố định nhưng bị phân mảnh bởi lịch họp dày đặc —
  rủi ro chính là thông báo nhắc thuốc bị lấp giữa hàng loạt thông báo công việc và bị bỏ qua khi
  điện thoại chủ động để im lặng/Tập trung lúc họp, không phải lệch múi giờ hay đảo ca. Khai thác
  báo thức riêng iOS 26 vẫn kêu khi điện thoại im lặng/Tập trung, nhắc theo buổi tự chọn để né giờ
  họp cố định trong tuần, theo dõi tiến trình liều để biết ngày nào bận đến mức bỏ lỡ, và nhập tay
  không giới hạn/không tính lượt quét AI cho thuốc lẻ mang theo chỗ làm. Dùng `imageTag:
  bao-thuc-im-lang` (usedWhen của tag này nêu rõ ví dụ "giờ họp/giờ học"). Không đưa hướng dẫn tự
  điều chỉnh giờ uống thuốc cụ thể — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ nếu giờ họp cố định
  thường xuyên xung đột với giờ uống theo đơn.

- `uong-thuoc-dung-gio-khi-chay-xe-cong-nghe` — "Tài xế công nghệ chạy cả ngày ngoài đường: uống
  thuốc đúng giờ thế nào giữa các cuốc xe?" — keyword: `uống thuốc đúng giờ khi chạy xe công nghệ`
  — segment: tài xế công nghệ (xe ôm, ô tô công nghệ, shipper) làm việc theo cuốc xe cả ngày ngoài
  đường, không có giờ nghỉ cố định. Bài tối (routine tự động 2 bài/ngày, backlog trống nên tự đề
  xuất góc độ mới) — góc độ hoàn toàn mới, chưa từng dùng: khác bài sáng cùng ngày (dân văn phòng —
  bị chặn bởi lịch họp cố định trước, giờ hành chính vẫn có khung nghỉ nhất định) ở chỗ tài xế công
  nghệ không có giờ nghỉ cố định để tự sắp xếp — giờ rảnh tay phụ thuộc hoàn toàn vào lúc nào trả
  xong cuốc, có thể bị cuốc mới chen ngang đúng lúc định dừng uống thuốc, và điện thoại đang bận mở
  app đặt xe khiến thông báo nhắc thuốc dễ bị lướt qua. Cũng khác "đi công tác/du lịch" (xáo trộn
  tạm thời do di chuyển xa nhà) và "làm ca đêm, xoay ca" (nhịp ca cố định dài hạn) vì đây là biến
  động không đoán trước được trong từng ngày làm việc bình thường tại chỗ. Khai thác nhắc theo buổi
  tự chọn linh hoạt theo nhịp nghỉ thật, thông báo không cần mạng (phù hợp vùng sóng yếu khi di
  chuyển), theo dõi tiến trình liều để biết ngày nào chạy nhiều khiến bỏ lỡ, và nhập tay không giới
  hạn/không tính lượt quét AI cho thuốc lẻ mang theo trong cốp xe. Không đặt `imageTag` — không có
  ảnh nào trong danh sách duyệt sẵn khớp thật với bối cảnh chạy xe ngoài đường. Không đưa hướng dẫn
  tự điều chỉnh giờ uống thuốc cụ thể — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

## 2026-09-24

- `me-sau-sinh-uong-thuoc-bo-loi-sua-dung-gio` — "Mẹ sau sinh uống thuốc bổ, lợi sữa đúng giờ:
  khó giữ lịch thế nào giữa những đêm mất ngủ?" — keyword: `mẹ sau sinh uống thuốc bổ đúng giờ` —
  segment: phụ nữ sau sinh, đang cho con bú, cần uống vitamin/thuốc bổ theo chỉ định bác sĩ trong
  giai đoạn hậu sản. Bài sáng (routine tự động 2 bài/ngày, backlog trống nên tự đề xuất góc độ
  mới) — góc độ hoàn toàn mới, chưa từng dùng: khác `uong-thuoc-bo-thai-ky-dung-gio` (đang mang
  thai, vẫn còn giữ được ít nhiều nhịp sinh hoạt cũ) ở chỗ đây là giai đoạn hậu sản — nhịp thức/ngủ
  đảo lộn hoàn toàn theo nhu cầu bú của con chứ không theo đồng hồ, khiến các mốc giờ cũ (như "sau
  bữa sáng") không còn đáng tin cậy. Cũng khác `tre-so-sinh-uong-vitamin-d-moi-ngay-cha-me-de-quen`
  (đó là cha mẹ cho CON uống vitamin D) ở chỗ đây là chính người mẹ uống thuốc bổ cho bản thân
  mình. Khai thác nhập tay không giới hạn và không tính lượt quét AI (phù hợp vì thuốc bổ hậu sản
  thường chỉ dặn miệng lúc xuất viện, không có đơn in), nhắc theo buổi mẹ tự chọn linh hoạt theo
  nhịp thức đêm, theo dõi tiến trình liều đã uống/tổng liều, và nhóm Gia đình để chồng/người thân
  phụ nhắc khi mẹ quá mệt. Không đặt `imageTag` — cốt lõi bài là sự xáo trộn giờ giấc do chăm con
  sơ sinh, không phải riêng việc nhập tay hay theo dõi tiến trình, nên không có ảnh nào trong danh
  sách duyệt sẵn khớp thật trọng tâm này. Không đưa liều lượng/thời điểm cụ thể hay khẳng định ảnh
  hưởng đến sữa mẹ — chỉ khuyến cáo hỏi lại bác sĩ sản khoa/dược sĩ.

- `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone` — "Cha mẹ già không rành smartphone:
  con cháu cài lịch nhắc uống thuốc hộ thế nào?" — keyword: `cài lịch nhắc uống thuốc cho cha mẹ
  già không rành công nghệ` — segment: con cháu cài đặt và thiết lập lịch uống thuốc hộ cho cha
  mẹ, ông bà lớn tuổi không quen thao tác smartphone. Bài tối (routine tự động 2 bài/ngày, backlog
  trống nên tự đề xuất góc độ mới) — góc độ hoàn toàn mới, chưa từng dùng: khác
  `nhac-bo-me-uong-thuoc-tu-xa` (đó là theo dõi từ xa trong khi cha mẹ vẫn tự thao tác điện thoại
  của họ) và khác `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` (người chăm sóc chuyên
  nghiệp ở cạnh trực tiếp, báo cáo lại) ở chỗ đây là tình huống cha mẹ KHÔNG tự thao tác được app —
  con cháu phải cài đặt/nhập đơn/chỉnh giờ nhắc hộ hoàn toàn ngay từ đầu (thường lúc về thăm nhà
  hoặc hướng dẫn từ xa qua điện thoại), rồi cha mẹ chỉ cần nghe thông báo/báo thức kêu chứ không
  thao tác lại trong app. Trọng tâm là thiết lập một lần cho đúng vì cha mẹ khó tự sửa nếu sai.
  Khai thác quét AI đơn thuốc hoặc nhập tay hộ, chỉnh giờ nhắc theo đúng nhịp sinh hoạt thật của
  cha mẹ thay vì giờ app tự đặt, báo thức riêng iOS 26 khi cha mẹ hay để chuông nhỏ/quên chỉnh âm
  lượng, và nhóm Gia đình để con cháu tiếp tục theo dõi tiến trình liều sau khi đã thiết lập xong.
  Khác hẳn bài sáng cùng ngày (mẹ sau sinh uống thuốc bổ). Không đặt `imageTag` — cốt lõi bài là
  việc con cháu thiết lập hộ toàn bộ quy trình, không có ảnh nào trong danh sách duyệt sẵn khớp
  thật trọng tâm này hơn một chi tiết UI đơn lẻ. Không đưa hướng dẫn liều lượng/cách uống cụ thể —
  chỉ khuyến cáo đối chiếu đơn gốc và hỏi lại bác sĩ/dược sĩ khi nhập hộ.

## 2026-09-25

- `vo-chong-lon-tuoi-nhac-thuoc-cho-nhau` — "Vợ chồng lớn tuổi chăm thuốc cho nhau: khi cả hai đều
  dễ quên như nhau" — keyword: `vợ chồng lớn tuổi nhắc thuốc cho nhau` — segment: vợ chồng cao
  tuổi sống cùng nhà, không có con cháu ở gần hỗ trợ thường xuyên, cùng nhắc và theo dõi thuốc cho
  nhau. Bài sáng (routine tự động 2 bài/ngày, backlog trống nên tự đề xuất góc độ mới) — góc độ
  hoàn toàn mới, chưa từng dùng: khác `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh` (một người
  già sống một mình, tự chăm sóc bản thân) và khác
  `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone` (con cháu thiết lập/theo dõi hộ cha
  mẹ từ bên ngoài) ở chỗ đây là HAI người cùng lớn tuổi, sống chung một nhà, không có người ngoài
  hỗ trợ — trước giờ chỉ nhắc miệng cho nhau nhưng cả hai đều dễ quên như nhau, không ai đứng ngoài
  để đối chiếu số liệu thực tế. Khai thác đơn thuốc/lịch nhắc tách riêng theo từng tài khoản, cùng
  tham gia một nhóm Gia đình để xem tiến trình liều của nhau mà không cần hỏi lại bằng miệng, báo
  thức riêng iOS 26 khi một trong hai hay để điện thoại im lặng, và việc mời thêm con cháu vào
  nhóm chỉ là lựa chọn thêm chứ không bắt buộc. Dùng `imageTag: gia-dinh` (khớp chủ đề theo dõi
  tiến trình thuốc qua nhóm Gia đình). Không đưa hướng dẫn xử trí khi quên liều hay liều dùng cụ
  thể — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ.

- `anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc` — "Anh chị em thay phiên chăm cha
  mẹ: bàn giao lịch uống thuốc sao cho không sót?" — keyword: `anh chị em thay phiên chăm cha mẹ
  uống thuốc` — segment: anh chị em ruột thay phiên nhau về chăm cha mẹ lớn tuổi theo ca (vài ngày
  hoặc một tuần mỗi người), cần bàn giao thông tin thuốc rõ ràng khi đổi ca. Bài tối (routine tự
  động 2 bài/ngày, backlog trống nên tự đề xuất góc độ mới) — góc độ hoàn toàn mới, chưa từng
  dùng: khác `vo-chong-lon-tuoi-nhac-thuoc-cho-nhau` (bài sáng cùng ngày — hai vợ chồng cùng lớn
  tuổi sống chung nhà, tự nhắc nhau, không ai đứng ngoài) và khác
  `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone` (con cháu thiết lập một lần rồi cha mẹ
  tự nghe thông báo) ở chỗ đây là NHIỀU anh chị em trưởng thành thay phiên nhau trực tiếp chăm sóc
  theo ca (không phải theo dõi từ xa liên tục hay thiết lập một lần), và rủi ro chính nằm ở đúng
  thời điểm ĐỔI CA — người sắp đi bàn giao miệng/nhắn tin thiếu chi tiết cho người sắp đến, đặc
  biệt khi vừa có đơn thuốc mới sau tái khám. Khai thác nhóm Gia đình để mọi ca đều thấy chung một
  tiến trình liều thay vì hỏi lại người ca trước, ảnh đơn thuốc gốc được lưu lại để người ca sau tự
  xem thay vì chỉ nghe kể, và từng liều được đánh dấu đã uống để tránh cho uống trùng/bỏ sót ngay
  ngày đầu nhận ca. Dùng `imageTag: gia-dinh` (khớp chủ đề theo dõi thuốc nhiều người qua nhóm Gia
  đình). Không đưa hướng dẫn xử trí khi nghi ngờ bỏ sót liều — chỉ khuyến cáo hỏi lại bác sĩ/dược
  sĩ.

## 2026-09-26

- `con-dau-con-re-cham-bo-me-chong-vo-uong-thuoc` — "Con dâu, con rể chăm bố mẹ chồng/vợ uống
  thuốc: làm sao nắm thông tin như con ruột?" — keyword: `con dâu con rể chăm sóc bố mẹ chồng vợ
  uống thuốc` — segment: con dâu/con rể sống cùng hoặc thường xuyên chăm sóc bố mẹ chồng, bố mẹ
  vợ, chưa nắm rõ thông tin thuốc và bệnh sử bằng con ruột. Bài sáng (routine tự động 2 bài/ngày,
  backlog trống nên tự đề xuất góc độ mới) — góc độ hoàn toàn mới, chưa từng dùng: khác các bài
  con cái/cháu chăm cha mẹ đã có (`nhac-bo-me-uong-thuoc-tu-xa`,
  `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone`,
  `anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc`) ở chỗ đây không phải con ruột mà
  là con dâu/con rể — người vốn dĩ nắm thông tin bệnh sử/thuốc men ít nhất trong nhà vì chỉ biết
  qua lời kể lại của chồng/vợ mình, không phải tự chứng kiến từ nhỏ, và ngại hỏi lại nhiều lần vì
  sợ bị nghĩ là không quan tâm. Trọng tâm là thu hẹp khoảng cách thông tin đó chứ không phải quãng
  cách địa lý hay việc bàn giao theo ca. Khai thác đơn thuốc/ảnh gốc lưu lại một chỗ trong ứng
  dụng, nhóm Gia đình để mọi thành viên (kể cả người mới tham gia sau) xem chung thông tin thay vì
  truyền miệng lại, theo dõi tiến trình liều đã uống thay vì đoán chừng, và báo thức riêng iOS 26
  khi bố mẹ hay để điện thoại im lặng. Dùng `imageTag: gia-dinh` (khớp chủ đề theo dõi thuốc nhiều
  người qua nhóm Gia đình). Không đưa hướng dẫn xử trí cụ thể khi quên liều hay tên thuốc/liều
  dùng — chỉ khuyến cáo hỏi lại bác sĩ/dược sĩ hoặc trao đổi thêm với chồng/vợ mình.

## 2026-09-27

- `quen-uong-thuoc-1-lan-co-sao-khong` — "Quên uống thuốc 1 lần có sao không?" — keyword: `quên
  uống thuốc 1 lần có sao không` — cụm Uống thuốc đúng cách (backlog #1). Góc độ: trả lời trực
  tiếp câu hỏi "có sao không", giải thích vì sao không có một quy tắc xử trí chung cho mọi loại
  thuốc (khác thuốc, khác cách xử trí quên liều), liệt kê các tình huống nên chủ động hỏi ngay
  bác sĩ/dược sĩ, không đưa ra bất kỳ hướng dẫn uống bù/bỏ liều cụ thể nào. Liên kết nội bộ tới
  bài `dau-hieu-quen-lieu-uong-trung-lieu-thuoc` (đã dùng trong backlog gợi ý). Nguồn tham khảo:
  trang "Làm gì khi quên uống thuốc huyết áp?" của Sở Y tế Nghệ An (yte.nghean.gov.vn) — chỉ dùng
  để minh hoạ rằng cách xử trí quên liều khác nhau theo từng loại thuốc, không trích dẫn hướng
  dẫn xử trí cụ thể của nguồn này vào bài.

## 2026-09-28

- `don-thuoc-dien-tu-la-gi` — "Đơn thuốc điện tử là gì? Người bệnh cần biết gì khi đi khám" —
  keyword: `đơn thuốc điện tử là gì` — cụm Đơn thuốc & giấy tờ y tế (backlog #1, chiến lược mới từ
  hôm nay — nhắm thẳng câu hỏi tìm kiếm thay vì cắt theo nhóm đối tượng). Góc độ: giải thích đơn
  thuốc điện tử là gì và quy định từ Thông tư 27/2021/TT-BYT, lộ trình áp dụng tại cơ sở khám chữa
  bệnh, khác biệt với đơn giấy nhìn từ phía người bệnh (có thể không còn nhận tờ giấy in), và việc
  cần chủ động hỏi cách xem lại đơn/tự lưu bản riêng. Chỉ nêu thông tin chính sách đã kiểm chứng
  trong phiên này (không khẳng định giá trị pháp lý cụ thể chưa đọc được nguyên văn). Liên kết nội
  bộ tới bài `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi`. Nguồn: Thông tư 27/2021/TT-BYT trên
  Cổng thông tin điện tử Chính phủ (chinhphu.vn) và trang Bảo hiểm xã hội Việt Nam
  (baohiemxahoi.gov.vn) về lộ trình kê đơn thuốc điện tử. Không đặt `imageTag` — không có ảnh nào
  trong danh sách duyệt sẵn khớp thật với chủ đề chính sách/quy định này.

## 2026-09-29

- `cach-bao-quan-thuoc-tai-nha` — "Cách bảo quản thuốc tại nhà đúng cách: nhiệt độ, độ ẩm và ánh
  sáng" — keyword: `cách bảo quản thuốc tại nhà` — cụm Uống thuốc đúng cách (backlog #1). Góc độ:
  nguyên tắc chung cho phần lớn thuốc viên/thuốc bột (nhiệt độ 15–25°C, độ ẩm, tránh ánh nắng, giữ
  nguyên bao bì gốc, để xa tầm tay trẻ em), luôn dẫn về việc đọc tờ hướng dẫn sử dụng/hỏi dược sĩ
  cho từng loại cụ thể — không nêu tên thuốc hay khuyến cáo dùng/bỏ thuốc cụ thể. Liên kết nội bộ
  tới `quan-ly-tu-thuoc-gia-dinh-khong-ke-don` và `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`.
  Nguồn: bài "Những điều cần biết về bảo quản thuốc tại nhà" của Vinmec (vinmec.com) — đã mở và
  đối chiếu số liệu nhiệt độ/độ ẩm trong bài với nguồn này. Không đặt `imageTag` — không có ảnh
  nào trong danh sách duyệt sẵn khớp thật với chủ đề bảo quản thuốc.

## 2026-09-30

- `uong-thuoc-cach-nhau-bao-lau` — "Uống thuốc cách nhau bao lâu? Hiểu đúng con số bác sĩ ghi trên
  đơn" — keyword: `uống thuốc cách nhau bao lâu` — cụm Uống thuốc đúng cách (backlog #1). Góc độ:
  giải thích vì sao khoảng cách giữa các liều không có con số chung cho mọi thuốc mà do bác sĩ/dược
  sĩ tính riêng và ghi trên đơn (ví dụ "cách 6 giờ", "cách 8 giờ"), cơ chế chung vì sao cần giữ đúng
  khoảng cách đó (nồng độ thuốc trong máu), cách xếp giờ trong ngày cho khớp, và các lỗi hay gặp
  (dồn hết vào giờ thức bỏ trống ban đêm, đổi giờ liên tục, uống bù sát liều kế tiếp) — không nêu
  khoảng cách cụ thể cho bất kỳ loại thuốc nào, luôn dẫn về hỏi bác sĩ/dược sĩ. Khác bài
  `cac-kieu-lich-uong-thuoc-mau-thuong-gap` (phân loại các KIỂU nhịp uống: cố định/cách đều/theo
  bữa ăn/đủ liệu trình) ở chỗ bài này tập trung vào ý nghĩa và cách áp dụng con số giờ cụ thể bác sĩ
  ghi trên đơn. Liên kết nội bộ tới `cac-kieu-lich-uong-thuoc-mau-thuong-gap` và
  `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`. Dùng `imageTag: thiet-lap-gio-uong` (khớp phần chỉnh
  giờ từng buổi theo đúng khoảng cách). Nguồn: bài "Phải tuân thủ khoảng cách giữa các lần dùng
  thuốc" trên Báo Sức khỏe & Đời sống (suckhoedoisong.vn, cơ quan ngôn luận của Bộ Y tế) — đã fetch
  và đối chiếu cơ chế nồng độ thuốc trong bài với nguồn này.

## 2026-10-01

- `cum-mua-khi-nao-can-di-kham-bac-si` — "Cảm cúm khi nào cần đi khám bác sĩ ngay?" — keyword:
  `cảm cúm khi nào cần đi khám bác sĩ` — cụm Theo mùa (backlog #8, mùa cúm/giao mùa tháng 10-11).
  Góc độ: liệt kê dấu hiệu cảnh báo cụ thể cần đi khám ngay ở người lớn và trẻ nhỏ (khó thở, lú
  lẫn, sốt cao không hạ, triệu chứng đỡ rồi nặng lại...), và nhóm nguy cơ cao (trẻ em, người lớn
  tuổi, bệnh mạn tính, mang thai, suy giảm miễn dịch) nên đi khám sớm hơn — không nêu tên thuốc
  trị cúm hay hướng dẫn dùng thuốc hạ sốt/kháng virus cụ thể nào, chỉ nói khi nào cần gặp chuyên
  môn. Khác bài `ca-nha-cung-om-mua-cum-uong-thuoc-sao-cho-khong-nham` (đó là phối hợp nhắc thuốc
  trong nhà khi cả nhà cùng ốm, không phải dấu hiệu y khoa cần đi khám) — có liên kết nội bộ qua
  lại giữa hai bài. Nguồn: hai bài "Dấu hiệu cảnh báo nguy hiểm của bệnh cúm" và "Khuyến cáo phòng
  bệnh cúm mùa của Bộ Y tế" trên Vinmec (vinmec.com), đã fetch và đối chiếu danh sách dấu hiệu cảnh
  báo cùng nhóm nguy cơ cao trong phiên này. Không đặt `imageTag` — không có ảnh nào trong danh
  sách duyệt sẵn khớp thật với chủ đề dấu hiệu y khoa cần đi khám.

## 2026-10-02

- `mat-don-thuoc-phai-lam-sao` — "Mất đơn thuốc phải làm sao?" — keyword: `mất đơn thuốc phải làm
  sao` — cụm Đơn thuốc & giấy tờ y tế (backlog #1). Góc độ: trả lời trực tiếp không nên tự mua lại
  thuốc theo trí nhớ, việc nên làm ngay (liên hệ nơi đã khám, hỏi nhà thuốc đã từng bán, kiểm tra
  các bản sao đã lưu), vì sao đơn thuốc điện tử giảm rủi ro mất hoàn toàn, lưu ý riêng cho thuốc
  thuộc danh mục kiểm soát đặc biệt (không nêu tên thuốc cụ thể), và cách tránh mất đơn lần sau.
  Không đưa thủ tục pháp lý cụ thể nào không kiểm chứng được trong phiên này (không tìm thấy quy
  định chính thức riêng cho việc "cấp lại đơn thuốc bị mất" — chỉ nêu hướng xử lý chung, an toàn).
  Liên kết nội bộ tới `don-thuoc-dien-tu-la-gi` và `doi-bac-si-doi-noi-kham-can-mang-theo-gi`.
  Nguồn: trang hệ thống thông tin quản lý kê đơn thuốc và bán thuốc theo đơn
  (donthuocquocgia.vn, do Cục Quản lý Khám, chữa bệnh — Bộ Y tế quản lý), đã fetch và đối chiếu
  trong phiên này để xác nhận hệ thống này tồn tại và do Bộ Y tế quản lý — không trích dẫn giá trị
  pháp lý cụ thể của đơn điện tử vì chưa kiểm chứng được chi tiết đó trong phiên này. Không đặt
  `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề mất đơn giấy/thủ tục
  xin cấp lại.

## 2026-10-03

- `cach-nho-uong-thuoc-huyet-ap-moi-ngay` — "Cách nhớ uống thuốc huyết áp đúng giờ mỗi ngày" —
  keyword: `cách nhớ uống thuốc huyết áp mỗi ngày` — cụm Bệnh mạn tính (backlog #1). Góc độ: vì sao
  thuốc huyết áp dễ quên hơn thuốc khác (bệnh không gây triệu chứng rõ rệt để tự nhắc), cách gắn
  giờ uống với một thói quen có sẵn mỗi ngày và giữ đúng một khung giờ cố định — không bàn chọn
  thuốc hay khung giờ sáng/tối cụ thể cho bất kỳ loại thuốc huyết áp nào (chi tiết đó để bác sĩ/
  dược sĩ quyết định). Liên kết nội bộ tới `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc`
  và `quen-uong-thuoc-1-lan-co-sao-khong`. Dùng `imageTag: thiet-lap-gio-uong` (khớp phần thiết lập
  giờ nhắc theo buổi). Nguồn: bài "Hướng dẫn uống thuốc huyết áp đúng cách" của Vinmec
  (vinmec.com), đã fetch trong phiên này — chỉ lấy phần thói quen/cách nhớ liều, không lấy khuyến
  nghị khung giờ sáng/tối cụ thể của nguồn này vì đó là chi tiết cần bác sĩ xác nhận riêng.

## 2026-10-04

- `nguoi-benh-tieu-duong-quen-uong-thuoc` — "Người bệnh tiểu đường quên uống thuốc: vì sao không
  nên xem nhẹ?" — keyword: `người bệnh tiểu đường quên uống thuốc` — cụm Bệnh mạn tính (backlog
  #1). Góc độ: vì sao tiểu đường type 2 ít triệu chứng rõ rệt nên dễ xem nhẹ việc quên một liều,
  rủi ro thật sự nằm ở việc quên lặp lại nhiều lần (đường huyết tăng cao kéo dài, ảnh hưởng dần
  đến thần kinh/thận/tim/mắt), cách gắn giờ uống với bữa ăn hằng ngày (nhiều thuốc tiểu đường được
  chỉ định theo mốc trước/trong/sau ăn), và theo dõi bằng số liệu tiến trình liều thay vì chỉ dựa
  cảm giác — không đưa hướng dẫn uống bù/bỏ liều cụ thể, luôn dẫn về hỏi bác sĩ/dược sĩ. Dùng
  `imageTag: thiet-lap-gio-uong` (khớp phần thiết lập giờ nhắc theo buổi gắn với bữa ăn, cùng cách
  dùng như bài huyết áp). Liên kết nội bộ tới `quen-uong-thuoc-1-lan-co-sao-khong` và
  `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc`. Nguồn: bài "Làm gì nếu bạn quên uống
  thuốc tiểu đường loại 2?" của Vinmec (vinmec.com), đã fetch và đối chiếu trong phiên này — chỉ
  lấy phần rủi ro khi quên lặp lại (tăng đường huyết kéo dài, dấu hiệu, biến chứng dài hạn) và lời
  khuyên hỏi bác sĩ, không lấy hướng dẫn "uống bù nếu còn gần giờ, bỏ qua nếu gần liều kế tiếp" của
  nguồn vì đó là chỉ dẫn xử trí liều cụ thể mà CLAUDE.md yêu cầu luôn để bác sĩ/dược sĩ quyết định.

## 2026-10-05

- `co-nen-dung-lai-don-thuoc-cu` — "Có nên dùng lại đơn thuốc cũ để mua thuốc không?" — keyword:
  `có nên dùng lại đơn thuốc cũ` — cụm Đơn thuốc & giấy tờ (backlog #1). Góc độ: vì sao triệu chứng
  giống lần bệnh trước không đồng nghĩa là có thể tự lấy đơn cũ ra mua lại thuốc — đơn được kê riêng
  cho một thời điểm, một mức độ bệnh cụ thể, và chỉ bác sĩ mới quyết định được việc kéo dài thời
  gian dùng một đơn cho bệnh mạn tính ổn định; nhấn mạnh việc mang đơn cũ đi tái khám để đối chiếu
  (không phải để tự dùng lại). Không nêu thuốc cụ thể nào, không hướng dẫn xử trí liều. Liên kết nội
  bộ tới `mat-don-thuoc-phai-lam-sao` và `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi`. Nguồn:
  bài "Không nên tự ý dùng lại toa thuốc cũ" của Bệnh viện Đa khoa Tâm Anh (tamanhhospital.vn), đã
  fetch và đối chiếu trong phiên này — chỉ lấy phần lý do chung (bệnh có thể đã thay đổi, cần đánh
  giá lại), không lấy chi tiết ca bệnh cụ thể trong bài.

## 2026-10-06

- `vut-bo-thuoc-het-han-dung-cach` — "Vứt bỏ thuốc hết hạn đúng cách: không chỉ là bỏ vào thùng
  rác" — keyword: `cách vứt bỏ thuốc hết hạn đúng cách` — cụm Uống thuốc đúng cách (backlog #1).
  Góc độ: trả lời trực tiếp vì sao không nên tuỳ tiện vứt thuốc hết hạn (trẻ em/vật nuôi nhặt lại,
  người khác dùng nhầm, ảnh hưởng môi trường nước nếu đổ xuống bồn cầu/cống), thứ tự ưu tiên xử lý
  tại nhà (mang đến hiệu thuốc/cơ sở y tế gần nhà trước, chỉ bọc kỹ bỏ rác sinh hoạt nếu không có
  điểm thu gom), lưu ý riêng cho thuốc tiêm/thuốc nhỏ/thuốc kiểm soát đặc biệt, và cách tránh tích
  tụ thuốc hết hạn từ đầu bằng việc theo dõi tồn thuốc. Không nêu quy định pháp lý cụ thể nào không
  kiểm chứng được trong phiên này (không tìm thấy nguồn chính thức Việt Nam về quy trình thu hồi
  thuốc hết hạn ở cấp hộ gia đình — chỉ dùng nguyên tắc an toàn chung, không bịa quy định). Liên kết
  nội bộ tới `cach-bao-quan-thuoc-tai-nha` và `quan-ly-tu-thuoc-gia-dinh-khong-ke-don`. Nguồn: bài
  "Vì sao thuốc phải có hạn sử dụng?" của Vinmec (vinmec.com), đã fetch trong phiên này — chỉ lấy
  phần khuyến nghị mang thuốc dư lại cho dược sĩ xử lý và rủi ro giảm hiệu quả/biến đổi thành phần
  khi dùng thuốc hết hạn. Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp
  thật với chủ đề xử lý/vứt bỏ thuốc hết hạn (tag `quan-ly-ton-thuoc` là về theo dõi số lượng còn
  lại, không phải về xử lý khi hết hạn).

## 2026-10-07

- `co-nen-bao-quan-thuoc-trong-tu-lanh-khong` — "Có nên bảo quản thuốc trong tủ lạnh không?" —
  keyword: `có nên bảo quản thuốc trong tủ lạnh` — cụm Uống thuốc đúng cách (backlog #2). Góc độ:
  trả lời trực tiếp — đa số thuốc viên/thuốc bột không nên để tủ lạnh vì độ ẩm dễ làm hỏng thuốc,
  trong khi một số ít loại (insulin) lại cần giữ lạnh đúng nhiệt độ ghi trên nhãn. Khác bài
  `cach-bao-quan-thuoc-tai-nha` (nguyên tắc chung nhiệt độ/độ ẩm/ánh sáng nơi để thuốc nói chung) ở
  chỗ đây là câu hỏi hẹp hơn, riêng về tủ lạnh — nêu ví dụ cụ thể insulin (lọ/bút chưa dùng cần giữ
  2–8°C, đang dùng giữ nhiệt độ phòng, không được để đông đá) để minh hoạ, không liệt kê danh mục
  đầy đủ thuốc cần giữ lạnh, luôn chốt lại bằng đọc nhãn/hỏi dược sĩ cho từng loại cụ thể. Liên kết
  nội bộ tới `cach-bao-quan-thuoc-tai-nha` và `nguoi-benh-tieu-duong-quen-uong-thuoc`. Nguồn: bài
  "Những điều cần biết về bảo quản thuốc tại nhà" và "Các loại insulin điều trị đái tháo đường và
  cách dùng" của Vinmec (vinmec.com), cả hai đã fetch và đối chiếu số liệu nhiệt độ trong phiên này.
  Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề bảo quản
  thuốc trong tủ lạnh.

## 2026-10-08

- `cach-nho-uong-thuoc-tuyen-giap-moi-ngay` — "Cách nhớ uống thuốc tuyến giáp mỗi ngày" — keyword:
  `cách nhớ uống thuốc tuyến giáp mỗi ngày` — cụm Bệnh mạn tính (backlog #3). Góc độ: khác
  `cach-nho-uong-thuoc-huyet-ap-moi-ngay` và `nguoi-benh-tieu-duong-quen-uong-thuoc` ở chỗ thuốc
  tuyến giáp thường chỉ uống một lần duy nhất mỗi ngày (không có liều khác trong ngày để bù đắp)
  và nhạy với thời điểm uống (lúc đói, cách xa bữa ăn và các thuốc/thực phẩm chức năng khác như
  canxi, sắt) hơn các thuốc mạn tính khác — trọng tâm là chọn một giờ cố định gắn với thói quen có
  sẵn, tách riêng khỏi vitamin/thuốc khác, và không tự đổi giờ hay tự xử trí khi quên liều. Không
  nêu tên hoạt chất, liều dùng hay khoảng cách giờ cụ thể với bữa ăn/canxi/sắt — chỉ nói chung
  "hỏi bác sĩ/dược sĩ đang điều trị" cho mọi chi tiết đó. Dùng `imageTag: thiet-lap-gio-uong`
  (khớp phần thiết lập giờ nhắc theo buổi, cùng cách dùng như hai bài huyết áp/tiểu đường). Liên
  kết nội bộ tới `cach-nho-uong-thuoc-huyet-ap-moi-ngay` và `quen-uong-thuoc-1-lan-co-sao-khong`.
  Nguồn: hai bài "Một số lưu ý về thời điểm sử dụng thuốc levothyroxine" và "Thông tin cần biết về
  thuốc Levothyroxine" của Vinmec (vinmec.com), đã fetch và đối chiếu trong phiên này — chỉ lấy
  phần nguyên tắc chung (uống một lần/ngày do tác dụng kéo dài, nhạy với thời điểm ăn, tương tác
  hấp thu với canxi/sắt, tầm quan trọng của việc giữ đúng giờ trước xét nghiệm) để viết chung
  chung, không trích dẫn tên hoạt chất hay khoảng cách giờ cụ thể của nguồn vào bài, và không lấy
  phần hướng dẫn xử trí quên liều của nguồn (CLAUDE.md yêu cầu luôn để bác sĩ/dược sĩ quyết định).
  Không tìm được trang hướng dẫn chính thức riêng của Bệnh viện Nội tiết Trung ương về giờ uống
  thuốc tuyến giáp trong phiên này (chỉ có kết quả từ nhà thuốc thương mại) nên không dùng nguồn
  đó — chỉ dùng hai bài Vinmec (bệnh viện lớn, đáp ứng tiêu chí nguồn của CLAUDE.md).

## 2026-10-09

- `don-thuoc-co-thoi-han-bao-lau` — "Đơn thuốc có thời hạn bao lâu?" — keyword: `đơn thuốc có thời
  hạn bao lâu` — cụm Đơn thuốc & giấy tờ y tế (backlog #3). Góc độ: trả lời trực tiếp mốc thời hạn
  lĩnh/mua thuốc tối đa 5 ngày kể từ ngày kê đơn, làm rõ mốc này KHÔNG bị bỏ sau khi Thông tư
  26/2025/TT-BYT thay thế Thông tư 52/2017/TT-BYT từ 1/7/2025 (chỉ đổi cách diễn đạt — từ "giá trị
  mua, lĩnh thuốc của đơn" sang một trách nhiệm của người bệnh — số ngày áp dụng trên thực tế không
  đổi), và phân biệt rõ với mốc số ngày thuốc được kê cho một đợt điều trị (30 ngày, hoặc đến 90
  ngày với một số bệnh mạn tính trong danh mục) — hai mốc khác nhau dễ bị nhầm. Không nêu tên thuốc
  cụ thể, không hướng dẫn xử trí liều; chỉ nói chung về nhóm thuốc gây nghiện/hướng thần/tiền chất
  có quy trình riêng chặt chẽ hơn (không đi sâu chi tiết). Liên kết nội bộ tới
  `mat-don-thuoc-phai-lam-sao` và `don-thuoc-dien-tu-la-gi`. Nguồn: toàn văn Điều 12, khoản 9, điểm
  b của Thông tư 26/2025/TT-BYT và Điều 11, khoản 1 của Thông tư 52/2017/TT-BYT, cả hai đã fetch và
  đối chiếu nguyên văn trong phiên này qua LuatVietnam (luatvietnam.vn) — không tìm được bản PDF
  gốc trên chinhphu.vn/vbpl.vn truy cập được trực tiếp trong phiên này (vbpl.vn yêu cầu JS, trang
  thuvienphapluat.vn trả về lỗi 403), nên dùng LuatVietnam làm nguồn trích dẫn nguyên văn điều
  khoản — đã đối chiếu số ngày (5 ngày) khớp với nhiều báo độc lập khác đưa tin về cùng quy định.
  Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề thời hạn
  pháp lý của đơn thuốc. Đã bỏ mục #3 khỏi backlog.

## 2026-10-10

- `cach-nho-uong-thuoc-mo-mau-moi-ngay` — "Cách nhớ uống thuốc mỡ máu mỗi ngày" — keyword: `cách
  nhớ uống thuốc mỡ máu mỗi ngày` — cụm Bệnh mạn tính (backlog #3). Góc độ: khác
  `cach-nho-uong-thuoc-huyet-ap-moi-ngay` và `cach-nho-uong-thuoc-tuyen-giap-moi-ngay` ở chỗ giờ
  uống phù hợp của thuốc mỡ máu khác nhau tuỳ loại (một số loại tác dụng kéo dài uống sáng hay tối
  đều được miễn giữ cố định giờ, một số loại khác được khuyến nghị uống buổi tối) — trọng tâm bài
  là không tự suy ra giờ uống từ người khác mà phải hỏi bác sĩ/dược sĩ cho đúng loại thuốc đang
  dùng, rồi giữ cố định đúng giờ đó mỗi ngày. Không nêu tên hoạt chất/nhóm thuốc cụ thể (statin,
  fibrate) hay liều dùng — chỉ nói chung "một số loại"/"một số loại khác", theo đúng cách bài
  `cach-nho-uong-thuoc-tuyen-giap-moi-ngay` đã làm với levothyroxine. Dùng `imageTag:
  thiet-lap-gio-uong` (khớp phần giữ đúng giờ nhắc cố định theo nhịp sinh hoạt tự chọn, cùng cách
  dùng như hai bài huyết áp/tuyến giáp). Liên kết nội bộ tới `cach-nho-uong-thuoc-huyet-ap-moi-ngay`
  và `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc`. Nguồn: bài "Nên uống thuốc mỡ máu vào
  lúc nào?" của Vinmec (vinmec.com), đã fetch và đối chiếu trong phiên này — chỉ lấy phần nguyên tắc
  chung về sự khác nhau giữa các loại thuốc và khuyến cáo giữ giờ cố định/không tự ngừng thuốc,
  không trích dẫn tên hoạt chất cụ thể của nguồn vào bài. Guard check: đã xác nhận không có nhánh
  `origin/claude/blog-2026-10-10` hay bài nào trong `src/content/blog/` trùng ý định tìm kiếm trước
  khi viết; PR mở duy nhất đang chờ merge là `claude/blog-maintenance-2026-10-04` (bài
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia`, không liên quan chủ đề này). Đã bỏ mục #3
  khỏi backlog (các mục còn lại dịch số lên).

## 2026-10-11

- `sot-xuat-huyet-dau-hieu-canh-bao-can-nhap-vien-ngay` — "Sốt xuất huyết: dấu hiệu cảnh báo nào
  cần đi khám hoặc nhập viện ngay?" — keyword: `sốt xuất huyết dấu hiệu nào cần nhập viện ngay` —
  cụm Theo mùa (backlog #2, sốt xuất huyết tháng 6-9 theo lịch chủ đề nhưng tin tức dịch tễ 2026
  cho thấy số ca vẫn đang tăng vào mùa mưa kéo dài, nên vẫn còn đúng thời điểm giữa tháng 10). Góc
  độ: chỉ nêu dấu hiệu cảnh báo cần đi khám/nhập viện ngay (nôn nhiều, đau bụng dữ dội, chảy máu
  bất thường, tay chân lạnh/li bì) và điểm dễ chủ quan nhất — giai đoạn nguy hiểm thường trùng lúc
  đã hạ sốt, không phải lúc sốt cao nhất — không nêu tên thuốc hạ sốt/giảm đau cụ thể nào, chỉ nói
  chung "một số loại có thể làm tăng nguy cơ chảy máu" và luôn chốt lại hỏi bác sĩ/dược sĩ trước
  khi dùng bất kỳ thuốc nào, đúng theo lưu ý guardrail của mục backlog này. Liên kết nội bộ tới
  `cum-mua-khi-nao-can-di-kham-bac-si` (cùng dạng bài "khi nào cần đi khám" theo mùa, khác bệnh).
  Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề dấu hiệu
  cảnh báo y khoa của sốt xuất huyết. Nguồn: hai bài "Sốt xuất huyết nặng có thể đe dọa tính mạng
  trong vòng vài giờ, cần nhập viện kịp thời" và "Sốt xuất huyết: Giai đoạn nào nguy hiểm nhất?"
  của Vinmec (vinmec.com), đã fetch và đối chiếu trực tiếp trong phiên này — chỉ lấy phần dấu hiệu
  cảnh báo và mốc thời gian giai đoạn nguy hiểm, không lấy phần hướng dẫn truyền dịch/xử trí y khoa
  cụ thể. Guard check: đã fetch `origin` và xác nhận không có nhánh `origin/claude/blog-2026-10-11`;
  nhánh chưa merge duy nhất là `claude/blog-maintenance-2026-10-04` (bài làm mới
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia`, không liên quan chủ đề này). Backlog #1
  (Tết) chưa tới thời điểm đăng (giữa tháng 12/2026) nên bỏ qua, chọn mục #2 (sốt xuất huyết) kế
  tiếp. Đã bỏ mục sốt xuất huyết khỏi backlog (các mục còn lại dịch số lên).

## 2026-10-12

- `uong-thuoc-chung-voi-sua-co-sao-khong` — "Uống thuốc chung với sữa có sao không?" — keyword:
  `uống thuốc chung với sữa có sao không` — cụm Uống thuốc đúng cách (backlog #3, sau khi bỏ mục
  #2 "đơn thuốc BHYT dùng ở bệnh viện khác" — xem phần guard check dưới). Góc độ: nguyên tắc chung
  vì sao canxi và khoáng chất trong sữa có thể tạo phức với hoạt chất một số thuốc, làm giảm hấp
  thu, nhưng không phải thuốc nào cũng bị ảnh hưởng; khuyến nghị chung uống thuốc với nước lọc,
  cách sữa khoảng 1–2 giờ nếu không có hướng dẫn riêng; thêm một mục riêng về việc không nên pha
  thuốc vào bình sữa của trẻ nhỏ. Không nêu tên thuốc/hoạt chất cụ thể nào. Liên kết nội bộ tới
  `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach`. Không đặt `imageTag` — không có ảnh nào trong
  danh sách duyệt sẵn khớp thật với chủ đề tương tác thuốc–sữa. Nguồn: bài "Sữa có làm mất tác dụng
  của thuốc không?" của Vinmec (vinmec.com), đã fetch và đối chiếu trực tiếp trong phiên này — chỉ
  lấy phần cơ chế chung (canxi/sắt tạo phức, chất béo/tính kiềm làm chậm hấp thu) và khuyến nghị
  cách nhau khoảng 2 giờ, không suy diễn thêm cho thuốc cụ thể nào. Guard check: đã fetch `origin`
  và xác nhận không có nhánh `origin/claude/blog-2026-10-12`; hai nhánh chưa merge là
  `claude/blog-maintenance-2026-10-04` và `claude/blog-maintenance-2026-10-11` (đều là bài làm mới,
  không trùng chủ đề này). Backlog #1 (Tết) chưa tới thời điểm đăng nên bỏ qua. Backlog #2 (đơn
  thuốc BHYT dùng ở bệnh viện khác/trái tuyến) bị bỏ qua vì không thể kiểm chứng đủ chắc chắn trong
  phiên này — quy định mức hưởng trái tuyến đang thay đổi phức tạp theo mốc 1/7/2026 (Luật BHYT sửa
  đổi 2024, Nghị định 188/2025/NĐ-CP, Thông tư 01/2025/TT-BYT) và các nguồn thứ cấp tìm được không
  thống nhất, không đọc được trực tiếp đủ văn bản gốc trong phiên để chốt nguyên tắc chung an toàn —
  giữ lại mục #2 trong backlog cho một phiên sau có thời gian đọc kỹ văn bản gốc. Đã chọn mục #3
  (sữa) kế tiếp và bỏ khỏi backlog (các mục còn lại dịch số lên).

## 2026-10-16

- `tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong` — "Tăng huyết áp có phải uống thuốc suốt đời
  không?" — keyword: `tăng huyết áp có phải uống thuốc suốt đời không` — cụm Bệnh mạn tính (backlog
  #8, số cũ trước khi dịch lên do các nhánh `claude/blog-2026-10-13/10-14/10-15` chưa merge đã lấy
  các mục #3, #4, #6). Góc độ: câu hỏi tâm lý "huyết áp đã ổn rồi, có cần uống mãi không" — vì sao
  đa số trường hợp tăng huyết áp cần dùng thuốc lâu dài để phòng biến chứng (không phải chữa khỏi),
  vì sao tự ý ngừng khi thấy khỏe lại nguy hiểm, có ngoại lệ khi xác định được nguyên nhân chữa được
  nhưng vẫn do bác sĩ quyết định, và vai trò của theo dõi/tái khám đều đặn. Không nêu tên thuốc
  huyết áp cụ thể, không tự đưa ra khi nào nên giảm/ngừng liều. Khác bài
  `cach-nho-uong-thuoc-huyet-ap-moi-ngay` (mẹo nhớ uống đều đặn hằng ngày) và
  `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc` (xây thói quen cho người mới chẩn đoán) —
  liên kết nội bộ tới cả hai bài này. Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt
  sẵn khớp thật với chủ đề này (ảnh `thiet-lap-gio-uong` đã dùng cho bài nhớ giờ uống thuốc huyết
  áp). Nguồn: bài "Thuốc huyết áp phải uống suốt đời?" của Vinmec (vinmec.com), đã fetch và đối
  chiếu trực tiếp trong phiên này. Guard check: đã fetch `origin`; không có nhánh
  `origin/claude/blog-2026-10-16`. Các nhánh `claude/blog-2026-10-13`, `claude/blog-2026-10-14`,
  `claude/blog-2026-10-15` chưa merge đã lấy backlog #3 (nghiền thuốc viên), #4 (giảm đau lúc đói),
  #6 (rượu bia) — bỏ qua các mục này khi chọn chủ đề. Backlog #1 (Tết) chưa tới thời điểm đăng,
  backlog #5 và #7 (theo mùa: nhập học tháng 8–9, du lịch hè tháng 5–6) đã hết mùa nên bỏ qua. Thử
  backlog #2 (đơn thuốc BHYT dùng ở bệnh viện khác) trước nhưng vẫn không kiểm chứng đủ chắc chắn
  trong phiên này (quy định trái tuyến đang thay đổi theo mốc 1/7/2026, nguồn thứ cấp không thống
  nhất) — giữ lại mục #2 trong backlog. Đã chọn mục #8 (tăng huyết áp suốt đời) và bỏ khỏi backlog
  (các mục còn lại dịch số lên).
## 2026-10-13

- `co-nen-nghien-thuoc-vien-de-de-uong-khong` — "Có nên nghiền thuốc viên để dễ uống không?" —
  keyword: `có nên nghiền thuốc viên để dễ uống không` — cụm Uống thuốc đúng cách (backlog #4,
  sau khi #3 "uống thuốc chung với sữa" đã bị nhánh `claude/blog-2026-10-12` lấy — xem guard
  check dưới). Góc độ: nguyên tắc chung vì sao một số dạng viên (bao tan ở ruột, giải phóng kéo
  dài, ngậm/đặt dưới lưỡi, viên sủi) không được nghiền/bẻ — không nêu tên hoạt chất hay thuốc cụ
  thể nào, chỉ nói theo dạng bào chế; nêu hậu quả nếu nghiền sai (mất tác dụng, kích ứng dạ dày,
  giống quá liều); và luôn chốt lại hỏi dược sĩ trước khi nghiền/bẻ bất kỳ viên nào, kể cả khi
  khó nuốt (người già, trẻ nhỏ) — không tự khuyên đổi dạng bào chế hay liều, chỉ gợi ý hỏi bác sĩ/
  dược sĩ xem có lựa chọn khác phù hợp hơn không. Liên kết nội bộ tới
  `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach` (cùng cụm uống thuốc đúng cách) và
  `doc-hieu-don-thuoc-bac-si-ghi-tat` (đọc hiểu thông tin ghi trên đơn/vỏ hộp). Không đặt
  `imageTag` — không có ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề dạng bào chế viên
  thuốc. Nguồn: bài "Những thuốc không được bẻ, nghiền nhỏ khi uống" của Vinmec (vinmec.com), đã
  fetch và đối chiếu trực tiếp trong phiên này — chỉ lấy phần nguyên tắc chung theo dạng bào chế
  (bao tan ruột, giải phóng kéo dài, ngậm dưới lưỡi, viên sủi) và hậu quả nếu dùng sai, không lấy
  danh sách tên thuốc cụ thể nào từ nguồn. Guard check: đã fetch `origin` và xác nhận không có
  nhánh `origin/claude/blog-2026-10-13`; đã rà các nhánh `claude/blog-*`/`claude/blog-maintenance-*`
  chưa merge — nhánh `claude/blog-2026-10-12` đã lấy backlog #3 (`uong-thuoc-chung-voi-sua-co-sao-
  khong`) nên bỏ qua mục đó, chọn mục #4 (nghiền thuốc viên) kế tiếp; các nhánh bảo trì chưa merge
  (`claude/blog-maintenance-2026-09-28` đến `-2026-10-12`) chỉ sửa bài cũ, không trùng chủ đề này.
  Đã bỏ mục nghiền thuốc viên khỏi backlog (các mục còn lại dịch số lên).

## Bài đã làm mới

Nhật ký job bảo trì buổi tối — mỗi dòng: ngày, slug, đã sửa gì. Ưu tiên làm mới bài cũ nhất chưa
có trong danh sách này.

- 2026-09-30 — `nhac-bo-me-uong-thuoc-tu-xa` — Bài cũ nhất chưa được làm mới sau
  `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh` (cùng thuộc 3 bài thử nghiệm đầu tiên,
  2026-09-04), không có vi phạm guardrail nào. Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp
  40–60 từ; bỏ đoạn lặp ý ở mục "Vì sao chỉ gọi điện nhắc là chưa đủ" (trùng với đoạn mở đầu cũ) và
  thay bằng nội dung mới đối chiếu nguồn Vinmec (gộp đơn thuốc, dùng công cụ nhắc nhở); gộp phần
  giới thiệu gói Pro/Gia đình vào đúng 1 mục tính năng (bài gốc rải thành 2 đoạn); thêm mục "Khi nào
  nên hỏi bác sĩ, dược sĩ" với 4 tình huống cụ thể; thêm `faqs` (4 câu); thêm `sources` (bài "Làm
  thế nào để tăng tuân thủ điều trị thuốc?" của Vinmec, đã fetch và đối chiếu trong phiên này); thêm
  2 liên kết nội bộ tới `cai-lich-uong-thuoc-cho-cha-me-gia-khong-ranh-smartphone` và
  `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh`; đặt `updatedDate`. Không đổi title/publishDate/
  keyword/segment.

- 2026-09-29 — `cach-quan-ly-thuoc-cho-nguoi-gia-song-mot-minh` — Bài cũ nhất chưa được làm mới
  (một trong 3 bài thử nghiệm đầu tiên, 2026-09-04), không có vi phạm guardrail nào. Đã: thêm đoạn
  trả lời trực tiếp 40–60 từ ngay đầu bài; thêm mục "Giữ một danh sách thuốc đang dùng...cùng đơn
  thuốc gốc" vào phần nguyên tắc cơ bản (đối chiếu với nguồn Vinmec); mở rộng mục "Khi nào nên hỏi
  bác sĩ, dược sĩ" thành danh sách 4 tình huống cụ thể (tác dụng phụ lạ, quên/nhầm liều lặp lại,
  muốn thêm vitamin/thực phẩm chức năng...) thay vì một đoạn chung chung; thêm `faqs` (4 câu); thêm
  `sources` (bài "Các nguyên tắc sử dụng thuốc cho người cao tuổi" của Vinmec, đã fetch và đối chiếu
  trong phiên này — chỉ trích phần giữ danh sách thuốc/không tự đổi liều, không lấy phần liều lượng
  cụ thể của nguồn); thêm 2 liên kết nội bộ tới `hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc` và
  `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`; đặt `updatedDate`. Không đổi title/publishDate/
  keyword/segment. Phần giới thiệu app giữ nguyên trong đúng 1 mục như bài gốc (đã đạt tỉ lệ
  ~1/4 khuyến nghị).

- 2026-09-28 — `uong-thuoc-mat-ngu-dung-gio-co-dinh` — **Ưu tiên 1: sửa vi phạm guardrail.** Bài gốc
  (2026-09-16) có `segment` ghi "uống thuốc an thần" — thuốc an thần/hướng thần nằm trong danh sách
  "Off-limits topics entirely" của CLAUDE.md. Đã: bỏ hẳn cụm "thuốc an thần" khỏi segment/nội dung,
  đổi khung sang "thuốc hỗ trợ giấc ngủ theo chỉ định bác sĩ" chung chung, thêm ghi chú một số thuốc
  nhóm này là thuốc kiểm soát đặc biệt nên phải hỏi bác sĩ/nhà thuốc về cách lĩnh thuốc thay vì tự
  tìm mua thêm, thêm mục "Khi nào nên hỏi bác sĩ, dược sĩ ngay" riêng. Cũng gộp toàn bộ phần giới
  thiệu tính năng app vào đúng 1 mục cuối bài (bài cũ nhắc tính năng app rải ở 3/4 mục, vượt tỉ lệ
  ~1/4 khuyến nghị), thêm đoạn trả lời trực tiếp 40–60 từ ngay đầu bài, thêm `faqs` (4 câu), thêm 2
  liên kết nội bộ (`cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai`,
  `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`), đặt `updatedDate`. Không tìm được nguồn chính thức đọc
  được toàn văn để trích dẫn cụ thể quy trình cấp phát thuốc kiểm soát đặc biệt trong phiên này (chỉ
  có bản tóm tắt gián tiếp từ Thông tư 26/2025/TT-BYT qua kết quả tìm kiếm, chưa đọc được nguyên văn
  PDF) nên không thêm `sources` cho chi tiết đó — chỉ giữ câu chung, không nêu số liệu cụ thể.

- 2026-10-01 — `doc-hieu-don-thuoc-bac-si-ghi-tat` — Bài cũ nhất chưa được làm mới (một trong 3 bài
  thử nghiệm đầu tiên, 2026-09-04; hai bài còn lại cùng đợt đã làm mới ngày 09-29 và 09-30), không
  có vi phạm guardrail nào. Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp ngay "đơn thuốc ghi tắt
  là gì"; bổ sung dẫn chứng cụ thể (lỗi số thập phân, ký hiệu viết tắt) vào mục viết tắt từ nguồn
  Sức khỏe & Đời sống; thêm mục riêng "Khi nào nên hỏi bác sĩ, dược sĩ ngay" với 4 tình huống cụ
  thể (trước đó chỉ lồng ghép rải rác); thêm `faqs` (4 câu); thêm `sources` (bài "Cách giảm thiểu
  sai sót khi dược sĩ cấp phát thuốc" của Báo Sức khỏe & Đời sống — cơ quan ngôn luận Bộ Y tế, đã
  fetch và đối chiếu trong phiên này); thêm 2 liên kết nội bộ tới
  `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung` và `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi`;
  đặt `imageTag: xac-nhan-doc-don-ai` (khớp đúng bước xác nhận đối chiếu đơn gốc); đặt `updatedDate`.
  Không đổi title/publishDate/keyword/segment. Phần giới thiệu app giữ nguyên trong đúng 1/5 mục
  (~20%, trong khuyến nghị ~1/4).

- 2026-10-02 — `quan-ly-thuoc-man-tinh-cho-nguoi-tre` — Bài cũ nhất chưa được làm mới (publishDate
  2026-09-05), không có vi phạm guardrail nào. Đã: thêm đoạn trả lời trực tiếp 40–60 từ ngay đầu bài
  (vì sao người trẻ hay quên thuốc hơn — lịch sinh hoạt thay đổi + bệnh diễn tiến âm thầm); bổ sung
  dẫn chứng cụ thể vào mục "Vì sao người trẻ dễ bỏ quên thuốc" từ nguồn Vinmec (tăng huyết áp diễn
  tiến âm thầm, dễ nhầm tưởng đã khỏi rồi tự ý ngừng thuốc); thêm mục riêng "Khi nào nên hỏi bác sĩ,
  dược sĩ" (trước đó chỉ có một câu ở cuối bài); thêm `faqs` (4 câu); thêm `sources` (bài "Điều trị
  tăng huyết áp: Quan trọng nhất là kiên trì, tuân thủ" của Vinmec, đã fetch và đối chiếu trong phiên
  này); thêm 2 liên kết nội bộ tới `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc` và
  `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`; đặt `updatedDate`. Không đổi title/publishDate/keyword/
  segment. Phần giới thiệu app giữ nguyên trong đúng 1 mục cuối bài (đã đạt tỉ lệ ~1/4 khuyến nghị
  từ bài gốc, không cần cắt thêm). Không đặt `imageTag` — không có ảnh nào trong danh sách duyệt sẵn
  khớp thật trọng tâm "lịch sinh hoạt bận rộn của người trẻ".

- 2026-10-05 — `cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai` — Bài cũ nhất chưa được làm mới (publishDate
  2026-09-08; `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia`, publishDate 2026-09-07, đang chờ
  merge trên nhánh `claude/blog-maintenance-2026-10-04` nên bỏ qua để tránh trùng), không có vi phạm
  guardrail nào. Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp 40–60 từ nêu ngay 3 cách và giới hạn
  chung; thêm `faqs` (4 câu); thêm mục riêng "Khi nào nên hỏi bác sĩ, dược sĩ" (trước đó không có);
  thêm 2 liên kết nội bộ tới `dau-hieu-quen-lieu-uong-trung-lieu-thuoc` và
  `hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc`; đặt `updatedDate`. Không đổi title/publishDate/keyword/
  segment. Không thêm `sources` — chủ đề là so sánh các công cụ nhắc có sẵn trên điện thoại, không có
  tuyên bố y khoa cần nguồn chính thức để kiểm chứng (đã tìm kiếm nhưng không có nguồn chính thức nào
  khớp đúng chủ đề này). Phần giới thiệu app giữ nguyên trong đúng 1/5 mục (~20%, trong khuyến nghị
  ~1/4).

- 2026-10-03 — `nhap-tay-hay-quet-ai-chon-cach-them-thuoc` — Bài cũ nhất chưa được làm mới (publishDate
  2026-09-06, sau khi 09-04/09-05 đã xong), không có vi phạm guardrail nào. Đã: thay đoạn mở đầu bằng
  câu trả lời trực tiếp 40–60 từ nêu ngay khi nào nên quét AI, khi nào nên nhập tay; thêm `faqs` (4
  câu); đặt `imageTag: them-don-nhieu-cach` (khớp đúng usedWhen — bài so sánh cách thêm đơn thuốc);
  thêm 2 liên kết nội bộ tới `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung` và
  `uong-vitamin-thuc-pham-chuc-nang-cung-thuoc-ke-don`; thêm mục riêng "Khi nào nên hỏi bác sĩ, dược
  sĩ" (trước đó chỉ có một câu chung ở cuối bài); đặt `updatedDate`. Không đổi title/publishDate/
  keyword/segment. Không thêm `sources` — chủ đề là so sánh hai cách nhập liệu của app, không có
  tuyên bố y khoa cần nguồn chính thức để kiểm chứng. Phần giới thiệu tính năng app giữ nguyên trong
  toàn bài vì đây chính là chủ đề bài (so sánh hai luồng thêm thuốc của app), không phải feature pitch
  thêm vào ngoài câu hỏi được hỏi.

- 2026-10-06 — `dau-hieu-quen-lieu-uong-trung-lieu-thuoc` — Bài cũ nhất chưa được làm mới và không bị
  nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-08; `nguoi-cham-soc-chuyen-nghiep-
  quan-ly-thuoc-nguoi-gia`, publishDate 2026-09-07, đang chờ merge trên nhánh
  `claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua), không có vi phạm guardrail nào (đã rà soát
  toàn bộ bài viết trong phiên này, không phát hiện tên thuốc kèm liều, hướng dẫn đổi liều, hay
  claim tính năng app ngoài `site.ts`). Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; bổ
  sung câu hỏi tự kiểm tra quên liều từ nguồn Vinmec vào mục dấu hiệu nhận biết; tách mục cuối thành
  "Khi nào nên hỏi bác sĩ, dược sĩ ngay" với các tình huống cụ thể (trước đó chỉ là một đoạn xử trí
  chung); thêm `faqs` (4 câu); thêm `sources` (bài "Làm thế nào để tăng tuân thủ điều trị thuốc?"
  của Vinmec, đã fetch và đối chiếu trong phiên này); thêm 2 liên kết nội bộ tới
  `hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc` và `quen-uong-thuoc-1-lan-co-sao-khong`; đặt
  `updatedDate`. Không đổi title/publishDate/keyword/segment. Phần giới thiệu tính năng app giữ
  nguyên trong đúng 1/4 mục (~25%, đúng khuyến nghị). Bổ sung 2 mục backlog mới (#10, #11) để danh
  sách còn 11 mục.

- 2026-10-07 — `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi` — Bài cũ nhất chưa được làm mới và
  không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-09; cả 3 bài thử nghiệm đầu
  tiên 2026-09-04 và hai bài 2026-09-05/09-06 đã làm mới trước đó, bài 2026-09-07
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
  `claude/blog-maintenance-2026-10-04` nên bỏ qua; hai bài 2026-09-08 đã làm mới ngày 10-05/10-06),
  không có vi phạm guardrail nào (đã rà soát toàn bộ bài, không có tên thuốc kèm liều, không hướng
  dẫn đổi liều, không claim tính năng app ngoài `site.ts`). Đã: thay đoạn mở đầu bằng câu trả lời
  trực tiếp 60 từ; gộp 3 mục rải rác giới thiệu tính năng app (chụp ảnh, đối chiếu AI, lịch tái khám)
  thành đúng 1 mục cuối bài "Thuốc ơi giúp đối chiếu đơn mới và theo dõi lịch tái khám thế nào" (bài
  gốc có app ở 3/6 mục, vượt tỉ lệ ~1/4 khuyến nghị — nay còn 1/6); thêm mục riêng "Khi nào nên hỏi
  bác sĩ, dược sĩ ngay" với 4 tình huống cụ thể (trước đó chỉ lồng trong một câu ở mục nhận đơn và
  đoạn cuối); thêm `faqs` (4 câu); thêm `sources` (bài "6 lời khuyên để tránh sai lầm khi dùng thuốc"
  của Vinmec, đã fetch và đối chiếu trong phiên này — lấy phần hỏi tên thuốc, kiểm tra thuốc trước khi
  rời quầy phát thuốc, hỏi về cách dùng/tác dụng phụ); thêm 2 liên kết nội bộ tới
  `doc-hieu-don-thuoc-bac-si-ghi-tat` và `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung`; đặt
  `updatedDate`. Không đổi title/publishDate/keyword/segment/description. Bổ sung 2 mục backlog mới
  (#11, #12) để danh sách còn 12 mục.

- 2026-10-08 — `cac-kieu-lich-uong-thuoc-mau-thuong-gap` — Bài cũ nhất chưa được làm mới và không bị
  nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-09; bài sáng cùng ngày
  `chuan-bi-truoc-tai-kham-doc-dung-don-thuoc-moi` đã làm mới 10-07; bài 2026-09-07
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
  `claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua), không có vi phạm guardrail nào (đã rà soát
  toàn bộ bài, không có tên thuốc kèm liều, không hướng dẫn xử trí liều cụ thể, không claim tính
  năng app ngoài `site.ts`). Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp ~60 từ liệt kê thẳng 4
  kiểu nhịp uống; bổ sung vào mục "Uống theo bữa ăn" cơ chế chung vì sao thức ăn ảnh hưởng đến thời
  điểm uống (từ nguồn Vinmec, không nêu tên thuốc cụ thể của nguồn); thêm mục riêng "Khi nào nên hỏi
  bác sĩ, dược sĩ" (trước đó chỉ lồng trong một câu ở mục cuối); thêm `faqs` (4 câu); thêm `sources`
  (bài "Thời điểm uống thuốc có quan trọng?" của Vinmec, đã fetch và đối chiếu trong phiên này); thêm
  2 liên kết nội bộ tới `uong-thuoc-cach-nhau-bao-lau` và `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach`;
  đặt `imageTag: thiet-lap-gio-uong` (khớp phần lịch tự sắp theo nhịp sinh hoạt tự chọn); đặt
  `updatedDate`. Không đổi title/publishDate/keyword/segment/description. Phần giới thiệu tính năng
  app giữ nguyên trong đúng 1 mục cuối bài (~1/7, trong khuyến nghị ~1/4). Backlog vẫn còn 11 mục
  (chưa mục nào bị dùng từ job tối nay) nên không cần bổ sung thêm.

- 2026-10-09 — `cach-nhac-con-uong-thuoc-dung-gio` — Bài cũ nhất chưa được làm mới và không bị nhánh
  `claude/blog-*` nào khác đang giữ (publishDate 2026-09-10; bài 2026-09-07
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
  `claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua), không có vi phạm guardrail nào (đã rà soát
  toàn bộ bài, không có tên thuốc kèm liều, không hướng dẫn đổi/ngừng liều cụ thể, không claim tính
  năng app ngoài `site.ts`). Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; thêm mục riêng
  "Khi nào nên hỏi bác sĩ, dược sĩ ngay" với 5 tình huống cụ thể (trước đó chỉ lồng trong một câu ở
  mục "Những đợt thuốc ngắn ngày"); bổ sung dẫn chứng cụ thể vào mục đó từ nguồn Vinmec (ngừng kháng
  sinh sớm/không đủ liều gây đề kháng, bệnh dễ tái phát nặng hơn); gộp mục "Khi có nhiều người cùng
  chăm con" vào cuối mục tính năng app (bài gốc tách riêng mục này ra khỏi phần giới thiệu app dù
  nội dung chủ yếu là tính năng nhóm Gia đình, nay còn đúng 1 mục giới thiệu app ở cuối bài); thêm
  `faqs` (4 câu); thêm `sources` (bài "Nên dừng thuốc kháng sinh khi nào?" của Vinmec, đã fetch và
  đối chiếu trực tiếp trong phiên này); thêm 2 liên kết nội bộ tới `con-uong-thuoc-giua-gio-hoc-o-truong`
  và `cum-mua-khi-nao-can-di-kham-bac-si`; đặt `imageTag: gia-dinh` (khớp đúng usedWhen — bài về
  nhiều người thay phiên chăm con qua nhóm Gia đình); đặt `updatedDate`. Không đổi title/publishDate/
  keyword/segment. Phần giới thiệu tính năng app giữ trong đúng 1/4 mục (~25%, đúng khuyến nghị). Bổ
  sung 2 mục backlog mới (#11, #12) để danh sách còn 12 mục.

- 2026-10-10 — `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich` — Bài cũ nhất chưa được làm mới và
  không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-10; bài 2026-09-07
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
  `claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua; bài sáng cùng ngày
  `cach-nho-uong-thuoc-mo-mau-moi-ngay` trên nhánh `claude/blog-2026-10-10` chưa merge là bài mới,
  không liên quan), không có vi phạm guardrail nào (đã rà soát toàn bộ bài, không có tên thuốc kèm
  liều, không hướng dẫn tự đổi giờ/uống bù cụ thể, không claim tính năng app ngoài `site.ts`). Đã:
  thay đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; bổ sung dẫn chứng cụ thể vào mục "Chuẩn bị
  trước chuyến đi" từ nguồn Vinmec (mang gấp đôi lượng thuốc cần, xin thêm đơn phòng mất/hết thuốc,
  giữ thuốc trong hành lý xách tay/bao bì gốc khi đi máy bay) và vào mục "Lệch múi giờ" (đặt báo
  thức ngay khi đổi múi giờ); thêm mục riêng "Khi nào nên hỏi bác sĩ, dược sĩ trước chuyến đi" với 5
  tình huống cụ thể (trước đó chỉ lồng trong một câu ở mục lệch múi giờ); thêm `faqs` (4 câu); thêm
  `sources` (bài "21 bí quyết để người tiểu đường có thể du lịch khắp thế giới" của Vinmec, đã fetch
  và đối chiếu trong phiên này — chỉ lấy phần nguyên tắc chung áp dụng cho mọi người đi xa dùng
  thuốc dài ngày, không lấy phần điều chỉnh liều insulin riêng cho người tiểu đường); thêm 2 liên kết
  nội bộ tới `uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca` và `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`;
  đặt `updatedDate`. Không đổi title/publishDate/keyword/segment. Phần giới thiệu tính năng app giữ
  nguyên trong đúng 1 mục cuối bài (~1/5, trong khuyến nghị ~1/4). Không đặt `imageTag` — không có
  ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề chuẩn bị thuốc khi đi xa/lệch múi giờ.
  Backlog vẫn còn 12 mục (trên nhánh main hiện tại — nhánh `claude/blog-2026-10-10` đã dùng mục #3 cũ
  "mỡ máu" và đánh số lại thành 11 mục trên nhánh đó, chưa merge) nên không cần bổ sung thêm; khi cả
  hai PR cùng merge sẽ có xung đột nhỏ ở phần backlog của `blog-notes.md`, người merge cần giữ lại
  việc bỏ mục #3 "mỡ máu" (đã dùng) và đánh số lại cho đúng.

- 2026-10-11 — `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` — Bài cũ nhất chưa được làm mới và
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

- 2026-10-15 — `nha-nhieu-nguoi-cung-uong-thuoc-khong-nham-lan` — Bài cũ nhất chưa được làm mới và
  không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-13; bài 2026-09-07
  `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia`, 2026-09-11
  `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung`, và hai bài 2026-09-12 đang chờ merge trên các
  nhánh `claude/blog-maintenance-2026-10-04/10-12/10-13` và `claude/blog-maintenance-2026-10-14`
  nên bỏ qua), không có vi phạm guardrail nào (đã rà soát toàn bộ bài, không có tên thuốc kèm liều,
  không hướng dẫn xử trí khi uống nhầm thuốc, không claim tính năng app ngoài `site.ts`). Đã: thay
  đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; thêm mục riêng "Cách tách riêng thuốc của từng
  người — không cần ứng dụng" với nguyên tắc tủ thuốc nhiều ngăn có dán nhãn, giữ bao bì gốc, không
  dồn nhiều loại thuốc của nhiều người vào chung một chai không nhãn (từ nguồn Vinmec và bài "10 lời
  khuyên dùng thuốc an toàn", cả hai đã fetch và đọc toàn văn trong phiên này); gộp hai mục giới
  thiệu tính năng app (đơn thuốc tách riêng theo tài khoản + mời nhóm Gia đình bằng QR) thành đúng 1
  mục cuối bài (bài gốc có app ở 2/4 mục, nay còn 1/5); thêm `faqs` (4 câu); thêm `sources` (Vinmec
  "Những điều cần biết về bảo quản thuốc tại nhà" và Tuổi Trẻ "10 lời khuyên dùng thuốc an toàn",
  nguồn Viện Sốt rét - Ký Sinh trùng - Côn trùng Quy Nhơn); thêm 2 liên kết nội bộ tới
  `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` (bài đó đã link ngược lại bài này từ trước) và
  `ca-nha-cung-om-mua-cum-uong-thuoc-sao-cho-khong-nham`; đặt `imageTag: gia-dinh` (khớp đúng
  usedWhen — bài về quản lý thuốc cho nhiều người qua nhóm Gia đình); đặt `updatedDate`. Không đổi
  title/publishDate/keyword/segment. Dọn backlog: bỏ mục cũ "đơn thuốc điện tử là gì" vì đã trùng
  với bài đã xuất bản `don-thuoc-dien-tu-la-gi` (2026-09-28) — không ai gỡ mục backlog sau khi bài
  đó lên; đánh số lại và bổ sung 2 mục mới (thuốc nhỏ mắt sau khi mở nắp, trà/cà phê ảnh hưởng tác
  dụng thuốc), cả hai đã xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên này, nâng tổng số
  backlog lên 12 mục.
- 2026-10-04 — `nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` — Bài cũ nhất chưa được làm
  mới (publishDate 2026-09-07, sau khi mọi bài từ 09-04 đến 09-06 đã xong), không có vi phạm
  guardrail nào. Đã: thay đoạn mở đầu bằng câu trả lời trực tiếp 40–60 từ; gộp 3 mục rải rác pitch
  tính năng app (theo dõi tiến trình, nhóm Gia đình, quét lại đơn mới) thành đúng 1 mục "Ghi nhận
  và báo cáo lại bằng số liệu thay vì cảm tính"; thêm mục riêng "Khi nào nên báo ngay cho gia đình
  hoặc bác sĩ, dược sĩ" với 5 dấu hiệu cụ thể (đối chiếu nguồn Vinmec về phản ứng thuốc ở người cao
  tuổi: chóng mặt/dễ ngã, lú lẫn, hạ thân nhiệt); thêm `faqs` (4 câu); thêm `sources` (bài "Một số
  điều chú ý trong quá trình điều trị và chăm sóc cho bệnh nhân cao tuổi" của Vinmec, đã fetch và
  đối chiếu trong phiên này — chỉ lấy phần dấu hiệu phản ứng thuốc cần theo dõi, không lấy thông
  tin về tương tác thuốc cụ thể); thêm 2 liên kết nội bộ tới `nhac-bo-me-uong-thuoc-tu-xa` và
  `anh-chi-em-thay-phien-cham-cha-me-ban-giao-lich-uong-thuoc`; đặt `updatedDate`. Không đổi
  title/publishDate/keyword/segment. Bài không có `ctaTitle`/`ctaDescription` nên không chỉnh (bài
  xuất bản trước 2026-09-17).
- 2026-10-12 (tối) — `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung` — Bài cũ nhất chưa được làm mới
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
- 2026-10-13 — `uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca` — Bài cũ nhất chưa được làm mới và không
  bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-12; các bài 2026-09-11
  `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` và `meo-chup-anh-don-thuoc-ro-net-de-ai-doc-dung`
  đang chờ merge trên nhánh `claude/blog-maintenance-2026-10-11`/`-10-12`; hai bài mới
  `uong-thuoc-chung-voi-sua-co-sao-khong`/`co-nen-nghien-thuoc-vien-de-de-uong-khong` trên nhánh
  `claude/blog-2026-10-12`/`-10-13` cũng chưa merge, không liên quan chủ đề này), không có vi phạm
  guardrail nào (đã rà soát toàn bộ bài, không có tên thuốc kèm liều, không hướng dẫn tự đổi giờ
  uống cụ thể, không claim tính năng app ngoài `site.ts`). Đã: thay đoạn mở đầu bằng câu trả lời
  trực tiếp ~56 từ; tách mục "Hỏi bác sĩ hoặc dược sĩ..." thành mục riêng "Khi nào nên hỏi bác sĩ,
  dược sĩ" với 4 tình huống cụ thể (trước đó chỉ là một đoạn văn chung); bổ sung dẫn chứng từ nguồn
  Vinmec vào mục "Vì sao..." (lịch ca đêm đi ngược đồng hồ sinh học, cùng nguyên nhân khiến giờ
  giấc sinh hoạt khó ổn định) và thêm khuyến cáo đi khám nếu có dấu hiệu rối loạn giấc ngủ kéo dài;
  gộp đoạn kết luận lặp ý vào đúng 1 mục giới thiệu tính năng app cuối bài (bài gốc có đoạn kết lặp
  lại disclaimer ở cuối, nay bỏ để tránh trùng ý mục "Khi nào nên hỏi bác sĩ"); thêm `faqs` (4 câu);
  thêm `sources` (bài "Rối loạn giấc ngủ vì làm việc theo ca" của Vinmec, đã fetch và đối chiếu
  trong phiên này — chỉ lấy phần nguyên nhân/triệu chứng chung và khuyến cáo đi khám khi có dấu
  hiệu nghi ngờ, không suy diễn thêm cho thuốc cụ thể nào); thêm 2 liên kết nội bộ tới
  `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich` và `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`;
  đặt `imageTag: thiet-lap-gio-uong` (khớp phần thiết lập giờ nhắc theo buổi theo nhịp sinh hoạt tự
  chọn, cùng cách dùng như các bài huyết áp/tuyến giáp/mỡ máu); đặt `updatedDate`. Không đổi
  title/publishDate/keyword/segment/description. Phần giới thiệu tính năng app giữ trong đúng 1 mục
  cuối bài (~1/4, đúng khuyến nghị). Backlog: bỏ mục #3 "sữa" và #4 "nghiền thuốc viên" cũ (đã được
  2 bài mới sáng 10-12/10-13 dùng, đang chờ merge trên nhánh `claude/blog-2026-10-12`/`-10-13`),
  đánh số lại các mục còn lại và bổ sung 2 mục mới (#9 bưởi/tương tác thuốc, #10 mất thẻ BHYT) để
  danh sách còn đúng 10 mục.

## Backlog góc độ chưa làm

Từ 2026-09-28 chuyển sang chiến lược mới (xem `CLAUDE.md`, mục "Topic strategy"): mỗi bài nhắm một
câu hỏi người dùng thật sự tìm, theo cụm chủ đề — không cắt tiếp theo nhóm đối tượng hẹp như 43 bài
đầu. Lấy từ trên xuống; bỏ qua mục nào trùng ý định tìm kiếm với bài đã có (khi đó làm mới bài cũ).
Job tối bổ sung để danh sách luôn còn ít nhất 10 mục.

1. `chuẩn bị thuốc khi về quê ăn Tết` — cụm Theo mùa. **Đăng từ giữa tháng 12/2026** (Tết Đinh
    Mùi rơi vào đầu tháng 2/2027) — không lấy trước thời điểm đó.
2. `đơn thuốc bảo hiểm y tế có dùng được ở bệnh viện khác không` — cụm Đơn thuốc & giấy tờ. Đã xác
    nhận nhu cầu tìm kiếm thật (nhiều báo/trang tư vấn bảo hiểm có bài về khám trái tuyến/chuyển
    tuyến). Góc độ: khác `uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi` (đó là canh ngày lãnh
    thuốc đúng hẹn tái khám) ở chỗ đây là câu hỏi về việc đơn thuốc/thẻ BHYT có dùng được khi đổi nơi
    khám hay không — mức hưởng khác nhau giữa khám đúng tuyến/cùng tuyến và khám trái tuyến, cần giấy
    chuyển tuyến trong một số trường hợp. Chỉ nêu nguyên tắc chính sách đã kiểm chứng trong phiên viết
    bài (đọc trực tiếp quy định hiện hành, không chỉ dựa tóm tắt báo chí); không tư vấn mức hưởng cụ
    thể cho từng trường hợp cá nhân — luôn dẫn về hỏi cơ sở khám chữa bệnh hoặc cơ quan BHXH.
3. `có nên nghiền thuốc viên để dễ uống không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm
10. `uống thuốc chung với sữa có sao không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm kiếm
    thật (Vinmec, Long Châu, Pharmacity, VnExpress đều có bài riêng về câu hỏi này). Góc độ: nguyên
    tắc chung vì sao một số thuốc giảm tác dụng khi uống cùng sữa/canxi (cơ chế gắn kết chung, không
    nêu tên thuốc cụ thể nào), khuyến nghị chung cách nhau 1–2 giờ nhưng luôn chốt lại "hỏi dược sĩ
    cho từng loại thuốc cụ thể" vì không phải thuốc nào cũng bị ảnh hưởng. Cần xác minh: bài
    "Sữa có làm mất tác dụng của thuốc không?" trên Vinmec (vinmec.com) trước khi viết, chỉ lấy phần
    cơ chế chung, không suy diễn thêm cho thuốc cụ thể nào.
11. `có nên nghiền thuốc viên để dễ uống không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm
    kiếm thật (Vinmec có bài "Những thuốc không được bẻ, nghiền nhỏ khi uống", cùng Long Châu, VOH,
    VnExpress, znews). Góc độ: vì sao một số viên thuốc (bao tan ruột, giải phóng chậm) không được
    bẻ/nghiền vì sẽ mất tác dụng hoặc tăng rủi ro tác dụng phụ — nguyên tắc chung, không liệt kê tên
    thuốc cụ thể nào thuộc nhóm này, luôn khuyến nghị hỏi dược sĩ trước khi bẻ/nghiền bất kỳ viên
    thuốc nào, đặc biệt cho người già/trẻ khó nuốt thuốc viên (không đưa liều cụ thể cho trẻ em).
    Cần xác minh: bài "Những thuốc không được bẻ, nghiền nhỏ khi uống" trên Vinmec (vinmec.com)
    trước khi viết.
4. `uống thuốc giảm đau lúc bụng đói có hại dạ dày không` — cụm Uống thuốc đúng cách. Đã xác nhận
3. `uống thuốc giảm đau lúc bụng đói có hại dạ dày không` — cụm Uống thuốc đúng cách. Đã xác nhận
    nhu cầu tìm kiếm thật (Vinmec có hai bài riêng "Tại sao một số loại thuốc phải uống khi đói?" và
    "Chọn thuốc giảm đau không hại dạ dày", cùng Pharmacity, Long Châu). Góc độ: nguyên tắc chung vì
    sao một số thuốc (đặc biệt nhóm giảm đau chống viêm) dễ gây khó chịu/kích ứng dạ dày khi uống lúc
    đói trong khi một số thuốc khác lại cần uống đói mới hấp thu tốt — không nêu tên thuốc cụ thể nào
    nên/không nên uống lúc đói, luôn chốt lại bằng việc đọc tờ hướng dẫn sử dụng hoặc hỏi dược sĩ cho
    từng loại cụ thể. Khác bài `uong-thuoc-truoc-an-trong-an-sau-an-dung-cach` (đó là khớp đúng mốc
    bữa ăn theo chỉ định trên một đơn có nhiều loại thuốc) ở chỗ đây là nguyên tắc chung vì sao bụng
    đói ảnh hưởng đến dạ dày/hấp thu, không gắn với một đơn thuốc cụ thể. Cần xác minh: hai bài Vinmec
    nêu trên trước khi viết — chỉ lấy phần nguyên tắc chung (kích ứng dạ dày, hấp thu), không suy diễn
    thêm cho thuốc cụ thể nào.
5. `chuẩn bị túi thuốc cơ bản khi nhập học, ở xa nhà lần đầu` — cụm Theo mùa (nhập học, tháng 8–9).
4. `chuẩn bị túi thuốc cơ bản khi nhập học, ở xa nhà lần đầu` — cụm Theo mùa (nhập học, tháng 8–9).
    Góc độ: khác bài `sinh-vien-o-tro-tu-uong-thuoc-khi-om-lan-dau` (đó là đã ốm, tự xử trí lần đầu
    không ai nhắc) ở chỗ đây là chuẩn bị TRƯỚC khi đi — những món cơ bản nên mang theo (thuốc hạ sốt/
    giảm đau không kê đơn thông thường dùng ngắn hạn, băng gạc, nhiệt kế, bản sao đơn thuốc nếu đang
    điều trị bệnh mạn tính), cách cất giữ gọn trong không gian ký túc xá/phòng trọ, và lưu ý ghi lại
    thông tin cơ sở y tế gần trường — không liệt kê tên thuốc kê đơn cụ thể, không khuyến nghị tự mua
    kháng sinh dự phòng. Cần xác minh nguồn chính thức Việt Nam trước khi viết; nếu không tìm được
    nguồn phù hợp, chỉ dùng nguyên tắc an toàn chung, không bịa danh mục cụ thể.
6. `uống thuốc có cần kiêng rượu, bia không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm
5. `uống thuốc có cần kiêng rượu, bia không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm
    kiếm thật (Vinmec có nhiều bài riêng về rượu bia + thuốc/kháng sinh, Pharmacity, Long Châu, PLO
    cũng viết về chủ đề này). Góc độ: nguyên tắc chung vì sao rượu/bia có thể làm thay đổi tác dụng
    hoặc tăng tác dụng phụ của nhiều loại thuốc (không riêng kháng sinh) — không nêu tên thuốc hay
    nhóm thuốc cụ thể nào là "an toàn" khi uống cùng rượu bia, luôn chốt lại bằng việc báo cho bác sĩ/
    dược sĩ biết nếu có uống rượu bia trong thời gian dùng thuốc. Cần xác minh: bài "Tác hại nếu uống
    thuốc sau khi uống rượu" của Vinmec (vinmec.com) trước khi viết, chỉ lấy phần nguyên tắc chung,
    không suy diễn thêm cho thuốc cụ thể nào.
7. `bảo quản thuốc khi đi du lịch mùa nắng nóng, để trong ô tô có an toàn không` — cụm Theo mùa (du
6. `bảo quản thuốc khi đi du lịch mùa nắng nóng, để trong ô tô có an toàn không` — cụm Theo mùa (du
    lịch hè, nắng nóng, tháng 5–6). Góc độ: khác `cach-bao-quan-thuoc-tai-nha` (nguyên tắc chung nơi
    để thuốc trong nhà) và `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich` (giữ đúng giờ uống khi di
    chuyển) ở chỗ đây là câu hỏi hẹp về nhiệt độ cao bất thường khi để thuốc trong xe ô tô đóng kín
    giữa trời nắng — nêu nguyên tắc chung (khoang xe có thể nóng hơn nhiều so với nhiệt độ ngoài trời,
    một số thuốc giảm tác dụng hoặc hỏng ở nhiệt độ cao), không liệt kê thuốc cụ thể nào chịu/không
    chịu được nhiệt, luôn khuyên đọc nhãn/hỏi dược sĩ và mang thuốc theo người thay vì để trong xe. Cần
    xác minh nguồn chính thức trước khi viết (tìm kiếm sơ bộ mới ra báo điện tử trong nước — voh.com.vn,
    znews.vn — cần tìm thêm nguồn y tế chính thống hơn như Vinmec/bệnh viện lớn trong phiên viết bài).

8. `giấy chuyển tuyến khám bệnh có thời hạn bao lâu` — cụm Đơn thuốc & giấy tờ y tế. Đã xác nhận nhu
8. `tăng huyết áp có phải uống thuốc suốt đời không` — cụm Bệnh mạn tính. Đã xác nhận nhu cầu tìm
7. `tăng huyết áp có phải uống thuốc suốt đời không` — cụm Bệnh mạn tính. Đã xác nhận nhu cầu tìm
    kiếm thật (Vinmec, Tâm Anh, Nhà thuốc Long Châu đều có bài riêng về câu hỏi này). Góc độ: khác
    `cach-nho-uong-thuoc-huyet-ap-moi-ngay` (đó là mẹo nhớ uống đều đặn hằng ngày) và
    `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc` (đó là xây thói quen cho người mới chẩn
    đoán) ở chỗ đây là câu hỏi tâm lý "huyết áp đã ổn rồi, có cần uống mãi không" — giải thích chung
    vì sao bệnh mạn tính như tăng huyết áp cần kiểm soát lâu dài bằng thuốc, nguy cơ nếu tự ý ngừng
    đột ngột khi thấy khỏe, và luôn chốt lại rằng chỉ bác sĩ mới quyết định được khi nào giảm/ngừng
    thuốc — không tự đưa ra khi nào nên ngừng hay đổi liều. Cần xác minh: bài "Thuốc huyết áp phải
    uống suốt đời?" của Vinmec (vinmec.com) trước khi viết, chỉ lấy phần nguyên tắc chung (vì sao cần
    dùng lâu dài, rủi ro khi tự ngừng), không nêu tên thuốc huyết áp cụ thể nào.
9. `giấy chuyển tuyến khám bệnh có thời hạn bao lâu` — cụm Đơn thuốc & giấy tờ y tế. Đã xác nhận nhu
8. `giấy chuyển tuyến khám bệnh có thời hạn bao lâu` — cụm Đơn thuốc & giấy tờ y tế. Đã xác nhận nhu
    cầu tìm kiếm thật (nhiều trang luật và báo bảo hiểm xã hội có bài riêng). Góc độ: khác
    `uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi` (canh ngày lãnh thuốc mới) và backlog #2
    (dùng đơn/thẻ BHYT ở bệnh viện khác) ở chỗ đây là câu hỏi hẹp về thời hạn hiệu lực của riêng giấy
    chuyển tuyến. **Cảnh báo khi viết:** kết quả tìm kiếm sơ bộ không thống nhất (một số nguồn còn ghi
    quy định cũ "10 ngày" đã bị bãi bỏ từ 2018) — bắt buộc phải đọc trực tiếp văn bản hiện hành (Thông
    tư 01/2025/TT-BYT và các văn bản thay thế liên quan) trong phiên viết bài để lấy đúng mốc hiện tại
    (hiện có vẻ là "đến hết 31/12 năm đó, hoặc hết đợt điều trị nếu đang điều trị dở dang"), không
    dùng lại số liệu cũ từ các bài báo thứ cấp chưa cập nhật. Nếu không đọc được văn bản gốc trong
    phiên viết, chỉ nêu nguyên tắc chung và khuyên hỏi lại cơ sở khám/BHXH, không nêu số ngày cụ thể.
9. `thuốc hết hạn sử dụng vài ngày có dùng được không` — cụm Uống thuốc đúng cách (bảo quản thuốc).
    Đã xác nhận nhu cầu tìm kiếm thật (Vinmec, VnExpress, Long Châu, Pharmacity, HelloBacsi đều có bài
    riêng về câu hỏi này). Góc độ: khác `co-nen-bao-quan-thuoc-trong-tu-lanh-khong` (nơi/cách bảo quản
    thuốc khi còn hạn) ở chỗ đây là câu hỏi về việc có nên dùng thuốc SAU khi đã qua hạn sử dụng in trên
    bao bì — nguyên tắc chung (không dùng thuốc hết hạn, đặc biệt kháng sinh vì nguy cơ kháng thuốc;
    dấu hiệu nhận biết thuốc hỏng như đổi màu, tách lớp, mềm nhũn), không nêu tên thuốc cụ thể nào vẫn
    "dùng được" sau hạn, không tư vấn xử trí cụ thể khi lỡ uống thuốc hết hạn — chỉ khuyến cáo hỏi ngay
    bác sĩ/dược sĩ nếu đã lỡ dùng. Cần xác minh: bài "Vì sao thuốc phải có hạn sử dụng?" của Vinmec
    (vinmec.com) trước khi viết, chỉ lấy phần nguyên tắc chung.
10. `thuốc nhỏ mắt sau khi mở nắp dùng được bao lâu` — cụm Uống thuốc đúng cách (bảo quản thuốc). Đã
    xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên này (Vinmec có ít nhất hai bài riêng —
    "Hướng dẫn cách dùng thuốc nhỏ mắt" và "Những sai lầm khi sử dụng thuốc nhỏ mắt" — cùng Nhà thuốc
    Long Châu). Góc độ: khác `thuoc-nho-mat-mui-tai-boi-ngoai-da-de-quen-hon-thuoc-uong` (đó là vì sao
    dễ quên nhỏ thuốc, không phải hạn dùng sau khi mở nắp) ở chỗ đây là câu hỏi hẹp về thời gian dùng
    được sau khi đã mở nắp lọ — nêu nguyên tắc chung (thường ngắn hơn hạn sử dụng in trên hộp, nên ghi
    ngày mở nắp lên lọ để tự theo dõi), không chốt một con số ngày cụ thể vì các nguồn tìm được không
    thống nhất (dao động 15 ngày đến vài tháng tuỳ loại) — luôn dẫn về đọc kỹ hướng dẫn in trên hộp/lọ
    hoặc hỏi dược sĩ cho từng loại. **Cảnh báo khi viết:** phải đọc trực tiếp bài Vinmec trong phiên
    viết để lấy đúng số liệu Vinmec nêu, không tự chọn một mốc giữa các nguồn khác nhau.
11. `uống thuốc cùng trà, cà phê có ảnh hưởng đến tác dụng thuốc không` — cụm Uống thuốc đúng cách. Đã
    xác nhận nhu cầu tìm kiếm thật qua WebSearch trong phiên này (Nhà thuốc Long Châu, PLO đều có bài
    riêng về chủ đề nước uống làm giảm tác dụng thuốc). Góc độ: khác
    `uong-thuoc-chung-voi-sua-co-sao-khong` (sữa) ở chỗ đây là trà/cà phê — nêu nguyên tắc chung (tanin
    trong trà và caffeine trong cà phê có thể làm giảm hấp thu hoặc thay đổi chuyển hoá của một số loại
    thuốc), khuyên uống thuốc với nước lọc và cách xa thời điểm uống trà/cà phê nếu không chắc chắn.
    **Cảnh báo khi viết:** nguồn có nhắc đến tên hoạt chất cụ thể (ví dụ levothyroxine, nhóm SSRI) —
    TUYỆT ĐỐI không đưa tên hoạt chất/thuốc cụ thể nào vào bài (vi phạm guardrail "never name a specific
    drug/active ingredient together with dose or use"), chỉ giữ nguyên tắc chung theo nhóm rộng ("một
    số thuốc tuyến giáp", "một số thuốc ảnh hưởng thần kinh") và luôn chốt lại bằng hỏi dược sĩ cho
    từng loại thuốc đang dùng.
12. `thuốc hết hạn sử dụng còn uống được không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu tìm
    kiếm thật (Vinmec, Long Châu, Pharmacity, VnExpress đều có bài riêng, nhiều phiên bản đã lên
    top tìm kiếm). Góc độ: khác mục #2 (`vứt bỏ thuốc hết hạn đúng cách` — cách xử lý/thải bỏ) ở
    chỗ đây trả lời trực tiếp câu hỏi "còn dùng được không" — nguyên tắc chung là không nên dùng
    thuốc đã hết hạn dù nhìn chưa hư hỏng (hoạt chất có thể đã giảm hoặc phân hủy), không liệt kê
    loại thuốc cụ thể nào là ngoại lệ an toàn. Cần xác minh thêm nguồn chính thức (Bộ Y tế/bệnh
    viện lớn) trước khi viết, không dùng nguồn nhà thuốc thương mại làm nguồn chính.
13. `uống thuốc với nước cam, nước ép bưởi có sao không` — cụm Uống thuốc đúng cách. Đã xác nhận
    nhu cầu tìm kiếm thật (Vinmec, Pharmacity, các báo lớn đều có bài riêng). Góc độ: nguyên tắc
    chung vì sao một số thuốc có thể tương tác với nước cam/nước bưởi (axit trong cam, hợp chất
    trong bưởi ảnh hưởng hấp thu thuốc) — chỉ nói ở mức nhóm bệnh mạn tính chung (ví dụ một số
    thuốc huyết áp, mỡ máu) nếu nguồn xác nhận, **không** nêu tên hoạt chất/thương hiệu cụ thể nào
    kèm liều, luôn chốt lại "hỏi dược sĩ cho từng loại thuốc cụ thể, uống thuốc với nước lọc là an
    toàn nhất khi không chắc". Cần xác minh thêm nguồn chính thức (bệnh viện lớn) trước khi viết,
    đối chiếu kỹ để không vô tình liệt kê thành danh sách khuyến cáo dùng/tránh thuốc cụ thể.
11. `mỡ máu cao có phải uống thuốc suốt đời không` — cụm Bệnh mạn tính. Đã xác nhận nhu cầu tìm kiếm
    thật (Vinmec, Nhà thuốc Long Châu, Hello Bacsi đều có bài riêng về câu hỏi này). Góc độ: khác #9
    (tăng huyết áp) ở chỗ đây là bệnh mỡ máu, và khác bài đã có `cach-nho-uong-thuoc-mo-mau-moi-ngay`
    (đó là mẹo nhớ uống đều đặn hằng ngày) ở chỗ đây là câu hỏi tâm lý "chỉ số đã cải thiện rồi có
    cần uống mãi không" — giải thích chung việc thời gian dùng thuốc mỡ máu phụ thuộc chỉ số xét
    nghiệm và nguy cơ tim mạch của từng người do bác sĩ đánh giá lại định kỳ (thường sau 2–3 tháng),
    không tự ý ngừng dù thấy khỏe, và lối sống (vận động, ăn uống, bỏ thuốc lá) vẫn cần duy trì song
    song. Không tự đưa ra khi nào nên ngừng/giảm liều — chỉ bác sĩ mới quyết định sau khi xét nghiệm
    lại. Cần xác minh: bài "Thuốc mỡ máu có phải uống suốt đời không?" của Vinmec (vinmec.com) trước
    khi viết, chỉ lấy phần nguyên tắc chung (đánh giá lại theo xét nghiệm, không tự ý ngừng), không
    nêu tên thuốc mỡ máu cụ thể nào.
9. `uống thuốc cùng nước ép bưởi có an toàn không` — cụm Uống thuốc đúng cách. Đã xác nhận nhu cầu
    tìm kiếm thật (Vinmec có ít nhất 3 bài riêng — "Cảnh báo: Bưởi có thể tương tác với các loại thuốc
    thông thường", "Ăn bưởi và uống thuốc: Một số lưu ý cần thận trọng", "Nước ép bưởi và một số loại
    thuốc không trộn lẫn" — cùng Tuổi Trẻ, Long Châu). Góc độ: nguyên tắc chung về cơ chế bưởi ảnh
    hưởng đến enzyme chuyển hoá thuốc ở gan/ruột, khiến nồng độ một số thuốc trong máu tăng cao bất
    thường hoặc giảm hấp thu tuỳ loại — không nêu tên hoạt chất cụ thể nào "an toàn"/"nguy hiểm" khi
    dùng cùng bưởi (nguồn có nhắc simvastatin, một số thuốc chẹn kênh canxi làm ví dụ minh hoạ, nhưng
    bài không được liệt kê thành danh sách khuyến nghị theo thuốc), luôn chốt lại hỏi bác sĩ/dược sĩ
    về nguy cơ tương tác với đơn thuốc cụ thể đang dùng trước khi ăn bưởi/uống nước ép bưởi. Cần xác
    minh: các bài Vinmec nêu trên trước khi viết — chỉ lấy phần cơ chế chung và khuyến nghị hỏi dược
    sĩ, không suy diễn thêm cho thuốc cụ thể nào; số liệu "tương tác với hơn 85 loại thuốc" từ nguồn
    thương mại (Long Châu) chưa xác minh được ở nguồn chính thống — không dùng con số đó nếu không đối
    chiếu lại được trong phiên viết.
10. `mất thẻ bảo hiểm y tế có lĩnh thuốc được không` — cụm Đơn thuốc & giấy tờ y tế. Đã xác nhận nhu
    cầu tìm kiếm thật (nhiều trang luật và tư vấn bảo hiểm có bài riêng). Góc độ: khác backlog #2 (đơn
    thuốc/thẻ BHYT dùng được ở bệnh viện khác hay không) và #8 (thời hạn giấy chuyển tuyến) ở chỗ đây
    là tình huống mất thẻ giấy — từ 1/7/2025, Luật BHYT sửa đổi cho phép dùng thẻ BHYT điện tử trên
    VssID/VNeID/CCCD gắn chip thay thế, nên nhiều trường hợp mất thẻ giấy không cần cấp lại mới vẫn đi
    khám/lĩnh thuốc được bình thường. **Cảnh báo khi viết:** các nguồn tìm sơ bộ chưa thống nhất về
    trường hợp không có bất kỳ phương án điện tử nào (ví dụ không có smartphone/CCCD gắn chip) — bắt
    buộc đọc trực tiếp văn bản hướng dẫn hiện hành của BHXH Việt Nam hoặc Luật BHYT sửa đổi 2024 trong
    phiên viết bài để xác nhận quy trình cấp lại/thanh toán trực tiếp cho trường hợp này, không dùng
    lại nguyên văn số liệu từ các bài báo thứ cấp chưa ghi rõ ngày cập nhật.

### Lịch chủ đề theo mùa

- Tháng 10–11: mùa cúm/giao mùa ("khi nào cần đi khám", không nói thuốc).
- Giữa tháng 12 – tháng 1: Tết (mang thuốc về quê, giữ lịch uống thuốc khi ăn uống thất thường).
- Tháng 5–6: du lịch hè, nắng nóng bảo quản thuốc.
- Tháng 6–9: sốt xuất huyết ("dấu hiệu cần đi viện", không nói thuốc).
- Tháng 8–9: nhập học.
