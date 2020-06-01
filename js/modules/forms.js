import {postData} from "../services/requests";

const forms = () => {
    const formsList = document.querySelectorAll("form");
    const upload = document.querySelectorAll("[name='upload']");
    const statusMessageBlock = document.createElement('div');
    const statusVisualMessage = document.createElement("img");
    const statusTextMessage = document.createElement("p");
    function clearInputs (form) {
        form.querySelectorAll("input").forEach((item) => {
            item.value = "";
            form.querySelector(".file_upload > div").textContent = "Файл не выбран";
        })
        form.querySelectorAll("textarea").forEach((item) => {
            item.value = "";
        })
    }
    statusVisualMessage.classList.add("animated", "fadeInUp");
    statusMessageBlock.classList.add("animated", "fadeInUp");

    statusMessageBlock.classList.add('status');
    let messages = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...',
        loadingVisual: "assets/img/spinner.gif",
        successVisual: "assets/img/ok.png",
        failureVisual: "assets/img/fain.png"
    };
    upload.forEach((item) => {
        item.addEventListener("input", () => {
            item.previousElementSibling.textContent = item.files[0].name;
        })
    })
    formsList.forEach((item) => {
        item.addEventListener("submit", (evt) => {
            evt.preventDefault();
            statusVisualMessage.src = messages.loadingVisual;
            statusTextMessage.textContent = messages.loading;
            statusMessageBlock.append(statusVisualMessage);
            statusMessageBlock.append(statusTextMessage);
            item.parentNode.append(statusMessageBlock);
            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 350);
            const formData = new FormData(item);
            const statusMessage = document.querySelector(".status");
            statusMessage.querySelector("img").src = messages.loadingVisual;
            statusMessage.querySelector("p").textContent = messages.loading;
            postData("../assets/server.php", formData)
                .then((res) => {
                    statusMessage.querySelector("img").src = messages.successVisual;
                    statusMessage.querySelector("p").textContent = messages.success;
                    console.log(res);
                })
                .catch(() => {
                    statusMessage.querySelector("img").src = messages.failureVisual;
                    statusMessage.querySelector("p").textContent = messages.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        item.style.display = "block";
                        clearInputs(item);
                    }, 5000);
                });
        })

    })
}
export default forms;