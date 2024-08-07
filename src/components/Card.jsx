export function Card(props) {
  return (
    <div className="card text-bg-dark h-100">
      <img src={props.imgsrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.p}</p>
      </div>
      <div className="card-footer">
        Made with:{" "}
        {props.badges.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
