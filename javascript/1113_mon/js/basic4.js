/**
 * Created by sangjunpark on 2017. 11. 13..
 */


function calcuateAge(year, birth){
    var age  = year - birth ;

    if(age===27){
        return "20대" ;

    } else if(age === 10 ){
        return "10대" ;

    } else if(age ===7){
        return "아동" ;
    }

    return age ;
}


var year = 2017 ;
var birth = 2011 ;

var ageJohn = calcuateAge( year, birth ) ;
console.log(ageJohn);

console.log(ageJohn);


var ageMike = calcuateAge(2000)
var ageMary = calcuateAge(2010)



//console.log("ageJohn:"+ageJohn) ;
//console.log("ageMike:"+ageMike) ;
//console.log("ageMary:"+ageMary) ;

var scope ="global scope" ;

function checkscope() {
    var scope = 'local scope+' ;
    console.log(scope);
}

checkscope();
console.log(scope+"==");
