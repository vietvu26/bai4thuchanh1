let value1 = 'one'
let value2 = 'two'
console.log('original',value1);
console.log('original',value2);
let temp = value1;
value1 = value2;
value2 = temp;

console.log('swap', value1);
console.log('swap', value2);