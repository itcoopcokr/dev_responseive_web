/**
 * Created by sangjunpark on 2017. 11. 15..
 */

var name = 'John' ;
var birth = 2000 ;
function getAge(birthArg){
    var num = 2017-birthArg ;
    return num ;
}

var person = {
    name : 'John',
    birth : 2000,
    getAge : function () {
        var num = 2017- this.birth ;
        return num ;
    }
}

console.log(person.getAge());
person.birth = 2010 ;
console.log(person.getAge());
person.name = 'Mike' ;
console.log(person);
/*
var person2 = new Object(); //var person2 = {} ;
person2.name = 'Jane' ;

console.log(person2.name) ;
console.log(person2['name']);
*/

/*
객체 이름을 building :
- 나라 : nation - korea
- 도시 : city - seoul
- 건축년도  : birth - 1900
- 건축기간 : period 함수 (현재 - 건축년도)
- 건축자 : maker "John", "Jane", "Mike"
*/
var building = {
    nation : "Korea",
    city : 'seoul',
    birth : 1900,
    period : function () {
        var num = 2017 - this.birth;
        return num ;
    },
    maker : ["John","Jane","Mike"]
}

//building 수정 => China , Beijing, 2000, "John2","Jane2"
building.nation = "China" ;
building.city = "Beijing" ;
building.birth = 2000 ;
building.maker[0] = "John2" ;
building.maker[1] = "Jane2" ;


// setTimeout( function(){ window.open("http://www.naver.com", "네이버", "width=500, height=500, resizable=yes" );} , 2000 );
var i=0 ;
// Math.round() ; 반올림
// Math.ceil() ; 올림
// Math.floor() ; //내림
// setInterval(function () {
//         var num = Math.random() ;
//         console.log(Math.ceil( (num*10)+1 ));
//     }, 1000);

var date = new Date();
console.log(date.getYear()+1900);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일");
console.log(date.getHours()+"시");
console.log(date.getMinutes()+"분");
console.log(date.getMilliseconds()+"초") ;