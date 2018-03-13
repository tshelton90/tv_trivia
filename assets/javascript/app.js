jQuery(document).ready(function($) {
    // set of questions and answers
    var question1 = {
            character: 'Elaine Benes',
            a: 'Frasier',
            b: 'Seinfeld',
            c: 'Cheers',
            d: 'Friends',
            answer: 'B: Seinfeld',
            gifRight: 'assets/images/seinfeld.gif',
            gifWrong: 'assets/images/seinfeldwrong.gif',
            gifOOT: 'assets/images/outoftime.gif'
        };
    var question2 = {
            character: 'Pam Beasley',
            a: 'Parks and Recs',
            b: 'The Big Bang Theory',
            c: 'The Office',
            d: 'How I Met Your Mother',
            answer:'C: The Office',
            gifRight: 'assets/images/theoffice.gif',
            gifWrong: 'assets/images/theofficewrong.gif'
        };
    var question3 = {
        character: 'Montgomery Burns',
        a: 'American Dad',
        b: 'Family Guy',
        c: 'The PJs',
        d: 'The Simpsons',
        answer: 'D: The Simpsons',
        gifRight: 'assets/images/simpsons.gif',
        gifWrong: 'assets/images/simpsonswrong.gif'
        };

    var question4 = {
        character: 'Topanga Lawrence',
        a: 'Boy Meets World',
        b: 'Sabrina',
        c: 'Good Times',
        d: 'Meet the Lawrences',
        answer: 'A: Boy Meets World',
        gifRight: 'assets/images/bmw.gif',
        gifWrong: 'assets/images/bmwwrong.gif'
    };

    var question5 = {
        character: 'Dale Gribble',
        a: 'American Dad',
        b: 'South Park',
        c: 'King of the Hill',
        d: 'Futurama',
        answer: 'C: King of the Hill',
        gifRight: 'assets/images/koth.gif',
        gifWrong: 'assets/images/kothwrong.gif'
    };

    var question6 = {
        character: 'Phil Dumphy',
        a: 'Blackish',
        b: 'Superstore',
        c: 'The Goldbergs',
        d: 'Modern Family',
        answer: 'D: Modern Family',
        gifRight: 'assets/images/modernfamily.gif',
        gifWrong: 'assets/images/modernfamilywrong.gif'
    };

    var question7 = {
        character: 'Gene Belcher',
        a: 'The Cleveland Show',
        b: 'Bobs Burgers',
        c: 'King of the Hill',
        d: 'The Simpsons',
        answer: 'B: Bobs Burgers',
        gifRight: 'assets/images/bobsburgers.gif',
        gifWrong: 'assets/images/bobsburgerswrong.gif'
    };

    var question8 = {
        character: 'Balki Bartokomous',
        a: 'Alf',
        b: 'The Facts of Life',
        c: 'Perfect Strangers',
        d: 'Night Court',
        answer: 'C: Perfect Strangers',
        gifRight: 'assets/images/perfectstrangers.gif',
        gifWrong: 'assets/images/perfectstrangerswrong.gif'
    };

    var question9 = {
        character: 'Abed Nadir',
        a: '30 Rock',
        b: 'Community',
        c: 'Parks and Rec',
        d: 'Arrested Development',
        answer: 'B: Community',
        gifRight: 'assets/images/community.gif',
        gifWrong: 'assets/images/communitywrong.gif'
    };
    var question10 = {
        character: 'Phil Banks',
        a: 'The Wonder Years',
        b: 'The Fresh Prince',
        c: 'Full House',
        d: 'Family Matters',
        answer: 'B: The Fresh Prince',
        gifRight: 'assets/images/freshprince.gif',
        gifWrong: 'assets/images/freshprincewrong.gif'
    };
    // array of questions
    var quesArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
    var index = 0;
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var numTimeout = 0;
   
    // functionality of start button being clicked
    $('#start-button').click(function() {
        $('#start-button').hide();
        $('.question-page').show();
        $('#timer').show()
        displayQues();
        $('#timer').html(
            `You have ${time} seconds remaining.`);
    });    
    // Displays the next question resets the timer and begins the countdown
    function displayQues(){
        time = 15
        counter = setInterval(increment, 1000)
        $('.question-page').html(
            `<p id="question">Name the sitcom belonging to this character: <br/> <br/>${quesArray[index].character}</p>
            <div class="answer" id="answer1">A: ${quesArray[index].a}</div>
            <div class="answer" id="answer2">B: ${quesArray[index].b}</div>
            <div class="answer" id="answer3">C: ${quesArray[index].c}</div>
            <div class="answer" id="answer4">D: ${quesArray[index].d}</div>`
        );
    };
    // Counts down & displays the remaining time. Stops if time = 0 and starts an animation when time remaining < 10sec.
    function increment() {
        time--
        $('#timer').html(
             `You have ${time} seconds remaining.`);
        if (time == 0) {
            timeout();
            stop();
        }; 
    };
    // stops the countdown and decides if there are more questions to go onto to
    function stop() {
        clearInterval(counter);
        index++
        if (index == quesArray.length) {
            setTimeout(endgame, 4000);
        } else {
            setTimeout(displayQues, 4000);
        };
    };
    // Lets the user know they got the question right and displays an image.
    function rightAnswer() {
        $('.question-page').html(
            `<p id="answer">Congratulations the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[index].gifRight} alt=${quesArray[index].answer} gif>
            `);
    };
    // cuts to the answer display page and displays wrong answer
    function wrongAnswer() {
        wrong++;
        $('.question-page').html(
            `<p id="answer">Wrong, the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[index].gifWrong} alt=${quesArray[index].answer} gif>
            `);
    };
    // cuts to the answer display page and shows the user ran out of time
    function timeout() {
        numTimeout++
        $('.question-page').html(
            `<p id="answer">You have run out of time, the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[0].gifOOT} alt=${quesArray[index].answer} gif>
            `);
    };
    // resets the game after the final page
    function gameReset() {
        $('#start-button').show();
        $('.question-page').hide();
    };
    // this is the final stats page
    function endgame() {
        $(".question-page").html(`<p id="final-right">You got ${right} answers correct!</p>
            <p id="final-wrong">You got ${wrong} wrong!</p>
            <p id="final-timeouts">You had ${numTimeout} unanswered questions!</p>`);
        $('#timer').hide()
        index = 0;
        right = 0;
        wrong = 0;
        numTimeout=0;
        setTimeout(gameReset, 5000)
    };
    //adds functionality to clicking on the optional answer buttons
    $('.question-page').on('click', '.answer', function(){
        text = $(this).text()
        console.log(text)
        if ($(this).text() == quesArray[index].answer) {
            right++;
            rightAnswer();
            stop();    
        } else {
            wrongAnswer();
            stop();
        };
    });
// this is the end keep this at the bottom
});


    