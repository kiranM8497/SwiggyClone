import React from "react";

const CartItem = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <h3 className="font-bold font-icomoon">{item.name}</h3>
          <p className="text-xs">{item.category}</p>
          {item.description && <p className="text-xs"> {item.description}</p>}
          <p className="text-xs">₹{item.price / 100}</p>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default CartItem;
