# 🌟 Ứng Dụng Học Tập: Lịch Sử Thành Lập Đảng Cộng Sản Việt Nam

Một ứng dụng web tương tác được xây dựng bằng **Next.js** để học tập và khám phá lịch sử thành lập Đảng Cộng Sản Việt Nam một cách sinh động và hiệu quả.

---

## 📚 Giới Thiệu

Ứng dụng này được thiết kế nhằm cung cấp một trải nghiệm học tập toàn diện về lịch sử thành lập Đảng Cộng Sản Việt Nam thông qua:

- **Giao diện tương tác**: Sử dụng animations và hiệu ứng đẹp mắt
- **Nội dung phong phú**: Bao gồm 8 phần học tập chính với thông tin chi tiết
- **Trải nghiệm cá nhân hóa**: Cho phép người dùng học theo tiến độ riêng
- **Kiểm tra kiến thức**: Hệ thống quiz tương tác để đánh giá hiểu biết

---

## 🚀 Công Nghệ Sử Dụng

- **Framework**: Next.js 15.5.3 (React 19.1.0 + TypeScript)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.13
- **Icons**: Lucide React + React Icons
- **Build Tool**: Turbopack (Next.js)

---

## 📖 Các Phần Học Tập

### 1. 🏛️ Bối Cảnh Lịch Sử
Tìm hiểu về bối cảnh lịch sử trước khi Đảng ra đời, bao gồm tình hình chính trị, kinh tế, xã hội của Việt Nam đầu thế kỷ XX.

### 2. ⏰ Dòng Thời Gian Tương Tác
Khám phá hành trình hình thành Đảng qua các mốc thời gian quan trọng với giao diện timeline tương tác.

### 3. 👥 Quá Trình Thành Lập Đảng
Tìm hiểu chi tiết về quá trình thành lập Đảng Cộng sản Việt Nam, các tổ chức tiền thân và Hội nghị thống nhất.

### 4. 📜 Cương Lĩnh Chính Trị
Nghiên cứu cương lĩnh chính trị đầu tiên của Đảng và những định hướng chiến lược.

### 5. ⭐ Ý Nghĩa Lịch Sử
Hiểu rõ ý nghĩa lịch sử sâu sắc của việc thành lập Đảng đối với dân tộc Việt Nam.

### 6. 🎯 Tính Tất Yếu
Phân tích tính tất yếu của sự ra đời Đảng Cộng sản Việt Nam qua các yếu tố khách quan và chủ quan.

### 7. 🧠 Kiểm Tra Kiến Thức
Làm bài quiz tương tác để kiểm tra và củng cố hiểu biết về lịch sử thành lập Đảng.

### 8. ❤️ Chia Sẻ Cảm Nghĩ
Chia sẻ suy nghĩ và cảm nhận cá nhân về hành trình học tập.

---

## 🛠️ Tính Năng Nổi Bật

- **🎨 Giao diện hiện đại**: Thiết kế responsive với gradient backgrounds và glass morphism
- **⚡ Animations mượt mà**: Sử dụng Framer Motion cho trải nghiệm người dùng tuyệt vời
- **📱 Responsive Design**: Tối ưu cho mọi thiết bị từ mobile đến desktop
- **🎮 Tương tác cao**: Click, hover effects và transitions mượt mà
- **📊 Dashboard tổng quan**: Bảng điều khiển để điều hướng và theo dõi tiến độ
- **🔄 Auto-scroll**: Tự động cuộn đến đầu section khi chuyển trang
- **🎯 Navigation linh hoạt**: Dễ dàng di chuyển giữa các phần học tập

---

## 🔧 Cài Đặt và Chạy Dự Án

### Yêu cầu hệ thống
- Node.js 18.0 trở lên
- npm hoặc yarn

### Các bước cài đặt

```bash
# Clone repository
git clone <repository-url>

# Di chuyển vào thư mục dự án
cd HoChiMinh-ideology-asm

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Hoặc build cho production
npm run build
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

---

## 📁 Cấu Trúc Dự Án

```
src/
├── app/
│   └── page.tsx              # Main page với routing logic
├── components/
│   ├── LandingPage.tsx       # Trang chủ
│   ├── DashboardSection.tsx  # Bảng điều khiển
│   ├── HistoricalContextSection.tsx
│   ├── InteractiveTimelineSection.tsx
│   ├── PartyFormationSection.tsx
│   ├── PlatformSection.tsx
│   ├── HistoricalSignificanceSection.tsx
│   ├── InevitabilitySection.tsx
│   ├── QuizPage.tsx          # Trang quiz
│   └── SharingSection.tsx    # Trang chia sẻ
public/
└── images/                   # Hình ảnh và assets
```

---

## 👥 Đội Ngũ Phát Triển

**Nhóm 1 - VNR202**

| Thành viên | Mã số sinh viên |
|------------|----------------|
| Nguyễn Duy Hưng | SE184681 |
| Nguyễn Cong Trung | SE170145 |
| Lê Quang Huy | QE180084 |
| Nguyễn Minh Hiếu | SE182322 |
| Trương Văn Phát | SE172155 |

---

## 🎯 Mục Tiêu Học Tập

Ứng dụng này được thiết kế để giúp sinh viên:

- **Hiểu sâu** về lịch sử thành lập Đảng Cộng sản Việt Nam
- **Nắm vững** các mốc thời gian và sự kiện quan trọng
- **Phân tích** được tính tất yếu và ý nghĩa lịch sử
- **Phát triển** tư duy phản biện và khả năng tổng hợp thông tin
- **Tăng cường** lòng yêu nước và ý thức lịch sử dân tộc

---

## 📝 Ghi Chú

- Ứng dụng sử dụng Turbopack để tăng tốc độ build và development
- Tất cả nội dung được thiết kế phù hợp với chương trình học VNR202
- Giao diện được tối ưu cho trải nghiệm học tập tốt nhất

---

## 📞 Liên Hệ

Nếu có bất kỳ câu hỏi hoặc góp ý nào về dự án, vui lòng liên hệ với đội ngũ phát triển qua các kênh chính thức của trường.

---

*Dự án được phát triển với ❤️ bởi sinh viên FPT University*
