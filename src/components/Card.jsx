export const Card = ({ data }) => {
  return (
    <section>
      <div className="image-section">
        <img src={`/${data.img}.png`} alt={`an image of ${data.title}`} />
      </div>
      <div className="paragraph-section">
        <div className="location">
          <img src="location-logo.svg" alt="" />
          <span className="country">{data.country}</span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${data.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="section-title">{data.title}</div>
        <p className="section-date">{data.date}</p>
        <p className="section-description">{data.description}</p>
      </div>
    </section>
  );
};
