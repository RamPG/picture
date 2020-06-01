const burger = () => {
    const burgerButton = document.querySelector(".burger");
    const menuBurger = document.querySelector(".burger-menu");
    menuBurger.style.display = "none";
    burgerButton.addEventListener("click", () => {
        if (menuBurger.style.display === "none" && window.screen.availWidth < 993) {
            menuBurger.style.display = "block";
        } else {
            menuBurger.style.display = "none";
        }
    })
}
export default burger;