import React from "react";

function QuestionItem({ question, onDeleteItem, onChangeItemAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleAnswerChange(e) {
    console.log(e.target.value);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ correctIndex: parseInt(e.target.value) }),
    })
      .then((res) => res.json())
      .then((res) => onChangeItemAnswer(res));
  }

  function handleDeleteQuestionClick() {
    fetch(`http://localhost:4000/questions/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => onDeleteItem(id));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteQuestionClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
