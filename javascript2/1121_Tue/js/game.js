var dice ;
var roundScore  ;
var activePlayer   ;
var scores  ;
var gamePlaying ;

function init() {
    roundScore = 0 ;
    activePlayer  = 0 ;
    scores = [0,0] ;
    gamePlaying = true ;

    //시작할 때 주사위가 보이지 않게
    document.querySelector('.dice').style.display ='none' ;
    //시작할 때 숫자들 모두 0으로 바꾸기
    document.getElementById('score-0').textContent='0' ;
    document.getElementById('score-1').textContent='0' ;
    document.getElementById('current-0').textContent='0' ;
    document.getElementById('current-1').textContent='0' ;

    // 승리한 winner! 텍스트 및 클래스 변경
    document.getElementById('name-0').textContent ='Player 1' ;
    document.getElementById('name-1').textContent ='Player 2' ;
    // winner 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    // active 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // 처음 player 1 에게 active 클래스 추가
    document.querySelector('.player-0-panel').classList.add('active');
}
init() ;

var btn_roll = function () {
    //alert('roll 버튼 클릭');
    if(gamePlaying) {
        //1.랜덤한 숫자 나오게 하기
        dice = Math.floor(Math.random() * 6) + 1;
        //console.log(dice);

        // 2. 주사위 그림 보여주기
        //document.querySelector('.dice').style.display ='block' ;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './img/dice-' + dice + '.png';

        // document.querySelector('#score-0').textContent = dice ;
        //document.getElementById('score-0').textContent = dice ;

        // 3. 주사위가 1이 나오면, 플레이어가 바뀐다
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // next player
            nextPlayer();

        }
    } //if(gamePlaying) {

} ;

document.querySelector('.btn-roll').addEventListener('click',btn_roll);

function btn_hold() {
    //alert('hold 버튼을 눌렸습니다.');
    // 1. current 값을 scores 에 더함
    scores[activePlayer] += roundScore ;

    // 2. 화면 변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer] ;

    var input = document.querySelector('.final-score').value ;
    console.log("input="+input);

    var winningScore ;
    if(input){
        winningScore = input ;
    } else {
        winningScore = 20 ;
    }

    // 3 . 100점이 넘으면  ..50
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!' ;
        document.querySelector('.dice').style.display = 'none';

        //이겼을 때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying = false ;

    } else {
        nextPlayer() ;
    }

    // 4. 다음 플레이어
    //nextPlayer();
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

function btn_new() {
    //alert('새로운 게임을 눌렸습니다');
    init() ;
}
document.querySelector('.btn-new').addEventListener('click', btn_new );

