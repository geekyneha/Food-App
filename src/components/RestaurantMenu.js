import ResCardShimmer from "./ResCardShimmer.js";
import { useParams } from "react-router";
import useFetchData from "../utils/useFetchData.js";
import { useState } from "react";
import MenuCatagory from "./MenuCatagory.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchData(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ResCardShimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <>
      <div className="menu-container">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{avgRating} stars</h3>
        <h2>{costForTwoMessage}</h2>
        <h2>Popular Dishes:</h2>

        {/* Catgories accordian*/}
        {categories.map((category, index) => (
          //here we are lifting state up ad giving this menu catagory the power to show or hide the items
          <MenuCatagory
            data={category?.card?.card}
            key={category?.card?.card?.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
