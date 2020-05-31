const imageHover = () => {
    const imageBlocks = document.querySelectorAll(".sizes-block");
    imageBlocks.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            item.querySelector("img").src = `assets/img/sizes-${index + 1}-1.png`;
            item.querySelectorAll("p:not(.sizes-hit)").forEach((item) => {
                item.style.display = "none";
            })
        });
        item.addEventListener("mouseout", () => {
            item.querySelector("img").src = `assets/img/sizes-${index + 1}.png`;
            item.querySelectorAll("p").forEach((item) => {
                item.style.display = "block";
            })
        })
    });
};

export default imageHover;