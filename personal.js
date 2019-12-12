const STORE = {
    currentQuestion: 0,
    quizItems: [
    { 
      question: "What subject would you like help in?", 
      answers: ["Math", "Reading", "Science", "Art"],
      type: "Subject"
    },
    { 
      question: "How far along are you in your degree?", 
      answers: ["Freshman", "Sophmore", "Junior", "Senior"],
      type: "Status"
    },
    { 
      question: "When will you need this help by?", 
      answers: ["A few days", "A week", "Two weeks", "A month"],
      type: "Time Period"
    },
    { 
      question: "When are you available?", 
      answers: ["Morning [9AM - 12PM]", "Afternoon [12PM - 3PM]", "Early Evening [3PM - 6PM]", "Late Evening [After 6PM]"],
      type: "Availability"
    }
  ]};

  const FILL = {
    currentItem: 0,
    filterItems: [
    { 
      name: "John Thomas", 
      courses: ["Calculus 1", "Calculus 2"],
      status: "Junior"
    },
    { 
      name: "Jennifer Aniston", 
      courses: ["Pre-Calc", "Algebra"],
      status: "Senior"
    },
    { 
      name: "Abraham Fish", 
      courses: ["Geometry", "Trigonometry"],
      status: "Freshman"
    },
    { 
      name: "Jeff Smith", 
      courses: ["English 202", "Creative Writing"],
      status: "Junior"
    }
  ]};

  const USERDATA = {
    users: [
      {
        username: "",
        password: "",
        preferences: ["", "", "", ""]
      }
    ]
  };