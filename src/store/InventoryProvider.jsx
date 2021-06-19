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

  const inventorCtx = {
    user,
    questions: [],
    questionGroups: [],
    answers: [],
    result: {},
    setUser,
  };

  return (
    <InventoryContext.Provider value={inventorCtx}>
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
