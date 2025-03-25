//  Navbar Section----------

     // Sticky Navbar--------
     document.addEventListener("DOMContentLoaded", function() {
         const header = document.querySelector('header');
         window.addEventListener("scroll", function() {
             header.classList.toggle("sticky", window.scrollY > 5);
         });
     });
  
  
  // Toggle Icon Navbar------
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navlist.classList.toggle("open"); 
  }
  
  
  // Close the menu when a nav link is clicked
  navlist.querySelectorAll("a").forEach(link => {
      link.onclick = () => {
          menuIcon.classList.remove("bx-x");
          navlist.classList.remove("open");
      };
  });
 
// JavaScript to change images every 7 seconds with opposite direction animation
const images = document.querySelectorAll(".image-container img");
let currentImageIndex = 0;

function changeImage() {
  
  images[currentImageIndex].classList.remove("active-image");
  images[currentImageIndex].classList.add("inactive-image");

  
  currentImageIndex = (currentImageIndex + 1) % images.length;


  images[currentImageIndex].classList.remove("inactive-image");
  images[currentImageIndex].classList.add("active-image");
}
