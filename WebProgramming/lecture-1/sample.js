console.log("Hello World!");
// document.querySelector("h1").innerHTML = "Hello Javascript!";
var h1Element = document.querySelector("h1");
h1Element.innerHTML = "Hello Javascript!";

/*
      var a = 10;
      var b = 20;
      const c = 100;
      let d = 50;

      a = 50;
      d = 10;
      // c = 50; 이 부분은 Constant에 변경하려해서 에러!
      console.log("a + b + c + d=", a + b + c + d);
      */

let name;
let firstName = "JongJin";
let lastName = "Park";
name = firstName + lastName;
console.log(name);

function sum(a, b) {
  return a + b;
}

let result = sum(5, 6);
console.log(result);

// console.log(sum(5, 7));

if (result > 10) {
  console.log("맞다");
} else if (result === 10) {
  console.log("같다");
} else {
  console.log("틀리다");
}

switch (result) {
  case 10:
    console.log("맞다");
    break;
  case 11:
    console.log("크다");
    break;
  case 12:
    console.log("크다");
    break;
  default:
    console.log("틀리다");
    break;
}

// 반복문, Loop
// 1부터 100까지 더해라
//  let a = 1;
//  a = a + 1; // 2
//  a = a + 1; // 3
//  a += 1;  // 4
//  a -= 1; // 3
//  a++;
//  a--;
//  ++a;
//  --a;

let loopResult = 0;
for (let i = 1; i <= 100; i++) {
  console.log(loopResult, i);
  loopResult += i;
}
console.log(loopResult);

// Array 배열
let numberArray = [1, 2, 3, 4, 5, 6];
let charArray = ['a', 'b', 'c', 'd'];

console.log('numberArray의 첫번째 값', numberArray[0]);
console.log('numberArray의 길이', numberArray.length);
console.log('numberArray의 범위를 벗어낫을때', numberArray[6]);
console.log(numberArray.pop(), numberArray);
console.log(numberArray.pop(), numberArray);
console.log(numberArray.push(10), numberArray);
console.log(numberArray.push(20), numberArray);
console.log(numberArray.reverse(), numberArray);
console.log(numberArray.join('...'), numberArray);

let sumValue = 0;
for (let i = 0; i < numberArray.length; i++) {
    sumValue += numberArray[i];
}
console.log('numberArray 합산 값', sumValue);

// 문자열
let hello = "Hello World!";
let myName = "My Name is JJ";
let sample = 'Hello2';
let newChar = `Hello3`;
console.log(hello.length);
console.log(hello.split(' '));
console.log(hello.concat(' ', myName));
console.log("안녕하세요를 영어로하면 " + sample + "입니다");
console.log(`안녕하세요를 영어로하면 ${newChar} 입니다.`)

// Object
let person1 = {
    name: "차은우",
    age: 30,
    tall: 190,
    weight: 70,
    address: "군포시 산본 ...",
    sing: function() {
        console.log("노래부르기");
    },
    run: function() {
        console.log("달리기");
    }
}

let person2 = {
    name: "박종진",
    age: 40,
    tall: 199,
    weight: 70,
    address: "군포시 산본 ...",
    sing: function() {
        console.log("노래부르기");
    },
    run: function() {
        console.log("달리기");
    }
}

console.log(person1.name, person1.age);
console.log(`안녕하세요 저는 ${person1.name} 입니다. 나이는 ${person1.age} 입니다.`)
person1.sing();