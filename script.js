// script.js
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.querySelector('.close');

    // Load images
    function loadImages() {
        fetch('get_images.php')
            .then(response => response.json())
            .then(images => {
                gallery.innerHTML = '';
                images.forEach(image => {
                    const item = document.createElement('div');
                    item.className = 'gallery-item';
                    item.innerHTML = `<img src="${image}" alt="Gallery image">`;
                    item.addEventListener('click', () => openLightbox(image));
                    gallery.appendChild(item);
                });
            });
    }

    // Open lightbox
    function openLightbox(imageSrc) {
        lightboxImg.src = imageSrc;
        lightbox.classList.remove('hidden');
    }

    // Close lightbox
    close.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    // Load images on page load
    loadImages();
});