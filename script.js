// ambil semua elemen img
const thumbs = document.querySelectorAll('[data-thumb]');

// ambil elemen display-image dan img
const displayImgWrap = document.getElementsByClassName('display-image')[0];
const displayImg = document.querySelector('[data-display-image]');

// lakukan looping pada elemen2 img
thumbs.forEach( thumb => thumb.addEventListener('click', e => {
    displayImgWrap.classList.add('lightbox');
    displayImg.src = e.target.src;
}))

// ubah attribute src pada  elemen display-image dengan elemen img yang di klik