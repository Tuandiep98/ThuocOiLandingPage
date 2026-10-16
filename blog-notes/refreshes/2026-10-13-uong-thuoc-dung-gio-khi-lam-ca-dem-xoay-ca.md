# 2026-10-13 — làm mới: `uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca`

Bài cũ nhất chưa được làm mới và không
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
