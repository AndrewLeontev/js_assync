import fs from 'fs';

fs.readFile('file.md', (err, content) => {
    if (err) {
        console.log(err);
    }

    console.log('from callback');
    console.log(content);
});

console.log('outside callback');

// try {} catch {} не применимы
// Отсутствует возвращаемое значение

// Зависимые вызовы
fs.readFile('file1.md', (err, content) => {
    if (!err) {
        fs.readFile('file2.ms', (err2, content2) => {
            if (!err2) {
                console.log(content2);
            }
        });
    }
});

// В целом: 
// Код не линейный
// Сложнее писать/понимать/отлаживать
// Эффективная утилизация ресурсов