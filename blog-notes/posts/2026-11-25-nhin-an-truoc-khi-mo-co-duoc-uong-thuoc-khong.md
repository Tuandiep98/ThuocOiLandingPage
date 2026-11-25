# 2026-11-25 — bài mới: `nhin-an-truoc-khi-mo-co-duoc-uong-thuoc-khong`

Tiêu đề "Nhịn ăn trước khi mổ có được uống thuốc hằng ngày không?", keyword `nhịn ăn trước khi mổ
có được uống thuốc không`, cụm Uống thuốc đúng cách, feature `theo-doi-lieu-trinh`. Góc độ: khác
`uong-thuoc-truoc-ngay-xet-nghiem-mau` (nhịn đói trước xét nghiệm máu), `uong-thuoc-sau-phau-thuat-
khong-bo-do-khang-sinh` và `quan-ly-nhieu-loai-thuoc-cung-luc-sau-xuat-vien` (đều là SAU mổ) — đây
là giai đoạn TRƯỚC mổ: vì sao phải nhịn, thuốc hằng ngày do bác sĩ/bác sĩ gây mê quyết định theo
từng loại, không tự bỏ hết cũng không tự uống như thường, chuẩn bị danh sách thuốc cho buổi khám
tiền mê. Không nêu tên thuốc/hoạt chất nào, không nói thuốc nào ngưng bao nhiêu ngày (chỉ nhắc nhóm
thuốc chống đông, thuốc tiểu đường/insulin như những thứ cần khai báo rõ). Không đặt `imageTag`
(không crop nào khớp `usedWhen`).

Mục app liên kết `/tinh-nang/theo-doi-lieu-trinh/`, chỉ nêu những gì `site.ts` có (danh sách đơn và
tiến trình; Báo cáo & dữ liệu xuất PDF/CSV gồm đơn thuốc + lịch sử từng liều, tạo và lưu trên máy;
không thay hồ sơ bệnh án). Nói rõ app không quyết định thuốc nào uống trước mổ.

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Vinmec "Hướng dẫn người bệnh chuẩn bị phẫu thuật Kỳ 2: Ngày phẫu thuật" — nhịn ăn ít nhất 6 tiếng,
  uống nước đến trước 2 tiếng; không uống bất kỳ thuốc nào trừ khi được bác sĩ chỉ định; một số bệnh
  nhân được phép uống thuốc với một ngụm nước ngày mổ; thuốc mang từ nhà cần bác sĩ kiểm tra.
- Vinmec "Nhịn ăn uống thế nào để an toàn khi phẫu thuật?" — mốc 6/4/2 tiếng; khai báo với bác sĩ gây
  mê thời gian và loại thức ăn uống cuối cùng; gây tê vẫn nên nhịn vì có thể dị ứng thuốc tê/gây tê
  thất bại.
- Tâm Anh "Nhịn ăn uống trước phẫu thuật" — lý do: nôn khi đặt ống thở, hít chất nôn gây biến chứng
  nặng (hiếm gặp); công thức 6-4-2 cho người không có bệnh nền; có thể lên 8 giờ; ASA III trở lên
  theo dặn dò bác sĩ gây mê hồi sức.

Lý do chọn: backlog hiện còn chủ yếu là mục giấy tờ BHYT cần đọc văn bản gốc (chưa kiểm chứng được
trong phiên) và mục theo mùa chưa tới mùa (Tết từ giữa tháng 12, du lịch hè, nhập học), nên tự chọn
một câu hỏi tìm kiếm thật trong cụm 1, kiểm chứng được bằng trang của hai bệnh viện lớn trong nước.
Không dùng mục backlog nào.
