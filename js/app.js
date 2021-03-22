
window.onload = function() {
  //keep track of state
  let emailState = false;
  let emailModal = document.getElementsByClassName('email-modal') [0];
  let closeButton = document.getElementsByClassName('email-modal__close-btn') [0];
  //Valdidate email input
  let emailInput = document.getElementsByClassName('email-modal__input') [0];
  //email send button
  let emailButton = document.getElementsByClassName('email-modal__button') [0];
  let declineText = document.getElementsByClassName('email-modal__decline-offer')[0];

  let thankContainer = document.getElementsByClassName('email-thank')[0];

  let viewButton = document.getElementsByClassName('view-pic-btn') [0];
  let picBox = document.getElementsByClassName('img-box') [0];
  let closePicButton = document.getElementsByClassName('pic-close-btn') [0];

//Check if email is valid
  function emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  let showModal = () => {
    if (emailState == false) {
    emailModal.classList.add('email-modal--visible');
    emailState = true
    }
  }
  //console.log(emailModal)
  let closeModal = () => {
    emailModal.classList.remove('email-modal--visible');
  }
  let addErrors = () => {
//Add error message if email is not in valid format.
    document.getElementsByClassName('email-modal__form-group')[0].classList.add('email-modal__form-group--error');
    document.getElementsByClassName('email-modal__error-message')[0].classList.add('email-modal__error-message--active');
  }
  let removeErrors = () => {
//Remove error message if email is not in valid format.
    document.getElementsByClassName('email-modal__form-group')[0].classList.remove('email-modal__form-group--error');
    document.getElementsByClassName('email-modal__error-message')[0].classList.remove('email-modal__error-message--active');
  }

  let showThankMessage = () => {
    thankContainer.classList.add('email-thank--success');
// Thankyou message will go away after 3 sec if user does not click the close button.
    setTimeout(() => {
      closeModal();
    }, 3000)
  }

  closeButton.addEventListener('click', () => {
    closeModal();
    //console.log('click')
  });

  emailInput.addEventListener('click', () => {
    removeErrors();
  })
  emailButton.addEventListener('click', () => {
    if (emailIsValid(emailInput.value)) {
      //console.log(emailInput.value)
      showThankMessage();
    } else {
      addErrors();
    }
    //console.log(emailInput.value)
  })

    //added .body so event will work in firefox browser
    document.body.addEventListener('mouseleave', () => {
      //alert('Mouse left');
      showModal ();
      //console.log('mouse left');
  });

  declineText.addEventListener('click', () => {
    emailModal.classList.remove('email-modal--visible');
// Or reuse closeModal() function
    closeModal();
    console.log('click')
  });
  console.log(document)

// CLOSE HIDDEN PIC
  viewButton.addEventListener('click', () => {
    picBox.classList.add('img-box--visible');
    console.log('click')
  });
  closePicButton.addEventListener('click', () => {
    picBox.classList.remove('img-box--visible');
  });
}
