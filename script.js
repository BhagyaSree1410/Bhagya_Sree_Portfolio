// JavaScript code for your website

// Smooth scrolling to section when clicking on navigation links
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav ul li a');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', smoothScroll);
    }
  });
  
  function smoothScroll(event) {
    event.preventDefault();
    var targetId = event.target.getAttribute('href');
    var targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  // Toggle mobile navigation menu
  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('nav ul');
  
  // navToggle.addEventListener('click', function () {
  //   navMenu.classList.toggle('show');
  // });
  
  function changeColor() {
    var element = document.getElementById("my-element");
    element.style.backgroundColor = "red";
  }



  //////////   skills section ////////////////////////
//   