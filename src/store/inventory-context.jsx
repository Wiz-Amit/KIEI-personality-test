import { createContext } from "react";

const InventoryContext = createContext({
  user: {},
  questions: [],
  questionGroups: [],
  result: {},
  setUser: ({ name, email }) => {},
  setAnswer: ({ id, answer }) => {},
  getMaxId: () => {},
  getQuestion: (id) => {},
  getScore: () => {},
});

export default InventoryContext;
