# 2026-11-24 — bài mới: `thuoc-vien-boc-khoi-vi-de-ngoai-duoc-bao-lau`

Tiêu đề "Thuốc viên bóc khỏi vỉ, để ngoài dùng được bao lâu?", keyword `thuốc viên bóc khỏi vỉ để
ngoài dùng được bao lâu`, cụm Uống thuốc đúng cách (bảo quản thuốc), feature `nhac-uong-thuoc`. Góc
độ: khác `cach-bao-quan-thuoc-tai-nha` (nơi để thuốc trong nhà, chỉ nhắc vỉ trong 1 FAQ),
`hop-chia-thuoc-theo-ngay-va-app-nhac-thuoc` (hộp chia thuốc vs app), `thuoc-vien-sui-pha-xong-de-
duoc-bao-lau` và các bài thuốc dạng lỏng sau mở nắp — đây là câu hỏi trực tiếp về viên rắn đã bóc
khỏi vỉ bấm: vì sao vỉ quan trọng, vì sao không có con số chung, nhóm dạng bào chế thường không nên
bóc sẵn, cách dùng hộp chia thuốc an toàn hơn. Không nêu tên thuốc/hoạt chất nào, không tự đặt số
ngày/giờ (cố ý KHÔNG đưa mốc "tối đa 5 tuần/8 tuần" của SPS vì đó là cho hộp do nhà thuốc đóng kín
ở Anh, dễ bị hiểu nhầm thành hạn chung). Không đặt `imageTag`.

Mục app liên kết `/tinh-nang/nhac-uong-thuoc/`, chỉ nêu những gì `site.ts` có (nhập tay không dùng
AI/không tính lượt quét, chụp đơn + kiểm tra, Đã uống / Báo lại 10 phút, nhắc lần hai 45 phút, không
cần mạng); nói rõ app không đánh giá thuốc nào để ngoài vỉ được.

Nguồn đã đọc trực tiếp bằng WebFetch trong phiên:
- Vinmec "Những điều cần biết về bảo quản thuốc tại nhà" — bao bì gốc ngăn một phần ảnh hưởng của độ
  ẩm, ánh sáng; nhiệt độ cao/ẩm làm hỏng hoặc giảm hiệu quả; thấy đổi màu, mùi, hình dạng thì bỏ.
- NHS Specialist Pharmacy Service "Using the Medicines Compliance Aid Stability Tool" — thiếu dữ liệu
  độ ổn định trong hộp chia liều; nhà sản xuất không đảm bảo khi ra khỏi bao bì gốc; để trong thời
  gian ngắn nhất; thuốc hút ẩm/nhạy sáng/cần lạnh không phù hợp; viên ngậm, nhai, phân tán, sủi, tan
  trong miệng thường không khuyến nghị; không cất ở phòng tắm, bếp; tránh ánh sáng trực tiếp; quyết
  định dựa trên đánh giá chuyên môn.
- NHS SPS "Complex medication regimens: supporting adherence" — dược sĩ nên tư vấn thuốc nào phù hợp
  để chia vào hộp; mặc định cấp thuốc trong bao bì gốc.
(Trang safetyandquality.gov.au về sắp xếp thuốc trả 503, không dùng.)

Lý do chọn: mục backlog `thuoc-vien-boc-khoi-vi-de-ngoai-dung-duoc-bao-lau.md` (đã xoá) không phụ
thuộc mùa và kiểm chứng được bằng bệnh viện lớn trong nước + NHS ngay trong phiên; mục Tết chưa tới
mùa, các mục giấy tờ BHYT cần văn bản gốc chưa kiểm chứng trong phiên này.
