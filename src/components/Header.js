import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // using selector for  subscribing to store
  //selector helps to identify what portion of our store we need
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-100 shadow-lg h-20 ">
      <div className=" rounded-lg">
        <img className="w-20 bg-gray-100" src={LOGO_URL} />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <button name="Sign-in">
              <Link to="/SignIn">Sign-in</Link>
            </button>
          </li>
          {/* <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");

              // console.log("here");
            }}
          >
            {btnNameReact}
          </button> */}
          {/* <li className="px-4 font-bold hover:bg-green-300 border border-solid ">
            {loggedInUser}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
