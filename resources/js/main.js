//Кельвиний утгыг хадгалах хувьсагч

const kelvin = 295;
console.log(`Кельвин ${kelvin} К`);
//Цельсийн утгыг хадгалах хувьсагч
let celsius = kelvin - 273;
console.log(`Цельсийн градус: ${celsius} С`);
//Фаренгейтийн утгыг хадгалах хувьсагч
let fahrenheit = celsius * (9 / 5) + 32;
console.log(`Фаренгейтийн градус: ${Math.floor(fahrenheit)} F`);
