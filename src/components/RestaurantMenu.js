import ResCardShimmer from "./ResCardShimmer.js";
import { useParams } from "react-router";
import useFetchData from "../utils/useFetchData.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchData(resId);

  if (resInfo === null) return <ResCardShimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(resInfo?.cards);
  return (
    <>
      <div className="menu-container">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating} stars</h3>
        <h2>{costForTwoMessage}</h2>
        <h2>Popular Dishes:</h2>

        {itemCards?.map((item) => {
          const { id, name, description, price } = item.card.info;
          return (
            <div className="menu-item" key={id}>
              <li>{name}</li>
              <p>{description}</p>
              <p>Price: ₹{price / 100}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;
