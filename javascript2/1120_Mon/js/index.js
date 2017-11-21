function button(sitename) {
    var site ;
    if(sitename === 'daum'){
        site ='다음';
    } else if(sitename === 'naver'){
        site = '네이버';
    }
    var check = confirm(site+'으로 이동합니다');

    if( (sitename === 'daum') && check ){
        window.open("https://www.daum.net");
    } else if( (sitename === 'naver') && check ){
        window.open("https://www.naver.com");
    }

}

function btn_mouseover() {
    //alert('마우스가 올라갔습니다');
}

function input_alert() {
    /*alert('3글자 이상 입력해야됩니다');*/
}

