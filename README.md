# 🚀 Cloud Server API - سيرفر التطبيقات المجاني

منصة مجانية 100% لتخزين وإدارة الملفات والتطبيقات مع API للاتصال من مواقع أخرى.

## ✨ المميزات

- ✅ مجاني بالكامل
- ✅ سعة تخزين غير محدودة (حسب متصفح المستخدم)
- ✅ API للاتصال من مواقع أخرى
- ✅ واجهة عربية سهلة الاستخدام
- ✅ دعم السحب والإفلات
- ✅ روابط تحميل مباشرة
- ✅ يعمل على GitHub Pages

## 🔧 طريقة الاستخدام

### 1. رفع الملفات
- اسحب الملفات إلى منطقة الرفع
- أو انقر على زر "اختيار الملفات"
- انتظر اكتمال الرفع

### 2. تحميل الملفات
- انقر على زر "تحميل" بجانب الملف
- أو انسخ الرابط وشاركه مع الآخرين

### 3. الاتصال من موقع آخر

```javascript
// مثال على استخدام API من موقع آخر
const serverUrl = 'https://username.github.io/repository-name';

// رفع ملف
async function uploadToServer(file) {
    const response = await fetch(`${serverUrl}/api/upload`, {
        method: 'POST',
        body: file
    });
    return await response.json();
}

// جلب قائمة الملفات
async function getFiles() {
    const response = await fetch(`${serverUrl}/api/files`);
    return await response.json();
}

// تحميل ملف
function downloadFile(filename) {
    window.location.href = `${serverUrl}#download-${filename}`;
}
