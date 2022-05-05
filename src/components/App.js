import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions));
  }, []);
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }
  function handleOnChangeItemAnswer(updatedquestion) {
    setQuestions(
      questions.map((question) =>
        question.id === updatedquestion.id ? updatedquestion : question
      )
    );
  }
  function handleQuestionDelete(questionId) {
    setQuestions(questions.filter((question) => question.id !== questionId));
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          onQuestionDelete={handleQuestionDelete}
          onChangeItemAnswer={handleOnChangeItemAnswer}
        />
      )}
    </main>
  );
}

export default App;
