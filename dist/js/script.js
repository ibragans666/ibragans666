//navbar-fix
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if (window.pageYOffset > fixNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    };
}

const hamburger = document.querySelector('#hamburger') ;
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk memuat sertifikat dari JSON
    function loadCertificates() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);

                // Loop melalui setiap sertifikat dalam JSON
                data.forEach(function(certificate) {
                    // Buat elemen HTML untuk sertifikat
                    var certificateHtml = `
                        <div class="mb-12 p-4 md:w-1/2 pdf-container" data-pdf-url="${certificate.pdfUrl}">
                            <div class="rounded-md shadow-md overflow-hidden border border-primary">
                                <a href="#" class="pdf-link">
                                    <img src="${certificate.imageUrl}" alt="" class="w-full p-2">
                                    <h3 class="font-semibold text-xl text-ijo mt-5 mb-3 text-center">${certificate.name}</h3>
                                    <p class="font-medium text-base text-light text-center">Klik untuk melihat sertifikat</p>
                                </a>
                            </div>
                        </div>
                    `;

                    // Tambahkan elemen sertifikat ke dalam container
                    document.getElementById('certificates-container').insertAdjacentHTML('beforeend', certificateHtml);
                });

                // Tambahkan event listener untuk setiap tautan PDF
                document.querySelectorAll('.pdf-link').forEach(function(link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();

                        var pdfContainer = link.closest('.pdf-container');
                        var pdfUrl = pdfContainer.dataset.pdfUrl;

                        // Implementasikan logika memuat PDF sesuai kebutuhan Anda
                        console.log('PDF URL:', pdfUrl);
                    });
                });
            }
        };

        // Ganti dengan lokasi file JSON Anda
        xhr.open('GET', 'certificates.json', true);
        xhr.send();
    }

    // Memuat sertifikat saat dokumen selesai dimuat
    loadCertificates();
});