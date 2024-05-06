import { randomizer, shuffle } from "./common";

export type CommonProblem = {
    answer: number;
    choices: number[];
    question: number;
    equalRight: boolean;
}

export function create1DigitSubList() {
    const list = [];
  
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j < i; j++) {
        const num3 = i - j;
        
        list.push({
          num1: i,
          num2: j,
          num3,
          ops: "-",
          ...get1DigitCommonProblem([i, j, num3]),
        });
      }
    }
  
    return list;
}
  
export function create1DigitAddList() {
    const list = [];
  
    for (let i = 1; i <= 10; i++) {
      for (let j = 1; j <= 10 - i; j++) {
        const num3 = i + j;

        list.push({
          ...get1DigitCommonProblem([i, j, num3]),
          num1: i,
          num2: j,
          num3,
          ops: "+",

        });
      }
    }
  
    return list;
}
  
export function get1DigitChoices(answer: number): number[] {
  const choices: number[] = [];
  for (let i = 1; i <= 5; i++) {
    if (answer - i > 0) {
      choices.push(answer-i);
    }
    if (answer + i <= 10) {
      choices.push(answer+i);
    }
  }
  return shuffle([...shuffle(choices).slice(0, 3), answer]);
}

export function get1DigitCommonProblem(arr: number[]) {
    const question = randomizer(0, arr.length - 1);
    const answer = arr[question];
    return {
        question,
        answer,
        choices: get1DigitChoices(answer),
        equalRight: randomizer(0, 1) === 1,
    }
}