// movie cover URLs are generated using `new URL(...)` so they resolve correctly with Vite
export const trending_movies = [
  {
    id: 1,
    title: "Inception",
    cover: new URL("../assets/movie_covers/Inception.jpg", import.meta.url).href,
    rating: 8.8,
    type: "movie",
  },
  {
    id: 2,
    title: "The Dark Knight",
    cover: new URL("../assets/movie_covers/The_Dark_Knight.webp", import.meta.url).href,
    rating: 9.0,
    type: "movie",
  },
  {
    id: 3,
    title: "Interstellar",
    cover: new URL("../assets/movie_covers/Interstellar.webp", import.meta.url).href,
    rating: 8.6,
    type: "movie",
  },
  {
    id: 4,
    title: "Avatar",
    cover: new URL("../assets/movie_covers/Avatar.jpg", import.meta.url).href,
    rating: 7.9,
    type: "movie",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    cover: new URL("../assets/movie_covers/Avengers_Endgame.webp", import.meta.url).href,
    rating: 8.4,
    type: "movie",
  },
];
