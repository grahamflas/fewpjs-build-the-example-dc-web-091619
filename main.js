// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  let errorModal = document.getElementById('modal')
  errorModal.classList.add("hidden")

  let hearts = Array.from( document.getElementsByClassName('like-glyph') )
  hearts.forEach( heart => heart.addEventListener('click', likeCallback) )

  // hearts.forEach( heart => heart.addEventListener('click', function(){
  //   mimicServerCall()
  //     .then( function(){
  //       debugger
  //     } )
  //     .catch( function(error) {
  //       console.log(error)
  //       handleError()
  //     })
  //     // .catch( () => handleError() )
  //     // .catch( () => handleError() )
  // }) )
});

function likeCallback(){
  mimicServerCall()
    .then(updateHeart(event))
    .catch(error => console.log(error))
}


function updateHeart(event){
  console.log("got to UpdateHeart()")
  debugger
  let currentHeart = event.currentTarget.innerText
  let newHeart = ""

  if (currentHeart === EMPTY_HEART) {
    newHeart = FULL_HEART
  } else {
    newHeart = EMPTY_HEART
  }

  event.currentTarget.innerText = newHeart
}

function handleError(){
  console.log("Hello from handleError()")
}

// function heartClickHandler() {
//   console.log("heart clicked")
//   event.currentTarget
//   debugger
// }



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
