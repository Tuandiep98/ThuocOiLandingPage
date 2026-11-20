# 2026-11-20 — làm mới: `cach-nho-uong-thuoc-tuyen-giap-moi-ngay`

Chọn bài này vì nó là bài cũ nhất (publishDate 2026-10-08) chưa có file trong `refreshes/` và chưa
từng được `updatedDate`. Quét nhanh toàn bộ 98 bài để tìm vi phạm guardrail (tên thuốc/hoạt chất kèm
liều, khuyên đổi liều, chẩn đoán, chủ đề cấm, số liệu bịa, ngụ ý bác sĩ/dược sĩ viết) không phát
hiện vi phạm nào cần ưu tiên sửa trước, nên theo đúng thứ tự ưu tiên trong CLAUDE.md, chuyển sang
bài cũ nhất chưa làm mới. Bài gốc đã khá đầy đủ (đoạn mở trả lời trực tiếp, 4 FAQ, 2 nguồn Vinmec,
mục "Khi nào nên hỏi bác sĩ, dược sĩ", 2 link nội bộ, tỉ lệ nhắc app chỉ ~18% bài) nên thay đổi chủ
yếu là: rút gọn đoạn mở từ 72 xuống 60 từ để đúng khoảng 40–60 từ theo quy định; thêm frontmatter
`feature: "nhac-uong-thuoc"` (trước đó suy ra đúng qua `src/lib/blog-feature.ts` nhưng chưa khai báo
tường minh); thêm `updatedDate: 2026-11-20`. Không thêm nguồn mới — đã dùng WebFetch kiểm tra lại cả
2 nguồn Vinmec hiện có (về thời điểm uống levothyroxine cách xa bữa ăn, và tương tác với canxi/sắt)
và xác nhận nội dung bài vẫn khớp với nguồn, không cần sửa. Đã bổ sung 2 file backlog mới (không sửa
file cũ): `benh-parkinson-uong-thuoc-dung-gio.md` và
`glocom-tang-nhan-ap-quen-nho-thuoc-co-sao-khong.md` — cả hai thuộc cụm "Thói quen dùng thuốc cho
bệnh mạn tính phổ biến", đã xác nhận nhu cầu tìm kiếm thật qua WebSearch, chưa có bài hoặc mục
backlog nào trùng ý định. Backlog hiện có 13 file, trên mức tối thiểu 10.
