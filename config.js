// إعدادات السيرفر
const SERVER_CONFIG = {
    name: "Cloud Server API",
    version: "1.0.0",
    baseUrl: "https://username.github.io/repository-name",
    storageKey: "cloudServerFiles",
    maxFileSize: 100 * 1024 * 1024, // 100MB
    allowedTypes: ['apk', 'exe', 'zip', 'rar', 'pdf', 'jpg', 'png', 'mp4', 'mp3', 'txt'],
    api: {
        endpoints: {
            upload: '/api/upload',
            download: '/api/download',
            delete: '/api/delete',
            list: '/api/files'
        }
    }
};

// تصدير الإعدادات
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SERVER_CONFIG;
}
