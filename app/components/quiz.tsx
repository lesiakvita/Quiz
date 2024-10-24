"use client";

import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const quizQuestions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "What is the largest ocean?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ["Tolstoy", "Shakespeare", "Twain", "Hemingway"],
    answer: "Shakespeare",
  },
  {
    question: "What is the square root of 16?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Dollar", "Euro", "Yen", "Won"],
    answer: "Yen",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    answer: "Da Vinci",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "Japan", "Russia"],
    answer: "Brazil",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kilimanjaro", "Everest", "Denali"],
    answer: "Everest",
  },
  {
    question: "Who invented the telephone?",
    options: ["Edison", "Bell", "Tesla", "Newton"],
    answer: "Bell",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["HO", "O2", "H2O", "H2"],
    answer: "H2O",
  },
  {
    question: "What is the hardest natural substance?",
    options: ["Gold", "Iron", "Diamond", "Silver"],
    answer: "Diamond",
  },
  {
    question: "What year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    answer: "1945",
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    answer: "Mercury",
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Einstein", "Babbage", "Turing", "Tesla"],
    answer: "Babbage",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    answer: "Antarctic",
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Eagle", "Horse"],
    answer: "Cheetah",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setShowScore(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const percentageScore = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 p-4 md:p-6">
      <div className="w-full max-w-lg md:max-w-3xl p-4 md:p-10 bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              You scored {score} out of {quizQuestions.length}! (
              {percentageScore}%)
            </h2>
            <p
              className={`text-xl md:text-2xl font-semibold mb-4 ${
                percentageScore >= 50 ? "text-green-600" : "text-red-600"
              }`}
            >
              {percentageScore >= 50
                ? "Congratulations!"
                : "Better luck next time!"}
            </p>
            <button
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 transition-colors"
              onClick={resetQuiz}
            >
              Retry Quiz
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mb-6 md:mb-8 text-2xl md:text-3xl font-bold text-gray-900 tracking-wide leading-relaxed">
              {quizQuestions[currentQuestionIndex].question}
            </h2>
            <div className="space-y-3 md:space-y-4">
              {quizQuestions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-2 md:px-6 md:py-3 text-md md:text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
