# NÔNG DÂN SỐ | Hồ Sơ Đề Án & Chương Trình Truyền Hình VTV

Website giới thiệu chính thức hồ sơ đề án, format và cơ hội đồng hành tài trợ của chương trình truyền hình thực tế **NÔNG DÂN SỐ**.

* **Khẩu hiệu:** *"Công nghệ đồng hành – Nông dân vươn xa"*
* **Đơn vị sản xuất:** Công ty Cổ phần Công nghệ Truyền hình Sài Gòn Phim
* **Đơn vị phát sóng:** Đài Truyền hình Việt Nam (VTV)
* **Website chính thức:** [truyenhinhnongnghiep.vn](http://truyenhinhnongnghiep.vn)
* **Lịch phát sóng dự kiến:** Chủ nhật hằng tuần • 15 phút/tập • 52 tập/năm

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
information/
├── index.html                 # Trang web chính (Single Page Presentation)
├── assets/
│   ├── js/
│   │   └── app.js             # Logic xử lý tương tác, trình chiếu, Dark/Light mode, cuộn trang
│   ├── slides/                # Trọn bộ 25 slide hồ sơ đề án độ nét cao (slide_01.jpg -> slide_25.jpg)
│   ├── images/                # Logo Nông Dân Số trong suốt và tài nguyên đồ họa
│   └── NONG_DAN_SO.pdf        # Hồ sơ đề án bản PDF gốc (74MB)
└── README.md                  # Tài liệu hướng dẫn dự án
```

---

## ✨ Tính Năng Nổi Bật

1. **Trình Chiếu Slide Trực Quan (Interactive Hero Carousel):**
   * Hiển thị slide 16:9 sắc nét ngay đầu trang cùng dải thumbnail cuộn ngang 25 slide.
   * Chuyển slide bằng nút bấm, click thumbnail, hoặc phím mũi tên bàn phím (`←` / `→`).

2. **Chế Độ Phóng To Toàn Màn Hình (Fullscreen Lightbox):**
   * Bấm vào bất kỳ slide nào để mở chế độ rạp chiếu phóng to.
   * Hỗ trợ phím tắt (`Escape` để đóng, `ArrowLeft` / `ArrowRight` để duyệt).
   * Tích hợp nút tải về ảnh slide chất lượng cao tương ứng.

3. **Chế Độ Sáng / Tối (Dark & Light Mode):**
   * Nút chuyển đổi nhanh trên thanh điều hướng với biểu tượng Mặt trời / Mặt trăng.
   * Giao diện Light Mode tinh chỉnh riêng cho độ tương phản cao, dịu mắt.
   * Tự động lưu và đồng bộ tùy chọn của người dùng qua `localStorage`.

4. **Nút Cuộn Lên Đầu Trang (Scroll to Top):**
   * Nút nổi (Floating button) tự động xuất hiện khi cuộn qua 300px.
   * Cuộn êm ái (`smooth scroll`) về đỉnh trang chỉ với một chạm.

5. **Bộ Lọc Danh Mục Đề Án Thông Minh:**
   * Thanh danh mục dính (`sticky`) cho phép nhảy nhanh đến 9 chuyên mục chính:
     1. Bìa & Bối cảnh (Slide 1–2)
     2. Mục tiêu chiến lược (Slide 3)
     3. Định dạng format & Đơn vị sản xuất (Slide 4–5)
     4. Điểm khác biệt & Công nghệ 3D/AI (Slide 6–9)
     5. Hệ sinh thái & Khán giả mục tiêu (Slide 10–13)
     6. Lợi ích doanh nghiệp đồng hành (Slide 14–16)
     7. Các gói tài trợ trọng tâm (Slide 17–21)
     8. 8 hình thức tài trợ linh hoạt (Slide 22–23)
     9. Cam kết pháp lý & Thông tin liên hệ (Slide 24–25)

6. **Các Gói Tài Trợ & Form Đăng Ký Trực Tuyến:**
   * Trực quan hóa gói **Danh Xưng (Title Sponsor - Từ 2 tỷ)**, **Kim Cương (~1,5 tỷ)**, **Vàng & Bạc**, **Đồng hành theo tập**.
   * Bấm nút *"Đăng Ký Gói Danh Xưng"* tự động cuộn và chọn sẵn gói trong form đăng ký.
   * Form thu thập thông tin doanh nghiệp với thông báo xác nhận trực quan.

7. **Chuẩn Hóa Mã Nguồn & Trợ Năng (Accessibility):**
   * Đạt chuẩn xác thực **HTML-Validate (0 lỗi, 0 cảnh báo)**.
   * Đầy đủ nhãn `aria-label`, phím tắt thân thiện với người dùng.

---

## 🚀 Hướng Dẫn Khởi Chạy

Dự án là ứng dụng web tĩnh, không yêu cầu cài đặt môi trường phức tạp hay build tool. Bạn có thể chạy theo một trong các cách sau:

### Cách 1: Sử dụng Python HTTP Server *(Khuyên dùng)*
Mở Terminal tại thư mục dự án và chạy:
```bash
python3 -m http.server 8000
```
Sau đó truy cập: [http://localhost:8000](http://localhost:8000)

### Cách 2: Sử dụng Node.js (`npx`)
```bash
npx serve .
# hoặc
npx http-server -p 8000
```

### Cách 3: Mở trực tiếp trên macOS
```bash
open index.html
```

---

## 🛠️ Công Nghệ Sử Dụng

* **Ngôn ngữ:** HTML5 Semantic, CSS3, Modern JavaScript (ES6+).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN Play).
* **Biểu tượng:** [Lucide Icons](https://lucide.dev/).
* **Typography:** [Google Fonts - Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro).

---

## 📞 Thông Tin Liên Hệ & Bản Quyền

* **Đơn vị sản xuất:** Công ty Cổ phần Công nghệ Truyền hình Sài Gòn Phim
* **Địa chỉ:** 1/5E1, Ngô Tất Tố, Phường Thạnh Mỹ Tây, TP. Hồ Chí Minh
* **Đại diện Ban Tổ Chức:** Ông Nguyễn Văn Chung
* **Hotline:** [0918.995.991](tel:0918995991)
* **Email:** [truyenhinhnongnghiepvn@gmail.com](mailto:truyenhinhnongnghiepvn@gmail.com)
* **Bản quyền:** © 2026 NÔNG DÂN SỐ • Đài Truyền hình Việt Nam (VTV) & Sài Gòn Phim.
