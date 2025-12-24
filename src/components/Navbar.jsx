import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="h-20 w-full flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-medium text-white ml-3">DVSY</h1>
        </div>

        <div className="flex items-center gap-4 text-white px-3">
          <button className="bg-[#222] p-3 rounded-md flex justify-between text-xs font-medium">DESIGNERS</button>
            <button className="bg-[#222] p-3 rounded-md flex justify-between text-xs font-medium">COLLABS</button>
            <button className="bg-[#222] p-3 rounded-md flex justify-between text-xs font-medium">EVENTS</button>
            <button className="bg-[#222] p-3 rounded-md flex justify-between text-xs font-medium">BLOG</button>
            <button className="bg-[#222] p-3 rounded-md flex justify-between text-xs font-medium">CARD</button>
            <button className="bg-[#ec6d56] text-black p-3 rounded-md flex justify-between text-xs font-medium">GET IN TOUCH</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
