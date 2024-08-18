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
