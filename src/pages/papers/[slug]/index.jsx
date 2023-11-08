"use client";

import { useState, useEffect } from "react";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import CategoryHeading from "@/components/Elements/CategoryHeading";
import MediumButton from "@/components/Elements/MediumButton";
import Tag from "@/components/Elements/Tag";
import { allPapers, papersById } from "@/actions/pastPapers";
import { getCookie } from "@/actions/auth";

import { years } from "@/utils/data/data";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import siteMetadata from "@/utils/siteMetaData";
import Layout from "@/components/Layout";

const Paper = () => {
  const searchParams = useSearchParams();
  const [paramsData, setParamsData] = useState({
    examType: searchParams.get("examType"),
    subject: searchParams.get("subject"),
  });

  const head = () => {
    return (
      <Head>
        <title>{`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes`}</title>
        <meta
          name="description"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download ${paramsData.examType} ${paramsData.subject} past papers and marking schemes`}
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
          content={`${paramsData.examType} ${paramsData.subject} Past papers,${paramsData.examType} ${paramsData.subject} Marking Schemes,Download ${paramsData.examType} ${paramsData.subject} Past papers,Download ${paramsData.examType} ${paramsData.subject} Marking Schemes,,tamilguru.lk,pastpaperwiki,govdoc,Sri lankan past papers,sri lankan marking schemes`}
        />
        <meta name="creator" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="publisher" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN} />
        {/* <link rel="alternate" hreflang="en-US" href="https://acme.com/en-US" />
        <link rel="alternate" hreflang="de-DE" href="https://acme.com/de-DE" /> */}
        <meta
          property="og:title"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
        />
        <meta
          property="og:description"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
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
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
        />
        <meta
          property="og:description"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
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
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
        />
        <meta name="twitter:site:id" content="1467726470533754880" />
        <meta
          name="twitter:creator"
          content={process.env.NEXT_PUBLIC_APP_NAME}
        />
        <meta name="twitter:creator:id" content="1467726470533754880" />
        <meta
          name="twitter:title"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes`}
        />
        <meta
          name="twitter:description"
          content={`${paramsData.examType} ${paramsData.subject} Past Papers and Marking Schemes Download`}
        />
        <meta
          name="twitter:image"
          content={process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}
        />
      </Head>
    );
  };

  const [allData, setAllData] = useState();

  const [alert, setAlert] = useState({
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  const resetAlert = () => {
    setAlert({ message: "", error: false, loading: false, success: false });
  };

  useEffect(() => {
    handleSubmit();
    // console.log(allData);
  }, []);

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
    let params;
    setAlert({ ...alert, loading: true });

    params = {
      examType: paramsData.examType,
      subject: paramsData.subject,
    };

    let token = getCookie("token_user");

    await papersById(params)
      .then((data) => {
        console.log(data);
        if (data.status && data.status == "success") {
          if (data.results == 0) {
            setAlert({
              ...alert,
              loading: false,
              message: data.message,
              error: false,
              success: true,
            });

            window.setTimeout(() => {
              resetAlert();
            }, 1000);
          } else {
            setAllData(data.papers);
            console.log(data.totalCount);
            // let totalCount = data.totalCount;
            // setTotalPages(Math.ceil(totalCount / limit));
            // setShow(false);
          }
          setAlert({
            ...alert,
            loading: false,
            message: data.message,
            error: false,
            success: true,
          });

          window.setTimeout(() => {
            resetAlert();
          }, 1000);
        }

        // return { data };
      })
      .catch((err) => {
        console.log(err);

        setAlert({
          ...alert,
          loading: false,
          message: err.message,
          error: true,
          success: false,
        });
      });
  };

  return (
    <>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-6xl font-bold text-center">
            {`${paramsData.examType} ${paramsData.subject} Past Papers | Marking Schemes`}
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
                {years.map((item, index) => {
                  return (
                    <div className="grid grid-cols-3" key={index}>
                      <div className="col-span-1 text-center">
                        <h2>{item.year}</h2>
                      </div>
                      <div className="col-span-2">
                        <div className="grid grid-cols-3 gap-4">
                          {item.sinhala && (
                            <Link
                              href={{
                                pathname: "/papers/single/sldj",
                                query: {
                                  medium: "sinhala",
                                  year: item.year,
                                  subject: paramsData.subject,
                                  examType: paramsData.examType,
                                },
                              }}
                              className="inline-block px-1 py-1  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base text-center $"
                            >
                              <h2>Sinhala</h2>
                            </Link>
                          )}
                          {item.tamil && (
                            <Link
                              href={{
                                pathname: "/papers/single/sldj",
                                query: {
                                  medium: "tamil",
                                  year: item.year,
                                  subject: paramsData.subject,
                                  examType: paramsData.examType,
                                },
                              }}
                              className="inline-block px-1 py-1  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base text-center $"
                            >
                              <h2>Tamil</h2>
                            </Link>
                          )}
                          {item.english && (
                            <Link
                              href={{
                                pathname: "/papers/single/sldj",
                                query: {
                                  medium: "english",
                                  year: item.year,
                                  subject: paramsData.subject,
                                  examType: paramsData.examType,
                                },
                              }}
                              className="inline-block px-1 py-1  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base text-center $"
                            >
                              <h2>English</h2>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="col-span-1">
                <h3 className="text-lg bg-yellow-300 text-center">Year</h3>
                <div className=" text-lg ">
                  {years.map((year, index) => {
                    return (
                      <CategorySubHeading
                        name={year["year"]}
                        className={"lg:py-1 mt-1 mb-1"}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="col-span-2">
                <h3 className="text-lg bg-yellow-300 text-center">Mediam</h3>
                <div className=" text-lg ">
                  {years.map((item, index) => {
                    return (
                      <div className="grid grid-cols-3 gap-4">
                        {item.sinhala && <MediumButton medium={"Sinhala"} />}
                        {item.tamil && <MediumButton medium={"Tamil"} />}
                        {item.english && <MediumButton medium={"English"} />}
                      </div>
                    );
                  })}
                </div>
              </div> */}
              </div>
            </div>
          </section>
          {/* page section Section  */}
        </div>
      </Layout>
    </>
  );
};

export default Paper;
