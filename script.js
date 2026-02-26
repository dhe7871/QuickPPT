const body = document.body;
console.log(body.classList);
const themeToggleBtns = document.getElementsByClassName("themeToggleBtns");

const themeToggleBtnsArray = Array.from(themeToggleBtns);
const sunIcon = themeToggleBtnsArray[0];
const moonIcon = themeToggleBtnsArray[1];

themeToggleBtnsArray.forEach((el) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("sunIcon")) {
            el.style.zIndex = "-1";
            el.style.opacity = "0";

            moonIcon.style.zIndex = "0";
            moonIcon.style.opacity = "1";

            body.classList.replace("dark", "light");
        } else if (el.classList.contains("moonIcon")) {
            el.style.zIndex = "-1";
            el.style.opacity = "0";

            sunIcon.style.zIndex = "0";
            sunIcon.style.opacity = "1";

            body.classList.replace("light", "dark");
        }

        console.log(el);
    });
});
