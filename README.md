# เกมควิซภาษาญี่ปุ่น 🎌

Web Application เกมควิซเกี่ยวกับภาษาญี่ปุ่น (UI เป็นภาษาไทย, โทนสีเชยๆ) พัฒนาด้วย Node.js, Express, MongoDB และ EJS

## 🚀 เทคโนโลジีที่ใช้

- **Node.js** - JavaScript Runtime
- **Express** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM สำหรับ MongoDB
- **EJS** - Template Engine
- **MVC Pattern** - โครงสร้างแบบ Model-View-Controller

## 📁 โครงสร้างโปรเจค

```
project/
│
├── controllers/
│   └── surveyController.js      # จัดการ logic ทั้งหมด (แสดงหน้า, บันทึกข้อมูล)
│
├── models/
│   └── Survey.js                # Schema สำหรับเก็บข้อมูลแบบสอบถาม
│
├── routes/
│   └── surveyRoutes.js          # กำหนด routes ทั้งหมด
│
├── views/
│   ├── index.ejs                # หน้าแรก (ธีมญี่ปุ่น + animation)
│   ├── survey.ejs               # หน้าแบบสอบถาม
│   ├── game.ejs                 # หน้าเกม Quiz
│   └── result.ejs               # หน้าแสดงผลคะแนน
│
├── public/
│   └── css/
│       └── style.css            # CSS เพิ่มเติม
│
├── .env                         # ตั้งค่า environment variables
├── index.js                     # Entry point ของแอป
└── package.json                 # Dependencies
```

## 🎯 ฟีเจอร์หลัก

### 1. หน้าแรก (/)
- ธีมญี่ปุ่นพร้อม animation กลีบซากุระ
- ปุ่มเริ่มเกมที่สวยงาม
- Responsive design

### 2. หน้าแบบสอบถาม (/survey)
- ฟอร์มเก็บข้อมูล:
  - ชื่อ-นามสกุล
  - กลุ่มผู้ใช้ (นักเรียน/นักศึกษา หรือ บุคคลทั่วไป)
  - ชื่อโรงเรียน/สถาบัน (แสดงเฉพาะนักเรียน/นักศึกษา)
  - การใช้ภาษาญี่ปุ่นในการทำงาน
  - เบอร์โทรศัพท์
- Validation ฝั่ง client
- บันทึกข้อมูลลง MongoDB

### 3. หน้าเกม (/game)
- Quiz 5 ข้อเกี่ยวกับภาษาญี่ปุ่น
- Progress bar แสดงความคืบหน้า
- เลือกคำตอบได้ทีละข้อ
- สามารถย้อนกลับแก้ไขคำตอบได้
- คำนวณคะแนนฝั่ง client

### 4. หน้าผลลัพธ์ (/result)
- แสดงคะแนนที่ได้
- แสดงเปอร์เซ็นต์
- วิเคราะห์ผลคะแนน:
  - 80%+ = ยอดเยี่ยม 🎉
  - 60-79% = ดีมาก 👍
  - <60% = ควรฝึกเพิ่ม 💪
- ปุ่มกลับหน้าแรก

## 📦 การติดตั้ง

1. Clone โปรเจค
```bash
git clone <repository-url>
cd project
```

2. ติดตั้ง dependencies
```bash
npm install
```

3. ตั้งค่า .env
```env
PORT=3000
DB_URL=mongodb://localhost:27017/japanese-quiz
```

4. เริ่ม MongoDB
```bash
mongod
```

5. รันแอปพลิเคชัน
```bash
npm start
# หรือใช้ nodemon สำหรับ development
npm run dev
```

6. เปิดเบราว์เซอร์ที่ `http://localhost:3000`

## 🗄️ Database Schema

### Survey Model
```javascript
{
  fullname: String (required),
  group: String (required),
  school: String,
  useJapanese: String (required),
  phone: String (required),
  createdAt: Date (default: now)
}
```

## 📝 คำอธิบายไฟล์สำคัญ

### index.js
- Entry point ของแอปพลิเคชัน
- เชื่อมต่อ MongoDB
- ตั้งค่า middleware (express.urlencoded, express.json)
- ตั้งค่า view engine (EJS)
- เชื่อม routes

### controllers/surveyController.js
- `getIndex()` - แสดงหน้าแรก
- `getSurvey()` - แสดงหน้าแบบสอบถาม
- `postSurvey()` - บันทึกข้อมูลแบบสอบถามลง MongoDB
- `getGame()` - แสดงหน้าเกม
- `getResult()` - แสดงหน้าผลลัพธ์พร้อมวิเคราะห์คะแนน

### routes/surveyRoutes.js
- กำหนด routes ทั้งหมดและเชื่อมกับ controller

### models/Survey.js
- กำหนด Schema สำหรับเก็บข้อมูลแบบสอบถาม
- ใช้ Mongoose ODM

### views/*.ejs
- Template files สำหรับแสดงผล HTML
- มี inline CSS และ JavaScript

## 🎨 Features พิเศษ

- ✅ Responsive Design
- ✅ Animation พื้นหลัง (กลีบซากุระ)
- ✅ Form Validation
- ✅ Progress Bar
- ✅ Smooth Transitions
- ✅ ธีมญี่ปุ่นสวยงาม
- ✅ MVC Architecture
- ✅ Async/Await Pattern

## 📄 License

MIT
