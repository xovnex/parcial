let favorites = [];

// Función para agregar a favoritos
function addToFavorites(title, imgSrc) {
    if (!favorites.some(movie => movie.title === title)) {
        favorites.push({ title, imgSrc });
        updateFavorites();
    } else {
        alert("Esta película ya está en tus favoritos.");
    }
}

// Actualiza la lista de favoritos en la página
function updateFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <img src="${movie.imgSrc}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        favoritesList.appendChild(movieItem);
    });
}

// Manejar el clic en el botón de agregar a favoritos
function handleFavoriteClick(title, imgSrc) {
    addToFavorites(title, imgSrc);
}

function addToFavorites(image, title) {
    // Crear un nuevo elemento para el favorito
    const favoritesList = document.getElementById('favorites-list');
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    
    movieItem.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
    `;
    
    favoritesList.appendChild(movieItem);

    // Opcional: Guardar en localStorage para persistencia
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({ image, title });
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
