import { createContext } from "react";

const InventoryContext = createContext({
  user: {},
  questions: [],
  questionGroups: [],
  answers: [],
  result: {},
  setUser: ({ name, email }) => {},
});

export default InventoryContext;
