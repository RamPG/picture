const filter = () => {
    const tabs = document.querySelectorAll(".portfolio-menu > li");
    const content = document.querySelectorAll(".portfolio-block");
    const noResult = document.querySelector(".portfolio-no");
    let currentTab = tabs[0]
    const filterContent = (tab) => {
        let flag = true;
        content.forEach((item) => {
            if (!item.classList.contains(tab.classList[0])) {
                item.style.display = "none";
                item.classList.remove("animated", "fadeIn")
            } else {
                item.style.display = "block";
                item.classList.add("animated", "fadeIn");
                flag = false;
            }
        })
        noResult.style.display = (flag) ? "block" : "none";
    };

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            filterContent(tab);
            if (tab !== currentTab) {
                tab.classList.add("active");
                currentTab.classList.remove("active");
                currentTab = tab;
            }
        })
    })
};

export default filter;