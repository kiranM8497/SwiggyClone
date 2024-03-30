import React from "react";
import { useSelector } from "react-redux";

const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const itemsArray = Object.values(cartItems);
  const platform_fee = 2;

  const billAmount = (cartItems) => {
    let total = cartItems.reduce((acc, curr) => {
      return (curr = acc + curr.price);
      //console.log(typeof curr);
    }, 0);
    return Number(total);
  };
  const totalpay = billAmount(cartItems) / 100;
  const gstAmount = Math.round(totalpay * 0.12);
  const finalpayAmount = totalpay + platform_fee + gstAmount;
  return (
    <div className="bill min- w-[300px] h-100% flex flex-col mt-3 mx-4">
      <div>
        <p className=" font-icomoon text-sm font-thin">Bill Details</p>
      </div>

      <div className="item-total flex justify-between text-xs font-icomoon pt-2">
        <p>Item Total</p>
        <p>₹{totalpay}</p>
      </div>

      <div class="border-t border-dotted border-black w-full my-2"></div>

      <div className="item-total flex justify-between text-xs font-icomoon pt-2">
        <p>Delivery Tip</p>
        <p className="text-red-500 cursor-pointer">Add tip</p>
      </div>
      <div className="item-total flex justify-between text-xs font-icomoon pt-2">
        <p>platform fee</p>
        <p>₹{platform_fee}</p>
      </div>
      <div className="item-total flex justify-between text-xs font-icomoon pt-2">
        <p>GST and Restaurant Charges</p>
        <p>₹{gstAmount}</p>
      </div>

      <div class="border-t border-dotted border-black w-full my-4"></div>
      <div className="item-total flex justify-between text-xs font-icomoon pt-2">
        <p className="font-bold font-icomoon">TO PAY</p>
        <p className="font-bold font-icomoon">₹{finalpayAmount}</p>
      </div>
    </div>
  );
};

export default Bill;
