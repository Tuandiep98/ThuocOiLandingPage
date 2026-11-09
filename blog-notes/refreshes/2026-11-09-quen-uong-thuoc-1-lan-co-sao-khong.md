# 2026-11-09 — làm mới: `quen-uong-thuoc-1-lan-co-sao-khong`

Chọn bài này vì đây là bài cũ nhất (đăng 2026-09-27) chưa từng có file trong
`blog-notes/refreshes/` và chưa có `updatedDate` — không phát hiện vi phạm guardrail nào cần sửa
gấp ở bài này hay các bài khác khi rà soát nhanh (grep tên thuốc/liều, "chữa khỏi"/"cam kết", nhãn
"bác sĩ biên tập", chủ đề cấm, lời khuyên tự tăng/giảm/ngừng thuốc trên toàn bộ `src/content/blog/`
— các kết quả khớp đều là trích nguồn hoặc lời khuyên đúng hướng "hỏi bác sĩ/dược sĩ, không tự
quyết định").

Bài vốn đã đạt phần lớn yêu cầu định dạng (đoạn mở trả lời trực tiếp ~54 từ, có mục "Khi nào nên
hỏi bác sĩ, dược sĩ ngay", 4 FAQ, 1 nguồn chính thống đã có từ trước, mục nhắc app chỉ chiếm một
phần nhỏ). Thay đổi trong lần làm mới này:

- Thêm `feature: "theo-doi-lieu-trinh"` vào frontmatter — mục app trong bài nói đúng về tính năng
  theo dõi số liều đã uống/tổng liều, khớp với trang `/tinh-nang/theo-doi-lieu-trinh/` trong
  `site.ts`, không phải tính năng nhắc giờ chung.
- Thêm `updatedDate: 2026-11-09`.
- Thêm 1 liên kết nội bộ tới bài [Cách đặt lời nhắc uống thuốc trên điện thoại](/blog/cach-dat-loi-nhac-uong-thuoc-tren-dien-thoai/)
  ở đoạn nói về nguyên nhân quên liều — bài vốn đã có 1 liên kết nội bộ tới
  `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`, nay có 2.

Không thêm `sources` mới (nguồn hiện có — Sở Y tế Nghệ An — đã có từ trước lần làm mới này, không
tìm nguồn bổ sung vì nội dung bài đã đủ căn cứ và không cần chi tiết hoá thêm).

Backlog: bổ sung 3 file mới (không sửa/xoá file cũ) sau khi xác nhận nhu cầu tìm kiếm thật qua
WebSearch, nâng tổng số từ 10 lên 13:
- `xit-mui-nhieu-co-hai-khong-nghien-thuoc-xit-mui.md`
- `dong-kinh-uong-thuoc-deu-dan-quen-lieu-co-nguy-hiem-khong.md`
- `mua-thuoc-ke-don-qua-mang-san-thuong-mai-dien-tu-co-hop-phap-khong.md`
