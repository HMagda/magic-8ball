const ballImg = document.querySelector('.ball-img');
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

ballImg.addEventListener('click', getAndDisplayAnswer);

function getAndDisplayAnswer() {
  checkQuestion();
}

function pickAndDisplayRandomAnswer() {
  const answer = answersArray[Math.floor(Math.random() * answersArray.length)];
  console.log(answer);
  answerField.innerHTML = `The answer is: ${answer}`;
}

function checkQuestion() {
  const questionStr = questionInput.value;
  const stringLength = questionStr.length;

  if (stringLength >= 3) {
    if (questionStr.charAt(stringLength - 1) === '?') {
      pickAndDisplayRandomAnswer();
      errorField.textContent = '';
    } else {
      answerField.innerHTML = '';
      errorField.textContent = 'Your question should end with a question mark ("?")';
    }
  } else {
    errorField.textContent = 'Ask a question';
  }
}
