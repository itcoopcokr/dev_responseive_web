## Cards 
- 05/card.html
    - 04/navbars.html 의 메뉴 내용 가져오기 
    - getbootstrap > Document > Components > Card
~~~
  <body>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">ITCOOP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </div>
  </nav>
~~~

- 05/card.html
~~~
  <div class="card cd">

  </div>
~~~

- 05/css/card.css
~~~
.cd {
    boarder: 2px solid red ;
}
~~~   
   
- 05/card.html card 이미지 추가 
~~~
  <div class="card cd">
    <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
  </div>
~~~   

- 05/card.html 
    - 이미지 아래 텍스트 div.card-block,h4.card-title
    - 가운데 오려면 text-center 클래스에 추가 
~~~
  <div class="card cd" style="width: 20rem;">
    <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
    <div class="card-block">
      <h4 class="card-title text-center">coffee is awesome</h4>
    </div>
  </div>
~~~
- 05/card.html 
    - 타이틀 아래에 설명 텍스트 
    - p.card-text
~~~
  <div class="card cd" style="width: 20rem;">
    <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
    <div class="card-block">
      <h4 class="card-title text-center">coffee is awesome</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing </p>
    </div>
  </div>
~~~   
 
- 05/card.html 
    - 텍스트 아래에 버튼 추가하기 
    - a.btn
~~~
  <div class="card cd" style="width: 20rem;">
    <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
    <div class="card-block">
      <h4 class="card-title text-center">coffee is awesome</h4>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </p>
      <a href="#" class="btn btn-primary">Buy me!</a>
    </div>
  </div>
~~~      
  
- 05/card.html
    - div.container 를 만들고 
    - 안에 위의 card 를 넣을 예정 
~~~
  <div class="container">

    <div class="row">
      <div class="col-sm-6">

      </div>
      <div class="col-sm-6">

      </div>
    </div>
  </div>
~~~
      
- 05/card.html
    - col 안에 위의 card의 내용을 넣어서 2개 만듬 
~~~
  <div class="container">

    <div class="row">
      <div class="col-sm-6">

        <div class="card cd" style="width: 20rem;">
          <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
          <div class="card-block">
            <h4 class="card-title text-center">coffee is awesome</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
            <a href="#" class="btn btn-primary">Buy me!</a>
          </div>
        </div>

      </div>

      <div class="col-sm-6">

        <div class="card cd" style="width: 20rem;">
          <img class="card-img-top" src="./img/coffee.jpg" alt="coffee">
          <div class="card-block">
            <h4 class="card-title text-center">coffee is awesome</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do </p>
            <a href="#" class="btn btn-primary">Buy me!</a>
          </div>
        </div>


      </div>
    </div>
  </div>
~~~          
  
<br/>
  
----

### Card groups
- getbootstrap > Documentatin > Components > Card 
    - Card Groups 의 내용을 복사 
    - div.container 안쪽의 아래에 
        - 이미지 coffee.jpg, watch.jpg, watch.jpg 
~~~

    <div class="card-group">
      <div class="card">
        <img class="card-img-top" src="./img/coffee.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="./img/watch.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="./img/parrot.jpg" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
~~~            

- 05/card.html
    - card group 위쪽 공백 띄우기
        - class.cardgr 추가  
~~~
    <div class="card-group cardgr">
~~~    
- 05/css/card.css
    - .cardgr 추가 
~~~
.cardgr {
    margin-top: 20px;
}
~~~