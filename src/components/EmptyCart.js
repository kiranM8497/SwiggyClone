import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex text-center flex-col mt-8">
      <p className="font-bold font-icomoon text-4xl mb-8">
        🤨 Your cart is empty
      </p>
      <p className="text-base font-icomoon pl-5 opacity-60">
        You can go to home page to view more restaurants
      </p>
    </div>
  );
};

export default EmptyCart;
