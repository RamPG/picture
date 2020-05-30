const slider = () => {
    function bindSlider(selectorSliderSelector, prevButtonSelector, nextButtonSelector, animatePrev, animateNext) {
        const slides = document.querySelectorAll(selectorSliderSelector);
        const lenSlides = slides.length - 1;
        let currentSlide = 0;
        const prevSlide = () => {
            if (currentSlide === 0) {
                hideSlide(currentSlide);
                currentSlide = lenSlides;
                showSlide(currentSlide)
            } else {
                hideSlide(currentSlide);
                currentSlide -= 1;
                showSlide(currentSlide)
            }
            slides[currentSlide].classList.remove(animateNext);
            slides[currentSlide].classList.add(animatePrev);
        };
        const nextSlide = () => {
            if (currentSlide === lenSlides) {
                hideSlide(currentSlide);
                currentSlide = 0;
                showSlide(currentSlide)
            } else {
                hideSlide(currentSlide);
                currentSlide += 1;
                showSlide(currentSlide)
            }
            slides[currentSlide].classList.remove(animatePrev);
            slides[currentSlide].classList.add(animateNext);
        };
        slides.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        function showSlide(currentSlide) {
            slides[currentSlide].style.display = "block";
        }

        function hideSlide(currentSlide) {
            slides[currentSlide].style.display = "none";
        }

        showSlide(1);
        if (prevButtonSelector && nextButtonSelector) {
            const prevButton = document.querySelector(prevButtonSelector);
            const nextButton = document.querySelector(nextButtonSelector);
            prevButton.addEventListener("click", () => {
                prevSlide();
            });
            nextButton.addEventListener("click", () => {
                nextSlide();
            });
        }

        setInterval(nextSlide, 10000);
    }

    bindSlider(".feedback-slider-item", ".main-prev-btn", ".main-next-btn", "slideInLeft", "slideInRight");
    bindSlider(".main-slider-item", "", "", "slideInDown", "slideInDown");

}

export default slider;