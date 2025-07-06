const cookieBox = document.querySelector(".wrapper-cookie"),
    buttons = document.querySelectorAll(".button-cookie");

const executeCodes = () => {
    if (document.cookie.includes("isActive")) {
        cookieBox.classList.add("display__none");
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.add("display__none");
            if (button.id == "acceptBtn") {
                document.cookie = "isActive= true; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};


window.addEventListener("load", executeCodes);