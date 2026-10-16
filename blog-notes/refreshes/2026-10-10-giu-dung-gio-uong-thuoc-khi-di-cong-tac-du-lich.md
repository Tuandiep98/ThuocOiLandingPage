# 2026-10-10 — làm mới: `giu-dung-gio-uong-thuoc-khi-di-cong-tac-du-lich`

Bài cũ nhất chưa được làm mới và
không bị nhánh `claude/blog-*` nào khác đang giữ (publishDate 2026-09-10; bài 2026-09-07
`nguoi-cham-soc-chuyen-nghiep-quan-ly-thuoc-nguoi-gia` vẫn đang chờ merge trên nhánh
`claude/blog-maintenance-2026-10-04` nên vẫn bỏ qua; bài sáng cùng ngày
`cach-nho-uong-thuoc-mo-mau-moi-ngay` trên nhánh `claude/blog-2026-10-10` chưa merge là bài mới,
không liên quan), không có vi phạm guardrail nào (đã rà soát toàn bộ bài, không có tên thuốc kèm
liều, không hướng dẫn tự đổi giờ/uống bù cụ thể, không claim tính năng app ngoài `site.ts`). Đã:
thay đoạn mở đầu bằng câu trả lời trực tiếp ~55 từ; bổ sung dẫn chứng cụ thể vào mục "Chuẩn bị
trước chuyến đi" từ nguồn Vinmec (mang gấp đôi lượng thuốc cần, xin thêm đơn phòng mất/hết thuốc,
giữ thuốc trong hành lý xách tay/bao bì gốc khi đi máy bay) và vào mục "Lệch múi giờ" (đặt báo
thức ngay khi đổi múi giờ); thêm mục riêng "Khi nào nên hỏi bác sĩ, dược sĩ trước chuyến đi" với 5
tình huống cụ thể (trước đó chỉ lồng trong một câu ở mục lệch múi giờ); thêm `faqs` (4 câu); thêm
`sources` (bài "21 bí quyết để người tiểu đường có thể du lịch khắp thế giới" của Vinmec, đã fetch
và đối chiếu trong phiên này — chỉ lấy phần nguyên tắc chung áp dụng cho mọi người đi xa dùng
thuốc dài ngày, không lấy phần điều chỉnh liều insulin riêng cho người tiểu đường); thêm 2 liên kết
nội bộ tới `uong-thuoc-dung-gio-khi-lam-ca-dem-xoay-ca` và `dau-hieu-quen-lieu-uong-trung-lieu-thuoc`;
đặt `updatedDate`. Không đổi title/publishDate/keyword/segment. Phần giới thiệu tính năng app giữ
nguyên trong đúng 1 mục cuối bài (~1/5, trong khuyến nghị ~1/4). Không đặt `imageTag` — không có
ảnh nào trong danh sách duyệt sẵn khớp thật với chủ đề chuẩn bị thuốc khi đi xa/lệch múi giờ.
Backlog vẫn còn 12 mục (trên nhánh main hiện tại — nhánh `claude/blog-2026-10-10` đã dùng mục #3 cũ
"mỡ máu" và đánh số lại thành 11 mục trên nhánh đó, chưa merge) nên không cần bổ sung thêm; khi cả
hai PR cùng merge sẽ có xung đột nhỏ ở phần backlog của `blog-notes.md`, người merge cần giữ lại
việc bỏ mục #3 "mỡ máu" (đã dùng) và đánh số lại cho đúng.
