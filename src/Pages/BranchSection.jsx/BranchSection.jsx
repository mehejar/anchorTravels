
// import required modules
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

import { HiMiniBuildingOffice } from "react-icons/hi2";


const BranchSection = () => {
    return (
        <div className="py-20">
            <div className="">
                <h2 className=" text-center text-5xl font-bold">Visit Our Branch</h2>
            </div>

            <div className="flex justify-between lg:w-2/3 px-6 lg:px-0 mx-auto flex-col pt-12 lg:flex-row">
                {/* branch */}
                <div className="p-5 rounded-md border-2 my-8">
                    <h2 className="text-lg font-bold uppercase -mt-8 text-center bg-blue-600 py-1 rounded-md text-white">Head Office</h2>
                    <h2 className="py-4 text-lg flex items-center gap-2"><span className="text-2xl"><HiMiniBuildingOffice></HiMiniBuildingOffice></span> 77-04 101 Avenue, <br />
                        Ozone Park, NY 11416</h2>
                    <h2 className="py-2 text-lg font-semibold flex items-center gap-2"><span className="text-2xl"><IoCallSharp></IoCallSharp></span>917-300-2450</h2>
                </div>
                {/* Ozone Park Branch */}
                <div className="p-5 rounded-md border-2 my-8">
                    <h2 className="text-lg font-bold uppercase -mt-8 text-center bg-blue-600 py-1 rounded-md text-white">Ozone Park Branch</h2>
                    <h2 className="py-4 text-lg flex items-center gap-2"><span className="text-2xl"><HiMiniBuildingOffice></HiMiniBuildingOffice></span> 74-19 101 Avenue, <br />
                        Ozone Park, NY 11416</h2>
                    <h2 className="py-2 text-lg font-semibold flex items-center gap-2"><span className="text-2xl"><IoCallSharp></IoCallSharp></span>929-499-3500</h2>
                </div>
                {/* Jackson Heights Branch */}
                <div className="p-5 rounded-md border-2 my-8">
                    <h2 className="text-lg font-bold uppercase -mt-8 text-center bg-blue-600 py-1 rounded-md text-white">Jackson Heights Branch</h2>
                    <h2 className="py-4 text-lg flex items-center gap-2"><span className="text-2xl"><HiMiniBuildingOffice></HiMiniBuildingOffice></span> 73-05 37th Road Lower Level, <br />
                        Jackson Heights, NY</h2>
                    <h2 className="py-2 text-lg font-semibold flex items-center gap-2"><span className="text-2xl"><IoCallSharp></IoCallSharp></span>516-850-1311</h2>
                </div>
                {/* Brooklyn Branch */}
                <div className="p-5 rounded-md border-2 my-8">
                    <h2 className="text-lg font-bold uppercase -mt-8 text-center bg-blue-600 py-1 rounded-md text-white">Brooklyn Branch</h2>
                    <h2 className="py-4 text-lg flex items-center gap-2"><span className="text-2xl"><HiMiniBuildingOffice></HiMiniBuildingOffice></span>487 McDonald Avenue, <br />
                        Brooklyn NY 11218</h2>
                    <h2 className="py-2 text-lg font-semibold flex items-center gap-2"><span className="text-2xl"><IoCallSharp></IoCallSharp></span>929 723-6446</h2>
                </div>
            </div>
        </div>
    )
}

export default BranchSection