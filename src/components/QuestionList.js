import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestionDelete, onChangeItemAnswer }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteItem={onQuestionDelete}
            onChangeItemAnswer={onChangeItemAnswer}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
