# J-Kids

Trang chính sách và hỗ trợ công khai cho ứng dụng J-Kids: bài tập toán và tư duy cho trẻ 4–6 tuổi, có in phiếu bài tập.

- [Chính sách quyền riêng tư](privacy.html) — liên kết dán vào Google Play và App Store (Privacy Policy URL)
- [Hỗ trợ](support.html) — liên kết dán vào App Store (Support URL)
- [Điều khoản sử dụng](terms.html)
- [Cam kết an toàn cho trẻ em](safety.html)

Dữ liệu máy chủ xử lý: email đăng nhập Google của phụ huynh, mã cài đặt, mã thiết bị đã băm SHA-256, thời hạn dùng thử và giao dịch mua. Bài làm, lịch sử và cài đặt chỉ lưu trên thiết bị. Không quảng cáo, không công cụ phân tích bên thứ ba.

## Trước khi công khai

Mở `site-config.js` và kiểm tra:

- `contactEmail`: email phụ huynh có thể viết tới
- `developerName`: tên pháp lý của nhà phát triển (hiện là `Bui Trung Kien`)

## GitHub Pages

1. Đẩy repo này lên GitHub, nhánh công khai.
2. Vào Settings → Pages → Deploy from a branch → nhánh chính, thư mục `/` (root).
3. Sau khi Pages chạy, URL có dạng:

`https://<tài-khoản>.github.io/<tên-repo>/privacy.html`
`https://<tài-khoản>.github.io/<tên-repo>/support.html`

## Khi ứng dụng thay đổi cách xử lý dữ liệu

Cập nhật `privacy.html` trước khi bản ứng dụng mới phát hành: ngày hiệu lực mới, dữ liệu mới được thu thập, nhà cung cấp hạ tầng mới nếu có.
