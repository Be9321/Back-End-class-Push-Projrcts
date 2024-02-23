// Define the Question object
class Question {
  constructor(question, options, correctAnswer) {
    this.question = question;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}

// Define the Quiz object
class Quiz {
  constructor() {
    this.questions = [];
    this.score = 0;
    this.currentQuestionIndex = -1;
  }

  // Method to add a question to the quiz
  addQuestion(question, options, correctAnswer) {
    const newQuestion = new Question(question, options, correctAnswer);
    this.questions.push(newQuestion);
  }

  // Method to display a random quiz question
  displayRandomQuestion() {
    this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);
    const currentQuestion = this.questions[this.currentQuestionIndex];
    console.log("Question: " + currentQuestion.question);
    console.log("Options:");
    currentQuestion.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }

  // Method to check the user's answer and update score
  checkAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
      console.log("Correct!");
      this.score++;
    } else {
      console.log("Incorrect!");
    }
  }

  // Method to start the quiz
  startQuiz() {
    console.log("Welcome to the Quiz!");
    this.questions.forEach((question, index) => {
      console.log(`Question ${index + 1}: ${question.question}`);
    });
    this.displayRandomQuestion();
  }

  // Method to end the quiz and display the final score
  endQuiz() {
    console.log("Quiz ended. Your final score is: " + this.score);
  }
}

// Example usage:
const quiz = new Quiz();

quiz.addQuestion(
  "What is HTML in full?",
  ["hypertext", "markuplanguage", "language", "hypertext markup language","none"],
  1
);
quiz.addQuestion(
  "What is the largest city in africa?",
  ["kigali", "Bujumbura", "Kinchassa", "Abuja","none"],
  2
);
quiz.addQuestion(
  "What is the First book in old testament bible?",
  ["exodus", "luke", "Genesis", "mathew"],
  2
);

quiz.startQuiz();

// Assuming the user inputs their answer via prompt in a real environment
// Here we'll simulate user input with hardcoded answers for demonstration
quiz.checkAnswer(4); // User answers hypertext markup language 
quiz.checkAnswer(3); // User answers Abuja
quiz.checkAnswer(3); // User answers Genesis

quiz.endQuiz();
