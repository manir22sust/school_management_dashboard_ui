"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Annoucements from "@/app/components/Annoucements";
import BigCalendar from "@/app/components/BigCalender";
import Performance from "@/app/components/Performance";

import "react-big-calendar/lib/css/react-big-calendar.css";
import FormModal from "@/app/components/FormModal";

const SingleTeacherPage = () => {
  return (
    <div className="flex flex-1 flex-col p-4  gap-4 xl:flex-row">
      {/*     LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARDS */}
          <div className="bg-SchoolSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/6981027/pexels-photo-6981027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold"> Samir Heba</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>
              <p className="text-sm text-gray-400">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam, eum?{" "}
              </p>
              <div className="flex items-center gap-2 justify-between flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span> O+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span> Febuary</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span> user</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span> O+</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex  gap-4 justify-between  flex-wrap">
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branch</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARDS */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 "
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white p-4 h-[800px]">
          <h1> Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/*     RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcurts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-SchoolSkyLight"
              href="/list/students"
            >
              Students
            </Link>
            <Link
              className="p-3 rounded-md bg-SchoolPurpleLight"
              href="/list/teachers"
            >
              Teachers
            </Link>
            <Link
              className="p-3 rounded-md bg-SchoolYellowLight"
              href="/list/classes"
            >
              Classes
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/list/branches">
              Branches
            </Link>
            <Link className="p-3 rounded-md bg-gray-50" href="/list/lessons">
              Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-SchoolSkyLight"
              href="/list/assignments"
            >
              Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Annoucements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
