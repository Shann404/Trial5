const userchoicedisplay=document.querySelector('.userchoice');
const computerchoicedisplay=document.querySelector('.computerchoice');
const possiblechoices=document.querySelectorAll('button');
const resultdisplay=document.querySelector('.result');
let userchoice;
let computerchoice;
let result;

possiblechoices.forEach(possiblechoice =>
    possiblechoice.addEventListener('click' ,function(e){
        userchoice=e.target.className;
        userchoicedisplay.innerHTML=userchoice;
        generatecomputerchoice();
        generateresult();
}));



function generatecomputerchoice(){
    const randomNumber= Math.floor(Math.random()*3);
    console.log(randomNumber);
    if (randomNumber===0){
        computerchoice='Rock';
    }
    if(randomNumber===1){
        computerchoice='Paper';
    }
    if(randomNumber===2){
        computerchoice='Scissors';
    }
    computerchoicedisplay.innerHTML=computerchoice;
}
function generateresult(){
    if(computerchoice === userchoice){
        result='Its a draw!';
    }
    if(computerchoice === 'Rock' && userchoice === "Paper"){
        result='You won!';
    }
    if(computerchoice === 'Rock' && userchoice === "Scissors"){
        result='You lost!';
    }
    if(computerchoice === 'Paper' && userchoice === "Rock"){
        result='You lost!';
    }
    if(computerchoice === 'Paper' && userchoice === "Scissors"){
        result='You won!';
    }
    if(computerchoice === 'Scissors' && userchoice === "Paper"){
        result='You lost!';
    }
    if(computerchoice === 'Scissors' && userchoice === "Rock"){
        result='You won!';
    }
    resultdisplay.innerHTML=result;
}

