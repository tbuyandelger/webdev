//Тоолуурт давталт
let aimag = ["Ховд", "Увс", "Завхан", "Говь-Алтай", "Баян-Өлгий"];
for (let i = 0; i < aimag.length; i++) {
  console.log(aimag[i]);
}

for (let i = aimag.length - 1; i >= 0; i--) {
  console.log(aimag[i]);
}
//Давхар давталт
let bookcase1 = ["Миний тунгалагшил", "Ану хатан"];
let bookcase2 = ["Эх орон", "Миний тунгалагшил"];
for (let i = 0; i < bookcase1.length; i++) {
  console.log("Номын шүүгээ 1:" + bookcase2[i]);
  for (let j = 0; j < bookcase2.length; i++) {
    console.log("Номын шүүгээ 1:" + bookcase2[i]);
  }
}
//While давталт
let words = "Улаанбаатар хот, Монгол улс";
let i = 0;
while ("" !== words[i]) {
  i++;
}
console.log("Эхний үгийн урт: " + i);

//Төгсгөлгүй давталт
while(true){
  //...
}
//Итератор
//1.forEach() арга
aimag.forEach(function(statesItem)){
console.log('->'+aimag);
}
//2.map() арга
let baimag = aimag.map(function(aimagiig){
 return aimagiig.toUpperCase();
});
console.log(baimag);
//3. filter() арга
let filterAimag = aimag.filter(function(param){
return param[0]==='З';
});
console.log(filterAimag);
//4.some() арга
let test = function(param){
return param[1]=='а';
}
console.log(aimag.some(test));

//5.every() арга
function checkLength(value){
return value.length>5;
}
console.log(aimag.every(checkLength));
