import MenuItems from "./MenuItems";

///controlled component it deos not maintain its own state. It is controlled by its parent.
const MenuCatagory = ({ data, showItems, setShowIndex }) => {
  const handleShowItems = () => {
    setShowIndex();
  };
  return (
    <>
      {/* accordian header*/}
      <div
        className="flex bg-white justify-between my-4 p-3 shadow cursor-pointer"
        onClick={() => handleShowItems()}
      >
        <div className="text-sm font-bold text-gray-800 text-1.5xl">
          {data.title} ({data.itemCards.length})
        </div>
        <button className="text-xl text-gray-600 transition-transform duration-300">
          ^
        </button>
      </div>
      {/* accordian body*/}
      <div>{showItems && <MenuItems Items={data.itemCards} />}</div>
    </>
  );
};

export default MenuCatagory;
