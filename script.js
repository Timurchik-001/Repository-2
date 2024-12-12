// let text =
//     "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Officiis, nostrum,";

// Заменить все запятые на точки
//  генерация рандомных чисел до 500

// let arr = [0, 123, -3, 43, 22, -16, 12, 99, 100];
// let max;

//  достать наибольшее число с массива, сохранить в max


// console.log(text.replaceAll(',', '.'));
// console.log(Math.floor(Math.random() * 500));
// max = Math.max(...arr);
//  spread
// console.log(max);
// console.log(...arr);
// console.log(arr);





// Достать наименьшее число с массива, округлить логически и сохранить в min 
//=============================== Первый метод ==============================
let arr = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2]
let min = Math.min(10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2);
console.log(min);


//=============================== Второй метод ================================
min = Math.min(...arr);
console.log(min);
console.log(...arr);
console.log(arr);


// достать наибольшее число с массива, округлить вверх и сохранить в max
//================================ Первый метод ===============================
let arr2 = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2]
max = Math.max(10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2);
console.log(max);

//=============================== Второй метод ================================
max = Math.max(...arr);
console.log(max);
console.log(...arr);
console.log(arr);

let result = max % min;
console.log(result);




// 1. num1 переводим в string, оставляем только три цифры после точки: '10.456'
// 2. показать длину полученной строки 
// 3. полученную строку переводим в тип number оставляя лишь целое число (убрать все цифры после точки)

let num1 = 10.4568313123132
let numstr = num1.toFixed(3)
console.log(numstr);

let length = (num1)
console.log(length);

let numInt = Math.floor(Number(num1));
console.log(numInt);