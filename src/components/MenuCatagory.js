import MenuItems from "./MenuItems";
import { useState } from "react";

///controlled component it deos not maintain its own state. It is controlled by its parent.
const MenuCatagory = ({ data, showItems, setShowIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowItems = () => {
    setShowIndex();
    setIsOpen(!isOpen);
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
          {isOpen ? "v" : "^"}
        </button>
      </div>
      {/* accordian body*/}
      <div>{showItems && isOpen && <MenuItems Items={data.itemCards} />}</div>
    </>
  );
};

export default MenuCatagory;
