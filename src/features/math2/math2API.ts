import { randomizer, shuffle } from "../../app/common/common";
import { create1DigitAddList, create1DigitSubList, get1DigitChoices } from "../../app/common/math1Digit";
import { Problem1 } from "../math1/math1Slice";
import { Problem2 } from "./math2Slice";

export function createProblemList() {
  const addList = create1DigitAddList();
  const subList = create1DigitSubList();

  const list: Problem2[] = [];
  addList.forEach((p1) => {
    list.push(...addList.filter((p2) => p2.num1 === p1.num3 && p2.num1 + p2.num2 <= 10).map((p2) => combineProblems(p1, p2)));
    list.push(...subList.filter((p2) => p2.num1 === p1.num3 && p2.num1 - p2.num2 >= 0).map((p2) => combineProblems(p1, p2)));
  });
  subList.forEach((p1) => {
    list.push(...addList.filter((p2) => p2.num1 === p1.num3 && p2.num1 + p2.num2 <= 10).map((p2) => combineProblems(p1, p2)));
    list.push(...subList.filter((p2) => p2.num1 === p1.num3 && p2.num1 - p2.num2 >= 0).map((p2) => combineProblems(p1, p2)));
  });
  return shuffle(list).slice(0, 100);
}

function combineProblems(p1: Problem1, p2: Problem1) {
  return {
    num1: p1.num1,
    num2: p1.num2,
    num3: p2.num2,
    num4: p2.num3,
    ops1: p1.ops,
    ops2: p2.ops,
    answer: p2.num3,
    question: 3,
    choices: get1DigitChoices(p2.num3),
    equalRight: randomizer(0, 1) === 1,
  };
}