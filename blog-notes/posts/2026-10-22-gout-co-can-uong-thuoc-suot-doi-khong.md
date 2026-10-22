# 2026-10-22 — bài mới: `gout-co-can-uong-thuoc-suot-doi-khong`

`gout-co-can-uong-thuoc-suot-doi-khong` — "Gout có cần uống thuốc suốt đời không?" — keyword:
`gout có cần uống thuốc suốt đời không` — cụm Thói quen dùng thuốc cho bệnh mạn tính phổ biến.
Lấy từ backlog `gout-co-can-uong-thuoc-suot-doi-khong.md`. Góc độ: cùng dạng với
`tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong` và `mo-mau-cao-co-phai-uong-thuoc-suot-doi-khong`
nhưng khai thác một bệnh mạn tính CHƯA có bài nào trong site — gout: vì sao hết đau cơn gout cấp
không có nghĩa là bệnh đã khỏi, phân biệt (không gọi tên thuốc cụ thể) giữa nhóm thuốc cắt cơn cấp
và nhóm thuốc kiểm soát acid uric dùng lâu dài, vì sao tự ý ngừng thuốc khi thấy đỡ lại dễ tái
phát, vai trò của lối sống đi kèm (không thay thế thuốc), và theo dõi tái khám/tiến trình liều
giúp buổi khám có số liệu cụ thể hơn. Không nêu tên thuốc/liều cụ thể, không tự đưa ra khi nào nên
giảm/ngừng/đổi thuốc — mọi quyết định đó để bác sĩ quyết định. Liên kết nội bộ tới
`tang-huyet-ap-co-phai-uong-thuoc-suot-doi-khong`, `mo-mau-cao-co-phai-uong-thuoc-suot-doi-khong`
và `moi-phat-hien-benh-man-tinh-xay-thoi-quen-uong-thuoc`. Không đặt `imageTag` — không có ảnh nào
trong `blog-images.ts` khớp thật với chủ đề gout/tái khám cụ thể hơn các bài đã dùng ảnh tương tự.
Nguồn: ba bài trên Vinmec (vinmec.com) — "Uống thuốc gút như thế nào cho đúng cách?", "Bệnh gout
có trị được dứt điểm được không?", "Phương pháp điều trị Gout mạn tính thế nào?" — cả ba đã fetch
và đối chiếu trực tiếp trong phiên này (không tên thuốc cụ thể nào được đưa vào bài). Guard check:
đã fetch `origin`; không có nhánh `origin/claude/blog-2026-10-22`; các nhánh `claude/blog-*` và
`claude/blog-maintenance-*` còn sót trên remote (2026-10-16 → 2026-10-21) đều đã merge vào `main`
(kiểm tra bằng `git merge-base --is-ancestor`), chỉ là branch cũ chưa bị xoá — không có nhánh nào
đang giữ chủ đề khác cần tránh. Tự review (commit thứ hai) đã cắt hai câu chưa kiểm chứng trực tiếp
trong phiên (thời gian cơn gout cấp tự giảm, khớp hay gặp nhất, ví dụ cụ thể loại thực phẩm giàu
purin) để chỉ giữ lại nội dung đối chiếu được với ba nguồn Vinmec đã fetch.
