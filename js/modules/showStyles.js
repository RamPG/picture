import {getData} from "../services/requests";

const showStyles = (buttonSelector, otherStylesSelector, wrapper) => {
    const button = document.querySelector(buttonSelector);
    const otherStyles = document.querySelectorAll(otherStylesSelector);
    const bindStylesOffline = () => {
        otherStyles.forEach((item) => {
            item.classList.add('animated', 'fadeInUp');
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        })
    };
    const bindStyleOnline = (data) => {
        data.forEach((item) => {
            const element = document.createElement("div");
            element.classList.add('animated', 'fadeInUp');
            element.innerHTML = `
                <div class="styles-block">
                    <img src=${item.src} alt="style">
                    <h4>${item.title}</h4>
                    <a href=${item.link}>Подробнее</a>
                </div>
            `;
            element.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            document.querySelector(wrapper).append(element);
        })
    };
    button.addEventListener("click", () => {
        button.style.display = "none";
        getData("assets/db.json")
            .then(res => bindStyleOnline(res.styles))
            .catch(bindStylesOffline);
    });
}

export default showStyles;