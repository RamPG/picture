import modals from "./modules/modals";
import slider from "./modules/slider";
import showStyles from "./modules/showStyles";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider();
    showStyles(".button-transparent", ".hidden-lg", "#styles > div > div");
    // forms("form");
});