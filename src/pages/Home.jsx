import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { trending_movies } from "../data/trending_movies";
import { top_movies } from "../data/top_movies";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="home-page">
        <Carousel title="Trending" data={trending_movies} />
        <Carousel title="Top movies" data={top_movies} />
      </main>
      <Footer />
    </>
  );
}
