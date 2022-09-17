let user = 'John Doe';
console.log(user);
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
const x = 20;
// in test now we have: true
console.log(test == x);
// is that what you mean?
let result = 1;
const a = [2, 3, 5, 8];
for (let i = 0; i < a.length; i++) {
  result = result * a[i];
}
console.log(result);
let result1 = '';
const b = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < b.length; i++) {
  if (b[i] < 10 && b[i] > 5) {
    result1 = result1 + b[i];
  }
}
console.log(result1);
let result2 = '';
const c = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < c.length; i++) {
  if (c[i] % 2 == 0) {
    result2 = result2 + c[i];
  }
}
console.log(result2);
