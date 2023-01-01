function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("nav").style.display = "none";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElemenyById("nav").style.display = "block"
}

var slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    console.log(document.forms['rsvp-form'].length);
    for (i = 0; i < document.forms['rsvp-form'].length; i++) {
        let x = document.forms['rsvp-form'][i];
        if (x == "") {
            alert("All fields must be filled out");
            return false
        }
    }
}