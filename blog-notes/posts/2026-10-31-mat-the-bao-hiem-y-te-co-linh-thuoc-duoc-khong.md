# 2026-10-31 — bài mới: `mat-the-bao-hiem-y-te-co-linh-thuoc-duoc-khong`

Tiêu đề "Mất thẻ bảo hiểm y tế có đi khám, lĩnh thuốc được không?", keyword "mất thẻ bảo hiểm y tế
có lĩnh thuốc được không", cụm Đơn thuốc & giấy tờ y tế, `feature: theo-doi-lieu-trinh`.
Góc độ: tình huống mất/quên thẻ BHYT giấy — chưa có bài nào nói về thẻ BHYT, VNeID, VssID hay căn
cước; khác `mat-don-thuoc-phai-lam-sao` (mất đơn thuốc) và
`uong-thuoc-bao-hiem-y-te-canh-ngay-linh-thuoc-moi` (canh ngày lĩnh thuốc). Bài nêu: giấy tờ thay
thế khi khám chữa bệnh BHYT, ba cách dùng thay thẻ giấy, việc dừng cấp thẻ giấy từ 1/6/2025 và
cấp lại, trường hợp chưa xuất trình được giấy tờ (cấp cứu, thanh toán trực tiếp, lỗi hệ thống),
khi nào liên hệ BHXH/bác sĩ. Không nêu thuốc cụ thể. Phần app nói rõ app không lưu/thay thế thẻ
BHYT; chỉ nêu nhắc tái khám + báo sắp hết thuốc (đúng `site.ts`).

Nguồn đã fetch trong phiên (moh.gov.vn, baohiemxahoi.gov.vn không kết nối được; dùng Chinhphu.vn):
- Chinhphu.vn, 27/05/2025 — "Dừng cấp thẻ BHYT giấy từ 1/6…" (dẫn Công văn 168/BHXH-QLT): từ 1/6
  không cấp thẻ giấy; cấp lại/cấp đổi được hướng dẫn dùng VssID/VNeID; thẻ giấy chỉ cho người không
  thể cài VssID, VNeID và không có CCCD gắn chip; dùng CCCD gắn chip thay thẻ giấy; cập nhật số CCCD
  nếu VssID còn số CMND cũ.
- Chinhphu.vn, 19/07/2025 — "Quy định về thẻ bảo hiểm y tế và sử dụng thẻ trong khám chữa bệnh"
  (Luật 51/2024/QH15, NĐ 188/2025/NĐ-CP): giấy tờ xuất trình (CCCD/VNeID mức 2, thẻ điện tử hoặc
  giấy, thẻ chưa có ảnh thì thêm giấy tờ có ảnh, trẻ dưới 6 tuổi), cấp thẻ trong 5 ngày làm việc,
  cấp cứu xuất trình trước khi kết thúc đợt điều trị, quỹ chỉ trả từ lúc xuất trình (trừ cấp cứu),
  lỗi hệ thống thì cung cấp mã số thẻ.
- Chinhsachonline.chinhphu.vn, 30/08/2023 (BHXH tỉnh Tây Ninh trả lời) — "Ba cách đi khám bệnh
  không cần mang theo thẻ BHYT": CCCD gắn chip, VNeID mức 2, VssID.

Lý do chọn: mục backlog `mat-the-bao-hiem-y-te-co-linh-thuoc-duoc-khong` (đã xoá). Điểm cảnh báo
của backlog (trường hợp không có phương án điện tử) đã đối chiếu với nguồn chính thức: thẻ giấy
chỉ cấp cho người không thể cài VssID, VNeID và không có CCCD gắn chip; ngoài ra bài chỉ khuyên
liên hệ cơ quan BHXH, không suy đoán thủ tục. `uong-thuoc-xong-nam-ngay-co-sao-khong` vẫn bỏ qua
vì trùng ý định với bài nuốt khan.
