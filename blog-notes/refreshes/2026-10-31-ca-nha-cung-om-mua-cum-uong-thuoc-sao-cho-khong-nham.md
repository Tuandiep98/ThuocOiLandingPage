# 2026-10-31 — làm mới: `ca-nha-cung-om-mua-cum-uong-thuoc-sao-cho-khong-nham`

Chọn bài này vì đây là bài đăng (2026-09-22) cũ nhất trong `src/content/blog/` chưa có file nào
trong `blog-notes/refreshes/` và chưa có `updatedDate`; mọi nhánh `claude/blog-*` còn trên remote
đều đã merge hết vào main nên không nhánh nào đang sửa bài này. Bài cũ có vấn đề:
- Gợi ý "trẻ nhỏ có đơn kháng sinh ngắn ngày" như một phần điển hình của đợt cúm — dễ gây hiểu nhầm
  cúm thường cần kháng sinh (chủ đề kháng sinh nằm gần vùng cấm của CLAUDE.md); đã bỏ.
- Khẳng định không có trong `site.ts`: mời vào nhóm "không giới hạn phải là người thân huyết thống",
  "tên thuốc hiển thị rõ ràng trên từng thông báo"; đã bỏ.
- Gần như toàn bộ bài là giới thiệu app; chưa có đoạn trả lời trực tiếp, `faqs`, `sources`, link
  nội bộ hay mục hỏi bác sĩ/dược sĩ có dấu hiệu cụ thể.

Đã sửa:
- Thêm đoạn mở đầu trả lời trực tiếp (~55 từ).
- Thêm mục checklist thực hành không phụ thuộc app: để thuốc riêng từng người, không dùng chung
  thuốc, ghi lại ngay sau khi uống, giao một người theo dõi, không uống thêm khi không nhớ.
- Dồn phần app vào một mục (nhóm Gia đình, nhập tay không tính lượt quét, mã QR dùng một lần 10
  phút, giới hạn thành viên 2/3/10, nói rõ không kiểm tra tương tác); link `/tinh-nang/gia-dinh/`
  và thêm `feature: "gia-dinh"`.
- Mục "Khi nào nên hỏi bác sĩ, dược sĩ" với dấu hiệu cảnh báo cụ thể (có nguồn) và cấp cứu 115.
- 4 `faqs`; 3 liên kết nội bộ: `/blog/dau-hieu-quen-lieu-uong-trung-lieu-thuoc/`,
  `/blog/quan-ly-tu-thuoc-gia-dinh-khong-ke-don/`, `/blog/cum-mua-khi-nao-can-di-kham-bac-si/`.
- Giữ nguyên slug, `publishDate`, `keyword`, `segment`, `ctaTitle`, `ctaDescription`, `imageTag`.

Nguồn đã fetch trong phiên (WebFetch) và xác nhận:
- WHO — "Influenza (seasonal)" fact sheet: cúm lây dễ qua ho, hắt hơi; phần lớn người bệnh hết sốt
  và triệu chứng trong khoảng một tuần không cần chăm sóc y tế; phụ nữ mang thai, trẻ dưới 5 tuổi
  có nguy cơ bệnh nặng; rửa tay, che miệng mũi khi ho hắt hơi, ở nhà khi không khoẻ.
- Vinmec — "Dấu hiệu cảnh báo nguy hiểm của bệnh cúm": dấu hiệu cần khám ở người lớn và trẻ em
  (khó thở, đau/áp lực ngực bụng, lú lẫn, chóng mặt dai dẳng, co giật, triệu chứng đỡ rồi nặng lại;
  trẻ thở nhanh, môi tái, mất nước, sốt trên 40°C).

Backlog: đã có 10 file (≥ 10), không cần bổ sung lần này.
