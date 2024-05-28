export const renderMoviesToDOM = (movieHTML) => {
  const movieList = document.getElementById('movie-list');

  if (movieList) {
    movieList.innerHTML = movieHTML;
  } else {
    console.error('could not find element with id "movie-list');
  }
};
