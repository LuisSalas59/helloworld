document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('.gallery');

    // Hacer una solicitud para obtener las URLs de las imágenes
    fetch('Y:/Maqueta-ags-2024/images/boletines')
        .then(response => response.json())
        .then(data => {
            // Recorrer las URLs de las imágenes y crear elementos <img>
            data.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                gallery.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error al cargar las imágenes:', error);
        });
});