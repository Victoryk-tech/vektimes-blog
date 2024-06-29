import React from "react";

export const Sport = () => {
  return (
    <div className="px-36 py-10">
      <h1 className="font-bold text-lg">Sport</h1>

      <div className="grid grid-cols-3 items-start justify-between py-6 space-x-10">
        <div className="flex flex-col items-start justify-start">
          <img src="" alt="" />
          <div className="flex flex-col justify-start space-y-2">
            <h2>Soccer</h2>
            <h1>description</h1>
            <div className="flex items-start justify-start text-center space-x-6">
              <h1>date</h1>
              <p>time read</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-500">note</div>
        <div className="grid grid-rows-3 justify-start items-start">
          <div className="flex justify-center items-center space-x-6">
            <img src="" alt="" />
            <h2>gdgdgddggdgdggd</h2>
          </div>
          <div className="flex justify-center items-center space-x-6  border-black border-t-[1px] border-b-[1px] p-4">
            <img src="" alt="" />
            <h2>gdgdgddggdgdggd</h2>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <img src="" alt="" />
            <h2>gdgdgddggdgdggd</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
