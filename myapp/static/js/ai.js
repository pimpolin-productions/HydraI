export function runGif() {
  var gifImage = document.getElementById('arrow-gif')

  gifImage.src = 'static/images/down-arrow.gif';
  gifImage.alt = 'Down arrow gif'
  setTimeout(function(){
    gifImage.src = 'static/images/down-arrow.png';
    gifImage.alt = 'Down arrow image'
  }, 1180);
}

export function aiRequest() {
  console.log('hola')
}
