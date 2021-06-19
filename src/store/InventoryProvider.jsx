import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InventoryContext from "./inventory-context";

const QUESTIONS = [
  {
    id: 1,
    block: "a",
    text: "Which one of the following four jobs you would like best as your profession?",
    options: [
      "Laboratory research worker",
      "Political leader",
      "Military officer",
      "Officer in a factory or office",
    ],
  },
  {
    id: 2,
    block: "a",
    text: "Which one of the following four types of pictures (Cinema) do you like to enjoy most?",
    options: [
      "Picture of a battle",
      "Picture of a comedy",
      "Picture of a grim tragedy",
      "Picture of natural devastation",
    ],
  },
  {
    id: 3,
    block: "a",
    text: "To which one of the following four types of person do majority of your friends belong?",
    options: [
      "Persons who love to spend money very much",
      "Persons who love to spend money but adjust it according to their earning",
      "Persons who love to save money but do spend where social prestige is involved",
      "Persons who love to save money very much",
    ],
  },
  {
    id: 4,
    block: "a",
    text: "Which one of the following four types of work do you like most?",
    options: [
      "Completely repetitive work",
      "Moderately repetitive work",
      "Slightly repetitive work",
      "Completely non-repetitive work",
    ],
  },
  {
    id: 5,
    block: "a",
    text: "Which one of the following types op persons do you like the most to have with you in a social gathering?",
    options: [
      "Those who would initiate the spirit of laughing and talking in the function",
      "Those who would not initiate but join others in laughing and talking to make the function lively",
      "Those who would laugh and talk only to keep friendly terms with others",
      "Those who would always prefer to be silent and observe others activities",
    ],
  },
  {
    id: 6,
    block: "a",
    text: "Which one o the following types of persons do you like most to have as your friends?",
    options: [
      "Persons who will never do anything without planning",
      "Persons who will do planning in most of the occasions",
      "Persons who will never like to plan before doing a thing",
      "Persons who will do planning only on rare occasions",
    ],
  },
  {
    id: 7,
    block: "a",
    text: "Which one o the following types of persons do you like most to have as your friends?",
    options: [
      "Those who usually feel happy",
      "Those who feel happy most of the times",
      "Those who feel happy occasionally",
      "Those who do not feel happy usually",
    ],
  },
  {
    id: 8,
    block: "a",
    text: "What will you do during a disturbing mass demonstration on a political issue?",
    options: [
      "Go and take active part",
      "Observe the situation without taking any active part",
      "Enquire about the situation for the sake of curiosity from a distance",
      "Avoid the situation altogether",
    ],
  },
  {
    id: 9,
    block: "a",
    text: "How would you like to have a strong opponent and contest with him?",
    options: [
      "Always prefer to have a strong opponent and contest with him",
      "Sometimes prefer to have a strong opponent and contest with him",
      "Usually prefer not to have a strong opponent and like to withdraw",
      "Practically do not prefer to have a strong opponent and always like to withdraw",
    ],
  },
  {
    id: 10,
    block: "a",
    text: "To what extent does lack of careful planning make you disturbed?",
    options: [
      "To a great extent",
      "To some extent",
      "To little extent",
      "To practically no extent",
    ],
  },
  {
    id: 11,
    block: "a",
    text: "Which one of the following types of work would you like most to do?",
    options: [
      "Work which involves too much of delicacies (consideration)",
      "Work which involves delicacies but not too much of them",
      "Work which preferably does not involve delicacies",
      "Work which involves no delicacy at all",
    ],
  },
  { id: 12, block: "b", text: `Always thinking about yourself.` },
  {
    id: 13,
    block: "b",
    text: `Thinking much before accepting a new issue or an idea.`,
  },
  { id: 14, block: "b", text: `Starting conversation with a stranger.` },
  { id: 15, block: "b", text: `Sticking to a task inspite of you failure.` },
  { id: 16, block: "b", text: `Standing other's criticism calmly.` },
  { id: 17, block: "b", text: `To be cautious while making decisions.` },
  { id: 18, block: "b", text: `To have always a planned life.` },
  { id: 19, block: "b", text: `Always keeping confidence in others.` },
  { id: 20, block: "b", text: `Taking leading parts in social functions.` },
  {
    id: 21,
    block: "b",
    text: `Like the idea of having a limited number of friends and associates.`,
  },
  {
    id: 22,
    block: "b",
    text: `Always take particular care of personal properties (watches, clothes etc.).`,
  },
  {
    id: 23,
    block: "b",
    text: `Always approaching others to make friendship with them.`,
  },
  {
    id: 24,
    block: "b",
    text: `Always be cautious about possible misfortunes.`,
  },
  {
    id: 25,
    block: "b",
    text: `Prefer thinking alone about a problem till it is solved.`,
  },
  { id: 26, block: "b", text: `Always like to plan about future work.` },
  { id: 27, block: "b", text: `Changing your work from one type to another.` },
  { id: 28, block: "b", text: `Analysing your thoughts and motives.` },

  {
    id: 29,
    block: "c",
    text: `While doing a work, do you pay more attention to details than to important aspects only?`,
  },
  {
    id: 30,
    block: "c",
    text: `Do you prefer more to work alone than in groups?`,
  },
  {
    id: 31,
    block: "c",
    text: `Do you find more interest in spending time with books than with people?`,
  },
  {
    id: 32,
    block: "c",
    text: `Do you want to derive knowledge more through books than through practical experience?`,
  },
  {
    id: 33,
    block: "c",
    text: `Do you usually avoid trouble rather than facing it?`,
  },
  { id: 34, block: "c", text: `Do you prefer indoor game to outdoor games?` },
  {
    id: 35,
    block: "c",
    text: `Do you like more to live in a lonely place rather than in lively one?`,
  },
  {
    id: 36,
    block: "c",
    text: `Do you like more to take part in an argument than to remain silent?`,
  },
  {
    id: 37,
    block: "c",
    text: `Do you prefer more to leave a social gathering earlier rather than spending much time in it?`,
  },
  {
    id: 38,
    block: "c",
    text: `Do you feel that you present a case better through writing than through speaking?`,
  },
  {
    id: 39,
    block: "c",
    text: `In your routine actions of the days (walking, dressing, talking, etc.) do you like to finish them quickly rather than doing them after careful consideration?`,
  },
  {
    id: 40,
    block: "c",
    text: `Do you easily remember your daily expenses in specific details rather than forgetting them mostly?`,
  },
  {
    id: 41,
    block: "c",
    text: `Do you prefer to take up the responsibility of directing others in doing a work rather than having somebody else to direct you?`,
  },
  {
    id: 42,
    block: "c",
    text: `Do you prefer to work on the last moment rather than starting it earlier?`,
  },

  {
    id: 43,
    block: "d",
    text: `Checking and rechecking of letters before mailing.`,
  },
  {
    id: 44,
    block: "d",
    text: `Sitting alone for a long time without being tired.`,
  },
  { id: 45, block: "d", text: `Concealing your activities from others.` },
  {
    id: 46,
    block: "d",
    text: `Feel disturbed to a great extent after doing something wrong.`,
  },
  {
    id: 47,
    block: "d",
    text: `Calling persons who cross streets to avoid meeting you.`,
  },
  {
    id: 48,
    block: "d",
    text: `To make it a point to be outspoken while speaking.`,
  },
  { id: 49, block: "d", text: `Feeling hurt at other's aggressive behaviour.` },
  {
    id: 50,
    block: "d",
    text: `Voluntarily giving explanations of what you have done.`,
  },
  { id: 51, block: "d", text: `Hesitating to ask for loans from others.` },
  { id: 52, block: "d", text: `Delivering a written report.` },
  {
    id: 53,
    block: "d",
    text: `Feeling disturbed when people watch at your activities.`,
  },
  {
    id: 54,
    block: "d",
    text: `Feeling difficult to start conversations with strangers.`,
  },
  { id: 55, block: "d", text: `Analyzing the feelings and motives of others.` },
  { id: 56, block: "d", text: `Remaining alone during emotional stress.` },

  {
    id: 57,
    block: "e",
    text: `Are you always conscientious in your activities?`,
  },
  {
    id: 58,
    block: "e",
    text: `Can you tolerate slight abnormality in health?`,
  },
  {
    id: 59,
    block: "e",
    text: `Can you work better when you get incentives through other's praise?`,
  },
  {
    id: 60,
    block: "e",
    text: `Do you dislike to write about yourself even to very close friends?`,
  },
  { id: 61, block: "e", text: `Do you day-dream very frequently?` },
  { id: 62, block: "e", text: `Do you usually think about yourself?` },
  {
    id: 63,
    block: "e",
    text: `Do you like to talk much at social gatherings?`,
  },
  {
    id: 64,
    block: "e",
    text: `Do you prefer to work alone rather than doing the task with others?`,
  },
  {
    id: 65,
    block: "e",
    text: `Do you hesitate in making friendship with opposite sex?`,
  },
  { id: 66, block: "e", text: `Can you easily work against opposition?` },
  {
    id: 67,
    block: "e",
    text: `Do you prefer to take the role of introducing others in a social gathering?`,
  },
  {
    id: 68,
    block: "e",
    text: `Are you usually cautious when you start conversation with others?`,
  },
  {
    id: 69,
    block: "e",
    text: `Do you consider yourself to be greatly sentimental?`,
  },
  { id: 70, block: "e", text: `Do you usually control your temper?` },
];

const InventoryProvider = (props) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [questions, setQuestions] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedQuestions = localStorage.getItem("questions");

    if (storedUser && storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
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

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
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
