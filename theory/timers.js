// setTimeout
console.log('Before timer');
setTimeout(console.log, 10, 'from setTimeout');
console.log('after setTimeout');

// АСИХНХРОННЫЕ ВЫЧИСЛЕНИЯ
// 1. Запускаем вычисление
// 2. Вычисляем небольшой кусок
// 3. Если вычислять больше нечего, отдаем результат
// 4. Оставшиеся вычисления откладываем
// 5. Отрабатывают накопившиеся функции
// 6. Продолжаем вычисление, возвращаемся к п.2

// Асинхронная реализация
const asyncMap = (coll, fn, callback) => {
    if (coll.length === 0) {
        callback([]);
        return;
    }
    const iter = ([head, ...rest], acc) => {
        const newAcc = [...acc, fn(head)];
        if (rest.length === 0) {
            callback(newAcc);
            return;
        }
        setTimeout(iter, 0, rest, newAcc);
    };

    iter(coll, []);
};

// Асинхронный map
const coll = [4, 5, 10];
asyncMap(coll, item => item * 2, result => {
    console.log(result);
    // [8, 10, 20]
});

// Синхронная реализция
const map = (coll, fn) => {
    if (coll.length === 0) {
        return coll;
    }
    const iter = ([head, ...rest], acc) => {
        const newAcc = [...acc, fn(head)];
        if (rest.length === 0) {
            return newAcc;
        }
        return iter(rest, newAcc);
    }

    return iter(coll, []);
}



// setInterval - переодическое повторение
const id = setInterval(console.log, 500, 'hi');
clearInterval(id);