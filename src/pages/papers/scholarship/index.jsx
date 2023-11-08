"use client";

import CategoryHeading from "@/components/Elements/CategoryHeading";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const ScholarshipMedium = () => {
  const searchParams = useSearchParams();
  const [paramsData, setParamsData] = useState({
    examType: searchParams.get("examType"),
    year: searchParams.get("year"),
  });
  return (
    <>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-6xl font-bold text-center">
            {`${paramsData.examType} ${paramsData.year} Past Papers | Marking Schemes`}
          </h1>

          {/* page section Section */}
          <section className=" w-full my-2">
            <div>
              <h2 className="mb-1">
                <CategoryHeading name="Syllabuses" />
              </h2>
              <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300 ">
                {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    {" "}
                    <h3 className="text-lg bg-yellow-300 text-center ">
                      Year
                    </h3>{" "}
                  </div>
                  <div className="col-span-2">
                    {" "}
                    <h3 className="text-lg bg-yellow-300 text-center">
                      Mediam
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <h2>{paramsData.year}</h2>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-3 gap-4">
                      <Link
                        href={{
                          pathname: "/papers/single/sldj",
                          query: {
                            medium: "sinhala",
                            year: paramsData.year,
                            //   subject: paramsData.subject,
                            examType: paramsData.examType,
                          },
                        }}
                      >
                        <h2>Sinhala</h2>
                      </Link>

                      <Link
                        href={{
                          pathname: "/papers/single/sldj",
                          query: {
                            medium: "tamil",
                            year: paramsData.year,
                            //   subject: paramsData.subject,
                            examType: paramsData.examType,
                          },
                        }}
                      >
                        <h2>Tamil</h2>
                      </Link>

                      <Link
                        href={{
                          pathname: "/papers/single/sldj",
                          query: {
                            medium: "english",
                            year: paramsData.year,
                            //   subject: paramsData.subject,
                            examType: paramsData.examType,
                          },
                        }}
                      >
                        <h2>English</h2>
                      </Link>
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

export default ScholarshipMedium;
