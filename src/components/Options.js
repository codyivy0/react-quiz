import React from "react";

export const Options = ({ question, dispatch, answer }) => {
  console.log(question);
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, idx) => {
        return (
          <button
            className={`btn btn-option ${idx === answer ? "answer" : ""} ${
              hasAnswered
                ? idx === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            } `}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "newAnswer", payload: idx })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
