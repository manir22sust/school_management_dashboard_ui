import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },

  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "Action",
  },
];

const StudentListPage = () => {
  const renderRow = (item: Student): React.ReactNode => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-SchoolPurpleLight"
      >
        <td className="flex items-center gap-4 p-4">
          <Image
            src={item.photo}
            alt={item.name}
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-xs">{item.class}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>

        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/students/${item.id}`}>
              <button className="w-7 h-7 bg-SchoolSky rounded-full flex items-center justify-center">
                <Image
                  src="/view.png"
                  alt="Add Teacher"
                  width={14}
                  height={14}
                />
              </button>
            </Link>
            {role === "admin" && (
              <>
                {/* <button className="w-7 h-7 bg-SchoolPurple rounded-full flex items-center justify-center">
                  <Image
                    src="/delete.png"
                    alt="Add Teacher"
                    width={14}
                    height={14}
                  />
                </button> */}
                <FormModal table="student" type="delete" id={item.id} />
              </>
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
        <h1 className="hidden md:block text-xl font-semibold">
          {" "}
          All Students{" "}
        </h1>
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
              /*    <button className="w-8 h-8 bg-SchoolYellow rounded-full flex items-center justify-center">
                <Image
                  src="/create.png"
                  alt="Add Teacher"
                  width={14}
                  height={14}
                />
              </button> */
              <FormModal table="student" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
