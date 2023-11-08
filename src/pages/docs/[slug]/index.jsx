import React from "react";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import CategoryHeading from "@/components/Elements/CategoryHeading";
import MediumButton from "@/components/Elements/MediumButton";
import Tag from "@/components/Elements/Tag";
import Layout from "@/components/Layout";

const Document = () => {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-6xl font-bold text-center">
            A/L Biology Past Papers | Marking Schemes
          </h1>

          {/* page section Section */}
          <section className=" w-full my-2">
            <div>
              <h2 className="mb-1">
                <CategoryHeading name="Syllabuses" />
              </h2>
              <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300 grid grid-cols-3">
                {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}
                <div className="col-span-1">
                  <h3 className="text-lg bg-yellow-300 text-center">Year</h3>
                  <div className=" text-lg ">
                    <CategorySubHeading name="2021" className={"lg:py-1"} />
                    <CategorySubHeading name="2021" className={"lg:py-1"} />
                    <CategorySubHeading name="2021" className={"lg:py-1"} />
                  </div>
                </div>
                <div className="col-span-2">
                  <h3 className="text-lg bg-yellow-300 text-center">Mediam</h3>
                  <div className=" text-lg ">
                    <div className="grid grid-cols-3 gap-4">
                      <MediumButton medium={"Sinhala"} />
                      <MediumButton medium={"Tamil"} />
                      <MediumButton medium={"English"} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <MediumButton medium={"Sinhala"} />
                      <MediumButton medium={"Tamil"} />
                      <MediumButton medium={"English"} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <MediumButton medium={"Sinhala"} />
                      <MediumButton medium={"Tamil"} />
                      <MediumButton medium={"English"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* page section Section  */}
        </div>
      </Layout>
    </>
  );
};

export default Document;
