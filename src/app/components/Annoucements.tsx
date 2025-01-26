import React from "react";

const Annoucements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold ">Annoucements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-SchoolSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold ">
              Lorem ipsum dolor sit amet
            </h1>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-02-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            dolorem maxime saepe autem
          </p>
        </div>
        <div className="bg-SchoolPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold ">
              Lorem ipsum dolor sit amet
            </h1>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-02-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            dolorem maxime saepe autem
          </p>
        </div>{" "}
        <div className="bg-SchoolYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold ">
              Lorem ipsum dolor sit amet
            </h1>
            <span className="text-xs text-gray-400 bg-white rounded-md py-1 px-1">
              2025-02-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            dolorem maxime saepe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Annoucements;
