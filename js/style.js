document.querySelectorAll('.media').forEach(mediaElement => {
    mediaElement.addEventListener('mouseover', () => {
        const textElement = mediaElement.querySelector('.media-text');
        if (textElement) {
            textElement.classList.remove('fadeOutM');
            textElement.classList.add('fadeInM');
        }
    });

    mediaElement.addEventListener('mouseout', () => {
        const textElement = mediaElement.querySelector('.media-text');
        if (textElement) {
            textElement.classList.remove('fadeInM');
            textElement.classList.add('fadeOutM');
        }
    });
});
// button
let upButton = document.getElementById("upButton");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upButton.style.display = "block"; // Added quotes around block
    } else {
        upButton.style.display = "none"; // Added quotes around none
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
