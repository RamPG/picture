import {postData} from "../services/requests";

const forms = () => {
    const formsList = document.querySelectorAll("form");

    function convertToJSON(data) {
        const objJSON = {};
        data.forEach((item, key) => {
            objJSON[key] = item;
        });
        return JSON.stringify(objJSON)
    }

    formsList.forEach((item) => {
        item.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const formData = convertToJSON(new FormData(item));

            postData("assets/server.php", formData)
                .finally(console.log(1));
        })

    })
}
export default forms;