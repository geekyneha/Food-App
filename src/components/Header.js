import { Logo_URL } from "../utils/constant.js";
import { useState, startTransition, useContext } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Header component rendered");
  return (
    <div className="flex justify-around items-center p-4 border-1  ">
      <div>
        <img src={Logo_URL} width={60} alt="logo" />
      </div>
      <nav>
        <ul className="flex gap-4 text-2xl">
          <li> online : {onlineStatus ? "🟢" : "🔴"}</li>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => startTransition(() => navigate("/about"))}>
            About
          </li>
          <li onClick={() => navigate("/contact")}>Contact</li>

          <li>Cart ({cartItems.length} items)</li>
        </ul>
      </nav>
      <div>
        <button
          className=" w-20 h-8  rounded-md bg-amber-300  text-white text-lg "
          onClick={() => {
            // btnName = "logout";
            // alert("Login button clicked" + " " + btnName);
            setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
      <div>user : {loggedInUser}</div>
    </div>
  );
};

export default Header;
