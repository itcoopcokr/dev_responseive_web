var dice ;
var roundScore = 0 ;
var activePlayer  = 0 ;
var scores = [0,0] ;

//시작할 때 주사위가 보이지 않게
document.querySelector('.dice').style.display ='none' ;

//시작할 때 숫자들 모두 0으로 바꾸기
document.getElementById('score-0').textContent='0' ;
document.getElementById('score-1').textContent='0' ;
document.getElementById('current-0').textContent='0' ;
document.getElementById('current-1').textContent='0' ;

var btn_roll = function () {
    //alert('roll 버튼 클릭');
    //1.랜덤한 숫자 나오게 하기
    dice =  Math.floor(Math.random()*6)+1 ;
    console.log(dice);

    // 2. 주사위 그림 보여주기
    //document.querySelector('.dice').style.display ='block' ;
    var diceDOM = document.querySelector('.dice') ;
    diceDOM.style.display = 'block' ;
    diceDOM.src ='./img/dice-'+dice+'.png' ;

    // document.querySelector('#score-0').textContent = dice ;
    //document.getElementById('score-0').textContent = dice ;

    // 3. 주사위가 1이 나오면, 플레이어가 바뀐다
    if(dice !== 1){
        // add score
        roundScore += dice ;
        document.querySelector('#current-'+activePlayer).textContent = roundScore ;

    } else {
        // next player
        nextPlayer();

    }

} ;

document.querySelector('.btn-roll').addEventListener('click',btn_roll);

function btn_hold() {
    //alert('hold 버튼을 눌렸습니다.');
    // 1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    // 2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    // 3 .

    // 4. 다음 플레이어
}
document.querySelector('.btn-hold').addEventListener('click', btn_hold);

//다음 플레이어로 변동
function nextPlayer() {

    if(activePlayer === 0) {
        activePlayer = 1 ;
    } else {
        activePlayer = 0 ;
    }
    //  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;

    roundScore = 0 ;

    //플레이어 바뀔 때 current-0 , current-1 값을 모두 0으로 바꾸기
    document.getElementById('current-0').textContent = 0 ;
    document.getElementById('current-1').textContent = 0 ;

    // 플레이어 해당하는 패널 바꾸기
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // 플레이어 바뀔 때 주사위 안 보이기
    document.querySelector('.dice').style.display ='none';
}
