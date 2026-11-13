# 2026-11-13 — làm mới: `cum-mua-khi-nao-can-di-kham-bac-si`

Chọn bài này vì đây là bài cũ nhất (`publishDate: 2026-10-01`) chưa từng được làm mới (không có
file nào trong `blog-notes/refreshes/`, chưa có `updatedDate`), không bị nhánh `claude/blog-*` chưa
merge nào sửa, và đang vào mùa cúm.

Fetch lại hai nguồn Vinmec cũ trong phiên này thì thấy vài nhận định trong bài không khớp nguồn:

- "Phần lớn tự khỏi sau 5-7 ngày" — Vinmec ghi "vài ngày đến dưới hai tuần"; WHO ghi "most people
  will recover on their own within a week". Đổi thành "trong khoảng một tuần" (dẫn WHO) ở
  description, đoạn mở đầu và FAQ 1.
- "Theo Vinmec, hầu hết người bệnh có thể tự điều trị tại nhà" — trang Vinmec không nói vậy. Bỏ câu
  này, thay bằng dẫn WHO + nhắc khuyến cáo Bộ Y tế (qua Vinmec): người có triệu chứng ho, sốt, đau
  đầu, đau họng nên đến cơ sở y tế để khám kịp thời.
- Danh sách nhóm nguy cơ "theo Bộ Y tế" có phụ nữ mang thai — khuyến cáo chỉ nêu thai phụ ở mục
  tránh tiếp xúc. Sửa danh sách đúng theo nguồn (thêm rối loạn chuyển hoá, thiếu máu), phần phụ nữ
  mang thai và trẻ dưới 5 tuổi dẫn từ WHO.
- FAQ 4 cũ ("trẻ nhỏ không nhất thiết đi khám ngay từ đầu") trái với khuyến cáo Bộ Y tế → viết lại
  theo hướng đi khám sớm, đi khám/gọi cấp cứu ngay khi có dấu hiệu cảnh báo.
- FAQ 3 (vắc xin) viết lại cho khớp WHO (miễn dịch giảm dần, kém hiệu quả hơn ở người lớn tuổi).

Thêm: `updatedDate`, `feature: "gia-dinh"` (khớp luật suy luận cũ theo segment "người thân"), link
`/tinh-nang/gia-dinh/` trong mục app, internal link tới bài sốt xuất huyết (không chẩn đoán phân
biệt, chỉ nhắc đi khám), nguồn WHO; mục "Khi nào nên hỏi" thêm gọi cấp cứu khi khó thở nặng/co
giật/li bì, không tự ngưng/đổi thuốc bệnh mạn tính, đọc tờ hướng dẫn. Mục app nói rõ ứng dụng không
tư vấn thuốc. Không đổi slug, publishDate, ctaTitle/ctaDescription.

Nguồn đã fetch trong phiên: 2 trang Vinmec (đã có sẵn) + WHO fact sheet Influenza (seasonal).
Backlog `blog-notes/backlog/` đã có đủ 10 file nên không thêm file mới.
