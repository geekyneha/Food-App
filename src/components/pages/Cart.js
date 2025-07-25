import { useSelector } from "react-redux";
import MenuItems from "../MenuItems";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10  w-6/12 mx-auto">
      <h1 className="text-2xl">Cart</h1>
      <button
        className=" bg-red-600 text-white p-2 float-right rounded-3xl cursor-pointer"
        onClick={() => handleClearCart()}
      >
        <MdOutlineRemoveShoppingCart size={30} assName="text-white" />
      </button>
      <div className="text-md ">Total Items : {cartItems.length}</div>
      {cartItems.length === 0 && (
        <div className="text-lg text-green-500 ">Add items to cart!</div>
      )}
      <div className="w-6/12 mx-auto">
        <MenuItems Items={cartItems} key={cartItems.name} />
      </div>
    </div>
  );
};
export default Cart;
