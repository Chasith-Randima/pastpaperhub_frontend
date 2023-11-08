"use client";
import { useState, useEffect } from "react";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import CategoryHeading from "@/components/Elements/CategoryHeading";
import MediumButton from "@/components/Elements/MediumButton";
import Tag from "@/components/Elements/Tag";
import { onePaper, onePaperByParams } from "@/actions/pastPapers";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import Layout from "@/components/Layout";

const SinglePage = () => {
  const searchParams = useSearchParams();
  const [paramsData, setParamsData] = useState({
    medium: searchParams.get("medium"),
    examType: searchParams.get("examType"),
    year: searchParams.get("year"),
    subject: searchParams.get("subject"),
  });

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
    fetchData();
  }, []);

  const fetchData = async () => {
    // let id = router.query.locationId;
    console.log(searchParams.get("medium"));
    let params = {
      medium: paramsData.medium,
      year: paramsData.year,
      subject: paramsData.subject,
      examType: paramsData.examType,
    };

    // console.log(id);
    await onePaperByParams(params)
      .then((data) => {
        console.log(data, "fetched.........................");
        if (data.status && data.status == "success") {
          // if (data.results == 0) {
          //   setAlert({
          //     ...alert,
          //     loading: false,
          //     message: data.message,
          //     error: false,
          //     success: true,
          //   });

          //   window.setTimeout(() => {
          //     resetAlert();
          //   }, 1000);
          // } else {
          setAllData(data.doc[0]);
          console.log(data.doc, "inside else");
          // console.log(data.totalCount);
          // let totalCount = data.totalCount;
          // setTotalPages(Math.ceil(totalCount / limit));
          // setShow(false);
          // }
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
  console.log(allData, "this is all dat");
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Layout>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-6xl font-bold text-center">
            {`${paramsData.examType} ${
              paramsData.examType != "Grade 5 Scholarship Exam"
                ? paramsData.subject
                : ""
            } Past Paper ${paramsData.year} ${
              paramsData.medium
            } Medium | Marking Schemes`}
          </h1>

          {/* page section Section */}
          <section className=" w-full my-2">
            <div>
              <h2 className="mb-1">
                <CategoryHeading name="Syllabuses" />
              </h2>
              <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300 grid justify-items-center items-center">
                {/* {allData && (
                <iframe
                  src={allData && allData.qPaper1}
                  width="640"
                  height="480"
                  style={{ borderRadius: "5%" }}
                  allow="autoplay"
                  className="border-2 border-solid border-yellow-300"
                ></iframe>
              )} */}

                {allData && (
                  <iframe
                    //   src={allData.qPart1}
                    src={`${allData.mScheme1.split("view")[0]}/preview`}
                    // src="https://drive.google.com/file/d/1jxZg8iPFmQcOua_romKuJ3vEn8r3Ye-j/preview"
                    width="640"
                    height="480"
                    style={{ borderRadius: "5%" }}
                    allow="autoplay"
                    className="border-2 border-solid border-yellow-300"
                  ></iframe>
                )}
              </div>
            </div>
          </section>
          {/* page section Section  */}
          {/* DOWNLOAD SECTIOn */}
          <section className="w-full my-2 text-center">
            <div>
              <button
                className="p-5 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-bold transition-all my-10"
                onClick={() =>
                  handleLinkClick(allData ? allData.mScheme1 : "#")
                }
              >
                Download
              </button>
            </div>
            <div>
              <Link
                className="p-5 my-10 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-bold transition-all"
                href="#"
              >
                Past Paper
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default SinglePage;
