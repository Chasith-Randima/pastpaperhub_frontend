import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const AllPastPapers = () => {
  return (
    <>
      <Layout>
        <section className="mx-10">
          <div className="flex justify-center">
            {/* {alert.error && (
            <Message message={alert.message} resetAlert={resetAlert} />
          )}
          {alert.success && (
            <Message message={alert.message} resetAlert={resetAlert} />
          )}
          {alert.loading && (
            <Message
              message={"Loading...Please Waite..."}
              resetAlert={resetAlert}
            />
          )} */}
          </div>

          <h2 className="text-gray-600 text-2xl mt-2 font-semibold ">
            All Devices
          </h2>
          <div className="mt-2  border-2 border-gray-200 rounded-xl">
            <div className="grid   grid-cols-10 md:grid-cols-6 bg-gray-400 p-4 rounded-xl text-black text-xl font-sb ">
              <h2 className="hidden md:block">Subject</h2>
              <h2>Medium</h2>
              <h2>Year</h2>
              <h2>Type</h2>
              <h2 className="text-center col-span-2 md:col-span-1 mr-2 md:mr-0">
                Update
              </h2>
              <h2 className="text-center col-span-2 md:col-span-1 ml-2 md:ml-0">
                Delete
              </h2>
            </div>
            <div className="">
              {/* {console.log(allData)}
            {allData &&
              allData.devices.map((device) => {
                return <Device device={device} all={true} />;
              })} */}

              <div className="grid grid-cols-5 gap-2 md:grid-cols-6 p-4 border-b-2 border-gray-200 hover:bg-gray-300 transition-all rounded-xl">
                <h3 className="hidden md:block col-span-1">
                  {/* {location._id.substr(location._id.length / 2, location._id.length)} */}
                  skdjhf
                </h3>

                <Link
                  href={`/locations/single/`}
                  className="underline text-2sm font-bold capitalize text-gray-800"
                >
                  location.locationName
                </Link>

                <h3 className="">location.address</h3>
                <h3 className="">location.phone</h3>

                <Link href={`/locations/update/=`}>
                  <h2 className="p-1 bg-green-400 text-black hover:bg-green-600 transition-all rounded-xl text-center cursor-pointer">
                    Update
                  </h2>
                </Link>
                <h2
                  className="p-1 bg-red-400 text-black px-5 hover:bg-red-600 transition-all rounded-xl text-center cursor-pointer h-8"
                  //   onClick={() => handleDelete(location._id)}
                >
                  {" "}
                  Delete
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AllPastPapers;
