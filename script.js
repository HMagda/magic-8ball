const ballImg = document.querySelector('.ball-img > img');
const questionInput = document.querySelector('.question-area > input');
const answerField = document.querySelector('.answer');
const errorField = document.querySelector('.error');

const answersArray = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',

  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',

  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',

  'Do not count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

ballImg.addEventListener('click', shakeBall);

function shakeBall() {
  ballImg.classList.add('shake-animation');
  setTimeout(getAndDisplayAnswer, 1000);
}

function getAndDisplayAnswer() {
  checkQuestion();
}

function pickAndDisplayRandomAnswer() {
  const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
  answerField.innerHTML = `The answer is: ${answer}`;
}

function checkQuestion() {
  const questionStr = questionInput.value;

  if (questionStr.length >= 3 && questionStr.endsWith('?')) {
    pickAndDisplayRandomAnswer();
    errorField.textContent = '';
  } else {
    answerField.innerHTML = '';
    errorField.textContent =
      questionStr.length >= 3
        ? 'Your question should end with a question mark ("?")'
        : 'Ask a question';
  }

  ballImg.classList.remove('shake-animation');
}
