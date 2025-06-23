import { useState, useEffect } from "react";
import ResCardShimmer from "./ResCardShimmer";
import { Link } from "react-router";
import ResCard from "./ResCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // whenever a state variable update, react triggers a reconciliation cycle (re-renders the componenet)
  // load page -> show shimmer UI -> Fetch Data (usEffect)-> Render UI

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);
  // first render
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // conditional rendering
  //  Rendering based on condition
  // if (listOfRestaurants.length === 0) {
  //   return (
  //     <div className="res-container">
  //       {Array(10)
  //         .fill("")
  //         .map((e, index) => {
  //           return <ResCardShimmer key={index} />;
  //         })}
  //     </div>
  //   );
  // }
  console.log("body component rendered");
  return listOfRestaurants.length === 0 ? (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((e, index) => {
          return <ResCardShimmer key={index} />;
        })}
    </div>
  ) : (
    <>
      <div className="body-container">
        <div className="filter-container">
          <div>
            <input
              type="text"
              placeholder="search"
              className="filter-btn"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="login"
              onClick={() => {
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredRestaurant);
                setSearchText("");
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );

              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"restaurant/" + restaurant.info.id}
              >
                <ResCard resData={restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
