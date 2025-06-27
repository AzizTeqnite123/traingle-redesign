AOS.init();

{
    document.addEventListener("DOMContentLoaded", function () {
        const swiperWrapper = document.querySelector(
            ".announcement_slider .swiper-wrapper"
        );
        const slide = swiperWrapper.querySelector(".swiper-slide");

        if (slide) {
            for (let i = 0; i < 10; i++) {
                let clone = slide.cloneNode(true);
                swiperWrapper.appendChild(clone);
            }
        }

        var swiper = new Swiper(".announcement_slider", {
            slidesPerView: "auto",
            spaceBetween: 40,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 8000,
        });
    });
}

{
    document.addEventListener("DOMContentLoaded", function () {
        const swiperWrapper = document.querySelector(
            ".logolist_slider .swiper-wrapper"
        );
        const slide = swiperWrapper.querySelector(".swiper-slide");

        if (slide) {
            for (let i = 0; i < 10; i++) {
                let clone = slide.cloneNode(true);
                swiperWrapper.appendChild(clone);
            }
        }

        var swiper = new Swiper(".logolist_slider", {
            slidesPerView: "auto",
            spaceBetween: 60,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed: 8000,
            breakpoints: {
                150: {
                    spaceBetween: 10,
                },
                576: {
                    spaceBetween: 15,
                },
                769: {
                    spaceBetween: 40,
                },
                1025: {
                    spaceBetween: 60,
                },
            }
        });
    });
}

{
    document.addEventListener("DOMContentLoaded", function () {
        const MultipleSlider = () => {
            const MultipleSliders = document.querySelectorAll(".testi_monial_slider");
            MultipleSliders.forEach((slider, index) => {
                new Swiper(slider, {
                    direction: "horizontal",
                    speed: 500,
                    effect: 'slide',
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: "true",
                    },
                    breakpoints: {
                        150: {
                            slidesPerView: 1.3,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        769: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    },
                });
            });
        };
        MultipleSlider();
    });
}

{
    document.addEventListener("DOMContentLoaded", function () {
        function faqsAccordion() {
            var accordionSections = document.querySelectorAll(".accordion-item");

            if (accordionSections.length > 0) {
                var firstAccordionItemHeader = accordionSections[0].querySelector(
                    ".accordion-item-header"
                );
                var firstAccordionItemBody = firstAccordionItemHeader.nextElementSibling;

                if (firstAccordionItemBody) {
                    firstAccordionItemHeader.classList.add("active");
                    firstAccordionItemBody.style.maxHeight =
                        firstAccordionItemBody.scrollHeight + "px";
                }

                for (let i = 1; i < accordionSections.length; i++) {
                    var otherHeader = accordionSections[i].querySelector(".accordion-item-header");
                    var otherBody = otherHeader.nextElementSibling;

                    if (otherBody) {
                        otherHeader.classList.remove("active");
                        otherBody.style.maxHeight = "0";
                    }
                }
            }

            accordionSections.forEach((section) => {
                var accordionItemHeaders = section.querySelector(".accordion-item-header");
                var accordionItemBody = section.querySelector(".accordion-item-body");

                accordionItemHeaders.addEventListener("click", function () {
                    var currentlyActiveHeader = document.querySelector(
                        ".accordion-item-header.active"
                    );
                    var currentlyActiveBody = currentlyActiveHeader
                        ? currentlyActiveHeader.nextElementSibling
                        : null;

                    if (currentlyActiveHeader && currentlyActiveBody) {
                        currentlyActiveHeader.classList.remove("active");
                        currentlyActiveBody.style.maxHeight = 0;
                    }

                    if (accordionItemHeaders !== currentlyActiveHeader) {
                        accordionItemHeaders.classList.add("active");
                        accordionItemBody.style.maxHeight =
                            accordionItemBody.scrollHeight + "px";
                    } else {
                        accordionItemHeaders.classList.remove("active");
                        accordionItemBody.style.maxHeight = 0;
                    }
                });
            });
        }

        faqsAccordion();
    });
}

