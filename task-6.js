let input = ' ';
const numbers = [];
let total = 0;


while (input) {
  input = prompt('Введите число');
  console.log(input);
  if (input == null) {
    alert('Отменено пользователем');
  } else {
    input = Number(input);
    if (!isNaN(input));
    numbers.push(input);
    // total += input;
    }
}
// for (let number of numbers) {
//   total += numbers;
// }
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);