import React from "react";

const CartSection = () => {
  return (
    <div>
      {/* Suggestion */}
      <div className="suggestion h-[50px] w-[300px] mx-4 bg-gray-200">
        <input
          type=""
          className="h-[50px] w-[300px] text-sm font-icomoon font-light appearance-none border-none bg-gray-100 p-2"
          placeholder="Any suggestions? We will pass it on..."
        />
      </div>

      {/* Checkbox */}
      <div className="checkbox h-[100px] w-[300px] border mx-4 mt-2 flex">
        <div>
          <input type="checkbox" className="mr-4" />
        </div>
        <div>
          <label className="text-[12px] font-light">
            <p className="font-bold">Opt in for No-contact Delivery </p>
            Unwell, or avoiding contact? Please select no-contact delivery.
            Partner will safely place the order outside your door (not for COD)
          </label>
        </div>
      </div>

      {/* Apply Coupon */}
      <div className="h-[50px] w-[300px] border border-dashed mx-4 mt-2 border-black ">
        <input
          type=""
          className="pt-3 font-icomoon text-sm pl-4 pb-2"
          placeholder="Apply Coupon"
        />
      </div>
    </div>
  );
};

export default CartSection;
