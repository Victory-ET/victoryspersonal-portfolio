//meu show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
}

showMenu('nav-toggle','nav-menu');

/* active and remove menu */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//scroll home
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval:200})

//scroll about
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay:200})
sr.reveal('.about__text', {delay:400})

//scroll skills
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', {delay:200})
sr.reveal('.skills__data', {interval:200})
sr.reveal('.skills__img', {delay:400})

//scroll work
sr.reveal('.work__img', {interval:200})

//addition for services scroll event
sr.reveal('.card', {interval:200});


//scroll contact
sr.reveal('.contact__input', {interval:200})


//addition
document.querySelector('.home').addEventListener('mouseover', eyeball);

function eyeball(){
    const eye = document.querySelector(".rotating");
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) +270;
    eye.style.transform = "rotate("+rotation+"deg)"

    const eye2 = document.querySelector(".rotating2");
    let q = (eye2.getBoundingClientRect().left) + (eye2.clientWidth / 2);
    let w = (eye2.getBoundingClientRect().top) + (eye2.clientHeight / 2);

    let radian2 = Math.atan2(event.pageX - q, event.pageY - w);
    let rotation2 = (radian2 * (180 / Math.PI) * -1) +270;
    eye2.style.transform = "rotate("+rotation2+"deg)"
}


//more addition form sumitting
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("success");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('suc');
    //   button.style = "display: none ";
      status.innerHTML = "Thanks!, email sent";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add('err');
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
