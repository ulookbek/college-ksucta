import { Link } from "react-router-dom";

function Event({ detail, title, description, months, day, time, place }) {
  return (
    <article>
      <div className="current-date">
        <p>{months}</p>
        <p className="date">{day}</p>
      </div>
      <div className="info">
        {detail && <h3>{title}</h3>}
        {detail && (
          <p className="info-line">
            <span className="time">{time}</span>
            <span className="place">{place}</span>
          </p>
        )}
        <p>{description}</p>
        {!detail && (
          <Link className="more" to="/events">
            Подробнее
          </Link>
        )}
      </div>
    </article>
  );
}

export default Event;
