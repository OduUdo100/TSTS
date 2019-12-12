function bootstrapApplication() {
    $("#start-button").on("click", function() {
        openQuiz();
    });
    $(document).on("click", "#login", openLogin);
    $(document).on("click", "#register", openReg);
    $(document).on("click", "#has-account", openLogin);
    $(document).on("click", "#home-button", resetHome);
    $(document).on("click", "#submit-answer", answerSubmitted);
    $(document).on("change", "input[name=answer]", function() {
        $("#submit-answer").prop("disabled", false);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function nextQuestion() {
    $("#quiz-section").html("");
    STORE.currentQuestion += 1;
    openQuiz();
}

function nextFilter() {
    FILL.currentItem += 1;
    openFilters();
}

function answerSubmitted(e) {
    e.preventDefault();
    const placer = $('input[name=answer]:checked').val();
    nextQuestion();
}

function hideSection(selector) {
    $(selector).hide();
}

function showSection(selector) {
    $(selector).show();
}

var userLogin = document.getElementById("user-login"); 
var userPass = document.getElementById("password-login"); 
var databasePass = document.getElementById("password-check"); 
var el_down = document.getElementById("tester"); 

function loadDataBase(user){
  jQuery.get(user, function(data) {
  document.getElementById("password-check").innerHTML = data;
  });
}

function database_store(){
  document.getElementById("user-check").innerHTML = userLogin.value;
  var userFetch =  userLogin.value + ".txt";
  loadDataBase(userFetch);
}

function database_check() { 
  var a = userLogin.value; 
  var b = document.getElementById("user-check").innerHTML;
  var c = userPass.value; 
  var d = document.getElementById("password-check").innerHTML;
  var ans1 = a.localeCompare(b); 
  var ans2 = c.localeCompare(d);
  var res = "";
  if (ans1 == 0) {
    if (ans2 == 0){
      res = 'Your login and password are correct!'; 
    }
  } else { 
    res = 'invalid username or password'; 
    console.log(ans1 + " " + ans2 + ", the a was " + a + " and b was " + b + " c is " + c + " and d is " + d);
  } 
  el_down.innerHTML = res;
} 

function openLogin() {
    hideSection("#welcome-section");
    hideSection("#quiz-section");
    hideSection("#filter-section");
    hideSection("#register-section");
    hideSection("#search-section");
    showSection("#login-section");
}

function openReg() {
    hideSection("#welcome-section");
    hideSection("#quiz-section");
    hideSection("#filter-section");
    hideSection("#login-section");
    hideSection("#search-section");
    showSection("#register-section");
}

function openFilters() {
    hideSection("#welcome-section");
    hideSection("#quiz-section");
    showSection("#search-section");
    const filterView = generateFilterElement(FILL.filterItems[FILL.currentItem]);
    for (i = 0; i < 4; i++) {
        $("#filter-section").append(filterView);
        showSection("#filter-section");
        nextFilter();
    }
}

function openQuiz() {
    hideSection("#welcome-section");
    if (STORE.currentQuestion < 4) {
        const quizView = generateQuizElement(STORE.quizItems[STORE.currentQuestion]);
        $("#quiz-section").append(quizView);
        showSection("#quiz-section");
    } else if (FILL.currentItem < 4){
      openFilters();
    }
}

function resetHome(){
  FILL.currentItem = 0;
  STORE.currentQuestion = 0;
  $("#quiz-section").html("");
  $("#filter-section").html("");
  hideSection("#login-section");
  hideSection("#register-section");
  hideSection("#search-section");
  showSection("#welcome-section");
}

function generateQuizElement(quizItem) {
    var test0, test1, test2, test3 = STORE.quizItems[STORE.currentQuestion];
    return `
    <div class='content-wrapper m3'>
      <h1>${quizItem.question}</h1>
    </div>
    <div class='content-wrapper m1'>  
      <form role="form">
        <fieldset>
          <legend>Select ${quizItem.type}:</legend>
          <input id="answer-one" type="radio" name="answer" value=${test0}>
            <label for="answer-one">${quizItem.answers[0]}</label><br>
          <input id="answer-two" type="radio" name="answer" value=${test1}>
            <label for="answer-two">${quizItem.answers[1]}</label><br>
          <input id="answer-three" type="radio" name="answer" value=${test2}>
            <label for="answer-three">${quizItem.answers[2]}</label><br>
          <input id="answer-four" type="radio" name="answer" value=${test3}>
            <label for="answer-four">${quizItem.answers[3]}</label><br>
        </fieldset><br>
        <div class='center submit-wrapper'>
          <button role="button" class='quiz-button' id='submit-answer' disabled>SUBMIT</button>
        </div>
      </form>
    </div>`;
}

function generateFilterElement(filterItem) {
    return `
    <div class='content-wrapper-2 m1'>
      <h1>${filterItem.name}</h1> 
      <h3>${filterItem.status}<br>
      <h3>${filterItem.courses[0]}<br>  
      <h3>${filterItem.courses[1]}<br>
    </div>`;
}
$(bootstrapApplication);