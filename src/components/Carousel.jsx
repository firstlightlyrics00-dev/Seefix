import { useRef } from "react";
import MediaCard from "./Card";
import "./Carousel.css";

export default function Carousel({ title, data }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: direction === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <section className="carousel">
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__wrapper">
        <button className="carousel__arrow left" onClick={() => scroll("left")}>{"<"}</button>
        <div className="carousel__container" ref={containerRef}>
          {data.map((item) => (
            <MediaCard
              key={`${item.type}-${item.id}-${item.title}`}
              cover={item.cover}
              title={item.title}
              rating={item.rating}
              type={item.type}
            />
          ))}
        </div>
        <button className="carousel__arrow right" onClick={() => scroll("right")}>{">"}</button>
      </div>
    </section>
  );
}
