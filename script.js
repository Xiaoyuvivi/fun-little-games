//chanllenge 1//
function ageInDays(){
    var birthYear = prompt('Which year were you born?');
    var ageInDayss =(2021 - birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ ageInDayss + ' days old.')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//chanllenge 2//
function generatorBeauty(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-beauty-generator');
    image.src ="you-are.gif";
    div.appendChild(image);
}


//chanllenge 3//
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
 botChoice = numberToChoice(randToRpsInt());
 console.log('Computer choice:',botChoice);
 results = decideWinner(humanChoice,botChoice);
 console.log(results);
 message = finalMessage(results);
 console.log(message);

 rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsInt() {
 return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase ={
        'rock':{'scissors':1, 'rock':0.5,'paper':0},
        'paper':{'rock':1, 'paper':0.5,'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5,'rock':0},
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
      return {'message': 'You lost!','color':'red'};
    } else if (yourScore === 0.5){
    return {'message': 'You tied!','color':'yellow'};
    } else
    return {'message': 'You won!','color':'green'};
    }

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imagesDatabase[humanImageChoice]+ "' height = 150 width =150 style = 'box-shadow:0px 10px 50px purple' >"
    botDiv.innerHTML = "<img src='"+ imagesDatabase[botImageChoice]+ "' height = 150 width =150 style = 'box-shadow:0px 10px 50px red' >"
    messageDiv.innerHTML = '<span style=" color:'+finalMessage.color+'"><h2>'+finalMessage.message+"</h2></span>"
    
    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);

}

//Challenge 4//
var all_buttons =document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i<all_buttons.length;i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    } else if(buttonThingy.value ==='green'){
        buttonsGreen();
    } else if (buttonThingy.value ==='reset'){
      buttonColorReset();
    } else if (buttonThingy.value ==='random'){
      randomColor();
    }
}

function buttonsRed(){
    for (let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let i=0; i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor(){
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning']
 for (let i=0; i< all_buttons.length; i++){
     let randomNUmber = Math.floor(Math.random()*4);
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add(choices[randomNUmber]);
 }
}