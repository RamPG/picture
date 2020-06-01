const scrollSmooth = () => {
    const anchor = document.querySelectorAll(".header-menu-sub > li");
    anchor.forEach((item) => {
        item.addEventListener("click", () => {
            item = item.querySelector("a");
            const itemAnchor = item.getAttribute("href");
            const itemCoords = parseInt(document.querySelector(itemAnchor).getBoundingClientRect().y);
            let currentCoords = 0;
            setInterval(() => {
                if (currentCoords >= itemCoords)
                    clearInterval();
                else {
                    currentCoords += 30;
                    scroll(0, currentCoords);
                }
            }, 5);
        })
    })
}
export default scrollSmooth;