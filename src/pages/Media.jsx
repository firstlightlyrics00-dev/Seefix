import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MediaCard from "../components/Card";
import { trending_movies } from "../data/trending_movies";
import { top_movies } from "../data/top_movies";
import "./Media.css";

export default function Media() {
  const allMedia = [...trending_movies, ...top_movies];
  const uniqueMedia = Array.from(
    new Map(allMedia.map((item) => [`${item.title}-${item.type}`, item])).values()
  );

  return (
    <>
      <Navbar />
      <section className="media-page">
        <h1>Media Catalog</h1>
        <p>
          Discover our full library of movies and TV shows in one place. Browse, filter and enjoy
          top-rated content handpicked for you.
        </p>

        <div className="media-page__grid">
          {uniqueMedia.map((item) => (
            <MediaCard
              key={`${item.type}-${item.title}-${item.id}`}
              cover={item.cover}
              title={item.title}
              rating={item.rating}
              type={item.type}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
