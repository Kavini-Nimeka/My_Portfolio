document.addEventListener("DOMContentLoaded", function () {


    // Typed Text Animation
    const typedElement = document.querySelector(".text");

    if (typedElement) {
        new Typed(".text", {
            strings: [
                "Software Engineer",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
                "UI/UX Designer",
                "Quality Engineer",
                "Project Manager",
                "Business Analyst"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }



    // About Me Show More
    window.showMore = function () {

        let moreText = document.getElementById("more-text");
        let btn = document.querySelector(".about-text .btn-box");


        if (moreText.style.display === "none") {

            moreText.style.display = "block";
            btn.textContent = "Show Less";

        } else {

            moreText.style.display = "none";
            btn.textContent = "More About Me";

        }

    };




    // Service Read More 1
    window.readMore = function (button) {

        let moreText = document.getElementById("more-read1");


        if (moreText.style.display === "none") {

            moreText.style.display = "block";
            button.textContent = "Show Less";

        } else {

            moreText.style.display = "none";
            button.textContent = "Read More";

        }

    };



    // Service Read More 2
    window.readMore1 = function (button) {

        let moreText = document.getElementById("more-read2");


        if (moreText.style.display === "none") {

            moreText.style.display = "block";
            button.textContent = "Show Less";

        } else {

            moreText.style.display = "none";
            button.textContent = "Read More";

        }

    };




    // Service Read More 3
    window.readMore2 = function (button) {

        let moreText = document.getElementById("more-read3");


        if (moreText.style.display === "none") {

            moreText.style.display = "block";
            button.textContent = "Show Less";

        } else {

            moreText.style.display = "none";
            button.textContent = "Read More";

        }

    };





    // EmailJS Contact Form

    const contactForm = document.getElementById("contact-form");


    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();


            emailjs.send(
    "service_wv1z76l",
    "template_m6uad3p",
    {
        name:this.name.value,
        email:this.email.value,
        subject:this.subject.value,
        message:this.message.value
    }
)

            .then(function(){

                Swal.fire({

                    icon:"success",
                    title:"Message Sent!",
                    text:"Thank you for contacting me. I will get back to you soon!",
                    confirmButtonColor:"#00eeff"

                });


                contactForm.reset();


            })

            .catch(function(){


                Swal.fire({

                    icon:"error",
                    title:"Oops...",
                    text:"Something went wrong. Please try again!",
                    confirmButtonColor:"#ff4d4d"

                });


            });



        });

    }






    // Mobile Menu

    const menuButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");


    if(menuButton){

        menuButton.addEventListener("click",function(){

            navbar.classList.toggle("active");

        });

    }



});