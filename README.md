# J-Kids

Trang chính sách và hỗ trợ công khai cho ứng dụng J-Kids: công cụ hỗ trợ phụ huynh và giáo viên mầm non / tiểu học thiết kế bài tập toán (phạm vi 10–20) và tư duy logic, có in phiếu bài tập.

- [Chính sách quyền riêng tư](privacy.html) — Privacy Policy URL (Google Play / App Store)
- [Hỗ trợ](support.html) — Support URL (App Store)
- [Điều khoản sử dụng](terms.html)
- [Cam kết an toàn](safety.html)

Dữ liệu máy chủ xử lý: email đăng nhập Google hoặc Apple của tài khoản người lớn (có thể là địa chỉ ẩn danh `@privaterelay.appleid.com`), mã cài đặt, mã thiết bị đã băm SHA-256, thời hạn dùng thử và giao dịch mua. Bài làm, lịch sử và cài đặt chỉ lưu trên thiết bị. Không quảng cáo, không công cụ phân tích bên thứ ba.

## App Store metadata (gợi ý khi trả lời Review)

- **2.3.8:** Không dùng subtitle / screenshot mang nghĩa “dành riêng cho trẻ 4–6”. Định vị: công cụ cho phụ huynh & giáo viên. Nếu cần Kids category thì chọn Made for Kids; hiện tại không nộp category Kids.
- **2.3.6:** Ứng dụng **không** có Age Assurance. Trước thanh toán chỉ có bước xác nhận người lớn (parent gate). Trong Age Rating chọn **None** cho Age Assurance / In-App Controls kiểu Age Assurance. Có thể trích dẫn trang [safety.html](safety.html).

## Trước khi công khai

Mở `site-config.js` và kiểm tra:

- `contactEmail`: email hỗ trợ (ví dụ `kenn.bhl@gmail.com`)
- `developerName`: tên pháp lý của nhà phát triển (hiện là `Bui Trung Kien`)

## GitHub Pages

1. Đẩy repo này lên GitHub, nhánh công khai.
2. Vào Settings → Pages → Deploy from a branch → nhánh chính, thư mục `/` (root).
3. Sau khi Pages chạy, URL có dạng:

`https://<tài-khoản>.github.io/<tên-repo>/privacy.html`
`https://<tài-khoản>.github.io/<tên-repo>/support.html`

## Khi ứng dụng thay đổi cách xử lý dữ liệu

Cập nhật `privacy.html` trước khi bản ứng dụng mới phát hành: ngày hiệu lực mới, dữ liệu mới được thu thập, nhà cung cấp hạ tầng mới nếu có.
