// ============================================================
// YOUR QUIZ — edit this file to make it yours!
// ============================================================
//
// This is the only file you need to change.
// Ask Claude to help you add questions, update the answers,
// and write results messages that fit your personality.
//
// HOW IT WORKS:
//   - Add as many questions as you like to the array below
//   - Each question has 4 options and one correct answer
//   - "correct" is the index of the right answer (0, 1, 2, or 3)
//   - The results messages show based on how well the quiz-taker scores
// ============================================================

const quizConfig = {

  // Your name — shown on the intro screen
  name: "Tim",

  // The tagline shown under your name on the intro screen
  intro: "Think you know me? There's only one way to find out.",

  // Messages shown on the results screen based on score
  results: {
    high: "You really know me! We must be close. 🎉",   // 80% or above
    mid:  "Not bad — but there's definitely more to learn about me.",  // 50–79%
    low:  "Looks like we need to hang out more. Come find me!",        // below 50%
  },

  // Your questions — replace these two examples with your own!
  questions: [
    {
      question: "What is my name?",
      options: ["Tom", "Tim", "Tony", "Tyler"],
      correct: 1,  // Tim
    },
    {
      question: "What is my dog's name?",
      options: ["Luna", "Bella", "Ambar", "Coco"],
      correct: 2,  // Ambar
    },
    {
      question: "What is my favourite food?",
      options: ["Pizza", "Sushi", "Tacos", "Steak"],
      correct: 3,  // Steak
    },
    {
      question: "Who is the most beautiful woman on Earth?",
      options: ["Jennifer", "Maria", "Sara", "Sofia"],
      correct: 2,  // Sara
    },
  ],

};
