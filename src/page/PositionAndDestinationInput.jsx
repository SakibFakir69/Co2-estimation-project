import React from "react";

function PositionAndDestinationInput() {
  return (
    <div className="flex justify-center items-center w-full">

      <section className="flex flex-col gap-y-4">

        <div className="flex flex-col  gap-y-4 ">

          <div className="flex gap-x-2">
            {" "}
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/24/address.png"
              alt="address"
            />
            <input
              type="text"
              placeholder="Current Location"
              className="px-10  border border-stone-300 rounded"
            />
          </div>

          <div className="flex gap-x-2">
            {" "}
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios-glyphs/30/order-delivered.png"
              alt="order-delivered"
            />{" "}
            <input
              type="text"
              placeholder="Current Destination"
              className="px-10  border border-stone-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-between">

          <span className="text-sm flex gap-x-1 justify-center items-center" >
            {" "}
            <img
              className="size-4"
              src="https://img.icons8.com/ios-glyphs/30/replay.png"
              alt="replay"
            />{" "}
            Recent locations
          </span>
          <span className="text-sm flex gap-x-1 justify-center items-center">
            <img
             className="size-4"
              src="https://img.icons8.com/ios-glyphs/30/swap.png"
              alt="swap"
            />
            Swap
          </span>
        </div>
        <button className="bg-stone-950 text-white w-full py-1 rounded p-1 cursor-pointer">
          Find Peaceful Route
        </button>
      </section>
    </div>
  );
}

export default PositionAndDestinationInput;
