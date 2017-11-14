/**
 * Created by sangjunpark on 2017. 11. 14..
 */
/*
function calculateAge(birth){
    var age = 2017- birth ;
    return age ;
}

var ageJohn = calculateAge(1990) ; // 2017-1990
// console.log(ageJohn);
*/

//덧셈 함수
function sum(first, second){
    var s = first + second ;
    return s ;
}
//빼기 함수
function minus(first, second) {
    return first - second ;
}
//곱하기 함수
function mul(first, second){
    return first * second ;
}
//연산자 인식 함수
function calculate(num1, num2, oper) {
    var sum2 ;
    if(oper == "+"){
        sum2 = sum(num1, num2) ;
    } else if(oper == "-") {
        sum2 = minus(num1, num2) ;
    } else if(oper == "*"){
        sum2 = mul(num1, num2) ;
    }
    return sum2 ;
}
var first = 2 ;
var second = 5 ;
var operator = "+" ; // "-", "*" ;

//document.write("("+first+"+"+second+")="+sum(2, 5) +"<br>") ;
//document.write("("+first+"-"+second+")="+minus(2, 5) +"<br>") ;
//document.write("("+first+"*"+second+")="+mul(2, 5) +"<br>") ;

//document.write("("+first+operator+second+")="+calculate(first,second,operator)) ;



/*
이름, 년도(출생일)
은퇴 65세,  2017
얼마나 남았는지

남았으면 얼마나 남았습니다,
오버됐으면, 이미 은퇴했습니다

html 브라우저 출력
 */
/* 은퇴자이름, 나이, 현재년도, 총 일하는기간 */
function checkRetirement(age, workPerioid) {
    var remain = workPerioid - age ;
    return remain ;
}
/* 이름, 생년, 현재년도, 총 일하는 기간 */
function yearsRetirement(birth, year, period) {
    var age = year - birth ;
    var remain= checkRetirement(age, period) ;
    return remain ;
}
//은퇴 글씨 출력
function displayRetire(remain){
    if(remain ==0 ) {
        document.write("올해가 은퇴합니다");
    } else if(remain > 0 ){
        document.write("은퇴가 "+remain+"년 남았습니다");
    } else {
        document.write("이미 은퇴했습니다");
    }
}

/* 이름, 생년, 현재년도, 최대 일하는기간 */
var currentYear = 2017
var remain = yearsRetirement(2007, currentYear, 20);
//document.write("현재는 "+currentYear+"년 입니다<br>");
//displayRetire(remain);

function third() {
    var c ="Hey" ;
    console.log("third Hey")
}

function second() {
    var b ="Hi!" ;
    third();
    console.log("second Hi")
}

function first() {
    var a ="Hello" ;
    second();
    console.log("first Hello")
}

//first();

