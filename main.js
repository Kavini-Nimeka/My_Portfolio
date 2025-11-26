var typed = new Typed(".text", {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Software Engineer', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function showMore() {
        var moreText = document.getElementById("more-text");
        var btn = document.querySelector(".btn-box");
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btn.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            btn.textContent = "More About Me";
        }
    }

    function readMore() {
        var moreText = document.getElementById("more-read1");
        var btn = document.querySelector(".btn-box");
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btn.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            btn.textContent = " Read More";
        }
    }

   function readMore1() {
        var moreText = document.getElementById("more-read2");
        var btn = document.querySelector(".btn-box");
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btn.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            btn.textContent = "Read More";
        }
    }

    function readMore2() {
        var moreText = document.getElementById("more-read3");
        var btn = document.querySelector(".btn-box");
        if (moreText.style.display === "none") {
            moreText.style.display = "block";
            btn.textContent = "Show Less";
        } else {
            moreText.style.display = "none";
            btn.textContent = "Read More";
        }
    }

    document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_wv1z76l', 'template_m6uad3p', this)
        .then(function() {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I will get back to you soon!',
                confirmButtonColor: '#00eeff'
            });
        }, function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again!',
                confirmButtonColor: '#ff4d4d'
            });
        });

    this.reset();
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('active');
});

