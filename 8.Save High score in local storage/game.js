const question = getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarfull = document.getElementById("progressBarfull");

let currentQuestion={}
let acceptingAnswers =false;
let score =0;
let questioncounter=0;
let availableQuestions =[];

let questions = [
	{
	question: 'Inside which Html do we put the Javascript??'
    choice1:"<script>",
    choice2:"<javascript>",
    choice3:"<js>",
    choice4:"<scripting>",
    answer 1,
},
{
	question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1:"<script href='xxx.js'>",
    choice2:"<script name='xxx.js'>",
    choice3:"<script src='xxx.js'>",
    choice4:"<script file='xxx.js'>",
    answer 3,
},
{
	question: "How do you write 'Hello World' in the alert box?",
    choice1:"msgBox('Hello World');",
    choice2:"alertBox('Hello World');",
    choice3:"msg('Hello World');",
    choice4:"alert('Hello World');",,
    answer 4,
}

];
//constants
const CORRECT_BONUS=10;
const MAX_QUESTIONS=3;

startGame =() =>{
	questioncounter =0;
	score =0;
	availableQuestions=[...questions];
	getNewQuestion();
};

getNewQuestion = () =>{
	if(availableQuestions.length === 0 || questioncounter >=MAX_QUESTIONS){
		localStorage.setItem('mostRecentScore', score);
	
	
		retun window.location.assign("/end.html");
	}
	questioncounter++;
	progressText.innerText = `Question${questionCounter}/${MAX_QUESTIONS}`;
	//update the progress bar of the quiz app
	progressBarfull.style.width = '([questionCounter/MAX_QUESTIONS)*100]px';

	const questionIndex =Math.floor(Math.random()*availableQuestions.length);
	currentQuestion =availableQuestions[questionIndex];
	question.innerText = currentQuestion.question;

	choices.forEach(choice =>{

		const number =choice.dataset["number"];
		choice.innerText =currentQuestion["choice" +number];
});

availableQuestions.splice(questionIndex,1);
acceptingAnswers =true;
};

choices.forEach((choice =>{
choice.AddEventListener("click", e => {
	if(!acceptingAnswers) return;

	acceptingAnswers = false;
	const selectedChoice = e.target;
	const selectedAnswer =selectedChoice.dataset["number"];

	const classToApply =
	selectedAnswer ==currentQuestion.answer?"correct" :" incorrect";

	if(classToApply ==="correct"){
		incrementScore(CORRECT_BONUS);
	}	
    
   selectedChoice.parentElement.classList.add(classToApply);

   setTimeout(() =>{
   	selectedChoice.parentElement.classList.remove(classToApply);
	getNewQuestion();
}, 1000);
   });

});

incrementScore =num =>{
	score+=num;
	scoreText.innerText =score;
};

startGame();