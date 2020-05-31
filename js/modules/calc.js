const calc = (size, material, options, discount, result) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const discountBlock = document.querySelector(discount);
    const resultBlock = document.querySelector(result);
    let sumAll = 0;

    function calcResult() {
        if (sizeBlock.value && materialBlock.value) {
            sumAll = parseFloat(sizeBlock.value) * parseFloat(materialBlock.value);
            if (optionsBlock.value) {
                sumAll += parseFloat(optionsBlock.value);
            }
            if (discountBlock.value === "IWANTPOPART")
                sumAll *= 0.7;
            resultBlock.textContent = Math.round(sumAll);
        } else {
            sumAll = 0;
            resultBlock.textContent = "Для расчета нужно выбрать размер картины и материал картины";
        }
    }

    sizeBlock.addEventListener("change", calcResult);
    materialBlock.addEventListener("change", calcResult);
    optionsBlock.addEventListener("change", calcResult);
    discountBlock.addEventListener("input", calcResult);

};

export default calc;