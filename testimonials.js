document.addEventListener("DOMContentLoaded", function () {
    const slide = document.querySelector(".testimonial-slide");
    const testimonials = document.querySelectorAll(".testimonial");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let index = 0;
    const totalSlides = testimonials.length;

    function moveSlide(direction) {
        index += direction;
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }
        slide.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-scroll every 3 seconds
    let autoScroll = setInterval(() => moveSlide(1), 3000);

    // Stop auto-scroll when user interacts with arrows
    function resetAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(() => moveSlide(1), 3000);
    }

    leftArrow.addEventListener("click", function () {
        moveSlide(-1);
        resetAutoScroll();
    });

    rightArrow.addEventListener("click", function () {
        moveSlide(1);
        resetAutoScroll();
    });
});
