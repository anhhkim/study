import React, { useState } from "react";
import classNames from "classnames";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

import styles from "./Math2.module.css";
import {
  next,
  selectAnswer,
  selectCorrect,
  selectCurrent,
  selectProblem,
  selectTotal,
} from "./math2Slice";
import correctSfx from "../../assets/sfx/correct.mp3";
import wrongSfx from "../../assets/sfx/wrong.mp3";

export function Math2() {
  const problem = useAppSelector(selectProblem);
  const correct = useAppSelector(selectCorrect);
  const total = useAppSelector(selectTotal);
  const current = useAppSelector(selectCurrent);

  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(-1);

  const { num1, num2, num3, num4, ops1, ops2, choices, answer, question, equalRight } = problem;

  const handleSelect = (sel: number) => {
    if (selected === -1) {
      sel === answer
        ? new Audio(correctSfx).play()
        : new Audio(wrongSfx).play();
      setSelected(sel);
      dispatch(selectAnswer(sel));
    }
  };

  const handleNext = () => {
    if (selected !== -1) {
      setSelected(-1);
      dispatch(next());
    }
  };

  const hasAnswered = () => {
    return selected !== -1;
  };

  const renderProblem = () => {
    if (equalRight) {
      return `${question === 0 ? '?' : num1} ${ops1} ${question === 1 ? '?' : num2} ${ops2} ${question === 2 ? '?' : num3} = ${question === 3 ? '?' : num4}`;
    }
    return `${question === 3 ? '?' : num4} = ${question === 0 ? '?' : num1} ${ops1} ${question === 1 ? '?' : num2} ${ops2} ${question === 2 ? '?' : num3}`;
  }

  return (
    <div>
      <div className={styles.row}>
        {correct} / {current + 1} / {total}
      </div>
      <div className={styles.row}>
        <span className={styles.problem}>
          {renderProblem()}
        </span>
      </div>
      <div className={styles.row}>
        {choices.map((c) => (
          <button
            className={classNames(
              styles.button,
              styles.choice,
              hasAnswered() && c === answer && styles.correct,
              hasAnswered() &&
                selected === c &&
                c !== answer &&
                styles.incorrect,
            )}
            aria-label={c + ""}
            onClick={() => handleSelect(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        <button
          className={classNames(
            styles.button,
            !hasAnswered() && styles.disabled,
          )}
          aria-label="Next"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
