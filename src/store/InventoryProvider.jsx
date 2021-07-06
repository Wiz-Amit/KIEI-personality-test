import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InventoryContext from "./inventory-context";
import QUESTIONS from "./questions";

const InventoryProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [questions, setQuestions] = useState();

  // * Restore data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedQuestions = localStorage.getItem("questions");

    if (storedUser && storedQuestions) {
      const jsonData = JSON.parse(storedQuestions);

      // Update score if not available
      if (jsonData[0].scores) {
        setQuestions(jsonData);
      } else {
        setQuestions(QUESTIONS);
      }
    } else {
      setQuestions(QUESTIONS);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  // * Save user data on localStorage
  useEffect(() => {
    if (!user) {
      return history.push("/");
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify(user));
    if (
      !storedUser ||
      user.name !== storedUser.name ||
      user.email !== storedUser.email
    ) {
      console.log({ storedUser, user });
      setQuestions(QUESTIONS);
    }
  }, [user, history]);

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
    if (!questions) return;
    return questions.find((q) => q.id === id);
  };

  const getScore = () => {
    if (!questions) return;

    return questions.reduce((s, q) => {
      if (q.answer) {
        console.log(q);
        s += q.scores.findIndex((ans) => ans === q.answer) + 1;
      }
      return s;
    }, 0);
  };

  const testAgain = () => {
    setQuestions(QUESTIONS);
    history.push("/");
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
    getScore,
    testAgain,
  };

  return (
    <InventoryContext.Provider value={inventorCtx}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
