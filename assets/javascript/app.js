jQuery(document).ready(function($) {
        
    // /*----------------------------
    //     make entire div clickable
    // -----------------------------*/
    
    //     $(".myBox").click(function(){
    //         window.location=$(this).find("a").attr("href"); 
    //         return false;
    //     });
    
    // });
//need a start button that when clicked kicks off the game

    // need a set of questions and answers
    var question1 = {
            character: 'Elaine Benes',
            a: 'Frasier',
            b: 'Seinfeld',
            c: 'Cheers',
            d: 'Friends',
            answer: 'B: Seinfeld',
            gif: 'assets/images/seinfeld.gif'
        };
    var question2 = {
            character: 'Pam Beasley',
            a: 'Parks and Recs',
            b: 'The Big Bang Theory',
            c: 'The Office',
            d: 'How I Met Your Mother',
            answer:'C: The Office',
            gif: 'assets/images/theoffice.gif'
        };
    var question3 = {
        character: 'Montgomery Burns',
        a: 'American Dad',
        b: 'Family Guy',
        c: 'The PJs',
        d: 'The Simpsons',
        answer: 'D: The Simpsons',
        gif: 'assets/images/simpsons.gif'
        };

    var quesArray = [question1, question2, question3]
    
    // need to iterate through said array to choose the question
    var index = 0;
    var right = 0;
    var wrong = 0;
    var unanswered = 0;
    var numTimeout = 0;
   
  
    $('#start-button').click(function() {
        $('#start-button').hide();
        $('.question-page').show();
        displayQues();
        $('#timer').html(
            `You have ${time} seconds remaining.`);
        // do something with the text
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
            // $(".question-page").empty();
        }; 
    };

    // stops the countdown and decides if there are more questions to go onto to
    function stop() {
        clearInterval(counter);
        index++
        if (index == quesArray.length) {
            setTimeout(endgame, 5000);
        } else {
            setTimeout(displayQues, 5000);
        };
    };

    // Lets the user know they got the question right and displays an image.
    function rightAnswer() {
        // $('.question-page').empty
        $('.question-page').html(
            `<p id="answer">Congratulations the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[index].gif} alt=${quesArray[index].answer} gif>
            `);
    };

    function wrongAnswer() {
        wrong++;
        // $('.question-page').clear
        $('.question-page').html(
            `<p id="answer">Wrong, the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[index].gif} alt=${quesArray[index].answer} gif>
            `);
    };

    function timeout() {
        numTimeout++
        // $('.question-page').clear
        $('.question-page').html(
            `<p id="answer">You have run out of time, the correct answer was: <br/> <br/>${quesArray[index].answer}</p>
             <img id="gif" src=${quesArray[index].gif} alt=${quesArray[index].answer} gif>
            `);
    };

    function gameReset() {
        $('#start-button').show();
        $('.question-page').hide();
        $('#timer').hide()
    };

    function endgame() {
        // $('.question-page').clear
        $(".question-page").html(`<p id="final-right">You got ${right} answers correct!</p>
            <p id="final-wrong">You got ${wrong} wrong!</p>
            <p id="final-timeouts">You had ${numTimeout} unanswered questions!</p>`);
        index = 0;
        right = 0;
        wrong = 0;
        numTimeout=0;
        setTimeout(gameReset, 5000)
       // $("button").show(); need to reset the page
    };


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
    
        // $(".question-page").empty();
    });
        
    

    
    

      
    
     
     
    
    //need to set a timer for each question to be answered
    //need to display(dom manipulation) the question and timer once they have been set up and selected
    //need to add functionality based on clicks of answers
    // if right answer wrong answer or no answer is clicked change dom accordingly
    //reset the loop so that a new question is displyed
    // once the loop has been iterated through once reset the dom to show stats





// this is the end keep this at the bottom
});


    