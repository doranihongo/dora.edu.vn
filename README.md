# DORA Education — Website doanh nghiệp (tài liệu bàn giao)

Tài liệu này dành cho người tiếp nhận dự án. Đọc **mục 1 và mục 2** là đủ để đưa website lên tên miền; các mục sau để làm tiếp và bảo trì.

- **Cập nhật lần cuối:** 06/11/2026
- **Loại dự án:** website tĩnh (HTML + CSS + JavaScript thuần), **không cần build, không cần server, không có thư viện phụ thuộc**
- **Ngôn ngữ trang:** tiếng Việt (`lang="vi"`)
- **Dung lượng:** ~1,3 MB (17 ảnh WebP + logo + 3 file code)
- **Mã nguồn trên GitHub:** https://github.com/doranihongoedu/dora-corporate-website (công khai)

---

## 1. Tóm tắt nhanh

| Câu hỏi | Trả lời |
|---|---|
| Đây là gì? | Website giới thiệu công ty **DORA Education Technology** (giới thiệu, sản phẩm, hành trình, đội ngũ, cảm nhận, tuyển dụng, liên hệ). |
| Làm từ đâu ra? | Chuyển từ thiết kế **DORA Education Corporate Website** trên Claude Design sang web thật, giữ nguyên bố cục và nội dung. Sau đó bổ sung bản hiển thị cho iPad và điện thoại. |
| Mở xem thế nào? | Mở file `index.html` bằng Chrome, hoặc chạy `python3 -m http.server 8000` trong thư mục này rồi vào `http://localhost:8000`. |
| Đưa lên tên miền thế nào? | Tải **cả thư mục này** lên một dịch vụ lưu trữ tĩnh (Netlify, Cloudflare Pages, GitHub Pages…) rồi trỏ DNS tên miền về đó. Xem **mục 2**. |
| Có cần cài đặt/biên dịch không? | **Không.** `index.html` nằm ở thư mục gốc, mọi đường dẫn đều là đường dẫn tương đối. |
| Còn thiếu gì? | Form liên hệ chưa gửi đi đâu, 2 ô ảnh trống ở dải ảnh, link Instagram/YouTube, favicon, thẻ SEO. Xem **mục 9**. |

---

## 2. Đưa website lên tên miền

Website là tập hợp file tĩnh nên **chỉ cần**: (1) tải thư mục lên một nơi lưu trữ, (2) trỏ tên miền về đó. Không cần cấu hình riêng nào khác.

### Trước khi tải lên

- Thư mục cần tải là **thư mục chứa `index.html`**.
- Nên **không kéo theo** `README.md` và `.DS_Store` (file hệ thống của macOS). Nếu để lại, `README.md` sẽ truy cập được công khai tại `tên-miền/README.md`. Khi triển khai trực tiếp từ GitHub (bên dưới), `README.md` nằm trong thư mục xuất bản nên cũng sẽ truy cập được công khai; muốn tránh thì xoá file này trong bản dùng để triển khai.

### Cách khuyến nghị: Netlify (kéo thả, miễn phí)

1. Tạo tài khoản Netlify, chọn **Add new site → Deploy manually**, kéo thả thư mục dự án vào.
2. Vào **Domain management → Add a domain**, nhập tên miền (ví dụ `doracareers.vn`).
3. Làm theo hướng dẫn DNS ở bảng bên dưới. HTTPS (khoá xanh) được bật tự động sau khi DNS có hiệu lực.

Muốn cập nhật nội dung sau này: tải lại thư mục (hoặc dùng Git, xem Cloudflare/GitHub bên dưới).

### Triển khai thẳng từ GitHub (dành cho người nhận dự án)

Mã nguồn công khai tại **https://github.com/doranihongoedu/dora-corporate-website**. Mỗi người tự triển khai bản của mình bằng tài khoản của họ.

- **Lấy mã về máy:**
  ```bash
  git clone https://github.com/doranihongoedu/dora-corporate-website.git
  ```
  hoặc bấm **Code → Download ZIP** trên trang GitHub.
- **Netlify:** mở https://app.netlify.com/start/deploy?repository=https://github.com/doranihongoedu/dora-corporate-website, đăng nhập và làm theo; sau đó thêm tên miền ở **Domain management**.
- **Vercel:** mở https://vercel.com/new/clone?repository-url=https://github.com/doranihongoedu/dora-corporate-website, để trống Build Command và Output Directory.
- **Cloudflare Pages:** **Create project → Connect to Git** → chọn repository; Build command để trống, thư mục đầu ra là thư mục gốc.
- **GitHub Pages:** vào **Settings → Pages**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`. Trang sẽ ở dạng `https://<tên-tài-khoản>.github.io/<tên-repo>/` (đường dẫn trong dự án là tương đối nên chạy được ở đường dẫn phụ này), có thể gắn tên miền riêng ở cùng màn hình.

Các liên kết trên chỉ mở quy trình của từng nền tảng; tên mục menu có thể thay đổi theo thời gian.

### Các lựa chọn khác (đều chạy được với dự án này)

| Dịch vụ | Cách làm | Ghi chú |
|---|---|---|
| **Cloudflare Pages** | Tạo project Pages → **Upload assets** → kéo thả thư mục → thêm **Custom domain**. | Nếu tên miền đã dùng DNS của Cloudflare thì tự cấu hình. |
| **GitHub Pages** | Đưa thư mục lên một repository, bật Pages cho nhánh chính, thư mục gốc `/`, rồi nhập tên miền ở mục Custom domain. | Cần tài khoản GitHub; repo công khai nếu dùng gói miễn phí. |
| **Vercel** | Import project (Framework: **Other**), **không cần Build Command**, **Output Directory** để trống hoặc `.`. | |
| **Hosting thông thường (cPanel…)** | Tải **nội dung bên trong** thư mục (không phải chính thư mục) vào `public_html`. `index.html` phải nằm ngay trong `public_html`. | Bật AutoSSL/Let's Encrypt để có HTTPS. |

Tên các mục menu trên từng dịch vụ có thể thay đổi theo thời gian; nguyên tắc luôn là: **không build, thư mục xuất bản là thư mục gốc**.

### Trỏ DNS

Dịch vụ lưu trữ sẽ hiển thị chính xác giá trị cần nhập. Luôn dùng giá trị mà dịch vụ đó cho bạn, không dùng giá trị trong tài liệu cũ.

| Tên miền | Loại bản ghi | Giá trị |
|---|---|---|
| Tên miền gốc, ví dụ `doracareers.vn` | `A`, hoặc `ALIAS` / `ANAME` / `CNAME flattening` tuỳ nhà cung cấp DNS | Do dịch vụ lưu trữ cung cấp |
| `www.doracareers.vn` | `CNAME` | Do dịch vụ lưu trữ cung cấp |

- Nên chọn **một** dạng làm chính (có `www` hoặc không `www`) và đặt chuyển hướng dạng còn lại về dạng đó (Netlify, Cloudflare, Vercel đều có sẵn tuỳ chọn này).
- DNS có thể mất từ vài phút đến 48 giờ để có hiệu lực.

### Kiểm tra sau khi lên mạng

- [ ] Tên miền mở được, có khoá HTTPS, cả dạng có và không có `www`.
- [ ] Logo, 17 ảnh và font chữ hiển thị đủ (font tải từ Google Fonts nên cần có mạng).
- [ ] Các mục cuộn đúng khi bấm menu; nút "Cơ hội nghề nghiệp" cuộn tới mục Tuyển dụng.
- [ ] Mở trên điện thoại thật (iPhone và Android) và iPad: menu ba gạch mở/đóng được, không có thanh cuộn ngang.
- [ ] Nút Facebook mở đúng trang `https://www.facebook.com/doracareers`.
- [ ] Sau khi cập nhật file, nhớ **tải lại cứng** (Cmd/Ctrl + Shift + R) vì trình duyệt giữ bộ nhớ đệm CSS/JS.

---

## 3. Nguồn gốc và bản sao lưu

- **Thiết kế gốc (Claude Design):** https://claude.ai/design/p/87039d61-7474-4ec0-8044-d0ed55ce3646 (file chính `DORA Corporate Site.dc.html`). Cần đăng nhập tài khoản đã tạo thiết kế.
- **Lưu ý quan trọng:** Claude Design bản độc lập thông báo **đóng cửa ngày 14/12/2026**. Hãy giữ bản sao lưu dưới đây hoặc chuyển dự án sang Claude theo thông báo trong ứng dụng.
- **Bản sao lưu toàn bộ thiết kế:** file `dora-project-files.zip` (~27 MB) trong thư mục Downloads của người làm dự án gồm: file thiết kế `.dc.html`, bộ design system (màu, font, khoảng cách), ảnh gốc, logo gốc (19320×7120 px) và ảnh tham khảo. **Nên gửi kèm file này khi bàn giao.**
- **Nguồn dữ liệu thật của website hiện tại là các file trong thư mục này**, không phải file thiết kế. Thiết kế chỉ để đối chiếu.

---

## 4. Cấu trúc thư mục

```
.
├── index.html            Toàn bộ nội dung và bố cục (style inline lấy từ thiết kế)
├── css/
│   └── styles.css        Token màu/font/khoảng cách, style trang, hover, thành phần, responsive
├── js/
│   └── main.js           Hiện dần khi cuộn, đếm số, nút cuộn, menu điện thoại, đo chiều cao banner
├── assets/
│   ├── logo-dora.png     Logo (đã thu còn 1000 px rộng, ~50 KB; bản gốc 2,5 MB nằm trong file zip)
│   └── images/           17 ảnh WebP
│       ├── hero-team-shot.webp, story-photo.webp, culture-team-photo.webp
│       ├── lead-1..4.webp            Ảnh 4 thành viên lãnh đạo (ảnh thật)
│       └── moment-1..6.webp, moment-1b..4b.webp   Ảnh dải "Cùng nhau. Có khoảnh khắc"
├── .gitignore            Bỏ qua .DS_Store
└── README.md             Tài liệu này
```

---

## 5. Các mục của trang (theo thứ tự trên trang)

| Mục | Anchor (`id`) | Nội dung chính |
|---|---|---|
| Banner xanh | — | "Trở thành một mảnh ghép. Bắt đầu tại đây →" (bấm tới `#careers`) |
| Thanh menu cố định | `site-nav` | Giới thiệu, Sản phẩm, Hành trình, Đội ngũ, Tuyển dụng, Liên hệ + nút "Cơ hội nghề nghiệp" |
| Hero | — | Tiêu đề "Bình dân hoá học ngoại ngữ bằng Công nghệ 4.0", 2 nút, ảnh đội ngũ |
| Số liệu | — | 5+ năm phát triển, 120K+ học viên tin tưởng, 98% điểm hài lòng (đếm số khi cuộn tới) |
| Giá trị cốt lõi | — | DORA = Deliver, Optimize, Rise, Achieve (4 thẻ) |
| 01 Câu chuyện | `story` | Giới thiệu + ảnh + thẻ trắng "5+ năm" |
| 02 Chúng tôi làm gì | `ecosystem` | 6 thẻ sản phẩm/hệ sinh thái |
| 03 Sứ mệnh & Tầm nhìn | `culture` | Sứ mệnh + ảnh + thẻ trắng "2030" |
| 04 Cột mốc | `milestones` | Dòng thời gian 2021 → 2025 |
| 05 Đội ngũ lãnh đạo | `leadership` | 4 thẻ ảnh, rê chuột/chạm hiện slogan |
| 06 Chia sẻ cảm nhận | — | 3 thẻ cảm nhận |
| 07 Kết nối gần hơn | — | Dải ảnh chạy ngang (marquee) |
| 08 Tuyển dụng | `careers` | 5 vị trí mở/đóng được (`<details>`) + 2 nút |
| 09 Liên hệ | `contact` | Thông tin liên hệ + form |
| Chân trang | — | Thông tin công ty, liên kết nhanh, liên hệ |

---

## 6. Cách trang hoạt động (kỹ thuật)

**HTML / CSS**
- Phần lớn style nằm **inline** trong `index.html` (nguyên văn từ thiết kế). Đây là lý do mọi quy tắc responsive phải dùng `!important` (xem mục 7).
- `css/styles.css` gồm, theo thứ tự: token màu → token font → khoảng cách → hiệu ứng → style nền → style trang (ghi đè sang giao diện sáng) → hiệu ứng hover (`.hv0` … `.hv11`) → thành phần (`.ds-btn`, `.ds-badge`, `.ds-input`) → khung ảnh (`.image-slot`) → responsive.
- **Màu chính:** xanh `#2563EB` (nút, nhãn, viền), nền trang `#F7F9FC`, chữ `#0B1220`, chữ phụ `#4B5670`, viền `#DCE3EE`, banner `#004CFF`, thanh menu `#E1F1FF`.
- **Font:** Inter cho tiêu đề (khai báo inline), Plus Jakarta Sans cho nội dung (`--font-sans`), JetBrains Mono có tải nhưng chưa dùng. Cả ba tải từ Google Fonts.
- **Biểu tượng:** SVG sprite đặt đầu `<body>` (`<symbol id="i-…">`), gọi bằng `<use href="#i-…">`.
- **Khung ảnh:** `div.image-slot > div.image-slot__frame > img` với `object-fit: cover`. Ba ảnh có zoom/dịch riêng (inline `transform`): `hero-team-shot`, `moment-2`, `moment-6`. Hai ô `moment-5b`, `moment-6b` chưa có ảnh (xem mục 9).
- Dải ảnh chạy ngang dùng animation CSS `dora-marquee` (32 giây, dịch sang trái 50% rồi lặp lại) và dừng khi rê chuột. Dải có 12 ô: `moment-1..6` và `moment-1b..6b`. Thiết kế chủ ý để nửa sau là bản sao của nửa đầu cho vòng lặp liền mạch, nhưng hiện `moment-1b..4b` đang là ảnh **khác** `moment-1..4` và `moment-5b`, `moment-6b` còn trống, nên điểm lặp bị nhảy hình (xem mục 9).

**JavaScript (`js/main.js`, 5 khối độc lập)**
1. **Hiện dần khi cuộn:** phần tử có `data-reveal` (kèm `data-reveal-delay`) hiện dần và trượt lên; khi hiện xong được gắn class `is-visible`.
2. **Đếm số:** phần tử `data-count` đếm từ 0 khi cuộn tới (5+, 120K+, 98%).
3. **Nút cuộn:** phần tử `data-scroll-to="id"` cuộn mượt tới mục có `id` đó.
4. **Menu điện thoại/iPad:** nút `.site-header__toggle` mở/đóng `#site-nav`; đóng khi chọn mục, bấm ra ngoài, nhấn Esc hoặc khi màn hình rộng hơn 900px.
5. **Đo banner:** ghi chiều cao banner vào biến CSS `--banner-h` để căn giữa nội dung thanh menu ở phần còn nhìn thấy trên điện thoại/iPad.

---

## 7. Responsive

| Dải màn hình | Áp dụng cho | Ghi chú |
|---|---|---|
| **> 900px** | Máy tính, iPad nằm ngang | **Giữ nguyên 100% thiết kế gốc.** Không có quy tắc responsive nào chạm tới dải này. |
| **≤ 900px** | iPad đứng, máy tính bảng | Menu ba gạch, lưới 2 cột, các mục 2 cột chuyển thành 1 cột. |
| **≤ 640px** | Điện thoại | Bố cục 1 cột, chữ nhỏ hơn, các tinh chỉnh riêng bên dưới. |
| **≤ 359px** | Điện thoại rất hẹp | Ẩn nút "Cơ hội nghề nghiệp" trên thanh menu (vẫn có mục "Tuyển dụng" trong menu). |

Quy tắc nằm cuối `css/styles.css`, trong ba khối `@media`. Cách làm: thêm **class** vào phần tử trong `index.html` rồi ghi đè kiểu inline bằng `!important` trong `@media`. Một số biến khoảng cách/cỡ chữ (`--section-padding-y`, `--space-8`, `--space-16`, `--text-h2`, `--text-h4`, `--text-body`) cũng được đổi trong từng khối.

**Các class dùng cho responsive**

| Class | Phần tử |
|---|---|
| `site-banner`, `site-header`, `site-header__inner`, `site-header__logo`, `site-header__cta`, `site-header__toggle`, `site-nav` | Banner, thanh menu, logo, nút CTA, nút ba gạch, danh sách menu |
| `hero`, `hero__title`, `hero__lead`, `hero__actions`, `hero__btn` | Khối đầu trang, tiêu đề, đoạn mô tả, hàng nút, từng nút |
| `br-phone`, `br-desktop` | Xuống dòng riêng cho tiêu đề hero (chỉ điện thoại / chỉ desktop+iPad) |
| `stats` | Hàng số liệu |
| `grid-4`, `grid-3`, `timeline`, `timeline__line`, `team-grid`, `quote-grid`, `split`, `split--contact`, `footer-grid` | Các lưới và bố cục 2 cột |
| `float-card`, `h2--md`, `section-label`, `contact__title` | Thẻ trắng nổi trên ảnh, tiêu đề 32px, nhãn "01 –…", tiêu đề liên hệ |
| `team-meta`, `team-quote`, `team-quote__text`, `team-quote__author` | Tên/chức danh và khung slogan của lãnh đạo |
| `careers__title`, `careers__lead`, `careers__br`, `cta-row` | Tiêu đề, đoạn giới thiệu, xuống dòng và hàng nút của mục Tuyển dụng |

**Các tinh chỉnh riêng cho điện thoại (đã chốt với chủ dự án)**
- Hai nút hero nhỏ hơn 20% (rộng 240px, chữ 12,8px) và căn giữa. Không dùng `zoom` vì làm lệch căn giữa trên điện thoại.
- Tiêu đề hero cỡ 28px, đúng 3 dòng: "Bình dân hoá / học ngoại ngữ bằng / Công nghệ 4.0".
- Slogan lãnh đạo: chỉ còn câu slogan (ẩn dòng tên), khung chiếm chưa tới nửa ảnh.
- Đoạn "Chúng tôi tìm những cộng sự…" luôn đúng 3 dòng.
- Thẻ trắng "5+ năm" và "2030": mép dưới ảnh cắt đúng giữa thẻ (nửa trên/nửa dưới bằng nhau); mục "Sứ mệnh" chừa thêm khoảng trống để đường kẻ phía dưới không bị che; thẻ trắng trượt lên 64px (desktop và iPad: 24px).
- Các nhãn "01 –", "03 –", "09 –" và tiêu đề lớn bên dưới được căn giữa như mục 02; đoạn văn vẫn căn trái.
- Hàng số liệu thành 3 cột đều, số ở trên, nhãn ở dưới.
- Thanh menu: logo, nút CTA và nút ba gạch căn giữa theo chiều dọc trong phần không bị banner che.

---

## 8. Khác biệt cố ý so với thiết kế gốc

Để website giống bản chạy trong Claude Design, những điểm dưới đây là **chủ ý** (do yêu cầu hoặc do bản gốc chưa hoàn chỉnh):

1. **Ô nhập form:** viền khi bấm vào là **xanh** (thiết kế gốc là hồng).
2. **Ảnh lãnh đạo:** 4 ảnh chân dung là **ảnh thật** (Nguyễn Phương Nhi, Vũ Thế Đạt, Nguyễn Phương Hoa, Vũ Hồng Nhung), thay cho ảnh mẫu trong thiết kế.
3. **Nhãn số liệu:** "HỌC VIÊN" đổi thành "HỌC VIÊN TIN TƯỞNG" (2 dòng).
4. **Nút Facebook:** dẫn tới `https://www.facebook.com/doracareers`, mở tab mới (ở mục Liên hệ và chân trang).
5. **Nút cuộn:** "Tìm hiểu về chúng tôi" cuộn tới `#culture`; "Một. Hai. Apply" và "Cơ hội nghề nghiệp" cuộn tới `#careers`. Các lệnh này có trong thiết kế nhưng Claude Design không chạy, nay đã hoạt động.
6. **Logo:** thu nhỏ còn 1000 px rộng, hiển thị giống hệt.
7. **Màu chữ nhãn "DORA EDUCATION TECHNOLOGY":** thiết kế khai báo màu `#0044CC` nhưng bản chạy thực tế không áp dụng; website theo **bản chạy thực tế** (màu chữ phụ `#4B5670`).
8. **Bổ sung kỹ thuật (không đổi giao diện):** thẻ `<title>`, `lang="vi"`, văn bản `alt` cho ảnh, và toàn bộ phần responsive iPad/điện thoại.

---

## 9. Việc còn dang dở / cần quyết định

**Nên làm trước khi công bố**

- [ ] **Dải ảnh "Cùng nhau. Có khoảnh khắc":** 2 ô `moment-5b`, `moment-6b` đang trống, hiển thị khung nét đứt kèm chữ "Ảnh đội ngũ DORA / or browse files" (giống thiết kế gốc, chưa có ảnh). Cần thay bằng ảnh thật: thay phần `image-slot__empty` trong `index.html` bằng thẻ `<img>` giống các ô còn lại. Để dải **lặp liền mạch**, mỗi cặp phải dùng cùng một ảnh (`moment-1` = `moment-1b`, …, `moment-6` = `moment-6b`); hiện `moment-1b..4b` là ảnh khác nên khi hết vòng dải bị nhảy hình.
- [ ] **Form liên hệ chưa gửi đi đâu:** chưa có thẻ `<form>`, nút "Gửi lời nhắn" chưa có hành động. Cần nối với dịch vụ nhận form (Formspree, Google Forms, Netlify Forms, hoặc email/API riêng) và hiển thị thông báo gửi thành công.
- [ ] **Nút "Xem tất cả vị trí"** (mục Tuyển dụng) chưa có link đích.
- [ ] **Link Instagram và YouTube** (mục Liên hệ và chân trang) đang là `#`. Cần link thật hoặc gỡ icon.
- [ ] **Rà soát nội dung do thiết kế cung cấp:** số liệu (5+ năm, 120K+, 98%), tên và chức danh trong phần cảm nhận (Minh T., Hà L., Hiền M.), 5 vị trí tuyển dụng và mức lương, email/điện thoại/địa chỉ. Nội dung đang giữ **nguyên văn** theo yêu cầu "không thay đổi", chưa được xác nhận độ chính xác.
- [ ] **Lỗi chính tả trong nội dung gốc (đang giữ nguyên, nên sửa):** "cho **tối tác** Doanh nghiệp" (thẻ B2B Edtech, → "đối tác"); "cảm hứng lớn của **Doulingo**" (→ "Duolingo"); "**Mội** trường làm việc trẻ" (phần cảm nhận, → "Môi").

**Nên bổ sung**

- [ ] Favicon (hiện chưa có), thẻ `<meta name="description">`, ảnh chia sẻ mạng xã hội (Open Graph).
- [ ] Mã theo dõi (Google Analytics / Meta Pixel) nếu cần; trang chính sách quyền riêng tư; thông báo cookie nếu dùng theo dõi.
- [ ] Xoá file `.DS_Store` khỏi thư mục.
- [ ] Kiểm tra trên **thiết bị thật** (iPhone, iPad, Android) và Safari/Firefox/Edge. Dự án mới được kiểm tra bằng trình duyệt giả lập kích thước, chưa thử trên máy thật.
- [ ] Nếu cập nhật file thường xuyên: thêm `?v=2` (tăng dần) sau tên file CSS/JS trong `index.html` để tránh trình duyệt giữ bản cũ.

---

## 10. Hướng dẫn làm tiếp

1. **Sửa trực tiếp trong repository này** (nhánh `main`), rồi commit và push như bình thường; các nền tảng ở mục 2 sẽ tự triển khai lại nếu đã nối với repository. **Không tạo lại website từ file thiết kế Claude Design:** làm vậy sẽ mất toàn bộ phần responsive và các chỉnh sửa ở mục 8.
2. **Xem thử tại máy:** `python3 -m http.server 8000` trong thư mục dự án, mở `http://localhost:8000`. Sau mỗi lần sửa, tải lại cứng (Cmd/Ctrl + Shift + R).
3. **Sửa chữ:** sửa trực tiếp trong `index.html`.
4. **Thay ảnh:** thay file trong `assets/images/` **giữ nguyên tên**. Ảnh có sẵn zoom/dịch (hero, `moment-2`, `moment-6`) giữ giá trị `transform` inline; xoá phần đó nếu muốn hiển thị ảnh mới nguyên khung.
5. **Sửa giao diện điện thoại/iPad:** thêm class vào phần tử rồi ghi quy tắc có `!important` vào khối `@media` tương ứng ở cuối `css/styles.css`. Quy tắc không có `!important` sẽ bị style inline đè.
6. **Đừng sửa phần > 900px** nếu không có chủ đích: đó là bản đã đối chiếu với thiết kế gốc.
7. **Khi có thay đổi lớn:** kiểm tra ở các độ rộng 320, 375, 414, 640, 641, 768, 900, 901, 1024, 1440 px (Chrome DevTools: Cmd/Ctrl + Shift + M), đảm bảo không có thanh cuộn ngang.

---

## 11. Kiểm thử đã thực hiện

**Đã làm (trình duyệt giả lập kích thước)**
- **Đối chiếu với thiết kế gốc khi chuyển đổi:** so từng phần tử (vị trí, kích thước, màu, font, bo góc, đổ bóng) giữa bản chạy của thiết kế và website ở 1440, 1024 và 901 px: **489/489 phần tử khớp**, chiều cao trang bằng nhau (8868, 9452, 10793 px). Vùng cắt/zoom của 17 ảnh khớp trong 0,012 px. 12 hiệu ứng hover khớp từng chữ.
- **Sau mỗi lần thêm responsive hoặc chỉnh điện thoại:** so lại bản trước và bản sau ở 641, 768, 900, 901, 1440 px: **0 khác biệt** về vị trí và style; các dòng chữ ngắt giống hệt.
- **Tràn ngang:** đo 13 độ rộng từ 320 đến 900 px: không còn thanh cuộn ngang.
- **Điện thoại:** đo nút, tiêu đề, slogan, đoạn tuyển dụng, thẻ trắng, nhãn căn giữa ở 8 độ rộng từ 320 đến 640 px.
- Console không có lỗi. Menu ba gạch, cuộn tới mục, gõ vào ô nhập, mở/đóng vị trí tuyển dụng đều hoạt động.

**Chưa làm**
- Thiết bị thật; Safari/Firefox (chỉ kiểm thử bằng Chrome); kiểm thử tốc độ (Lighthouse); kiểm thử khả năng truy cập.

---

## 12. Thông tin doanh nghiệp đang hiển thị trên website

- **Tên:** DORA EDUCATION TECHNOLOGY COMPANY LIMITED — Công ty TNHH Công Nghệ Giáo Dục DORA
- **Mã số thuế:** 0111552038
- **Địa chỉ:** Số 6, Phố Dịch Vọng, Phường Cầu Giấy, TP Hà Nội, Việt Nam
- **Điện thoại:** 0332 660 529
- **Email:** dora.nihongo.edu@gmail.com
- **Facebook:** https://www.facebook.com/doracareers

---

## 13. Hỗ trợ trình duyệt

Nhắm tới trình duyệt hiện đại (Chrome, Edge, Safari, Firefox bản mới trong vài năm gần đây). Các tính năng CSS/JS được dùng: `IntersectionObserver`, `aspect-ratio`, `inset`, `backdrop-filter`, `color-mix()`, thuộc tính `translate`, `text-wrap: balance`, và CSS `zoom` (chỉ cho 2 nút hero trên desktop/iPad, theo thiết kế). Trình duyệt quá cũ (ví dụ Safari trước 16.2) có thể mất một số màu nền hover/biểu tượng (`color-mix`) và việc cân đều dòng chữ (`text-wrap: balance`) nhưng bố cục không vỡ.
