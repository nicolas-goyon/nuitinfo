class Question {
    constructor(text, choices, answer1,answer2,answer3) {
      this.text = text;
      this.choices = choices;
      this.answer1 = answer1;
      this.answer2 = answer2;
      this.answer3 = answer3;
    }

    isAnswer1(choice) {
      return this.answer1 === choice;
    }
    isAnswer2(choice) {
        return this.answer2 === choice;
      }
      isAnswer3(choice) {
        return this.answer3 === choice;
      }
  }

  let questions = [
    new Question("Tu as vu cette personne dans le campus, qui te plait...", ["J'ose pas, je n'y vais pas","Quelqu'un y va pour moi...","Je l'accoste"],"J'ose pas, je n'y vais pas","Quelqu'un y va pour moi...","Je l'accoste"),
    new Question("Tu prends ton courage à deux mains, tu décides de l'accoster, comment tu fais ?", ["Je la suis partout","Je lui envoie un message","Je vais la voir"],"Je la suis partout","Je lui envoie un message","Je vais la voir"),
    new Question("Cela fait maintenant 1 mois que vous vous fréquentez, tu veux qu'elle vienne chez toi...", ["Tu la drogues","Tu sort la capote", "Tu sens une connexion, tu lui proposes un dernier verre chez toi"],"Tu la dragues","Tu sort la capote", "Tu sens une connexion, tu lui proposes un dernier verre chez toi"),
    new Question("Vous êtes chez toi, tu n'as plus de préservatifs, que fais-tu ?", ["Peut importe, où est le problème ?","Je vais vite en acheter", "C'est pas grave, on peut faire autre chose"], "Peut importe, où est le problème ?","Je/elle va(is) vite en acheter", "C'est pas grave, on peut faire autre chose"),
    new Question("Quel est le moyen de contraception le plus fiable selon vous", ["Rien, 0 contrainte","La pilule, logique","Le préservatif, évidemment"],"Rien, 0 contrainte","La pilule, logique","Le préservatif, évidemment"),
    ];
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isAnswer1(answer)) {
        this.score++;
      }
      if (this.getCurrentQuestion().isAnswer2(answer)) {
        this.score+=2;
      }
      if (this.getCurrentQuestion().isAnswer3(answer)) {
        this.score+=3;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    }, 
    endQuiz: function() { 
      if (quiz.score<=5){
      endQuiz1HTML = ` 
       <h1>Quiz terminé !</h1>
      
        <h3> C'est pas top... </h3>
        </br>
        <h4>Bon, toi tu n'as pas écouté en cours de sexualité à l'école.<br />
        Tu as encore tout à apprendre<br />
        Pas de panique, va consulter notre site et tu finiras expert en la matière :)<br/></h4>`;
      this.elementShown("quiz", endQuiz1HTML) }
      if (quiz.score<=10 && quiz.score>5){
      endQuiz2HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Tu t'y connais un peu  </h3>
       </br>
       <h4> Bon tu as les bases mais il manque encore quelques connaissances qui pourraient t'aider voire plus.<br/>
       Nous te conseillons d'aller voir le site qui est consacré aux sujets que maîtrise pas trop.<br/>
       T'es sur la bonne voie :) </h4>`;
     this.elementShown("quiz", endQuiz2HTML);}
     if (quiz.score<=15 && quiz.score>10){
      endQuiz3HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Tu es incollable! </h3>
       </br>
       <h4>Félicitations !<br/>
       Nous n'avons plus rien à t'apprendre. </br>
       Nous le repétons, protéges-toi et fais attention à toi <br/>
       Tu peux toujours aller consulter nos informations sur le site ci-contre :) </h4>`;
     this.elementShown("quiz", endQuiz3HTML);}
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();

  
 


  
  

