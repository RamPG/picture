import modals from "./modules/modals";
import slider from "./modules/slider";
import showStyles from "./modules/showStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import imageHover from "./modules/imageHover";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrollSmooth from "./modules/scroll";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider();
    showStyles(".button-transparent", ".hidden-lg", "#styles > div > div");
    calc("#size", "#material", "#options", ".promocode", ".calc-price");
    filter();
    imageHover();
    accordion();
    burger();
    scrollSmooth();
    forms();
});