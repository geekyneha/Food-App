import { Logo_URL } from "../utils/constant.js";
import { useState } from "react";

console.log("Header component rendered");
const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header component rendered");
  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo_URL} width={60} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
      <div>
        <button
          className="login"
          onClick={() => {
            // btnName = "logout";
            // alert("Login button clicked" + " " + btnName);
            setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
};

export default Header;
