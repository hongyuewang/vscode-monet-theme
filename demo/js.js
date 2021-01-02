let num = 29;
var bool = true;
const string = 'string';
const template = `something${something}something${something()}`;
const regex = /^abc|def[A-Z]$/gim;

// comment

class Class {
  constructor() {
    this.something;
  }
  static method() {}
}

const something = new Class();

something.method();

async function func(param) {
  await op();
  return;
}

func();

console.log();

try {
} catch (err) {}

const obj = {
  a: something
};

if (something) {
} else if (something) {
} else {
}

switch (something) {
  case 'something':
    break;
  default:
    break;
}

for (let i = 0; i < 10; i++) {}

for (const something of things) {
}

for (const something in things) {
}

while (something) {}

do {} while (something);

debugger;

import something from '';
export default something;

for (var i=1; i < 101; i++){
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
