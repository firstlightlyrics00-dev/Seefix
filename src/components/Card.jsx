import "./Card.css";

export default function MediaCard({ cover, title, rating, type }) {
  return (
    <article className="card">
      <img src={cover} alt={title} />
      <div className="card__info">
        <h3>{title}</h3>
        <p>Rating: {rating ?? "N/A"}</p>
        <p>Type: {type === "tvshow" ? "TV Show" : "Movie"}</p>
      </div>
    </article>
  );
}
