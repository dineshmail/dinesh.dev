// =====================================
// Counter Animation
// =====================================

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});


// =====================================
// Theme Toggle
// =====================================

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (toggleBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light-theme");
        toggleBtn.innerHTML = "☀️";

    } else {

        toggleBtn.innerHTML = "🌙";

    }

    toggleBtn.addEventListener("click", () => {

        body.classList.toggle("light-theme");

        if (body.classList.contains("light-theme")) {

            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = "🌙";

        }

    });

}


// =====================================
// Mobile Menu Toggle
// =====================================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        hamburger.classList.toggle("open");

    });

}


// =====================================
// Close Mobile Menu After Click
// =====================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (hamburger) {

            hamburger.classList.remove("open");

        }

    });

});


// =====================================
// Typing Animation
// =====================================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const text = "Python Full Stack Developer";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeWriter, 80);

        }

    }

    typeWriter();

}


// =====================================
// Smooth Fade-in On Page Load
// =====================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Auto hide success message after 10 seconds
const successMessage = document.querySelector(".success-message");

if(successMessage){
    setTimeout(() => {
        successMessage.style.opacity = "0";

        setTimeout(() => {
            successMessage.style.display = "none";
        },500);

    },5000);
}