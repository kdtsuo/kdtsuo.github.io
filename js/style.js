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
