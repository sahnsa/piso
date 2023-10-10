
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

  console.log("Checkbox");
});