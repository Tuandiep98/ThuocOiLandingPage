# 2026-10-21 — bài mới: `uong-thuoc-cung-tra-ca-phe-co-anh-huong-den-tac-dung-thuoc-khong`

`uong-thuoc-cung-tra-ca-phe-co-anh-huong-den-tac-dung-thuoc-khong` — "Uống thuốc cùng trà, cà phê
có ảnh hưởng đến tác dụng thuốc không?" — keyword: `uống thuốc cùng trà, cà phê có ảnh hưởng đến
tác dụng thuốc không` — cụm Uống thuốc đúng cách. Lấy từ backlog
`uong-thuoc-cung-tra-ca-phe-co-anh-huong-den-tac-dung-thuoc-khong.md` (đã xác nhận nhu cầu tìm
kiếm thật trong phiên trước, cùng cảnh báo tuyệt đối không nêu tên hoạt chất cụ thể). Góc độ:
nguyên tắc chung vì sao caffeine (cà phê, trà) và tanin (trà) có thể kết tủa/cản hấp thu một số
thuốc hoặc tăng tác dụng phụ của thuốc khác, nhưng không phải thuốc nào cũng bị ảnh hưởng giống
nhau; khuyến nghị chung uống thuốc với nước lọc, sắp giờ uống trà/cà phê cách xa giờ uống thuốc,
không tự đổi giờ hoặc bỏ liều. Chỉ nhắc nhóm thuốc rộng (thuốc chứa sắt, thuốc kháng sinh, thuốc an
thần, thuốc giảm đau kháng viêm) theo đúng cảnh báo trong backlog, không nêu tên hoạt chất/thuốc cụ
thể nào dù nguồn có nhắc đến (ví dụ VnExpress có nêu tên một số hoạt chất cụ thể — cố tình không
đưa vào bài). Liên kết nội bộ tới `uong-thuoc-chung-voi-sua-co-sao-khong` và
`uong-thuoc-cung-nuoc-ep-buoi-co-an-toan-khong` (cùng dạng tương tác nước uống – thuốc, khác loại
nước). Không đặt `imageTag` — tag `goi-y-an-toan-tu-ai` có vẻ gần chủ đề nhưng chưa có bài nào dùng
và không chắc khớp thật với tính năng app liên quan tương tác trà/cà phê, nên bỏ qua để an toàn.

Nguồn: bài "Lưu ý khi dùng nước uống thuốc" của VnExpress
(https://vnexpress.net/luu-y-khi-dung-nuoc-uong-thuoc-2253446.html), đã fetch và đối chiếu trực
tiếp trong phiên này — chỉ lấy phần cơ chế chung (caffeine/tanin kết tủa, cản hấp thu, tăng tác
dụng phụ) và khuyến nghị dùng nước lọc, không đưa tên hoạt chất cụ thể bài nguồn có nhắc vào bài
viết. Đã thử fetch thêm bài của Nhà thuốc Long Châu (`thuoc-tranh-uong-cung-tra-xanh...`) nhưng bị
chặn (HTTP 403) nên không dùng làm nguồn; một bài Vinmec về cà phê/caffeine và hấp thu sắt từ thực
phẩm (không phải từ thuốc) cũng được fetch để đối chiếu nhưng không dùng làm `sources` vì lệch chủ
đề (nói về thực phẩm, không phải thuốc).

Guard check: đã `git fetch origin`, không có nhánh `origin/claude/blog-2026-10-21`. Các nhánh
`origin/claude/blog-2026-10-17` đến `-20` và `origin/claude/blog-maintenance-2026-10-16` đến `-20`
đều đã merge đầy đủ vào `main` (không còn commit nào vượt trước `origin/main`) — không nhánh nào
đang giữ chủ đề nào, có thể xoá khi dọn dẹp. `blog-notes/posts/` đã có bài cho các ngày đến
2026-10-20, chưa có bài cho 2026-10-21.
