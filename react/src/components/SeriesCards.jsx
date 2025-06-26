export const SeriesCards = (props) => {
  const { curElem } = props;

  const btn_style = {
    backgroundColor: "#f0f0f0",
    color: "#000",
    border: "none",
    padding: "1.2rem 2.4rem",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  };
  return (
    <li className="card">
      <div>
        <img src={curElem.img_url} alt="" height="40%" width="40%" />
      </div>
      <div className="card-content">
        <h2>Name: {curElem.name}</h2>
        <h3>Rating: {curElem.rating} </h3>
        <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
        <p>Cast: {curElem.cast}</p>
        <a href={curElem.watch_url} target="_blank">
          <button style={btn_style}>Watch now</button>
        </a>
      </div>
    </li>
  );
};
