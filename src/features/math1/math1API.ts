import { shuffle } from "../../app/common/common";
import { create1DigitAddList, create1DigitSubList } from "../../app/common/math1Digit";

export function createProblemList() {
  return shuffle([...create1DigitAddList(), ...create1DigitSubList()]);
}