"use cleint";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex mt-6">
        <h2 className="text-xl">Introduction</h2>
      </div>
      <div className="flex border border-zinc-700 p-2 rounded-tl-xl rounded-tr-xl bg-zinc-900 mt-4">
        <div className="flex gap-1 bg-zinc-800 rounded-md border w-fit">
          <span className="bg-zinc-900 border border-zinc-500 rounded-md px-3 py-1 cursor-pointer hover:text-sky-500">
            Code
          </span>
          <span className="rounded-md px-3 py-1 cursor-pointer hover:text-sky-500">
            Preview
          </span>
        </div>
      </div>
      <div className="flex border border-zinc-700 p-2 rounded-bl-xl rounded-br-xl h-[60vh]">
        <div className=" text-zinc-500">No code found!</div>
      </div>
    </div>
  );
}
