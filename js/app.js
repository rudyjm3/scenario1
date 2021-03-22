
window.onload = function() {
  //keep track of state
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal') [0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn') [0];
  let declineText = document.getElementsByClassName('email-modal__decline-offer')[0];

  let viewButton = document.getElementsByClassName('view-pic-btn') [0];
  let picBox = document.getElementsByClassName('img-box') [0];
  let closePicButton = document.getElementsByClassName('pic-close-btn') [0];

  let showModal = () => {
    if (emailState == false) {
    emailModal.classList.add('email-modal--visible');
    emailState = true
    }
  }
  //console.log(emailModal)
  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
    console.log('click')
  });
  
    //added .body so event will work in firefox browser
    document.body.addEventListener('mouseleave', () => {
      //alert('Mouse left');
      showModal ();
      //console.log('mouse left');
  });

  declineText.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
    console.log('click')
  });
  console.log(document)

  viewButton.addEventListener('click', () => {
    picBox.classList.add('img-box--visible');
    console.log('click')
  });
  closePicButton.addEventListener('click', () => {
    picBox.classList.remove('img-box--visible');
  });
}
