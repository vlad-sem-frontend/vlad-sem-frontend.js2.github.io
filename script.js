//     Task 1:     Switch

// let number = +prompt("Введи число");
// switch (number) {
//   case 3:
//   case 4:
//   case 5:
//     alert("Це весна...");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Це літо...");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Це осінь...");
//     break;
//   case 12:
//   case 1:
//   case 2:
//     alert("Це зима...");
//     break;
//       case 0 :
//          alert('Ви не ввели число...');
//          break;
//   default:
//     alert("Місяця під таким порялковим номером немає");
//     break;
// }
// console.log(number);

//        Task 2:

// let n=+prompt('Введи число...')
// function num(number){
// if(number%1==0 && number%number==0){

// return `${number} - ціле число`;
// }
// else{
// return `${number} - не ціле число`;
// }
// }
// let result= num(n);
// alert(result);

//           Task 3:

// let sum=0;
// function maxElem(){
// for(i=0;i<arguments.length;i++){
//    if(arguments[i]>sum){
//       sum=arguments[i];
//    }
// }
//       return sum;
// }
// maxElem(10,230,2260,3,323,83323);
// let max= maxElem();
// alert(`Максимальне значення - ${max}`);

//        or

let sum = 0;
function maxElem(...arg) {
  for (i = 0; i < arg.length; i++) {
    if (arg[i] > sum) {
      sum = arg[i];
    }
  }
  return sum;
}
maxElem(10, 230, 2260, 3, 323, 83323);
let max = maxElem();
alert(`Максимальне значення - ${max}`);
