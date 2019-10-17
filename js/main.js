

// //game 1
const cards = [
  {
      cardId: "0",
      type: "ghost",
      cardClass: "fas fa-ghost"
  },
  {
      cardId: "1",
      type: "pastafarianism",
      cardClass: "fas fa-pastafarianism"
  },
  {
      cardId: "2",
      type: "spider",
      cardClass: "fas fa-spider"
  },
  {
      cardId: "3",
      type: "book-dead",
      cardClass: "fas fa-book-dead"
  },
  {
      cardId: "4",
      type: "crow",
      cardClass: "fas fa-crow"
  },
  {
      cardId: "5",
      type: "fire",
      cardClass: "fas fa-fire"
  }
]
const doubleCards = []
for(var i = 0 ; i < cards.length ; i++){
  doubleCards.push(cards[i])
  doubleCards.push(cards[i])
}

const randomDoubleCards = []

while (doubleCards.length !== 0){
  var randomIndex = Math.floor(Math.random() * doubleCards.length);
  randomDoubleCards.push(doubleCards[randomIndex]);
  doubleCards.splice(randomIndex , 1);
}

const cardsInPlay = []
const cardsInPlayEvent= []

function flipCard1 (){

var cardId = this.getAttribute('id');

  cardsInPlay.push(randomDoubleCards[cardId].cardId);
  cardsInPlayEvent.push(cardId)
  
  this.setAttribute('type', randomDoubleCards[cardId].type);
  this.setAttribute('class', 'show')
  this.innerHTML = '<i class="'+randomDoubleCards[cardId].cardClass+'"></i>'
  this.removeEventListener('click', flipCard1)
if(cardsInPlay.length === 2){
  checkForMatch();
  }    
}


var counter1 = 0
function checkForMatch(){
  
  if(cardsInPlay[0] === cardsInPlay[1]){
      //var show = document.getElementById(randomDoubleCards[cardsInPlay[0]].cardId).getAttribute('type')
      for(var i = 0 ; i < cardsInPlayEvent.length ; i++ ){
          document.getElementById(cardsInPlayEvent[i]).setAttribute('class', 'match')
          //document.getElementById(cardsInPlayEvent[i]).setAttribute('class', 'show')
          document.getElementById(cardsInPlayEvent[i]).removeEventListener('click', flipCard1)
          cardsInPlay.pop()
      }
      counter1++
      cardsInPlayEvent.pop()
      cardsInPlayEvent.pop()
      
  }else{
      setTimeout(() => {
      for (let i = 0; i < cardsInPlayEvent.length; i++) {
          document.getElementById(cardsInPlayEvent[i]).setAttribute('class', 'card')
          document.getElementById(cardsInPlayEvent[i]).addEventListener('click', flipCard1)
          cardsInPlay.pop()
      }
      cardsInPlayEvent.pop()
      cardsInPlayEvent.pop()
      },500)  
  }
}

function createBoard1() {
  for (var i = 0; i < randomDoubleCards.length ; i++) {
  var cardElement = document.createElement('li');
  //cardElement.setAttribute('src','images/back.png');
      cardElement.setAttribute('id',i);
      cardElement.setAttribute('class', 'card')
  cardElement.addEventListener('click', flipCard1);
      document.getElementById('game-board').appendChild(cardElement);
      
      var createElementWithSysmbol = document.createElement('i')
      
      document.getElementById(i).appendChild(createElementWithSysmbol)
}
}
  
//createBoard1()

//game 2 

const imgPieces = [
  {
      pieceId: "0",
      piecePath: "images/0.jpg",
      rank: 0
  },
  {
      pieceId: "1",
      piecePath: "images/1.jpg",
      rank: 1
  },
  {
      pieceId: "2",
      piecePath: "images/2.jpg",
      rank: 2
  },
  {
      pieceId: "3",
      piecePath: "images/3.jpg",
      rank: 3
  },
  {
      pieceId: "4",
      piecePath: "images/4.jpg",
      rank: 4
  },
  {
      pieceId: "5",
      piecePath: "images/5.jpg",
      rank: 5
  },
  {
      pieceId: "6",
      piecePath: "images/6.jpg",
      rank: 6
  },
  {
      pieceId: "7",
      piecePath: "images/7.jpg",
      rank: 7
  },
  {
      pieceId: "8",
      piecePath: "images/8.jpg",
      rank: 8
  }
]

const randomPieces = []

while (imgPieces.length !== 0){
  var randomIndex = Math.floor(Math.random() * imgPieces.length);
  randomPieces.push(imgPieces[randomIndex]);
  imgPieces.splice(randomIndex , 1);
}

const newDisplay = []
const newDisplayId = []

function flipCard (){ 
  console.log(this.getAttribute('id'));

  var pieceId = randomPieces[this.getAttribute('id')].pieceId

  console.log(pieceId);
  
  newDisplay.push(pieceId)
  console.log(newDisplay)
  newDisplayId.push(this.getAttribute('id'))

  console.log(randomPieces)
  this.removeEventListener('click', flipCard)
  
if(newDisplay.length === 2){
      checkForMatch2() 
  }    
}


var counter2 = false
function checkForMatch2(){

  var path0 = 'images/'+newDisplay[0]+'.jpg'
  var path1 = 'images/'+newDisplay[1]+'.jpg'
  var id0 = newDisplayId[0]
  var id1 = newDisplayId[1]
  var tmpId = 11 ;
  console.log(path0);
  console.log(path1);
  
  
  //document.getElementById(newDisplayId[1]).setAttribute('src', path0)

  document.getElementById(newDisplayId[0]).setAttribute('src', path1)
  document.getElementById(newDisplayId[1]).setAttribute('src', path0)
  document.getElementById(newDisplayId[0]).setAttribute('id', tmpId)
  document.getElementById(newDisplayId[1]).setAttribute('id', id0)
  document.getElementById(tmpId).setAttribute('id', id1)
  document.getElementById(newDisplayId[0]).addEventListener('click', flipCard)
  document.getElementById(newDisplayId[1]).addEventListener('click', flipCard)
  for (let i = 0; i < 2; i++) {
      
      newDisplay.pop()
      newDisplayId.pop()   
  }
  var x = document.getElementsByTagName('img')
  const y = []
  for (let i = 0; i < x.length; i++) {
      //console.log(x[i].toString());
      y.push(document.getElementsByTagName('img')[i].getAttribute('src'))
  }
  //console.log(y);
  for (let i = 0; i < y.length; i++) {
      if(y[i] === "images/"+1+".jpg"){
          counter2++
      }        
  }
  if (y[0] === "images/0.jpg" && y[1] === "images/1.jpg" &&y[2] === "images/2.jpg"
  &&y[3] === "images/3.jpg"&& y[4] === "images/4.jpg" && y[5] === "images/5.jpg"
  &&y[6] === "images/6.jpg" && y[7] === "images/7.jpg" && y[8] === "images/8.jpg"){
      console.log('Done');
      counter2 = true
      
  }
  
}

function createBoard2() {
  for (var i = 0; i < randomPieces.length ; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src',randomPieces[i].piecePath);
      cardElement.setAttribute('id',i);
      cardElement.setAttribute('class', 'imges')
  cardElement.addEventListener('click', flipCard);
      document.getElementById('game_board1').appendChild(cardElement);
}
}
//createBoard()

// main


const scrnarios = {
  scrnario1: "<p class='normaltemt'>Huh ...</p>",
  scrnario2: "<p class='normaltemt'>Where am I ? ... </br>Why is it so DARK ?</p>",
  scrnario3: "<p class='animtext'>You are a prisoner in your own DREAM ...</br>Your Nightmare</p>",
  scrnario4: "<p class='animtext'>You must get out within 2 min </br>or you will be sleep forever</p>",
  scrnario5: "<p class='animtext'>to get out </br>you must solve some puzzles</p>",
  scrnario6: "<p class='animtext'>Remmber you just have </br><strong>2 min<strong></p>",
  scrnario7: "<p class='animtext'>Here is your first puzzle</p>",
  scrnario8: "<p class='animtext'>your last puzzle</p>",
  scrnario9: "<p class='animtext'>Pass</p>",
  scrnario10: "<p class='animtext'>Game</p>",
  scrnario11: "<p class='normaltemt'>The End</p>",
  scrnario12: "<p class='animtext'>Game Over</p>",
  scrnario13: "<p class='animtext'>You.. Manage to Ecaspe</p>"
} 


var bre = "</br></br></br></br></br></br></br></br></br></br>" 




// function popup(mylink, windowname) { 
//     if (! window.focus)
//     return true; 
//     var href; 
//     if (typeof(mylink) == 'string') 
//     href=mylink; 
//     else href=mylink.href; 
//     window.open(href, windowname, 'width=500,height=374,scrollbars=yes'); 
//     return false;
// }

let globalFlage = null
  let secCount = 56
  let minCount = 1
  let printMins = ""
  let printSeconds = ""
var counter = 0
  //document.getElementById('bgText').setAttribute('style', "background-color: Transparent;")
  //document.getElementById('bgText').addEventListener('click' , displayNext)


function displayNext() {
  
  if(minCount === 2){
    clearInterval(globalFlage)
      document.getElementById("secode").innerHTML ="00:00"
      document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario12
      document.getElementById('bgHtml').setAttribute('style', "background-color: Transparent;  opacity: 0.8;")
      setTimeout(() => {
        document.getElementById('bgHtml').innerHTML = '<iframe  class="one" src="assets/index1.html"  ></iframe>'
        },2000) 
      minCount = 0
      secCount = 0  
      counter = 0
      return
  }else{
    switch (counter) {
      case 0:
        name()
        document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario1
        document.getElementById('bgHtml').setAttribute('style', "background-color: black;  opacity: 0.8;")
        // document.getElementById('bgText').innerHTML = 
      counter++
        break;
      case 1:
          
            document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario2
            
            //document.getElementById('bord').setAttribute('style', "background-color: black;")
            counter++
  
        break;
        case 2:
            
            document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario3
            //document.getElementById('bord').setAttribute('style', "background-color: black;")
            counter++
  
        break;
        case 3:
            document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario4
  
        counter++
        break;
        case 4:
            document.getElementById('bgHtml').innerHTML = bre +scrnarios.scrnario5
          counter++
        break;
        case 5:
            document.getElementById('bgHtml').innerHTML = "<img src='assets/barkro.jpg'>"+scrnarios.scrnario6+"</img>"
          counter++
  
        break;
        case 6:
            document.getElementById('bgHtml').innerHTML = "<img src='assets/romwy.jpg'>"+scrnarios.scrnario7+"</img>"
            counter++
            break;
            case 7:
            document.getElementById('bord') .innerHTML = ""
            document.getElementById('bord').innerHTML = '<section class="container"><ul class="game_board" id="game-board"></ul></section>'
            document.getElementById('bord').removeAttribute('class')
            createBoard1()
            setInterval(function(){
            if(counter1 === 6 ){
              console.log(counter1);
              document.getElementById('bord').setAttribute('class', 'bord')
              document.getElementById('bord').innerHTML = '<div class="bgHtml" id="bgHtml" onclick="displayNext()"></div>'
              document.getElementById('bgHtml').setAttribute('style', "background-color: black;  opacity: 0.8;width: 800px;height: 100%;text-align: center;")
              document.getElementById('bgHtml').innerHTML = "<img src='assets/romwy.jpg'>"+scrnarios.scrnario9+"</img>"
              counter1 = 0
            }},2000)
            counter++
            break;
            case 8:
            document.getElementById('bgHtml').innerHTML = scrnarios.scrnario8
            counter++
            break;
            case 9:
                document.getElementById('bord').innerHTML = '<section class="container1"><ul class="game_board1" id="game_board1"></ul></section>'
                //document.getElementById('bord').removeAttribute('class')
                createBoard2()
                setInterval(function(){
                  if(counter2 === true ){
                    console.log(counter2);
                    document.getElementById('bord').setAttribute('class', 'bord')
                    document.getElementById('bord').innerHTML = '<div class="bgHtml" id="bgHtml" onclick="displayNext()"></div>'
                    document.getElementById('bgHtml').setAttribute('style', "background-color: black;  opacity: 0.8;width: 800px;height: 100%;text-align: center;")
                    document.getElementById('bgHtml').innerHTML = "<img src='assets/romwy.jpg'>"+scrnarios.scrnario9+"</img>"
                    counter2 = false
                  }},2000)
                  counter++
            break;
            case 10:
            document.getElementById('bgHtml').innerHTML = "<img src='assets/sun.jpg'>"+scrnarios.scrnario13+"</img>"
            counter++
            break;
            case 11:
                clearInterval(globalFlage)
                minCount = 0
                secCount = 0
            document.getElementById('bgHtml').innerHTML = "<img src='assets/sun.jpg'>"+scrnarios.scrnario11+"</img>"
            counter++
            break;
            case 12:
            
            document.getElementById('bgHtml').innerHTML = '<iframe  class="one" src="assets/index1.html"  ></iframe>'
            document.getElementById('bgHtml').setAttribute('style', "background-color: Transparent;  opacity: 0.8;")
            counter=0
            break;
      default:
        break;
    }
  }
  
  
}


  //let flagToStop = flase
  function name() {
  
  //   if(minCount === 2){
  //     minCount = 0
  //     secCount = 0
  //     clearInterval(globalFlage)
  //     document.getElementById("secode").innerHTML ="00:00"
      
  //  }else{
    globalFlage = setInterval(Timer,2000)
   }
 // }
function Timer() {
    let $digitalClock = document.getElementById("secode")
    secCount ++ 
      if(secCount < 10){
        printSeconds = "0" + secCount
      }else{
        printSeconds = secCount
      }
      if (minCount < 10){
        printMins = "0" + minCount 
      }else{
        printMins = minCount
      }
  
      if(secCount === 60){
        secCount = 0
        minCount++;
      }
     $digitalClock.innerHTML =  printMins +":"+ printSeconds
}
//name();



 