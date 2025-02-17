"use client";
import Annoucements from "@/app/components/Annoucements";
import BigCalendar from "@/app/components/BigCalender";

import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/*     LEFT */}
      <div className="w-full lg:w-2/3 ">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedul (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/*     RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Annoucements />
      </div>
    </div>
  );
};

export default ParentPage;
