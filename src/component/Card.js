import "./Card.css";
const Card = (props) => {
  //const{name} = props
  const { name, rating, profile_image_url, images } = props;
  return (
    <div className="card">
      <div>
        <img
          className="imgone"
          alt=""
          width="60"
          height="60"
          src={profile_image_url}
        />
      </div>
      <div>
        <p>{name}</p>
        <li>{rating}</li>
      </div>
      <div className="imgcard">
        <img className="imgl" alt="" width="120" height="120" src={images[0]} />
        <img alt="" width="120" height="120" src={images[1]} />
        <img className="imgr" alt="" width="120" height="120" src={images[2]} />
      </div>
    </div>
  );
};

export default Card;
