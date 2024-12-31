

function randomNumber()
{
   return Math.trunc(Math.random()*6);
}
let turn=1;
let player1Total=0;
let player2Total=0;
let currentScore=0;

const DICE=['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png']

document.querySelector('.btn--roll').addEventListener('click',()=>{
    let number=randomNumber();
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').setAttribute('src',"./dice/"+DICE[number])
    if(turn==1)
    {

        currentScore=number+1;
        player1Total+=number+1;
        document.querySelector('.player1 .score').textContent=currentScore;
        document.querySelector('.player1 .total-score').textContent=player1Total;
    }

    else{
        currentScore=number+1;
        player2Total+=number+1;
        document.querySelector('.player2 .score').textContent=currentScore;
        document.querySelector('.player2 .total-score').textContent=player2Total;
    }
    
})

document.querySelector('.btn--hold').addEventListener('click',()=>{
    document.querySelector('.dice').classList.add('hidden')
if(turn==1)
{
    document.querySelector('.player1').classList.remove('turn')
    document.querySelector('.player2').classList.add('turn')
    turn=2;
}
else{
    document.querySelector('.player2').classList.remove('turn')
    document.querySelector('.player1').classList.add('turn')
    turn=1;
}
})

document.querySelector('.btn--new').addEventListener('click',()=>{
 turn=1;
 player1Total=0;
 player2Total=0;
 currentScore=0;
 document.querySelector('.player1 .score').textContent=currentScore;
        document.querySelector('.player1 .total-score').textContent=player1Total;

        document.querySelector('.player2 .score').textContent=currentScore;
        document.querySelector('.player2 .total-score').textContent=player2Total;   
        
        document.querySelector('.dice').classList.add('hidden')

})




