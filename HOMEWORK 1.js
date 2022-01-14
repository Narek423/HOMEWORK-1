N.1

function isPrime(num) {
  for(let i = 2; i <= Math.floor(num / 2); i++){
    if (num % i === 0) return 'No';  
  }
  return num <= 1 ? 'No' : 'yes';
}

N.2

function calcSequence(n) {
  let result = 1;
  for (let i = 3; i <= n; i = i + 2) {
    (i === 3 || i === 7) ? result -= 1 / i : result += 1 / i;
  }
  return n < 1 ? 'Invalid input' : result;
}

N.3

function sumOfNestArr(arr) {
  return arr.map(elem => elem.reduce((a, b) => a + b));
}

N. 4

function printRect(width, height){
  for(let i = 0; i < height; i++) {
    let line = '';
    for(let j = 0; j < width; j++) {
      if(i === 0 || i + 1 === height) {
        line += '* ';
      } else {
        if(j === 0 || j + 1 === width) {
          (j + 1 === width) ? line += '*' : line += '* ';
        } else {
          line += '  ';
        }
      }
    }
      console.log(line);
  }
}

N. 5

function moveFirstChar(str) {
  let threeChar = '';
  while(str.length >= 3) {
    threeChar += str[1] + str[2] + str[0]
    str = str.slice(3);
  }
  return threeChar + str;
}

N. 6

function printPattern(num) {
  let count = num;
  for (let i = 1; i <= num; i++){
    let str = `${i}`;
    let k = i; 
    for (let j = 2; j <= i; j++) {
      if(count !== 0) count--
       k = k + count;
       str += " " + k ;
    }
    count = num;
    console.log(str);
  }
}