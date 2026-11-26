# 2026-11-26 — bài mới: `sau-dot-quy-co-phai-uong-thuoc-suot-doi-khong`

Tiêu đề "Sau đột quỵ có phải uống thuốc suốt đời không? Vì sao không được tự ngưng", keyword `sau
đột quỵ có phải uống thuốc suốt đời không`, cụm Thói quen dùng thuốc cho bệnh mạn tính, feature
`gia-dinh`. Góc độ: khác `dat-stent-co-phai-uong-thuoc-suot-doi-khong` (mạch vành, stent) và
`tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong` (huyết áp) — đây là phòng đột quỵ tái phát: không
khẳng định "suốt đời" cho mọi người mà nói thời gian dùng do bác sĩ quyết định theo nguyên nhân và
bệnh nền, tái khám để đánh giá lại; vì sao tự ngưng khi thấy khỏe là nguy hiểm; di chứng khiến người
thân thường phải hỗ trợ uống thuốc (nên chọn feature `gia-dinh`). Chỉ nêu nhóm thuốc ở mức chung
như nguồn bệnh viện nêu (hạ áp, chống đông, hạ cholesterol), không tên thuốc/hoạt chất, không liều.
Không đặt `imageTag` (crop `gia-dinh` nói về nhóm Gia đình, không phải trọng tâm bài).

Mục app liên kết `/tinh-nang/gia-dinh/`, chỉ nêu những gì `site.ts` có (mời bằng mã QR dùng một lần,
chia sẻ đơn vào nhóm, xem tiến trình, cảnh báo người chăm sóc "Nhắc bỏ lỡ liều" không ghi tên thuốc,
số thành viên 2/3/10 theo gói).

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Tâm Anh "Hồi phục sau đột quỵ lần thứ hai ở tuổi U100" — tuân thủ nghiêm chỉ định dùng thuốc,
  không tự ngưng vì tăng nguy cơ cục máu đông/bệnh nền mất kiểm soát; người thân nhắc thuốc, tái
  khám; dấu hiệu đột quỵ và gọi 115.
- Bạch Mai (Khoa CTCH & Cột sống, bài của Trung tâm Đột quỵ) "Quản lý biến cố đột quỵ não trong dịp
  Tết" — tuyệt đối không tự ngắt quãng/bỏ thuốc hạ áp, kháng kết tập tiểu cầu, kháng đông; ngừng
  đột ngột tăng nguy cơ tái phát.
- Bạch Mai "Nguy cơ tái phát đột quỵ do rung nhĩ…" — không tự ngưng, đổi liều, dùng đơn người khác;
  tái khám để đánh giá lại nguy cơ, hiệu quả thuốc.
- Vinmec "Có nên uống thuốc chống đột quỵ không?" — chưa có thuốc nào là thuốc chống đột quỵ não;
  thuốc phòng tái phát (hạ áp, chống đông, hạ cholesterol) chỉ dùng theo chỉ định.

Lý do chọn: backlog còn lại chủ yếu là mục giấy tờ BHYT cần đọc văn bản gốc và mục theo mùa chưa
tới mùa; mùa cúm đã có `cum-mua-khi-nao-can-di-kham-bac-si`. Tự chọn câu hỏi tìm kiếm thật trong cụm
3, kiểm chứng được bằng trang của ba bệnh viện lớn. Không dùng mục backlog nào.
