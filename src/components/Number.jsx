import React from "react";

const Number = () => {
  return (
    <div className="w-full flex items-center gap-10 bg-black">
      <div className="text-center flex items-start justify-center flex-col px-25 py-10 rounded-2xl bg-black">
        <p className="text-xs font-medium text-[#ffffff92]">DESIGNERS</p>
        <h2 className="text-4xl font-semibold text-white">150+</h2>
      </div>

      <div className="text-center flex items-start justify-center flex-col px-25 py-10 rounded-2xl bg-black">
        <p className="text-xs font-medium text-[#ffffff92]">CLIENTS</p>
        <h2 className="text-4xl font-semibold text-white">500+</h2>
      </div>

      <div className="text-center flex items-start justify-center flex-col px-25 py-10 rounded-2xl bg-black">
        <p className="text-xs font-medium text-[#ffffff92]">MASTERPIECES</p>
        <h2 className="text-4xl font-semibold text-white">20K+</h2>
      </div>

      <div className="text-center flex items-start justify-center flex-col px-25 py-10 rounded-2xl bg-black">
        <p className="text-xs font-medium text-[#ffffff92]">EVENTS</p>
        <h2 className="text-4xl font-semibold text-white">50+</h2>
      </div>
    </div>
  );
};

export default Number;
