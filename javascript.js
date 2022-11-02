/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



  window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));

    const h2 = document.querySelectorAll('h2');
    h2.forEach(h2 => observer.observe(h2));

    const h3 = document.querySelectorAll('h3');
    h3.forEach(h3 => observer.observe(h3));

    const h4 = document.querySelectorAll('h4');
    h4.forEach(h4 => observer.observe(h4));

    const h5 = document.querySelectorAll('h5');
    h5.forEach(h5 => observer.observe(h5));

    const h6 = document.querySelectorAll('h6');
    h6.forEach(h6 => observer.observe(h6)); 

    // const img = document.querySelectorAll('img');
    // img.forEach(img => observer.observe(img)); 

    const video = document.querySelectorAll('video');
    video.forEach(video => observer.observe(video)); 

}