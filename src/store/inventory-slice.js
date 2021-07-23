import QUESTIONS from "./questions";

const { createSlice, createSelector } = require("@reduxjs/toolkit");

const storedUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];

const storedQuestions = localStorage.getItem("questions")
  ? JSON.parse(localStorage.getItem("questions"))
  : QUESTIONS;

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    user: storedUser,
    questions: storedQuestions,
    questionGroups: [],
    result: null,
    activeQuestionId: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = {
        email: action.payload.email || null,
        name: action.payload.name,
      };

      localStorage.setItem("user", JSON.stringify(state.user));
    },

    updateQuestions: (state, action) => {
      state.questions = [...action.payload];

      localStorage.setItem("questions", JSON.stringify(state.questions));
    },

    setAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const index = state.questions.findIndex(
        (q) => parseInt(q.id) === parseInt(id)
      );

      if (index !== null) state.questions[index].answer = answer;

      localStorage.setItem("questions", JSON.stringify(state.questions));
    },

    setActiveQuestion: (state, action) => {
      state.activeQuestionId = parseInt(action.payload);
    },
  },
});

export default inventorySlice;

export const inventoryActions = inventorySlice.actions;

// * Selectors

export const selectQuestions = (state) => state.inventory.questions;
export const selectUser = (state) => state.inventory.user;

export const selectActiveQuestion = (state) => {
  return state.inventory.questions.find(
    (q) => parseInt(q.id) === parseInt(state.inventory.activeQuestionId)
  );
};

export const selectFirstUnansweredQuestion = createSelector(
  [selectQuestions],
  (questions) => {
    if (!questions) return;
    return questions.find((q) => !q.answer);
  }
);

export const selectMaxId = createSelector([selectQuestions], (questions) => {
  return Math.max(...questions.map((q) => q.id));
});

export const selectScore = createSelector([selectQuestions], (questions) => {
  if (!questions) return;

  return questions.reduce((s, q) => {
    if (q.answer) {
      console.log(q);
      s += q.scores.findIndex((ans) => ans === q.answer) + 1;
    }
    return s;
  }, 0);
});

// * Thunks

export const resetTest = () => {
  return (dispatch) => {
    dispatch(inventoryActions.updateQuestions(QUESTIONS));
  };
};

export const setUser = (userData) => {
  return (dispatch) => {
    const storedUser = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    // Restart if new User
    if (
      !storedUser ||
      userData.name !== storedUser.name ||
      (userData.email && userData.email !== storedUser.email)
    ) {
      dispatch(inventoryActions.updateQuestions(QUESTIONS));
      dispatch(inventoryActions.setActiveQuestion(1));
      dispatch(inventoryActions.updateUser(userData));
    } else {
      const questions = localStorage.getItem("questions")
        ? JSON.parse(localStorage.getItem("questions"))
        : QUESTIONS;

      dispatch(inventoryActions.updateQuestions(questions));
    }
  };
};
