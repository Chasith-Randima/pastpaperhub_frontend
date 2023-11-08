"use client";
import { alsubjects, olsubjects, scholarShipYears } from "@/utils/data/data";
import CategoryHeading from "@/components/Elements/CategoryHeading";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

import Head from "next/head";
import Layout from "@/components/Layout";

const Category = () => {
  const searchParams = useSearchParams();

  const [paramsData, setParamsData] = useState({
    examType: searchParams.get("examType"),
  });

  const head = () => {
    return (
      <Head>
        <title>{`${paramsData.examType} Past Papers and Marking Schemes`}</title>
        <meta
          name="description"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download ${paramsData.examType} past papers and marking schemes`}
        />
        <meta
          name="application-name"
          content={process.env.NEXT_PUBLIC_APP_NAME}
        />
        <meta name="author" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <link rel="author" href={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN} />
        <meta name="generator" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta
          name="keywords"
          content={`${paramsData.examType} Past papers,${paramsData.examType} Marking Schemes,Download ${paramsData.examType} Past papers,Download ${paramsData.examType} Marking Schemes,`}
        />
        <meta name="creator" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="publisher" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN} />
        {/* <link rel="alternate" hreflang="en-US" href="https://acme.com/en-US" />
        <link rel="alternate" hreflang="de-DE" href="https://acme.com/de-DE" /> */}
        <meta
          property="og:title"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta
          property="og:description"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}
        />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_APP_NAME}
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image:url"
          content={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:url"
          content={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}
        />
        <meta property="og:image:width" content="1800" />
        <meta property="og:image:height" content="1600" />
        <meta
          property="og:image:alt"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta
          property="og:description"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta property="og:type" content="article" />
        {/* <meta
          property="article:published_time"
          content="2023-01-01T00:00:00.000Z"
        />
        <meta property="article:author" content="Seb" />
        <meta property="article:author" content="Josh" /> */}

        <meta name="robots" content="index, follow, nocache" />
        <meta
          name="googlebot"
          content="index, follow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        <meta
          name="twitter:card"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta name="twitter:site:id" content="1467726470533754880" />
        <meta
          name="twitter:creator"
          content={process.env.NEXT_PUBLIC_APP_NAME}
        />
        <meta name="twitter:creator:id" content="1467726470533754880" />
        <meta
          name="twitter:title"
          content={`${paramsData.examType} Past Papers and Marking Schemes`}
        />
        <meta
          name="twitter:description"
          content={`${paramsData.examType} Past Papers and Marking Schemes Download`}
        />
        <meta
          name="twitter:image"
          content={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}
        />
      </Head>
    );
  };

  return (
    <>
      {head()}

      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-between p-24 mt-5">
          <h1 className="text-6xl font-bold text-center">
            {`${paramsData.examType}  Past Papers | Marking Schemes`}
          </h1>

          <section className=" gap-8 w-full my-5">
            {paramsData.examType == "A/L Exam" && (
              <div>
                {/* <h2 className="mb-1">
              <CategoryHeading name="A/L" />
            </h2> */}
                <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
                  {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <h3 className="text-lg bg-yellow-300 text-center">
                        Stream
                      </h3>
                    </div>
                    <div className="col-span-2">
                      <h3 className="text-lg bg-yellow-300 text-center">
                        Subject
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-3">
                    {alsubjects.map((item, index) => {
                      return (
                        <>
                          <div className="col-span-1" key={index}>
                            <h3>{Object.keys(item)[0]}</h3>
                          </div>
                          <div className="col-span-2" key={index + 100}>
                            {item[Object.keys(item)[0]].map((data, index) => {
                              return (
                                <CategorySubHeading
                                  link={`/papers/slk?subject=${data}&examType=A/L Exam`}
                                  name={data}
                                />
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {/* <div>
              <h3 className="text-lg bg-yellow-300 text-center">Stream</h3>
              <div className="text-center text-lg">
                <h3>Biology</h3>
              </div>
            </div> */}
                  {/* <div className="col-span-2">
              <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
              <div>
                <CategorySubHeading name="Chemistry" />
                <CategorySubHeading name="Biology" />
                <CategorySubHeading name="Chemistry" />
              </div>
            </div> */}
                </div>
              </div>
            )}

            {paramsData.examType == "O/L Exam" && (
              <div>
                <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
                  {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}

                  <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
                  <div className=" text-lg ">
                    {olsubjects.map((item, index) => {
                      return (
                        <CategorySubHeading
                          name={item}
                          link={`/papers/slk?subject=${item}&examType=O/L Exam`}
                          key={index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {paramsData.examType == "Grade 5 Scholarship Exam" && (
              <div>
                <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
                  {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
                <CategorySubHeading name="Biology" />
              </h3> */}

                  <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
                  <div className=" text-lg ">
                    {scholarShipYears.map((item, index) => {
                      return (
                        <CategorySubHeading
                          name={item.year}
                          link={`/papers/scholarship?year=${item.year}&examType=Grade 5 Scholarship Exam`}
                          key={index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </section>
          {/* AL - OL Section */}
        </div>
      </Layout>
    </>
  );
};

export default Category;
