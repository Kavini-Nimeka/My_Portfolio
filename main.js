/* =========================
   Typed text animation
========================= */
if (typeof Typed !== "undefined" && document.querySelector(".text")) {
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


/* =========================
   Reusable read-more function
========================= */
function toggleContent(contentId, buttonSelector, closedText) {
    const content = document.getElementById(contentId);
    const button = document.querySelector(buttonSelector);

    if (!content || !button) {
        return;
    }

    const isHidden =
        content.hidden ||
        content.style.display === "none" ||
        window.getComputedStyle(content).display === "none";

    if (isHidden) {
        content.hidden = false;
        content.style.display = "block";
        button.textContent = "Show Less";
    } else {
        content.hidden = true;
        content.style.display = "none";
        button.textContent = closedText;
    }
}


/* =========================
   About section
========================= */
function showMore() {
    toggleContent(
        "more-text",
        ".btn-box",
        "More About Me"
    );
}


/* =========================
   Services section
========================= */
function readMore() {
    toggleContent(
        "more-read1",
        'button[onclick="readMore()"]',
        "Read More"
    );
}

function readMore1() {
    toggleContent(
        "more-read2",
        'button[onclick="readMore1()"]',
        "Read More"
    );
}

function readMore2() {
    toggleContent(
        "more-read3",
        'button[onclick="readMore2()"]',
        "Read More"
    );
}


/* =========================
   Contact form
========================= */
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm && typeof emailjs !== "undefined") {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const sendButton = contactForm.querySelector(
                ".send-button, .send"
            );

            if (sendButton) {
                sendButton.disabled = true;

                if (sendButton.tagName === "INPUT") {
                    sendButton.value = "Sending...";
                } else {
                    sendButton.textContent = "Sending...";
                }
            }

            emailjs.sendForm(
                "service_wv1z76l",
                "template_m6uad3p",
                contactForm,
                {
                    publicKey: "Y_rK0e1g6gqn0xXZz"
                }
            )
            .then(function (response) {
                console.log(
                    "Email sent successfully:",
                    response.status,
                    response.text
                );

                contactForm.reset();

                if (typeof Swal !== "undefined") {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thank you for contacting me. I will get back to you soon!",
                        confirmButtonColor: "#00eeff"
                    });
                } else {
                    alert("Message sent successfully!");
                }
            })
            .catch(function (error) {
                console.error("EmailJS error:", error);

                if (typeof Swal !== "undefined") {
                    Swal.fire({
                        icon: "error",
                        title: "Message Not Sent",
                        text:
                            error.text ||
                            "Something went wrong. Please try again.",
                        confirmButtonColor: "#ff4d4d"
                    });
                } else {
                    alert(
                        "Message could not be sent. Please try again."
                    );
                }
            })
            .finally(function () {
                if (sendButton) {
                    sendButton.disabled = false;

                    if (sendButton.tagName === "INPUT") {
                        sendButton.value = "Send Message";
                    } else {
                        sendButton.innerHTML =
                            '<span>Send Message</span>' +
                            '<i class="bx bx-send"></i>';
                    }
                }
            });
        });
    }


    /* =========================
       Mobile navigation
    ========================= */
    const menuButton = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuButton && navbar) {
        menuButton.addEventListener("click", function () {
            navbar.classList.toggle("active");

            const isOpen = navbar.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        navbar.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
});