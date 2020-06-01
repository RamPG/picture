const accordion = () => {
    const accordionHeaders = document.querySelectorAll(".accordion-heading");
    const accordionBlocks = document.querySelectorAll(".accordion-block");
    accordionBlocks.forEach((item) => {
        item.classList.toggle("hidden");
        item.classList.add("animated", "fadeInDown");
    })
    accordionHeaders.forEach((item, index) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active-style");
            accordionBlocks[index].classList.toggle("hidden");
        })
    })
};

export default accordion;