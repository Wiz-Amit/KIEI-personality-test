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
    scores: [2, 3, 4, 1],
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
    scores: [1, 2, 4, 3],
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
    scores: [1, 2, 3, 4],
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
    scores: [4, 3, 2, 1],
  },
  {
    id: 5,
    block: "a",
    text: "Which one of the following types of persons do you like the most to have with you in a social gathering?",
    options: [
      "Those who would initiate the spirit of laughing and talking in the function",
      "Those who would not initiate but join others in laughing and talking to make the function lively",
      "Those who would laugh and talk only to keep friendly terms with others",
      "Those who would always prefer to be silent and observe others activities",
    ],
    scores: [1, 2, 3, 4],
  },
  {
    id: 6,
    block: "a",
    text: "Which one of the following types of persons do you like most to have as your friends?",
    options: [
      "Persons who will never do anything without planning",
      "Persons who will do planning in most of the occasions",
      "Persons who will never like to plan before doing a thing",
      "Persons who will do planning only on rare occasions",
    ],
    scores: [4, 3, 2, 1],
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
    scores: [1, 2, 3, 4],
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
    scores: [1, 2, 3, 4],
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
    scores: [1, 2, 3, 4],
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
    scores: [4, 3, 2, 1],
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
    scores: [4, 3, 2, 1],
  },
  {
    id: 12,
    block: "b",
    text: `Always thinking about yourself.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 13,
    block: "b",
    text: `Thinking much before accepting a new issue or an idea.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 14,
    block: "b",
    text: `Starting conversation with a stranger.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 15,
    block: "b",
    text: `Sticking to a task inspite of you failure.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 16,
    block: "b",
    text: `Standing other's criticism calmly.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 17,
    block: "b",
    text: `To be cautious while making decisions.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 18,
    block: "b",
    text: `To have always a planned life.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 19,
    block: "b",
    text: `Always keeping confidence in others.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 20,
    block: "b",
    text: `Taking leading parts in social functions.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 21,
    block: "b",
    text: `Like the idea of having a limited number of friends and associates.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 22,
    block: "b",
    text: `Always take particular care of personal properties (watches, clothes etc.).`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 23,
    block: "b",
    text: `Always approaching others to make friendship with them.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 24,
    block: "b",
    text: `Always be cautious about possible misfortunes.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 25,
    block: "b",
    text: `Prefer thinking alone about a problem till it is solved.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 26,
    block: "b",
    text: `Always like to plan about future work.`,
    scores: [2, 4, 5, 3, 1],
  },
  {
    id: 27,
    block: "b",
    text: `Changing your work from one type to another.`,
    scores: [1, 3, 5, 4, 2],
  },
  {
    id: 28,
    block: "b",
    text: `Analyzing your thoughts and motives.`,
    scores: [2, 4, 5, 3, 1],
  },

  {
    id: 29,
    block: "c",
    text: `While doing a work, do you pay more attention to details than to important aspects only?`,
    scores: [2, 3, 1],
  },
  {
    id: 30,
    block: "c",
    text: `Do you prefer more to work alone than in groups?`,
    scores: [2, 3, 1],
  },
  {
    id: 31,
    block: "c",
    text: `Do you find more interest in spending time with books than with people?`,
    scores: [2, 3, 1],
  },
  {
    id: 32,
    block: "c",
    text: `Do you want to derive knowledge more through books than through practical experience?`,
    scores: [2, 3, 1],
  },
  {
    id: 33,
    block: "c",
    text: `Do you usually avoid trouble rather than facing it?`,
    scores: [2, 3, 1],
  },
  {
    id: 34,
    block: "c",
    text: `Do you prefer indoor game to outdoor games?`,
    scores: [2, 3, 1],
  },
  {
    id: 35,
    block: "c",
    text: `Do you like more to live in a lonely place rather than in lively one?`,
    scores: [2, 3, 1],
  },
  {
    id: 36,
    block: "c",
    text: `Do you like more to take part in an argument than to remain silent?`,
    scores: [1, 3, 2],
  },
  {
    id: 37,
    block: "c",
    text: `Do you prefer more to leave a social gathering earlier rather than spending much time in it?`,
    scores: [2, 3, 1],
  },
  {
    id: 38,
    block: "c",
    text: `Do you feel that you present a case better through writing than through speaking?`,
    scores: [2, 3, 1],
  },
  {
    id: 39,
    block: "c",
    text: `In your routine actions of the days (walking, dressing, talking, etc.) do you like to finish them quickly rather than doing them after careful consideration?`,
    scores: [2, 3, 1],
  },
  {
    id: 40,
    block: "c",
    text: `Do you easily remember your daily expenses in specific details rather than forgetting them mostly?`,
    scores: [2, 3, 1],
  },
  {
    id: 41,
    block: "c",
    text: `Do you prefer to take up the responsibility of directing others in doing a work rather than having somebody else to direct you?`,
    scores: [1, 3, 2],
  },
  {
    id: 42,
    block: "c",
    text: `Do you prefer to work on the last moment rather than starting it earlier?`,
    scores: [1, 3, 2],
  },

  {
    id: 43,
    block: "d",
    text: `Checking and rechecking of letters before mailing.`,
    scores: [2, 3, 1],
  },
  {
    id: 44,
    block: "d",
    text: `Sitting alone for a long time without being tired.`,
    scores: [2, 3, 1],
  },
  {
    id: 45,
    block: "d",
    text: `Concealing your activities from others.`,
    scores: [2, 3, 1],
  },
  {
    id: 46,
    block: "d",
    text: `Feel disturbed to a great extent after doing something wrong.`,
    scores: [2, 3, 1],
  },
  {
    id: 47,
    block: "d",
    text: `Calling persons who cross streets to avoid meeting you.`,
    scores: [1, 3, 2],
  },
  {
    id: 48,
    block: "d",
    text: `To make it a point to be outspoken while speaking.`,
    scores: [1, 3, 2],
  },
  {
    id: 49,
    block: "d",
    text: `Feeling hurt at other's aggressive behavior.`,
    scores: [2, 3, 1],
  },
  {
    id: 50,
    block: "d",
    text: `Voluntarily giving explanations of what you have done.`,
    scores: [2, 3, 1],
  },
  {
    id: 51,
    block: "d",
    text: `Hesitating to ask for loans from others.`,
    scores: [2, 3, 1],
  },
  {
    id: 52,
    block: "d",
    text: `Delivering a written report.`,
    scores: [2, 3, 1],
  },
  {
    id: 53,
    block: "d",
    text: `Feeling disturbed when people watch at your activities.`,
    scores: [2, 3, 1],
  },
  {
    id: 54,
    block: "d",
    text: `Feeling difficult to start conversations with strangers.`,
    scores: [2, 3, 1],
  },
  {
    id: 55,
    block: "d",
    text: `Analyzing the feelings and motives of others.`,
    scores: [2, 3, 1],
  },
  {
    id: 56,
    block: "d",
    text: `Remaining alone during emotional stress.`,
    scores: [2, 3, 1],
  },

  {
    id: 57,
    block: "e",
    text: `Are you always conscientious in your activities?`,
    scores: [2, 1],
  },
  {
    id: 58,
    block: "e",
    text: `Can you tolerate slight abnormality in health?`,
    scores: [1, 2],
  },
  {
    id: 59,
    block: "e",
    text: `Can you work better when you get incentives through other's praise?`,
    scores: [2, 1],
  },
  {
    id: 60,
    block: "e",
    text: `Do you dislike to write about yourself even to very close friends?`,
    scores: [2, 1],
  },
  {
    id: 61,
    block: "e",
    text: `Do you day-dream very frequently?`,
    scores: [2, 1],
  },
  {
    id: 62,
    block: "e",
    text: `Do you usually think about yourself?`,
    scores: [2, 1],
  },
  {
    id: 63,
    block: "e",
    text: `Do you like to talk much at social gatherings?`,
    scores: [1, 2],
  },
  {
    id: 64,
    block: "e",
    text: `Do you prefer to work alone rather than doing the task with others?`,
    scores: [2, 1],
  },
  {
    id: 65,
    block: "e",
    text: `Do you hesitate in making friendship with opposite sex?`,
    scores: [2, 1],
  },
  {
    id: 66,
    block: "e",
    text: `Can you easily work against opposition?`,
    scores: [1, 2],
  },
  {
    id: 67,
    block: "e",
    text: `Do you prefer to take the role of introducing others in a social gathering?`,
    scores: [1, 2],
  },
  {
    id: 68,
    block: "e",
    text: `Are you usually cautious when you start conversation with others?`,
    scores: [2, 1],
  },
  {
    id: 69,
    block: "e",
    text: `Do you consider yourself to be greatly sentimental?`,
    scores: [2, 1],
  },
  {
    id: 70,
    block: "e",
    text: `Do you usually control your temper?`,
    scores: [1, 2],
  },
];

export default QUESTIONS;
