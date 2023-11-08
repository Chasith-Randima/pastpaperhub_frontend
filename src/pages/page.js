import CategoryHeading from "@/components/Elements/CategoryHeading";
import CategorySubHeading from "@/components/Elements/CategorySubHeading";
import Tag from "@/components/Elements/Tag";
import MainCategories from "@/components/MainCategories";
import {
  alsubjects,
  categoryArray,
  olsubjects,
  scholarShipYears,
  syllabuses,
  teachersGuide,
  textBooks,
} from "@/utils/data/data";
import Image from "next/image";

export default function Home() {
  const blog = {
    tags: ["the quick brown fox"],
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* main category section */}
      <section className="grid grid-rows-2 w-full">
        <div className="grid grid-cols-4">
          <Tag
            link={`/papers/category?examType=${categoryArray[2]}`}
            name={categoryArray[2]}
            className={"md:p-6 my-auto"}
          />
          <Tag
            link={`/papers/category?examType=${categoryArray[3]}`}
            name={categoryArray[3]}
            className={"md:p-6 my-auto"}
          />
          <Tag
            link={`/papers/category?examType=${categoryArray[4]}`}
            name={categoryArray[4]}
            className={"md:p-6 my-auto"}
          />
          <Tag
            link={`/papers/category?examType=${categoryArray[5]}`}
            name={categoryArray[5]}
            className={"md:p-6 my-auto"}
          />
        </div>
        <div className="grid grid-cols-2">
          <Tag
            link={`/papers/category?examType=${categoryArray[0]}`}
            name={categoryArray[0]}
            className={"md:p-6 my-auto"}
          />
          <Tag
            link={`/papers/category?examType=${categoryArray[1]}`}
            name={categoryArray[1]}
            className={"md:p-6 my-auto"}
          />
        </div>
      </section>
      {/* main category section */}
      {/* AL - OL Section */}
      <section className="grid grid-cols-2 gap-8 w-full my-2">
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="A/L" />
          </h2>
          <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
            {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <h3 className="text-lg bg-yellow-300 text-center">Stream</h3>
              </div>
              <div className="col-span-2">
                <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
              </div>
            </div>
            <div className="grid grid-cols-3">
              {alsubjects.map((item, index) => {
                return (
                  <>
                    <div className="col-span-1">
                      <h3>{Object.keys(item)[0]}</h3>
                    </div>
                    <div className="col-span-2">
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
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="O/L" />
          </h2>
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
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* AL - OL Section */}
      {/* Teachers Guide - Syllabus Section */}
      <section className="grid grid-cols-2 gap-8 w-full my-2">
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="Teacher's Guides" />
          </h2>
          <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
            {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}

            <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
            <div className=" text-lg ">
              {teachersGuide.map((item, index) => {
                return <CategorySubHeading name={item} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="Syllabuses" />
          </h2>
          <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
            {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}

            <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
            <div className=" text-lg ">
              {syllabuses.map((item, index) => {
                return <CategorySubHeading name={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Teachers Guide - Syllabus Section  */}
      {/* Text Books - Scholarship Papers Section */}
      <section className="grid grid-cols-2 gap-8 w-full my-2">
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="Text Books" />
          </h2>
          <div className="rounded-lg capitalize font-semibold border-2 border-solid border-yellow-300">
            {/* <h3 className="bg-gray-200 pl-2 hover:bg-yellow-300 transition-all ease-in cursor-pointer rounded-md">
              <CategorySubHeading name="Biology" />
            </h3> */}

            <h3 className="text-lg bg-yellow-300 text-center">Subject</h3>
            <div className=" text-lg ">
              {textBooks.map((item, index) => {
                return <CategorySubHeading name={item} />;
              })}
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-1">
            <CategoryHeading name="Scholarship Papers" />
          </h2>
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
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Teachers Guide - Syllabus Section  */}
    </main>
  );
}
