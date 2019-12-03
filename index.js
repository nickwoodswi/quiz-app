let QUESTIONS = [
  {
    question: `Who is the titular 'baby' in "The KKK Took My Baby Away"?`,
    answers: [
      "Johnny's ex-girlfriend",
      "Joey's ex-girlfriend",
      "Dee Dee's drug addiction",
      "Marky's contempt for the band",
    ],
    correct: "Joey's ex-girlfriend",
  },
  {
    question: "What is the brand name for Johnny's guitar of choice?",
    answers: ['Mosrite', 'Kramer', 'Fender', 'Squier'],
    correct: 'Mosrite',
  },
  {
    question: 'Which Ramone refused to visit Joey on his death bed?',
    answers: ['Elvis', 'CJ', 'Johnny', 'Dee Dee'],
    correct: 'Johnny',
  },
  {
    question: 'What brand of ditch liquor did the Ramones endorse in 1995?',
    answers: ['Thunderbird', 'Mad Dog 20/20', 'Colt 45', 'Steel Reserve'],
    correct: 'Steel Reserve',
  },
  {
    question: "Which Ramones cover famously ended with 'Up yours, Springfield'",
    answers: ["Surfin' Bird", 'Happy Birthday', "I Don't Wanna Grow Up", 'Do You Wanna Dance?'],
    correct: 'Happy Birthday',
  },
];

let current = 0;
let score = 0;

const $scoreCounter = $('.scoreCounter');
const $container = $('.container');

function generate(event) {
  event.preventDefault();
  const answers = QUESTIONS[current].answers
    .map(question => {
      return `<input required type="radio" name="radio" value="${question}">${question}<br>`;
    })
    .join('');
  $container.html(
    `<h1>${QUESTIONS[current].question}</h1>
            <form>
                ${answers}
            <button type="submit" class="answerButton">ANSWER</button>
            </form>
       `,
  );
}

function answerQuestion(event) {
  event.preventDefault();
  let userAnswer = $("input[name='radio']:checked").val();
  if (userAnswer === QUESTIONS[current].correct) {
    score += 1;
    $container.html(`<h2>CORRECT!</h2><button class="nextButton">NEXT QUESTION</button>`);
  } else {
    $container.html(`<h2>WRONG!</h2>`);
  }
  current += 1;

  //$container.html(`<button class="nextButton">NEXT QUESTION</button>`);
  $scoreCounter.html(`YOU'VE GOTTEN ${score} OUT OF ${QUESTIONS.length} RIGHT, PINHEAD!`);

  if (current === QUESTIONS.length) {
    $container.html(`<h2>GAME OVER!</h2><button class="startOver">TRY AGAIN?</button>`);
    return;
  }
}

function startOver() {
  event.preventDefault;
  location.reload();
}

$('.container').on('submit', 'form', answerQuestion);
$('.container').on('click', '.nextButton', generate);
$('.container').on('click', '.startOver', startOver);
