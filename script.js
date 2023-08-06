const questions = [
    {
      question: "What is the CEO of Jio Company ?",
      answers: ["Paris", "London", "Rome", "New York"],
      correctAnswer: "Sangeeta Agarwal"
    },
    {
      question: "What is the CEO of AIRTEL Company?",
      answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Gopal Vittal"
    },
    {
      question: "What is the Head Office of VI Company?",
      answers: ["H2O", "CO2", "H2SO4", "NaCl"],
      correctAnswer: "GandhiNagar"
    },
    {
      question: "What is the Full Form of SIM ?",
      answers: ["H2O", "CO2", "H2SO4", "NaCl"],
      correctAnswer: "Subscriber Identity Module"
    },
    {
      question: "What is the CEO of Google Company ?",
      answers: ["H2O", "CO2", "H2SO4", "NaCl"],
      correctAnswer: "Sundar Pichai"
    }
  ];
  
  const currentQuestionIndex = 0;
  
  function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
  }
  
  function showQuestion() {
    const question = getRandomQuestion();
    document.getElementById("question").innerHTML = question.question;
    const answerOptions = question.answers.map((answer, index) => {
      return `<input type="radio" name="answer" value="${index}"> ${answer}`;
    });
    document.getElementById("answer-options").innerHTML = answerOptions.join(" ");
  }
  
  function submitAnswer() {
    const answerIndex = document.querySelector("input[name='answer']:checked").value;
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  
    if (answerIndex === correctAnswerIndex) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
  }
  
  showQuestion();
  