const modals = () => {
    let notPress = true;
    const popupList = document.querySelectorAll("[data-modal]");
    popupList.forEach((item) => {
        item.style.display = "none";
    });

    function bindModal(triggerSelector, modalSelector, closeSelectors) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scrollWidth}px`;
                notPress = false;
            });
        });
        closeSelectors.forEach((item) => {
            modal.querySelector(item).addEventListener("click", () => {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            })
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let flag = true;
            const popupList = document.querySelectorAll("[data-modal]");
            for (let i = 0; i < popupList.length; i++) {
                if (popupList[i].style.display === "block") {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        }, time);
    }

    function gift(triggerSelector, modalSelector, closeSelectors) {
        bindModal(triggerSelector, modalSelector, closeSelectors);
        const trigger = document.querySelector(triggerSelector);
        trigger.addEventListener("click", () => {
            trigger.style.display = "none";
        })
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let userScroll = window.pageYOffset + document.documentElement.clientHeight + 1;
            if (notPress && (userScroll >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal(".button-design", ".popup-design", [".popup-close"]);
    bindModal(".button-consultation", ".popup-consultation", [".popup-close"]);
    gift(".fixed-gift", ".popup-gift", [".popup-close"]);
    showModalByTime(".popup-consultation", 5000);
    openByScroll('.fixed-gift');
};

export default modals;