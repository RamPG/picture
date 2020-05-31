import modals from "./modules/modals";
import slider from "./modules/slider";
import showStyles from "./modules/showStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider();
    showStyles(".button-transparent", ".hidden-lg", "#styles > div > div");
    calc("#size", "#material", "#options", ".promocode", ".calc-price");
    filter();
    // forms("form");
});