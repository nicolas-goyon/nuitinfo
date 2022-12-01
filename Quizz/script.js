class Question {
    constructor(text, choices, answer1,answer2,answer3,answer4) {
      this.text = text;
      this.choices = choices;
      this.answer1 = answer1;
      this.answer2 = answer2;
      this.answer3 = answer3;
      this.answer4 = answer4;
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
      isAnswer4(choice) {
        return this.answer4 === choice;
      }
  }
  let questions = [
    new Question("Vous partez dans un nouveau pays...", ["Vous avez fait le plein de cartes et guides", "Vous laissez le gps vous guidez", "Vous suivez les panneaux, c'est l'aventure!", "Tous les chemins mènent à Rome"], "Vous avez fait le plein de cartes et guides","Vous laissez le gps vous guidez", "Vous suivez les panneaux, c'est l'aventure!","Tous les chemins mènent à Rome"),
    new Question("Votre crush vous dit qu'il/elle n'aime que les gens qui apprécient Marie Laurencin ", ["Vous aimeriez qu'elle vous fasse découvrir","C'est une musicienne non?", "Quelle coïncidence, vous aussi!", "Vous avez adoré son duo avec Joe Dassin.."], "Vous aimeriez qu'elle vous fasse découvrir","C'est une musicienne non?","Quelle coïncidence, vous aussi!","Vous avez adoré son duo avec Joe Dassin.."),
    new Question("Après plusieurs pertes,vous gagnez une belle somme d'argent à une machine à sous", ["Vous empochez la somme et vous arrêtez de jouer","Vous hésitez...", "Vous en gardez une partie et rejouez le reste", "Génial! Vous allez pouvoir gagner encore plus en misant tout"], "Vous empochez la somme et vous arrêtez de jouer","Vous hésitez...","Vous en gardez une partie et rejouez le reste","Génial! Vous allez pouvoir gagner encore plus en misant tout"),
    new Question("Voilà 25 minutes que vous attendez chez le médecin", ["Vous bouillez intérieurement en silence","Vous regardez votre montre toutes les minutes", "Vous râlez à voix haute,en tapant du pied", "Vous expliquez à votre voisin que c'est toujours comme ça"], "Vous bouillez intérieurement en silence","Vous regardez votre montre toutes les minutes","Vous râlez à voix haute,en tapant du pied","Vous expliquez à votre voisin que c'est toujours comme ça"),
    new Question("J'aime partir en vacances", ["au même endroit","au soleil", "où je ne suis jamais allée", "sur un coup de tête"], "au même endroit","au soleil","où je ne suis jamais allée","sur un coup de tête"),
    new Question("Pour vous, quelle est la signification de jeu?", ["une activité qui permet de se divertir","un moyen de se faire des amis", "être en compétition avec les autres", "un moyen de prouver votre supériorité"], "une activité qui permet de se divertir","un moyen de se faire des amis","être en compétition avec les autres","un moyen de prouver votre supériorité"),
    new Question("Une personne vous maintient que son idée est la bonne", ["Vous vous laissez convaincre","Vous la laissez parler,vous savez laquelle est la bonne", "Vous essayez de la convaincre du contraire", "Vous lui prouvez par a+b que c'est faux"], "Vous vous laissez convaincre","Vous la laissez parler,vous savez laquelle est la bonne","Vous essayez de la convaincre du contraire","Vous lui prouvez par a+b que c'est faux"),
    new Question("Quand vous perdez,quelle est votre réaction?", ["Vous rigolez et passez à autre chose","Vous faites comme si de rien n'était", "Votre adversaire devient votre ennemi", "Perdre?"], "Vous rigolez et passez à autre chose","Vous faites comme si de rien n'était","Votre adversaire devient votre ennemi","Perdre?")
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
      if (this.getCurrentQuestion().isAnswer4(answer)) {
        this.score+=4;
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
      if (quiz.score==8){
      endQuiz1HTML = ` 
       <h1>Quiz terminé !</h1>
      
        <h3> Vous êtes: le rock </h3>
        <h4>Le rock est un joueur qui joue très peu souvent. En effet, s'il joue c'est qu'il est sûr de gagner. <br />
        Il surjoue très peu ses cartes car il n'aime pas bluffer. Le rock n'aime pas le risque et n'est pas joueur.<br />
        Alors ne te lance pas dans le poker pro, reste à miser des cacahuètes. C'est mieux pour toi et ton portefeuille.<br/>
        Par contre tu peux toujours jouer avec AllinTech on t'accepte avec plaisir!</h4>`;
      this.elementShown("quiz", endQuiz1HTML) }
      if (quiz.score<=11 && quiz.score>8){
      endQuiz2HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le nit  </h3>
       <h4> Le nit est un joueur assez peureux. Il préfère se coucher dès le départ pour minimiser les pertes.<br/>
       Pour lui, perdre le moins possible est déjà une grande victoire. Le bluff n'est pas une option pour lui,<br/>
       tout simplement car il n'arrive jamais jusqu'a ce niveau de la partie.<br/>
       Pour résumer, vous feriez mieux de ne pas vous mettre au poker pro.<br/>
       Ne reste plus qu'à venir évoluer avec AllinTech!</h4>`;
     this.elementShown("quiz", endQuiz2HTML);}
     if (quiz.score<=13 && quiz.score>11){
      endQuiz3HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le weak tight </h3>
       <h4>Le weak tight est LE joueur angoissé. Il n'aime pas les jeux aressifs et se sent vite dépasser.<br/>
       Il essaie de jouer mais dès qu'il rentre dans le vrai jeu il préfère s'écarter.C'est un peu la poule mouillée des joueurs.<br/>
       Il faut apprendre à destresser! Alors viens jouer avec AllinTech et détends toi.</h4>`;
     this.elementShown("quiz", endQuiz3HTML);}
     if (quiz.score<=19 && quiz.score>13){
      endQuiz4HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le calling station </h3>
       <h4> Le calling station est un joueur passif. Il fait acte de présence.Il est toujours présent pour suivre les mises mais <br/>
       mais ne les augmentent jamais quel que soit son jeu.Il ne se met à bluffer que s'il se retrouve en très mauvaise posture.<br/>
       Il joue sans vraiment jouer, lui même ne sait pas pourquoi il est là.<br/>
       Mais ne vous en faites pas, la plupart des gens sont Callin Station de base mais, en jouant ils s'améliorent et ne le sont plus.<br/>
       Alors, viens apprendre à jouer avec AllinTech!</h4>`;
     this.elementShown("quiz", endQuiz4HTML);}
     if (quiz.score<=25 && quiz.score>19){
      endQuiz5HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le TAG </h3>
       <h4>Le TAG est LE joueur de poker par excellence. Il choisit intelligement les mains qu'il joue et les joue avec agressivité.<br/>
       Son but? Gagner le plus possible d'argent. Il sait cerner les autres joueurs assez facilement et détecte leur faiblesse. <br/>
       Alors si tu es un TAG, qu'est ce que tu attends pour te mettre au poker? Viens jouer avec AllinTech maintenant! Tu vas tous les plumer.</h4>`;
     this.elementShown("quiz", endQuiz5HTML);}
     if (quiz.score<=26 && quiz.score>25){
      endQuiz6HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le LAG </h3>
       <h4>le LAG aime jouer. Il sait prendre les bonnes décisions en fonction de sa position.<br/>
       Il sait ne pas se laisser prendre par son égo et peut se retirer sans hésitation s'il voit qu'il va perdre.<br/>
       Il se fait souvent sous estimer par ses adversaires et c'est ce qui le rend redoutable.<br/>
       Alors, viens jouer avec AllinTech et plume les tous, ils ne se méfient pas de l'eau qui dort.</h4>`;
     this.elementShown("quiz", endQuiz6HTML);}
     if (quiz.score<=28 && quiz.score>26){
      endQuiz7HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le Donkey </h3>
       <h4> Vous n'êtes clairement pas le joueur le plus intelligent du groupe, qu'on se le dise.<br/>
       Vous pensez constamment que tout le monde est en train de bluffer et préfèrez suivre votre intuition que la raison.<br/>
       Vous n'arrivez pas vraiment à comprendre le jeu et à étudier les signes des joueurs. Mais ne vous en faites pas, <br/>
       cela viendra avec un peu d'entrainement, alors venez changer de type de joueur en jouant avec AllinTech.</h4>`;
     this.elementShown("quiz", endQuiz7HTML);}
     if (quiz.score<=32 && quiz.score>28){
      endQuiz8HTML = ` 
      <h1>Quiz terminé !</h1>
     
       <h3> Vous êtes: le Maniac </h3>
       <h4> Vous êtes le joueur farouche et indomptable. Vous avez un jeu très agressif, vous relancez tout le temps les mises<br/>
       et adorez bluffer. Vous jouez souvent à "qui à la plus grosse" et cela vous porte souvent préjudice.<br/>
       Pour résumer vous êtes un joueur imprévisible avec un gros égo mais qui permet de garder le jeu actif,<br/>
       Alors venez jouez avec AllinTech.</h4>`;
     this.elementShown("quiz", endQuiz8HTML);}
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

  
 


  
  

