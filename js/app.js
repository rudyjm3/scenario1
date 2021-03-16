

window.onload = function() {
  let emailModal = document.getElementsByClassName('email-modal') [0];
  let closeModal = document.getElementsByClassName('email-modal__close-btn') [0];

  let viewButton = document.getElementsByClassName('view-pic-btn') [0];
  let picBox = document.getElementsByClassName('img-box') [0];
  let closePicButton = document.getElementsByClassName('pic-close-btn') [0];

  console.log(emailModal)

  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
    console.log('click')
  });
  document.addEventListener('mouseleave', () => {
    //alert('Mouse left');
    emailModal.classList.add('email-modal--visible');
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

//function viewPic (){
  //let viewButton = document.getElementsByClassName('view-pic-btn') [0];
  //let picBox = document.getElementsByClassName('img-box') [0];
  //let closePicButton = document.getElementsByClassName('pic-close-btn') [0];

//console.log(viewButton)
  //viewButton.addEventListener('click', () => {
    //picBox.classList.add('.img-box--visible');
  //});
  //closePicButton.addEventListener('click', () => {
    //picBox.classList.remove('img-box--visible');
    //console.log('click')
  //});
//}
