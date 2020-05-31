const showStyles = () => {
    const button = document.querySelector(".button-transparent");
    const otherStyles = document.querySelectorAll(".hidden-lg");
    button.addEventListener("click", () => {
        button.style.display = "none";
        otherStyles.forEach((item) => {
            item.classList.add('animated', 'fadeInUp');
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        })
    });
}

export default showStyles;