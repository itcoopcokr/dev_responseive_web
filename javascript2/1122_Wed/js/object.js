function display(birth) {
    var now = new Date ;
    var age = now.getFullYear()-birth ;
    alert(age+" 몇 살입니다.")
}


function sleep(num){	//[1/1000초]

    var now = new Date();
    var stop = now.getTime() + num;

   while(true){
       now = new Date();
       if(now.getTime() > stop)return;
   }
}

var John = {
    name : 'John',
    birthYear : 1990,
    job : 'student'
}


var Jane = {
    name : 'Jane',
    birthYear : 2000,
    job :'teacher'
}

var Person = function (name, birthYear, job) {
    this.name = name ;
    this.birthYear = birthYear ;
    this.job = job ;
}

var Mark = new Person("Mark", 2010, 'doctor');

var arr = [] ;
arr.push(John);
arr.push(Jane);
arr.push(Mark);

//console.log(arr[2].name);

var text = "" ;

text +="<table border=\'1\'>" ;
text += "   <tr>" ;
text +="        <th>#</th>" ;
text +="        <th>이름</th>" ;
text +="        <th>생년</th>" ;
text +="        <th>직업</th>" ;
text +=    "</tr>" ;

for(var i=0 ; i < arr.length ; i++){
    text +="<tr>" ;
    text +="    <td>"+(i+1)+"</td>" ;
    text +="    <td>"+arr[i].name+"</td>" ;
    text +="    <td>"+arr[i].birthYear+"</td>" ;
    text +="    <td>"+arr[i].job+"</td>" ;
    text += "</tr>" ;
}

text +="</table>" ;

//document.write(text);
/*
5개

순위 | 이름 | 생년 | 직업 | 사는 곳 | 우편번호 | 가입 날짜 | 가입시간 }

 5    Park  2000 docotr 서울  101  2017-11-22  14:20   Date
 4   Marry  1990 designer 부산 102  오늘날짜   시-분
 3   Peter  2010 teacher  수원 103  오늘날짜   시-분
 2   Jane   1995 student  전주 104   오늘날짜  시-분
 1   Bill   2011 programmer 경주 105 오늘날짜  시-분


1. function object : Person 처럼
2. array 만들어서 1개씩 object
3. 테이블 만들기 . document.write()
*/
var Register = function (name, birthYear, job, address, postcode, date) {
    this.name = name ;
    this.birthYear = birthYear ;
    this.job = job ;
    this.address = address ;
    this.postcode = postcode ;
    this.date = date ;
}


var registerArr = [] ;

var now = new Date();
registerArr.push( new Register("Park",2000, "doctor","서울","101", now ) ) ;

// sleep(2000);
var now2 = new Date();
registerArr.push( new Register("Marry",1990, "designer","부산","102",now2) ) ;

// sleep(1000);
var now3 = new Date();
registerArr.push( new Register("Peter",2010 , "teacher","수원","103",now3) ) ;

// sleep(3000);
var now4 = new Date();
registerArr.push( new Register("Jane",1995, "student","전주","104", now4) ) ;

// sleep(2000);
var now5 = new Date();
registerArr.push( new Register("Bill",2011, "programmer","경주","105", now5) ) ;

var jobs = ["doctor","designer","teacher","student","programmer"] ;

var text = "" ;

text +="<h1>게시판</h1>" ;

text +="<table border=\'1\'>" ;
text += "   <tr>" ;
text +="        <th>#</th>" ;
text +="        <th>이름</th>" ;
text +="        <th>생년</th>" ;
text +="        <th>직업</th>" ;
text +="        <th>주소</th>" ;
text +="        <th>우편번호</th>" ;
text +="        <th>가입연도</th>" ;
text +="        <th>가입시간</th>" ;
text +=    "</tr>" ;

for(var i=0 ; i < registerArr.length ; i++){
    text +="<tr>" ;
    text +="    <td>"+(registerArr.length-i)+"</td>" ;
    text +="    <td>"+registerArr[i].name+"</td>" ;
    // text +="    <td>"+registerArr[i].birthYear+"</td>" ;
    text +="    <td><button onclick=\"display("+registerArr[i].birthYear+")\">"+registerArr[i].birthYear+"</button></td>" ;
    text +="    <td>" ;
    text +="       <select> " ;
                    for(var j=0 ; j < jobs.length ; j++){
                        if( registerArr[i].job == jobs[j] ){
    text +="            <option selected>"+jobs[j]+"</option> " ;

                        } else {
    text +="            <option>"+jobs[j]+"</option> " ;
                        }

                    }

    text +="       </select> " ;
    text +=     "</td>" ;
    //text +=   registerArr[i].job+

    text +="    <td>"+registerArr[i].address+"</td>" ;
    text +="    <td><input type=\'text\' value=\'"+registerArr[i].postcode+"\'></td>" ;
    var day = registerArr[i].date ;
    var da = new Date() ;
    console.log(da-day);
    text +="    <td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>" ;
    text +="    <td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>" ;
    text += "</tr>" ;
}

text +="</table>" ;

document.write(text);

