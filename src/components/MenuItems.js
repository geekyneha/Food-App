import { CDN_URL } from "../utils/constant";
const MenuItems = ({ Items }) => {
  console.log(Items);
  return (
    <>
      {Items.map((item) => {
        const { id, name, description, price, ratings, finalPrice } =
          item.card.info;
        return (
          <div className="m-2 shadow p-4" key={item.card.info.id}>
            <div className="flex justify-between p-2 my-3 items-center">
              <div className="font-bold text-md">{name}</div>
              <div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  width="120px"
                  height="60px"
                  alt={name}
                />
                <button className="px-3 py-1 bg-white text-green-600 border-green-500 border relative bottom-2 left-4">
                  Add +
                </button>
              </div>
            </div>

            <div className="px-2 my-3 w-6/12 italic text-sm">{description}</div>
            <div className="px-2 my-2 text-sm">
              <span className={finalPrice ? "line-through" : ""}>
                ₹{price / 100}{" "}
              </span>
            </div>
            {finalPrice && (
              <div className="px-2 my-2 font-bold">
                @ just ₹ {finalPrice / 100}
              </div>
            )}
            {ratings.aggregatedRating.rating && (
              <div className="px-2 my-3">
                rating:{ratings.aggregatedRating.rating} ⭐
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
export default MenuItems;
