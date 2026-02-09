const fs = require('fs');
const path = require('path');

try {
    const data = fs.readFileSync(path.join(__dirname, 'data/players.json'), 'utf-8');
    console.log("✅ Файл найден! В нем символов:", data.length);
} catch (err) {
    console.error("❌ Ошибка: Файл не найден по пути data/players.json");
}