let movies = [
  {
    id: 0,
    name: "워크래프트 - 전쟁의 서막",
    score: 88
  },
  {
    id: 1,
    name: "하울의 움직이는 성",
    score: 80,
  },{
    id: 2,
    name: "타짜",
    score: 100,
  },{
    id: 3,
    name: "킹스맨 - 시크릿 에이전트",
    score: 99,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }
  movies.push(newMovie);
  return newMovie;
}