/*Highscore.js*/
/*source:https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/learn/lecture/13703696#overview*/

const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");