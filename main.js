let user = 'John Doe';
const student = 'Yauheniya';
console.log(student);
user = student;
// in user now we have value 'Yauheniya'
console.log(user);
let test = 1;
test++;
test += '1';
console.log(test);
//in test now we have value: 2 and '1'(like text) but shows 21 (cause it mains to one type of data - string)
test--;
// in test now we have value: 20 (cause it mains to one type of data - number)
console.log(test);
test = true;
// in test now we have: true
console.log(test);
let result = 1;
const mv = [2, 3, 5, 8];
for (let i = 0; i < mv.length; i++) {
  result = result * mv[i];
}
console.log(result);
let result1 = '';
const y = [2, 5, 8, 15, 0, 6, 20, 3];
let t = 0;
for (; t < y.length; t++) {
  if (y[t] < 10 && y[t] > 5) {
    result1 = result1 + y[t];
  }
}
console.log(result1);
let wynik = '';
const mw = [2, 5, 8, 15, 0, 6, 20, 3];
let i = 0;
for (; i < mw.length; i++) {
  if (mw[i] % 2 == 0) {
    wynik = wynik + mw[i];
  }
}
console.log(wynik);
