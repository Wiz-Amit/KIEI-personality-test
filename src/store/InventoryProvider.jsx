import { useState } from "react";
import InventoryContext from "./inventory-context";

const QUESTIONS = [
  {
    id: 12,
    text: "Always thinking about yourself.",
    group: 2,
  },
];

const InventoryProvider = (props) => {
  const [user, setUser] = useState("");
  const [questions, setQuestions] = useState(QUESTIONS);

  const setAnswer = (id, answer) => {
    id = parseInt(id);

    setQuestions((prevQuestions) => {
      const [question] = prevQuestions.filter((q) => q.id === id);
      return [
        ...prevQuestions.filter((q) => q.id !== id),
        { ...question, answer },
      ];
    });
  };

  const getMaxId = () => {
    return Math.max(...questions.map((q) => q.id));
  };

  const getQuestion = (id) => {
    id = parseInt(id);
    return questions.find((q) => q.id === id);
  };

  const inventorCtx = {
    user,
    questions,
    questionGroups: [],
    result: {},
    setUser,
    setAnswer,
    getMaxId,
    getQuestion,
  };

  return (
    <InventoryContext.Provider value={inventorCtx}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
