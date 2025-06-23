import { CDN_URL } from "../utils/constant.js";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, costForTwo, avgRating, cuisines, sla } =
    resData?.info;

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className="food"
          width={295}
        />
        <p className="promoted bg-green-700 ">Promoted</p>

        <p className="delivery-time">{sla.deliveryTime} min</p>
      </div>
      <div className="content">
        <div className="name-rating">
          <h3 className="restaurant">{name}</h3>
          <div className="rating">{avgRating}</div>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <div>{costForTwo}</div>

        <hr />
        <div className="max-safety">
          <div className="container">
            <div className="safety">max safety</div>
            <div className="delivery">delivery</div>
          </div>

          <div className="about-safety">
            Follows All Max Safety Measures to ensure your food is safe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
