import UserCard from "@/app/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*     LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        l{/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/*     RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">r</div>
    </div>
  );
};

export default AdminPage;
