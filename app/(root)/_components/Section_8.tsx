const Section_8 = () => {
  return (
    <div
      className="section mt-8 flex flex-col items-center justify-center py-4 md:py-12 visible"
      style={{
        backgroundImage:
          "url('https://cdn.10minuteschool.com/images/bg_01_1700634148023.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <style>
        .odd-last-child-w-full:last-child:nth-child(odd) {
            conspan: 2;
        }
    </style> */}
      <div className="container text-center">
        <h2 className="text-[21px] font-bold leading-[30px] text-white md:text-[44px] md:font-semibold md:leading-[56px]">
          ২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য
        </h2>
        <p className="text-sm text-white md:text-[21px] md:leading-[30px]">
          তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-4 py-7 md:grid-cols-3 md:gap-12">
        <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white md:py-8">
          <h2 className="count text-2xl font-semibold md:mb-[14px] md:text-[56px] md:leading-[44px]">
            <span>১৫,৫৪৮</span>
          </h2>
          <p className="text-sm font-medium leading-[30px] md:text-xl">
            মোট শিক্ষার্থী
          </p>
        </div>
        <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white md:py-8">
          <h2 className="count text-2xl font-semibold md:mb-[14px] md:text-[56px] md:leading-[44px]">
            <span>১,৪০০</span>+
          </h2>
          <p className="text-sm font-medium leading-[30px] md:text-xl">
            চান্সপ্রাপ্ত শিক্ষার্থী
          </p>
        </div>
        <div className="border-1 col-span-1 flex flex-col items-center justify-center rounded-xl border-white border-opacity-0 bg-[#00000042] p-4 py-2 text-white md:py-8 col-span-2 md:col-span-1">
          <h2 className="count text-2xl font-semibold md:mb-[14px] md:text-[56px] md:leading-[44px]">
            <span>৩৪</span>
          </h2>
          <p className="text-sm font-medium leading-[30px] md:text-xl">
            টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_8;
