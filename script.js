const body = document.body;
console.log(body.classList);
const themeToggleBtns = document.getElementsByClassName("themeToggleBtns");

const themeToggleBtnsArray = Array.from(themeToggleBtns);
const sunIcon = themeToggleBtnsArray[0];
const moonIcon = themeToggleBtnsArray[1];

themeToggleBtnsArray.forEach((el) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("sunIcon")) {
            if (body.classList.contains("dark")) {
                body.classList.replace("dark", "light");
            }
            body.classList.add("light");
        } else if (el.classList.contains("moonIcon")) {
            if (body.classList.contains("light")) {
                body.classList.replace("light", "dark");
            }
            body.classList.add("dark");
        }
    });
});
