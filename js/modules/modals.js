const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelectors) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });
        closeSelectors.forEach((item) => {
            modal.querySelector(item).addEventListener("click", () => {
                modal.style.display = "none";
                document.body.style.overflow = "";
            })
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let flag = 0;
            const popupList = document.querySelectorAll("[data-modal]");
            for (let i = 0; i < popupList.length; i++) {
                if (getComputedStyle(popupList[i]).display === "block") {
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
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

    bindModal(".button-design", ".popup-design", [".popup-close"]);
    bindModal(".button-consultation", ".popup-consultation", [".popup-close"]);
    gift(".fixed-gift", ".popup-gift", [".popup-close"]);
    showModalByTime(".popup-consultation", 10000);
};

export default modals;