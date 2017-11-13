/**
 * Created by sangjunpark on 2017. 11. 13..
 */

// 큰따옴  &quot;  &#34;
// 작은따옴표       &#39;
var name = 'John' ;
var name2 = 'Jane' ;
var age = 26 ;
var age2 = 10 ;

console.log(typeof(name));
console.log(typeof(age)) ;

console.log(name+age) ;

var unified = name+age ;
console.log(unified) ;
console.log(typeof(unified));

var unified2 = name + (age+age2);
console.log(unified2);

var job, isMaried ;
job = "driver" ;
isMaried = false ;

var str = name+' is a '+ age +', job '+job + 'is he married?'+ isMaried ;
console.log(str) ;

var html_str = ' \"I\'m a student\" ' ;
document.write(html_str) ;

document.write("<html>");
document.write("<head>") ;

// var str2 = "<html><head></head><body>"+"<h1>Hello world</h1>"+"</body></html>" ;
var str2 = "<h1>Hello world</h1>" ;
document.write(str2);

    // <html>
    // <head>
    // </head>
    // <body>
    // <h1>Hello world</h1>
    // </body>
    // </html>
var table_str ="<table border=\"1\">" +
                    "<tr>" +
                        "<td>순위</td>"+
                        "<td>타이틀</td>"+
                        "<td>설명</td>"+
                        "+<td>비고</td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>1</td>"+
                        "<td>HTML</td>"+
                        "<td>웹문서구조</td>"+
                        "<td></td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>2</td>"+
                        "<td>CSS</td>"+
                        "<td>HTML 디자인</td>"+
                        "<td></td>"+
                    "</tr>"+
                    "<tr>"+
                        "<td>3</td>"+
                        "<td>javascript</td>"+
                        "<td>동적구조</td>"+
                        "<td></td>"+
                    "</tr>"+

                    "<tr>"+
                        "<td>4</td>"+
                        "<td>jQuery</td>"+
                        "<td>DOM 동적구조</td>"+
                        "<td></td>"+
                    "</tr>"+

                "</table>" ;

//document.write(table_str) ;

var lastName = prompt("What is the last name?");
console.log(lastName);
document.write("<h1>"+lastName+"</h1>") ;

alert(lastName);




