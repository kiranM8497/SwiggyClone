import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartSection from "./cartSection";
import EmptyCart from "./EmptyCart";
import Bill from "./Bill";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);
  // Convert the object into an array of values
  const itemsArray = Object.values(cartItems);
  const extractedData = itemsArray.map((item) => {
    return {
      resName: item.name,
      rating: item.ratings.aggregatedRating.rating,
    };
  });

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return itemsArray.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="min-h-screen  bg-gray-200 overflow-hidden">
      <div className="container flex flex-row justify-center h-full w-100% m-3 overflow-hidden">
        <div className="w-6/12 h-90% px-3 overflow-hidden">
          <div className="mt-7 ml-3 flex flex-col justify-between overflow-hidden">
            <div className="m-3 shadow-lg bg-white cursor-pointer ml-2">
              <div className="flex justify-between font-icomoon relative pt-3 ml-5">
                <p>delivery address ✅</p>
                <p className="px-3 text-sm text-orange-500 ">CHANGE</p>
              </div>
              <div className="mt-5 text-xs ml-5 opacity-70">
                <p className="text-base font-bold">Home</p>
                <p>Kolhapur,Maharashtra 416010, India</p>
              </div>
              <div className="mt-4">
                <h4 className="ml-5 mb-7 text-xs pb-4">41 MINS</h4>
              </div>
            </div>
            <div className="bg-white shadow-lg border m-3">
              {/* payment div */}
              <div className="flex flex-col pr-3">
                <p className="ml-5 mt-5 font-icomoon text-sm">
                  Choose payment method
                </p>
                <button className="mt-4 border h-[50px] bg-green-400 m-5 text-white font-bold py-2 px-4 rounded">
                  proceed to pay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 border border-blue-100 ml-8 bg-white mt-7 mr-6 ">
          <div className="items-container flex flex-col border border-black relative min-h-fit max-h-[600px] overflow-hidden">
            <div className="min-h-[70px] pl-3 pt-2 pb-2 flex bg-white m-1 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1XoTQKU9QnXpzFtKvY1l-WR5mGOfGsbutqXhfklokuXqg1D5v0f9wdKuIPussRza4_Y&usqp=CAU"
                alt=""
                className="w-[50px] h-[50px]"
              />
              <div className="ml-4 border-b-1 flex">
                {/* <p className=" text-sm font-icomoon font-semibold">
                  {extractedData.map((item, index) => (
                    <ResName key={index} resName={item?.resName} />
                  ))}
                </p>
                <p className="text-xs font-icomoon op">Shahupuri</p> */}
                <p className="text-lg pt-2 font-icomoon ">your cart contains</p>
              </div>
              <button
                className="py-2 px-3 ml-9 pointer text-white bg-gray-800 rounded"
                onClick={handleClearCart}
              >
                Clear cart
              </button>
            </div>
            <div className="items-list-container flex ml-5 mt-2 pr-2 mb-3 text-sm">
              <CartItem data={itemsArray} />
            </div>

            <div className="pb-2">
              <CartSection />
            </div>
          </div>
          <Bill />
        </div>
      </div>
    </div>
  );
};

export default Cart;
