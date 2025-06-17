'use strict';

const API_URL = 'https://api.tvmaze.com/shows';
const movieContainer = document.getElementById('movieContainer');
const searchInput = document.getElementById('searchInput');
const sortAlphaBtn = document.getElementById('sortAlpha');
const sortRatingBtn = document.getElementById('sortRating');
const errorMessage = document.getElementById('errorMessage');

let allMovies = [];

// Отримання даних
const fetchMovies = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    allMovies = data;
    renderMovies(allMovies);
  } catch (error) {
    errorMessage.textContent = 'Помилка завантаження даних. Спробуйте пізніше.';
    console.error('Fetch error:', error);
  }
};

// Рендер фільмів
const renderMovies = (movies) => {
  movieContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();

  movies.forEach(({ name, image, rating, genres }) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}" alt="${name}">
      <h3>${name}</h3>
      <p><strong>Рейтинг:</strong> ${rating?.average ?? '—'}</p>
      <p><strong>Жанри:</strong> ${genres.join(', ')}</p>
    `;
    fragment.appendChild(card);
  });

  movieContainer.appendChild(fragment);
};

// Пошук
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allMovies.filter(({ name }) => name.toLowerCase().includes(query));
  renderMovies(filtered);
});

// Сортування за назвою
sortAlphaBtn.addEventListener('click', () => {
  const sorted = [...allMovies].sort((a, b) => a.name.localeCompare(b.name));
  renderMovies(sorted);
});

// Сортування за рейтингом
sortRatingBtn.addEventListener('click', () => {
  const sorted = [...allMovies].sort((a, b) => (b.rating.average ?? 0) - (a.rating.average ?? 0));
  renderMovies(sorted);
});

// Ініціалізація
fetchMovies();
