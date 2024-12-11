// 로또번호 생성하기
// Case 1
function getRandNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let selectedNumbers = [];
function selectLottoNumbers() {
  for (; selectedNumbers.length < 6; ) {
    let selectedNumber = getRandNumber(1, 45);
    if (selectedNumbers.includes(selectedNumber)) {
      selectLottoNumbers();
    } else {
      selectedNumbers.push(selectedNumber);
    }
  }
}
selectLottoNumbers();
console.log(
  "case 1::",
  selectedNumbers.sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
);

// case 2
let balls = [];
let selectedBalls = [];
for (let i = 0; i < 45; i++) {
  balls[i] = i + 1;
}
// console.log(balls);

for (let i = 0; i < 6; i++) {
  let selectedIndex = getRandNumber(0, balls.length - 1);
  let selectedBall = balls.splice(selectedIndex, 1);
  selectedBalls.push(selectedBall[0]);
}
console.log(
  "case 2::",
  selectedBalls.sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
);

// 유료 GPT가 생성한 함수
function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

console.log(generateLottoNumbers());

// 무료 GPT가 생성한 함수
function getRandomNumbers() {
  const numbers = [];
  
  // 1부터 45까지의 수를 배열에 넣음
  for (let i = 1; i <= 45; i++) {
      numbers.push(i);
  }

  // 결과로 뽑을 6개의 숫자를 담을 배열
  const randomNumbers = [];

  // 6개 숫자를 무작위로 선택
  while (randomNumbers.length < 6) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomNum = numbers[randomIndex];

      // 중복을 방지하기 위해 이미 뽑힌 숫자는 배열에서 제거
      randomNumbers.push(randomNum);
      numbers.splice(randomIndex, 1);
  }

  return randomNumbers;
}

// 함수 호출 예시
console.log(getRandomNumbers());
