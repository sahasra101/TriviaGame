//array of questions
// questions[0].question = 1st question
// questions[0].answers.a = answer option a
// questions[0].answers.b = answer option b
// questions[0].answers.c = answer option c
// questions[0].answers.d = answer option d
// questions[0].correctanswer = answer option a
var questions = [
    {
      question: "What is the diameter of our Earth?",
      answers: {
        a: "7,917.5 miles ",
        b: "24,901 miles ",
        c: "1 lightyear ",
        d: "1 earth radius, obviously "
      },
      correctAnswer: "a"
    },
    {
        question: "For how long is there continuous daylight at the North Pole?",
        answers: {
          a: "24 hours",
          b: "2 weeks",
          c: "6 months",
          d: "there is continuous daylight all year"
        },
        correctAnswer: "c"
    },
    {
        question: "Why doesn't Donald Trump want to release his taxes to the public?",
        answers: {
          a: "because he cheats on his taxes",
          b: "because he doesn't pay any",
          c: "because he defrauds the US government",
          d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the gravity on the moon?",
        answers: {
          a: "the same as the earth",
          b: "half the gravity of the earth",
          c: "1/6th the gravity of earth",
          d: "1/4th the gravity of earth"
        },
        correctAnswer: "c"
    },
    {
        question: "What will happen to the sun when it runs out of fuel for nuclear fusion?",
        answers: {
          a: "it will turn into a black hole",
          b: "it will go supernova",
          c: "it will turn into a planet",
          d: "it will become a red giant and then a white dwarf"
        },
        correctAnswer: "d"
    },
    {
        question: "What does DC stand for in DC comics?",
        answers: {
          a: "District of Columbia in honor of our nation's capital",
          b: "Dante Corpus",
          c: "Detective Comics",
          d: "Dubious Conformity"
        },
        correctAnswer: "c"
    },
    {
        question: "Why didn't Thor kill Thanos before Thanos killed half of all life in the universe?",
        answers: {
          a: "because Thor is a vegetarian and doesn't believe in killing",
          b: "because Thor was not strong enough",
          c: "because Thor was trying to be diplomatic and wanted to sign a treaty with Thanos",
          d: "because if he had killed Thanos, then the movie Endgame would not have been needed"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the following is not one of Superman's powers?",
        answers: {
          a: "x-ray vision",
          b: "telekinesis",
          c: "superstrength",
          d: "heatvision"
        },
        correctAnswer: "b"
    },
    {
        question: "How did George Washington die?",
        answers: {
          a: "He was bled to death by his doctors.",
          b: "He fell off a horse.",
          c: "He died of pneumonia.",
          d: "He was assasignated by the British."
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest bone in the body?",
        answers: {
          a: "the pelvis",
          b: "the ribcage",
          c: "the spine",
          d: "the femur"
        },
        correctAnswer: "d"
    }]


    // What is the diameter of our Earth?
    // Why doesn't Donald Trump want to release his taxes to the public?
    // What is the gravity on the moon?
    // What will happen to the sun when it runs out of fuel for nuclear fusion?
    // For how long is there continuous daylight at the North Pole?
    // What does DC stand for in DC comics?
    // Which of the following is not one of Superman's powers?
    // How did George Washington die?
    // What is the largest bone in the body?
    // what is the capital city of Peru?
    // Who is the first man in space?
    // Who built the Statue of Liberty?
    // What is the name of the galaxy we reside in?

console.log(questions[0].question);
console.log(questions[0].answers.a);
console.log(questions[0].answers.b);
console.log(questions[0].answers.c);
console.log(questions[0].answers.d);
console.log(questions[0].correctAnswer);

// var questionDiv = document.getElementById("questiondiv");
// var answerADiv = document.getElementById("choiceA");
// var answerBDiv = document.getElementById("choiceB");
// var answerCDiv = document.getElementById("choiceC");
// var answerDDiv = document.getElementById("choiceD");

function buildQuiz(){
    // quiz is made by adding innerHTML in an array format that is later joined.
    var MCQuesList = [];
  
    // for each question
    //currentQuestion = each item in questions and questionNumber = array index
    // currentQuestion.question at questionNumber 0 = questions
    questions.forEach(
      function(currentQuestion, questionNumber) {
        //innerHTML array of answer choices with radio button for each letter using for loop
        var answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<h3><label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]} 
            </label></h3>`
          );
        }
  
        // push this question and its answers to the output array as innerHTML
        MCQuesList.push(
          `<div class="question"><h2> ${currentQuestion.question} </h2></div>
          <div class="answers"> ${answers.join(' ')} </div>
          <br>`
        );
      }
    );
  
    $("#quiz").html(MCQuesList.join(''));
    console.log(MCQuesList); // to confirm innerHTML text
  }
  //call upon function to list questions and answer choices
  buildQuiz();



