# 2026-11-21 — bài mới: `viem-khop-dang-thap-co-tu-ngung-thuoc-khi-do-dau-khong`

Tiêu đề "Viêm khớp dạng thấp: đỡ đau rồi có tự ngưng thuốc được không?", keyword `viêm khớp dạng
thấp có tự ngưng thuốc được không`, cụm Thói quen dùng thuốc cho bệnh mạn tính (góc tuân thủ, không
chọn thuốc hay liều), feature `theo-doi-lieu-trinh`. Góc độ: chưa có bài nào về viêm khớp dạng thấp;
khác các bài mạn tính đã có (huyết áp, tiểu đường, mỡ máu, tuyến giáp, gout, suy tim, viêm gan B,
động kinh, loãng xương…) ở chỗ thuốc điều trị nền có thể mất tới ~6 tháng mới đủ tác dụng (dễ nản bỏ
sớm) và cơn đau có thể tự thuyên giảm (dễ tự ngưng khi đỡ). Không nêu tên hoạt chất/nhóm thuốc cụ thể
(chỉ nói "thuốc điều trị nền", "một số thuốc phải giảm liều từng bước"), không liều; quên liều dẫn về
tờ hướng dẫn + dược sĩ/bác sĩ (cố ý KHÔNG chuyển tải câu "uống bù ngay khi nhớ" và "ngừng thuốc ngay
khi bất thường" của Vinmec vì trái guardrail — thay bằng "báo bác sĩ", nặng thì đi khám/115).

Mục app liên kết `/tinh-nang/theo-doi-lieu-trinh/`, chỉ nêu những gì `site.ts` có (nhập tay/chụp đơn
+ kiểm tra, Đã uống / Báo lại 10 phút, nhắc lần hai 45 phút, ghi liều đã uống, báo sắp hết thuốc,
nhắc tái khám đọc từ đơn, xuất PDF/CSV); nói rõ app không đánh giá bệnh/hiệu quả thuốc. Không đặt
`imageTag`.

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Vinmec "Điều trị viêm khớp dạng thấp (RA): Có nên tự ý ngưng thuốc?" và "Điều trị viêm khớp dạng
  thấp: Tự dừng thuốc vì bệnh đã giảm?" — đau có thể tự thuyên giảm nhưng không nên tự ngưng; ngưng
  không chỉ định có thể gây hại, triệu chứng quay lại; tự giảm dần liều cũng có thể nặng hơn; trao đổi
  bác sĩ trước mọi thay đổi; người bệnh hay bỏ tái khám khi đỡ; cân nhắc lợi ích/tác dụng phụ, đổi
  thuốc với bác sĩ.
- Vinmec "Thuốc điều trị viêm khớp dạng thấp: Những điều cần biết" — thuốc nền có thể mất đến 6 tháng
  để phát huy hiệu quả hoàn toàn, có thuốc lâu hơn; xét nghiệm máu định kỳ theo dõi gan/tế bào máu.
- Vinmec "Tránh 6 sai lầm về viêm khớp dạng thấp phổ biến" — không bỏ thuốc khi thấy khỏe; bỏ liều
  thường xuyên làm nồng độ thuốc giảm, bệnh có thể tái phát; tái khám đúng hẹn.
- Vinmec "Lưu ý khi dùng thuốc điều trị viêm khớp dạng thấp" — một số thuốc không được ngừng đột ngột,
  phải giảm liều từng bước theo bác sĩ; tái khám định kỳ.
- WHO "Rheumatoid arthritis" — bệnh tự miễn mạn tính, triệu chứng khớp đối xứng, chưa chữa khỏi nhưng
  kiểm soát được nếu điều trị kịp thời, có thể thuyên giảm; không điều trị gây tổn thương khớp nặng;
  vận động, dinh dưỡng, lối sống lành mạnh.

Lý do chọn: mục backlog `viem-khop-dang-thap-uong-thuoc-deu-dan.md` (đã xoá) kiểm chứng được bằng
nguồn Vinmec + WHO ngay trong phiên; tháng 11 đã có bài cúm mùa, mục Tết chưa tới mùa (giữa tháng 12),
các mục giấy tờ BHYT cần văn bản gốc chưa kiểm chứng trong phiên này.
