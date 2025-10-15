const TMDB_API_KEY = '03cc26c136bf234d732885af76483f41';
const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
const NO_POSTER = 'https://via.placeholder.com/500x750?text=No+Image';

const refs = {
  form: document.getElementById('searchForm'),
  input: document.getElementById('searchInput'),
  results: document.getElementById('results'),
  previewTitle: document.getElementById('previewTitle'),
  previewBody: document.getElementById('previewBody'),
  previewArea: document.querySelector('.preview-area'),
  modal: document.getElementById('modal'),
  modalBody: document.getElementById('modalBody'),
  modalClose: document.getElementById('modalClose'),
};

// TMDb 검색
async function searchMovies(query){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=ko-KR`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results || [];
}

// 카드 렌더링
function renderCards(movies){
  refs.results.innerHTML = '';
  movies.forEach(movie => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img class="poster" src="${movie.poster_path ? IMAGE_BASE + movie.poster_path : NO_POSTER}" alt="${movie.title}">
      <div class="card-body">
        <div class="title">${movie.title}</div>
        <div class="meta">
          <span>${movie.release_date ? movie.release_date.slice(0,4) : '—'}</span>
          <span>⭐ ${movie.vote_average ?? '—'}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', ()=> showPreview(movie));
    refs.results.appendChild(card);
  });
}

// Preview Sidebar ↔ Modal 전환
function showPreview(movie){
  const isMobile = window.innerWidth <= 768;

  if(!isMobile){
    // Sidebar
    refs.previewTitle.textContent = movie.title;
    refs.previewBody.innerHTML = `
      <img src="${movie.poster_path ? IMAGE_BASE + movie.poster_path : NO_POSTER}" alt="${movie.title}">
      <p><strong>Release:</strong> ${movie.release_date || '—'}</p>
      <p><strong>Rating:</strong> ${movie.vote_average ?? '—'} / ${movie.vote_count ?? 0} votes</p>
      <p>${movie.overview || 'No description'}</p>
    `;
    refs.previewArea.style.display = 'flex';
  } else {
    // Modal
    refs.modalBody.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="${movie.poster_path ? IMAGE_BASE + movie.poster_path : NO_POSTER}" alt="${movie.title}">
      <p><strong>Release:</strong> ${movie.release_date || '—'}</p>
      <p><strong>Rating:</strong> ${movie.vote_average ?? '—'} / ${movie.vote_count ?? 0} votes</p>
      <p>${movie.overview || 'No description'}</p>
    `;
    refs.modal.classList.add('show');
    refs.modal.setAttribute('aria-hidden','false');
  }
}

// 검색 이벤트
refs.form.addEventListener('submit', async e=>{
  e.preventDefault();
  const q = refs.input.value.trim();
  if(!q) return;
  const movies = await searchMovies(q);
  renderCards(movies);
});

// Modal 닫기
refs.modalClose.addEventListener('click', ()=>{
  refs.modal.classList.remove('show');
  refs.modal.setAttribute('aria-hidden','true');
});
refs.modal.addEventListener('click', e=>{
  if(e.target===refs.modal){
    refs.modal.classList.remove('show');
    refs.modal.setAttribute('aria-hidden','true');
  }
});

// 인기 영화 표시
async function showPopularMovies(){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`;
  const res = await fetch(url);
  const data = await res.json();
  renderCards(data.results);
}

// 초기화
showPopularMovies();
