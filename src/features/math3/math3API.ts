import { shuffle } from "../../app/common/common";
import { create2DigitsAddList, create2DigitsSubList } from "../../app/common/math2Digits";

export function createProblemList() {
  return shuffle([...create2DigitsAddList(), ...create2DigitsSubList()]).slice(0, 100);
}