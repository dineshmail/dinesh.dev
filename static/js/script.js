// below title Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {

            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }
    };

    updateCounter();

});


// Theme Toggle

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (toggleBtn) {

    if (localStorage.getItem("theme") === "light") {
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


// Mobile Menu

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}