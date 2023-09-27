import { getData } from './dataStore';

export function clear() {
  let data = getData();
  data = {
    movies: [],
  }
  return {};
}

export function movieAdd(title, director) {
  if (title === "" || director === "") {
    return {error: "Title or director is empty"}
  }
  let data = getData();
  const movieId = data.movies.length;
  data.movies.push({movieId, title, director})

  return {movieId}
}

export function movieEdit(movieId, title, director) {
  const movie = getData().movies.find(m => m.movieId === movieId);
  if (movie === undefined) {
    return { error: `No existing movie with movieId: ${movieId}` };
  }
  if (title === '' || director === '') {
    return { error: `Title '${title}' or director ${director} is empty` };
  }
  movie.title = title;
  movie.director = director;
  return {};
}

export function moviesList() {
  return { movies: getData().movies };
}