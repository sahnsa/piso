// Header shrink and retract to normal size based on scroll
$(document).on("scroll",function(){
  if($(document).scrollTop()>10){
      $(".page-header").removeClass("page-header__large").addClass("page-header__small");
  } else {
      $(".page-header").removeClass("page-header__small").addClass("page-header__large");
  }
});

// Full width navigation js/jquery logic
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#nav-overlay').toggleClass('open');
});
$('.nav-overlay__nav-overlay-menu a').click(function() {
  $('.page-header__nav-button').toggleClass('active');
  $('#nav-overlay').toggleClass('open');
  return true;
});

// My story section parallax scrolling section callback function
jarallax(document.querySelectorAll('.parallax-scroll'));

// back to top
$(document).ready(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#toTopBtn').fadeIn();
    } else {
      $('#toTopBtn').fadeOut();
    }
  });

  $('#toTopBtn').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});

// Hero video play and pause functionality
$( document ).ready(function() {
  let clickVideo = document.getElementById("video-play");

  $('button.active-play-pause').click(function() {
    if ($('button.active-play-pause').hasClass("active-play-pause")){
      clickVideo.pause();

      $('button').html('<i class="fa-sharp fa-regular fa-circle-play"></i><span class="play-text">Play video</span>');
      $('button.active-play-pause').toggleClass("active-play-pause");
    } else {
        clickVideo.play();

      $('button').html('<i class="fa-sharp fa-regular fa-circle-pause"></i><span class="play-text">Pause video</span>');
      $('button').toggleClass("active-play-pause");
    }
  });
});


// Contact form validation
// Sign up form input fields validation, disable button until all fields are filled
$( document ).ready(function() {
  $('input[name="submit"]').attr('disabled', true);

  //$(this).find('input').focus();
  $('.form__form-control').on('keyup change blur', function() {

    // Declare email form field with regex patterns
    let filter  = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    let alphabet = /^[a-zA-Z\s]+$/;

    let fname = $('input[name="fullName"]').val();
    let email = $('input[name="email"]').val();
    let message = $('textarea[name="message"]').val();

    // Let's check that fields are not  empty
    if ($(this).val() !== '') {
      $(this).siblings('.form__validator').fadeOut();

    }else {
      $(this).siblings('.form__validator').fadeIn();
      $('input[type="submit"]').attr('disabled', true);
    }

    if ($(this).hasClass('full-name')) {
      if (alphabet.test(this.value)) {
        $(this).siblings('.form__valid-name').fadeOut();
      } else {
        $(this).siblings('.form__valid-name').fadeIn();
        $('input[type="submit"]').attr('disabled', true);
      }
    }

    if ($(this).hasClass('valid-message')) {
      if (alphabet.test(this.value)) {
        $(this).siblings('.form__valid-message').fadeOut();
      } else {
        $(this).siblings('.form__valid-message').fadeIn();
        $('input[type="submit"]').attr('disabled', true);
      }
    }

    if ($(this).hasClass('email')) {
      if (!filter.test(email) === false) {

        $(this).siblings('.form__valid-email').fadeOut();

      }else {
        $(this).siblings('.form__valid-email').fadeIn();
        $('input[type="submit"]').attr('disabled', true);
      }
    }

    // Let's check that fields are not empty
    if (fname !== '' && alphabet.test(fname) && message !== '' && alphabet.test(message) && email !== '' && !filter.test(email) === false) {

      $(this).siblings('.form__validator, .alert-danger').fadeOut();
      $('input[type="submit"]').attr('disabled', false);

    } else {
      $('input[type="submit"]').attr('disabled', true);
    }

  });
});


// Dark mode color scheme, user can click to change background color
const darkModeCheckbox = document.getElementById("checkbox");
darkModeCheckbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode-bg-color");
});

// Request form validation
// Sign up form input fields validation, disable button until all fields are filled
(function ($) {

  $('#wpforms-submit-7').attr('disabled', 'disabled');

  $('#wpforms-7-field_5, #wpforms-7-field_7, #wpforms-7-field_8').on('keyup change blur', function() {
      let filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      let alphabet = /^[a-zA-Z.,\s]+$/;

      let fname = $('#wpforms-7-field_5').val();
      let email = $('#wpforms-7-field_7').val();
      let message = $('#wpforms-7-field_8').val();

      let $currentField = $(this);
      $currentField.siblings('.form__alert-danger').remove();

      // Empty Field Check
      if ($currentField.val() === '') {
          $currentField.after('<div class="form__alert-danger">This field cannot be empty!</div>');
          $currentField.siblings('.form__alert-danger').fadeIn();
      }

      // Name Validity Checks
      if ($currentField.is('#wpforms-7-field_5') && !alphabet.test(fname)) {
          $currentField.after('<div class="form__alert-danger">Please enter a valid full name!</div>');
          $currentField.siblings('.form__alert-danger').fadeIn();
      }

      // Email Validity Check
      if ($currentField.is('#wpforms-7-field_7') && !filter.test(email)) {
          $currentField.after('<div class="form__alert-danger">Please enter a valid email!</div>');
          $currentField.siblings('.form__alert-danger').fadeIn();
      }

      if ($currentField.is('#wpforms-7-field_8') && !alphabet.test(message)) {
          $currentField.after('<div class="form__alert-danger">Please enter a valid message!</div>');
          $currentField.siblings('.form__alert-danger').fadeIn();
      }

      // Enable/Disable Button
      if (fname !== '' && email !== '' && filter.test(email) && message !== '' ) {
          $('#wpforms-submit-7').removeAttr('disabled');
      } else {
          $('#wpforms-submit-7').attr('disabled', 'disabled');
      }
  });
})(jQuery);




// Contact form validation
// Sign up form input fields validation, disable button until all fields are filled
(function ($) {

  $('#wpforms-submit-201').attr('disabled', 'disabled');

  $('#wpforms-201-field_7, #wpforms-201-field_8, #wpforms-201-field_9').on('keyup change blur', function() {
      let filterEmail = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      let alphabetOnly = /^[a-zA-Z.,\s]+$/;

      let fnameContact = $('#wpforms-201-field_7').val();
      let emailContact = $('#wpforms-201-field_8').val();
      let messageContact = $('#wpforms-201-field_9').val();

      let $currentField = $(this);
      $currentField.siblings('.form__alert-danger').remove();

      // Empty Field Check
      if ($currentField.val() === '') {
        $currentField.after('<div class="form__alert-danger">This field cannot be empty!</div>');
        $currentField.siblings('.form__alert-danger').fadeIn();
      }

      // Name Validity Check for contact form
      if ($currentField.is('#wpforms-201-field_7') && !alphabetOnly.test(fnameContact)) {
        $currentField.after('<div class="form__alert-danger">Please enter a valid full name!</div>');
        $currentField.siblings('.form__alert-danger').fadeIn();

        console.log("This worked:" + fnameContact);
      }

      // Email Validity Check for contact form
      if ($currentField.is('#wpforms-201-field_8') && !filterEmail.test(emailContact)) {
        $currentField.after('<div class="form__alert-danger">Please enter a valid email!</div>');
        $currentField.siblings('.form__alert-danger').fadeIn();

        console.log("This worked:" + emailContact);
      }

      // Message Validity Check for contact form
      if ($currentField.is('#wpforms-201-field_9') && !alphabetOnly.test(messageContact)) {
        $currentField.after('<div class="form__alert-danger">Please enter a valid message!</div>');
        $currentField.siblings('.form__alert-danger').fadeIn();

        console.log("This worked:" + messageContact);
      }

      // Enable/Disable Button
      if (fnameContact !== '' && emailContact !== '' && filterEmail.test(emailContact) && messageContact !== '' ) {
          $('#wpforms-submit-201').removeAttr('disabled');
      } else {
          $('#wpforms-submit-201').attr('disabled', 'disabled');
      }
  });
})(jQuery);