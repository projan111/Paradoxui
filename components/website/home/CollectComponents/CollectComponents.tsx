import React from "react";

type Props = {};

function CollectComponents({}: Props) {
  return (
    <>
      <div className="text-[#FFFCE1]  text-center mx-auto py-20">
        {/* heading  */}
        <h1 className="font-semibold text-5xl">Collect other components</h1>

        {/* card  */}
        <div className="flex mx-auto justify-center items-center mt-14 flex-col gap-6 w-[40rem] p-20 rounded-2xl border-2 border-primary-800">
          main
        </div>
      </div>
    </>
  );
}

export default CollectComponents;
