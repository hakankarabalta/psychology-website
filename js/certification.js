function openCert(imgSrc) {
    const modal = document.getElementById('cert-lightbox');
    const modalImg = document.getElementById('modal-img');
    
    modalImg.src = imgSrc; // Tıklanan resmin yolunu aktar
    modal.style.display = 'flex'; // Kutuyu aç
}

function closeCert() {
    const modal = document.getElementById('cert-lightbox');
    modal.style.display = 'none'; // Kutuyu kapat
}
