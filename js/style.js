document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.home-slider');
    const slides = document.querySelectorAll('.home-slider img');
    const navAnchors = document.querySelectorAll('.home-slider-nav a');
    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;
    let inactivityTimeout;

    // Function to go to a specific slide
    function goToSlide(index) {
        slider.scrollTo({
            left: slider.clientWidth * index,
            behavior: 'smooth'
        });
        updateNavAnchors(index);
    }

    // Function to start the auto-slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0; // Loop back to the first slide
            }
            goToSlide(currentIndex);
        }, 3000); // Change slide every 3 seconds
    }

    // Function to stop the auto-slide
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Function to reset inactivity timeout
    function resetInactivityTimeout() {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            startAutoSlide(); // Resume auto-slide after 3 seconds of inactivity
        }, 3000); // 3 seconds of inactivity
    }

    // Function to update the currentIndex based on the user's scroll position
    function updateCurrentIndex() {
        currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
        updateNavAnchors(currentIndex);
    }

    // Function to update the opacity of navigation anchors
    function updateNavAnchors(index) {
        navAnchors.forEach((anchor, i) => {
            anchor.style.opacity = i === index ? '1' : '0.5';
        });
    }

    // Handle click events on navigation anchors
    navAnchors.forEach((anchor, i) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            stopAutoSlide(); // Stop the auto-slide when an anchor is clicked
            goToSlide(i); // Go to the clicked slide
            currentIndex = i; // Update the currentIndex to the clicked slide
            resetInactivityTimeout(); // Start the inactivity timeout to resume auto-slide
        });
    });

    // Start auto-slide initially
    startAutoSlide();

    // Highlight the first anchor on page load
    updateNavAnchors(currentIndex);

    // Add event listeners to pause auto-slide on user interaction
    slider.addEventListener('scroll', () => {
        stopAutoSlide();
        resetInactivityTimeout();
        updateCurrentIndex(); // Update currentIndex to user's current position
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

    // Restart auto-slide if the user scrolls and stops
    slider.addEventListener('scrollend', resetInactivityTimeout);
});



// prevSlide()
// nextSlide()

function prevSlide() {
    const slider = document.querySelector('.home-slider');
    const slides = document.querySelectorAll('.home-slider img');
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

function nextSlide() {
    const slider = document.querySelector('.home-slider');
    const slides = document.querySelectorAll('.home-slider img');
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
