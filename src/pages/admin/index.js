import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="m-10 my-5 text-center">
        <div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="/admin/create/pastPaper">
              Create Past Paper(A/l,O/L,Scholarship Exam)
            </Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="/admin/create/textBook">
              Create Text Book/Syllabus/Teachers Guide
            </Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All A/L papers</Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All O/L Papers</Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All Scholarship Papers</Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All Textbooks</Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All Syllabuses</Link>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 my-1 text-lg font-mono font-bold hover:bg-gray-200 transition:ease-in">
            <Link href="#">All Teachers Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
