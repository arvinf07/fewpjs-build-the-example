// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// Your JavaScript code goes here!
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
const likes = document.querySelectorAll('.like')
likes.forEach( element => element.firstElementChild.addEventListener('click', handleLike) )

function handleLike(event){
  mimicServerCall()
  .then( (resp) => {
    if (this.innerText == FULL_HEART){
      this.classList.remove('activated-heart')
      this.innerText = EMPTY_HEART
    } else{
      this.classList.add('activated-heart')
      this.innerText = FULL_HEART
    }
  })
  //Do that modal stuff here
  .catch( (error) => {
    modal.classList.remove('hidden')
    modalMessage.innerText = 'Connection down. Try again later...'
    window.setTimeout(clearModal, 5000)
  }) 
}

function clearModal(){
  modal.classList.add('hidden')
}



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
