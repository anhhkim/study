import { randomizer, shuffle } from "./common";
import { get1DigitChoices } from "./math1Digit";

export function create2DigitsSubList() {
    const list = [];
  
    for (let i = 11; i <= 100; i++) {
      for (let j = 0; j <= i/10; j++) {
        for (let k = 0; k <= i % 10; k++) {
          const num2 = j*10 + k;
          if (num2 === 0) {
            continue
          }
          const num3 = i - num2;
        
          list.push({
            num1: i,
            num2,
            num3,
            ops: "-",
            ...get2DigitsCommonProblem([i, num2, num3]),
          });
        }
      }
    }
  
    return list;
}
  
export function create2DigitsAddList() {
    const list = [];
  
    for (let i = 11; i <= 100; i++) {
      for (let j = 0; j <= (100-i)/10; j++) {
        for (let k = 0; k < 10-(i%10); k++) {
          const num2 = j*10 + k;
          const num3 = i + num2;
          if (num2 === 0 || num3 > 100) {
            continue
          }

          list.push({
            ...get2DigitsCommonProblem([i, num2, num3]),
            num1: i,
            num2,
            num3,
            ops: "+",

          });
        }
      }
    }
  
    return list;
}
  
export function get2DigitsChoices(answer: number): number[] {
  const choices: number[] = [];
  for (let i = 1; i <= 5; i++) {
    if (answer - i > 0) {
      choices.push(answer-i);
    }
    if (answer - (i*10) > 0) {
      choices.push(answer-(i*10));
    }

    if (answer + i <= 100) {
      choices.push(answer+i);
    }
    if (answer + (i*10) <= 0) {
      choices.push(answer+(i*10));
    }
  }
  return shuffle([...shuffle(choices).slice(0, 3), answer]);
}

export function get2DigitsCommonProblem(arr: number[]) {
  const question = randomizer(0, arr.length - 1);
  const answer = arr[question];
  return {
      question,
      answer,
      choices: get2DigitsChoices(answer),
      equalRight: randomizer(0, 1) === 1,
  }
}