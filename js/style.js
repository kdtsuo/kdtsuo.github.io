function prevSlide(sliderSelector, slidesSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slidesSelector);
    let currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    slider.scrollTo({
        left: slider.clientWidth * currentIndex,
        behavior: 'smooth'
    });
}

function nextSlide(sliderSelector, slidesSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slidesSelector);
    let currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slider.scrollTo({
        left: slider.clientWidth * currentIndex,
        behavior: 'smooth'
    });
}

function slider(sliderSelector, slidesSelector, navAnchorsSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const navAnchors = document.querySelectorAll(navAnchorsSelector);
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    let inactivityTimeout;
    let scrollTimeout;

    function goToSlide(index) {
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
        updateNavAnchors(index);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            goToSlide(currentIndex);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resetInactivityTimeout() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            startAutoSlide();
        }, 3000);
    }

    function updateCurrentIndex() {
        currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        updateNavAnchors(currentIndex);
    }

    function updateNavAnchors(index) {
        navAnchors.forEach((anchor, i) => {
            anchor.style.opacity = i === index ? '1' : '0.5';
        });
    }

    navAnchors.forEach((anchor, i) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            stopAutoSlide();
            goToSlide(i);
            currentIndex = i;
            resetInactivityTimeout();
        });
    });

    startAutoSlide();
    updateNavAnchors(currentIndex);
    slider.addEventListener('scroll', () => {
        stopAutoSlide();
        updateCurrentIndex();

        // Detect the end of scroll
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            resetInactivityTimeout();
        }, 100);
    });

    slider.addEventListener('mousedown', () => {
        stopAutoSlide();
        updateCurrentIndex();
    });

    slider.addEventListener('mouseup', resetInactivityTimeout);
    slider.addEventListener('touchstart', () => {
        stopAutoSlide();
        updateCurrentIndex();
    });

    slider.addEventListener('touchend', resetInactivityTimeout);
}
slider('.slider-1', '.slider-1 img', '.slider-nav-1 a');
slider('.slider-2', '.slider-2 img', '.slider-nav-2 a');

// portfolio hover effect
document.querySelectorAll('.media').forEach(mediaElement => {
    mediaElement.addEventListener('mouseover', () => {
        const textElement = mediaElement.querySelector('.media-text');
        const imgElement = mediaElement.querySelector('.media img');
        if (textElement) {
            textElement.classList.remove('fadeOutM');
            textElement.classList.add('fadeInM');
        }
        mediaElement.classList.remove('nudgeDown');
        mediaElement.classList.add('nudgeUp');
        imgElement.classList.remove('brightIn');
        imgElement.classList.add('brightOut');

    });

    mediaElement.addEventListener('mouseout', () => {
        const textElement = mediaElement.querySelector('.media-text');
        const imgElement = mediaElement.querySelector('.media img');
        if (textElement) {
            textElement.classList.remove('fadeInM');
            textElement.classList.add('fadeOutM');
        }
        mediaElement.classList.remove('nudgeUp');
        mediaElement.classList.add('nudgeDown');
        imgElement.classList.remove('brightOut');
        imgElement.classList.add('brightIn');
    });
});

// up button
let upButton = document.getElementById("upButton");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upButton.style.display = "block";

    } else {
        upButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// navbar display
let navbarOpen = false;
let navbarMobile = document.getElementsByClassName("navbar-mobile")[0];

function toggleNavbar() {
    if (navbarOpen === false) {
        navbarMobile.style.display = "block";
        navbarMobile.classList.add("swipeToLeft");

        navbarOpen = true;
    } else {
        navbarMobile.classList.add("fadeAway");
        setTimeout(() => {
            navbarMobile.style.display = "none";
            navbarMobile.classList.remove("fadeAway");
        }, 500);

        navbarOpen = false;
    }
}

let resizeTimeout;
let scrollTimeout;

const handleNavbarFade = () => {
    if (navbarMobile) {
        navbarMobile.classList.add("fadeAway");
        setTimeout(() => {
            navbarMobile.style.display = "none";
            navbarMobile.classList.remove("fadeAway");
        }, 500);

        navbarOpen = false;
    }
};

window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(handleNavbarFade, 1);
});

window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(handleNavbarFade, 1);
});


const pictures = document.getElementsByClassName('picture');

function toggleZoom(event) {
    const picture = event.target;
    if (picture.classList.contains('pictureZoomIn')) {
        picture.classList.remove('pictureZoomIn');
        picture.classList.add('pictureZoomOut');
    } else {
        picture.classList.remove('pictureZoomOut');
        picture.classList.add('pictureZoomIn');
    }
}

// Attach the function to the click event for each picture
for (let i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener('click', toggleZoom);
}


//popup
// let popup = document.getElementsByClassName("home-popup")[0];
// let alreadyClosed = false;

// function openPopup() {
//     if (popup.style.display === "none" || popup.style.display === "") {
//         popup.style.display = "block";
//         popup.classList.remove("fadeOutM");
//         popup.classList.add("fadeInM");
//         alreadyClosed = false;
//     }
// }

// function closePopup() {
//     if (popup.style.display === "block") {
//         popup.classList.remove("fadeInM");
//         popup.classList.add("fadeOutM");
//         popup.addEventListener('animationend', function () {
//             if (popup.classList.contains('fadeOutM')) {
//                 popup.style.display = "none";
//                 alreadyClosed = true;
//             }
//         }, { once: true });
//     }
// }
// window.onkeydown = function (event) {
//     if (event.key === "Escape") {
//         closePopup();
//     }
// };

// window.onscroll = function () {
//     if (!alreadyClosed) {
//         closePopup();
//     }
// };
// window.onresize = function () {
//     if (!alreadyClosed) {
//         closePopup();
//     }
// };





