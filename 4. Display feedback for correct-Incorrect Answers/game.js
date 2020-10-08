const question = getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text");

let currentQuestion={}
let acceptingAnswers =false;
let score =0;
let questioncounter=0;
let availableQuestions =[];

let question={
	{
	question: 'Inside which Html do we put the Javascript??'
    choice 1:"<script>",
    choice 2:"<javascript>",
    choice 3:"<js>",
    choice 4:"<scripting>",
    answer 1,
},
{
	question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice 1:"<script href='xxx.js'>",
    choice 2:"<script name='xxx.js'>",
    choice 3:"<script src='xxx.js'>",
    choice 4:"<script file='xxx.js'>",
    answer 3,
},
{
	question: "How do you write 'Hello World' in the alert box?",
    choice 1:"msgBox('Hello World');",
    choice 2:"alertBox('Hello World');",
    choice 3:"msg('Hello World');",
    choice 4:"alert('Hello World');",,
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
	
		retun window.location.assign('/end.html');
	}
	questioncounter++;
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
    
   selectedChoice.parentElement.classList.add(classToApply);

   setTimeout(() =>{
   	selectedChoice.parentElement.classList.remove(classToApply);
	getNewQuestion();
}, 1000);
   });

});
startGame();