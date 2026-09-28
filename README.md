# Jkid - Tiền tiểu học

Trang chính sách công khai cho ứng dụng Jkid: bài tập đếm số và phép cộng từ 1 đến 10 cho trẻ em.

- [Chính sách quyền riêng tư](privacy.html) — liên kết nên dán vào Google Play và App Store
- [Điều khoản sử dụng](terms.html)
- [Cam kết an toàn cho trẻ em](safety.html)

Hiện tại ứng dụng không thu thập dữ liệu người dùng. Nếu sau này có đăng nhập bằng email, email chỉ dùng cho tính năng ứng dụng, gồm đăng ký và đăng nhập.

## Trước khi công khai

Mở `site-config.js` và điền:

- `contactEmail`: email phụ huynh có thể viết tới
- `developerName`: tên nhà phát triển hoặc tên pháp lý nếu khác `Jkid`

Cửa hàng ứng dụng cần email liên hệ thật trong chính sách quyền riêng tư.

## GitHub Pages

1. Đẩy repo này lên GitHub, nhánh công khai.
2. Vào Settings → Pages → Deploy from a branch → nhánh chính, thư mục `/` (root).
3. Sau khi Pages chạy, URL chính sách quyền riêng tư có dạng:

`https://<tài-khoản>.github.io/<tên-repo>/privacy.html`

Dán URL đó vào Play Console và App Store Connect. Trong app, nên mở được cùng URL này từ màn hình dành cho phụ huynh.

## Khi phát hành đăng nhập email

Cập nhật `privacy.html` trước ngày tính năng chạy: ngày hiệu lực mới, tên nhà cung cấp hạ tầng nếu có, và nơi máy chủ lưu email nếu nằm ngoài Việt Nam.
