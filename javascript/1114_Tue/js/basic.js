/**
 * Created by sangjunpark on 2017. 11. 14..
 */

function first(par){
    console.log('test') ;
}

var first2 = function (par) {
    console.log('test')
}

var names = [ 'John','Jane','Mark'] ;
            // 0   1   2   3    4   5   6  7   8   9
var numbers = [10 ,11 ,12, 13, 14, 15, 16, 17, 18, 19 ] ;
var testArr = [ 1, 'John', true, names] ;

/*
console.log(names[2]);
names.push("Log");

console.log(names[names.length-1]);

console.log(names.indexOf('Jane'));
console.log(names.indexOf('Log4'));
*/

//초기값 ; 비교해서 참/거짓 ; 액션(값증가)
console.log("length="+numbers.length) ;
for(var i=0 ; i < numbers.length ; i++) {

    // 0,1,2   ||    6,7,8,9 번째 출력
    if( i < 3 || i > 5) {

        //값이 17이면 "17입니다" console 출력
        if(numbers[i] == 17) {
            console.log(numbers[i]+"입니다");
            //break ;
        } else {
            console.log(numbers[i]) ;
        }
    }

    else {
        // "------------ 15 --------------" console 출력
        console.log("------------"+numbers[i]+"-----------");
    }
}

//도전
//nubmers 배열을 0번째에서 2번째까지 또는 6번째 끝까지 console 출력하시요
//0,1,2   ||    6,7,8,9

/*
//3이거나 5이면 or 숫자를 출력하세요
if( 3 || 5){
    console.log("숫자를 출력하세요 ")
}
//3이고 5이면 and
if( 3 && 5 ){
    console.log("숫자를 출력하세요 ")
}
*/
