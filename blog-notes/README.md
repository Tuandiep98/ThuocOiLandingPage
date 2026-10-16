# Blog notes

Nhật ký và backlog của quy trình blog mô tả trong `CLAUDE.md` (mục "Blog content workflow"). Đọc
thư mục này trước khi viết bài mới hoặc làm mới bài cũ — mục đích chính là tránh trùng ý định tìm
kiếm đã làm, không phải để liệt kê lịch sử.

## Vì sao mỗi mục là một file riêng

Trước 2026-10-16 tất cả nằm chung trong một file `blog-notes.md`. Mỗi routine (bài mới buổi sáng,
bảo trì buổi tối) mở PR riêng và cùng chèn vào đúng một chỗ trong file đó, nên hễ có hơn một PR chờ
merge là mọi PR đều bị conflict. Giờ mỗi lần ghi nhật ký là **tạo một file mới có tên riêng**, và
backlog là **mỗi mục một file** — hai nhánh song song không bao giờ sửa cùng một file nên không thể
conflict.

## Cấu trúc

- `posts/YYYY-MM-DD-<slug>.md` — một file cho mỗi bài mới: slug, tiêu đề, keyword, segment, góc độ,
  nguồn đã xác minh, guard check. Ngày trong tên file là ngày đăng (`publishDate`).
- `refreshes/YYYY-MM-DD-<slug>.md` — một file cho mỗi lần làm mới bài cũ: đã sửa gì và vì sao chọn
  bài đó.
- `backlog/<keyword-không-dấu>.md` — mỗi file là một câu hỏi tìm kiếm thật chưa có bài: keyword,
  cụm chủ đề, góc độ khác bài đã có ra sao, nguồn cần xác minh trước khi viết. (Một số mục cũ còn
  nhắc "backlog #2", "#8"… — đó là số thứ tự của danh sách cũ, không còn ý nghĩa; đọc theo nội dung.)
- `seasonal.md` — lịch chủ đề theo mùa.

## Quy tắc ghi (để không bao giờ conflict)

1. **Chỉ thêm file mới, không sửa file nhật ký đã có** trong `posts/` và `refreshes/`.
2. **Dùng một mục backlog = xoá file của mục đó** (`git rm`) trong cùng commit thêm bài. Không đánh
   số lại, không sửa các mục khác.
3. **Bổ sung backlog = tạo file mới** trong `backlog/`. Không sửa nội dung một file backlog đã có
   trong routine tự động — nếu một mục cần viết lại góc độ, xoá file cũ và tạo file mới tên khác
   (sửa tại chỗ trong khi nhánh khác đang xoá chính file đó sẽ gây conflict modify/delete).
4. `seasonal.md` và file này chỉ sửa trong phiên làm việc trực tiếp với người dùng, không sửa trong
   routine.

## Cách tra cứu nhanh

- Hôm nay đã có bài mới chưa: `ls blog-notes/posts/$(date +%F)-*`
- Bài đã làm mới gần đây / bài nào chưa từng làm mới: `ls blog-notes/refreshes/`, đối chiếu với
  `ls src/content/blog/`
- Một ý định tìm kiếm đã có bài chưa: `grep -ril "<từ khoá>" blog-notes/posts src/content/blog`
- Chọn mục backlog: đọc các file trong `backlog/`, bỏ qua mục chưa tới mùa (xem `seasonal.md`) hoặc
  mục đang được một nhánh `claude/blog-*` chưa merge dùng (`git ls-tree` nhánh đó xem file backlog
  còn không). Ưu tiên mục kiểm chứng được nguồn chính thức ngay trong phiên.
