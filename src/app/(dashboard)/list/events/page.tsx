import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { eventsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Event = {
  id: number;
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },

  {
    header: "Start Time",
    accessor: "startTime",

    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "Action",
  },
];

const EventListPage = () => {
  const renderRow = (item: Event): React.ReactNode => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-SchoolPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">{item.title}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td className="hidden md:table-cell">{item.startTime}</td>
        <td className="hidden md:table-cell">{item.endTime}</td>

        <td>
          <div className="flex items-center gap-2">
            {/*   <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 bg-SchoolSky rounded-full flex items-center justify-center">
                <Image
                  src="/lesson.png"
                  alt="Add Teacher"
                  width={14}
                  height={14}
                />
              </button>
            </Link> */}
            <FormModal table="event" type="update" data={item} />
            {role === "admin" && (
              /*  <button className="w-7 h-7 bg-SchoolPurple rounded-full flex items-center justify-center">
                <Image
                  src="/delete.png"
                  alt="Add Teacher"
                  width={14}
                  height={14}
                />
              </button> */
              <FormModal table="event" type="delete" id={item.id} />
            )}
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="bg-white p-4 rounded-md flex items-center justify-between">
        <h1 className="hidden md:block text-xl font-semibold"> All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 bg-SchoolYellow rounded-full flex items-center justify-center">
              <Image
                src="/filter.png"
                alt="Add Teacher"
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 bg-SchoolYellow rounded-full flex items-center justify-center">
              <Image src="/sort.png" alt="Add Teacher" width={14} height={14} />
            </button>
            {role === "admin" && (
              <>
                {/* <button className="w-8 h-8 bg-SchoolYellow rounded-full flex items-center justify-center">
                <Image
                  src="/create.png"
                  alt="Add Teacher"
                  width={14}
                  height={14}
                />
              </button> */}
                <FormModal table="event" type="create" />
              </>
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={eventsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default EventListPage;
