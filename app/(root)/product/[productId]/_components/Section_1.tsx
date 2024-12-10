"use client"

import { useState } from "react"

const Section_1 = () => {
  return (
    <section className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
      <div>
        <div className="sticky top-[65px] z-20 hidden bg-white md:block">
          <div className="tenms-carousel relative light right">
            <div className="w-full overflow-hidden">
              <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  fill="none"
                  viewBox="0 0 33 32"
                  className="xl:mr-[-40px]"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.5"
                    fillRule="evenodd"
                    d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  fill="none"
                  viewBox="0 0 33 32"
                  className="rotate-180 xl:ml-[-40px]"
                >
                  <path
                    fill="#000"
                    fillOpacity="0.5"
                    fillRule="evenodd"
                    d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
              <ul className="flex my-4 border-b flex-nowrap">
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button></button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button></button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Course instructors</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>How the course is laid out</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>What you will learn by doing the course</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Class routine</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Free items with this products-</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Students opinion</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Course details</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Payment process</button>
                </li>
                <li className="text-nowrap p-2 text-base text-gray-600">
                  <button>Frequently Ask Questions</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-[140px] -mt-[140px]">
          <div>
            <div id="demo_class_book_engagement">
              <div
                style={{
                  backgroundImage:
                    "url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)",
                  backgroundSize: "cover",
                }}
                className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
              >
                <div className="w-full md:w-1/2">
                  <img
                    src="https://cdn.10minuteschool.com/images/customicon_1722414519957.png"
                    style={{ height: "40px" }}
                    className="mb-4"
                  />
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: "#ffffff" }}
                  >
                    সেরা ইন্সট্রাক্টরদের এক্সক্লুসিভ IELTS লাইভ ওয়েবিনার
                  </h2>
                  <p className="mt-2 text-base" style={{ color: "#f1eded" }}>
                    IELTS প্রস্তুতি শুরু করার সেরা কৌশলগুলো জানুন সেরা
                    ইন্সট্রাক্টরদের গাইডলাইনে, সরাসরি।
                  </p>
                  <button className="mt-6 button primary">
                    ফ্রি ডেমো ক্লাস বুক করুন
                  </button>
                </div>
                <div className="items-center hidden w-1/2 md:flex">
                  <img
                    src="https://cdn.10minuteschool.com/images/Live-Class_1722414830821.png"
                    height="200"
                  />
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div id="instructors">
              <div className="mb-10 xs:bg-[#EEF2F4] xs:py-2">
                <div className="pt-4 pb-2 bg-white relative">
                  <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                    Course instructors
                  </h2>
                  <div className="grid grid-cols-1 px-4 mb-4 border rounded-md lg:grid-cols-2">
                    <div className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                      <div
                        className="mt-2 rounded-md"
                        style={{
                          width: "73px",
                          height: "73px",
                          position: "relative",
                          overflow: "hidden",
                          minWidth: "50px",
                        }}
                      >
                        <div
                          className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="IELTS LIVE Batch by Zawad Hasan Adib"
                            data-original-src="https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg"
                            draggable="false"
                            loading="lazy"
                            width="73"
                            height="73"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10ms.com/catalog/instructors/images/Zawad-Abid-1080x1080_1708605104798.jpg?w=73&amp;h=73"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 ml-3">
                        <h3 className="text-lg">Zawad Hasan Adib</h3>
                        <div className="text-sm">
                          <p>
                            Band Score: 8.0 <br />
                            6+ Years Exp <br />
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                      <div
                        className="mt-2 rounded-md"
                        style={{
                          width: "73px",
                          height: "73px",
                          position: "relative",
                          overflow: "hidden",
                          minWidth: "50px",
                        }}
                      >
                        <div
                          className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="IELTS LIVE Batch by Sharlin Ulfatt Bhuiyan"
                            data-original-src="https://cdn.10ms.com/catalog/instructors/images/sharlin_1732796671628.jpg"
                            draggable="false"
                            loading="lazy"
                            width="73"
                            height="73"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10ms.com/catalog/instructors/images/sharlin_1732796671628.jpg?w=73&amp;h=73"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 ml-3">
                        <h3 className="text-lg">Sharlin Ulfatt Bhuiyan</h3>
                        <div className="text-sm">
                          <p>
                            Band Score: 8.0
                            <br />
                            1.5+ Years Exp
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                      <div
                        className="mt-2 rounded-md"
                        style={{
                          width: "73px",
                          height: "73px",
                          position: "relative",
                          overflow: "hidden",
                          minWidth: "50px",
                        }}
                      >
                        <div
                          className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="IELTS LIVE Batch by Hasnain Nur Sezan"
                            data-original-src="https://cdn.10ms.com/catalog/instructors/images/Sezan-1080_1715080657218.jpg"
                            draggable="false"
                            loading="lazy"
                            width="73"
                            height="73"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10ms.com/catalog/instructors/images/Sezan-1080_1715080657218.jpg?w=73&amp;h=73"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 ml-3">
                        <h3 className="text-lg">Hasnain Nur Sezan</h3>
                        <div className="text-sm">
                          <p>
                            Band Score: 8.0
                            <br />
                            5+ Years Exp
                          </p>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                      <div
                        className="mt-2 rounded-md"
                        style={{
                          width: "73px",
                          height: "73px",
                          position: "relative",
                          overflow: "hidden",
                          minWidth: "50px",
                        }}
                      >
                        <div
                          className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="IELTS LIVE Batch by Salsabil Haque"
                            data-original-src="https://cdn.10ms.com/catalog/instructors/images/Salsabil_%281%29_1732797737828.jpg"
                            draggable="false"
                            loading="lazy"
                            width="73"
                            height="73"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10ms.com/catalog/instructors/images/Salsabil_%281%29_1732797737828.jpg?w=73&amp;h=73"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 ml-3">
                        <h3 className="text-lg">Salsabil Haque</h3>
                        <div className="text-sm">
                          <p>
                            Band Score: 8.0
                            <br />
                            2+ Years Exp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="absolute bottom-2 left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                    বিস্তারিত দেখুন
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="features">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold leading-[30px] text-black">
                  How the course is laid out
                </h2>
                <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                  <div className="flex flex-row items-start gap-3 m-1">
                    <div>
                      <div
                        className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: "1" }}
                      >
                        <img
                          alt="৩৬টি ইন্টারেক্টিভ Live Class"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Lecture_Video_%281%29_1725883435272.png"
                          draggable="false"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          style={{ color: "transparent" }}
                          src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Lecture_Video_%281%29_1725883435272.png?w=36&amp;h=36"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                        ৩৬টি ইন্টারেক্টিভ Live Class
                      </h2>
                      <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        IELTS পরীক্ষার ৪টি Segment-এ আসতে পারে এমন সম্ভাব্য সকল
                        প্রশ্নের ধরন ও সমাধান করার কলাকৌশল
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 m-1">
                    <div>
                      <div
                        className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: "1" }}
                      >
                        <img
                          alt="Complete Mock Test"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Assignment_1731840285858.png"
                          draggable="false"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          style={{ color: "transparent" }}
                          src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Assignment_1731840285858.png?w=36&amp;h=36"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                        Complete Mock Test
                      </h2>
                      <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        ১০টি Practice PDF Mock Test-এর সাথে ২টি সম্পূর্ণ Mock
                        Test দেওয়ার সুযোগ
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 m-1">
                    <div>
                      <div
                        className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: "1" }}
                      >
                        <img
                          alt="1-1 Consultancy"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Instructor_1731840076049.png"
                          draggable="false"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          style={{ color: "transparent" }}
                          src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Instructor_1731840076049.png?w=36&amp;h=36"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                        1-1 Consultancy
                      </h2>
                      <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        Expert ইন্সট্রাক্টরদের সাথে সরাসরি নির্দেশনা সেশন
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-row items-start gap-3 m-1">
                    <div>
                      <div
                        className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: "0px", opacity: "1" }}
                      >
                        <img
                          alt="ফেসবুক সাপোর্ট গ্রুপ"
                          data-original-src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Facebook_1731840116546.png"
                          draggable="false"
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          data-nimg="1"
                          className=""
                          style={{ color: "transparent" }}
                          src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Facebook_1731840116546.png?w=36&amp;h=36"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                        ফেসবুক সাপোর্ট গ্রুপ
                      </h2>
                      <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                        IELTS সম্পর্কিত যেকোনো সমস্যায় এক্সপার্ট সল্যুশন দেওয়া
                        হবে ফেসবুক সাপোর্ট গ্রুপে
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="pointers">
              <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
                <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
                  <div className="">
                    <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                      What you will learn by doing the course
                    </h2>
                    <div className="rounded-md md:border">
                      <div className="pt-2 md:p-6">
                        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                          <li className="flex items-start gap-2 mb-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="mr-1 mt-[2px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(98, 148, 248)" }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <div className="flex-1">
                              Expert techniques for solving all possible
                              question types that may appear in the four IELTS
                              segments: Listening, Reading, Writing, and
                              Speaking.
                            </div>
                          </li>
                          <li className="flex items-start gap-2 mb-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="mr-1 mt-[2px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(98, 148, 248)" }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <div className="flex-1">
                              Techniques for speaking fluently in English,
                              understanding various accents easily, and deducing
                              meanings of unfamiliar words to answer questions
                              effectively.
                            </div>
                          </li>
                          <li className="flex items-start gap-2 mb-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="mr-1 mt-[2px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(98, 148, 248)" }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <div className="flex-1">
                              Simple strategies to achieve a higher band score
                              in each segment.
                            </div>
                          </li>
                          <li className="flex items-start gap-2 mb-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="mr-1 mt-[2px]"
                              height="20"
                              width="20"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{ color: "rgb(98, 148, 248)" }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <div className="flex-1">
                              Step-by-step guidelines for speed reading and time
                              management specifically for the IELTS exam.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="routine">
              <div className="flex items-center justify-between">
                <h2 className="mb-4 text-base font-semibold md:text-2xl">
                  Class routine
                </h2>
                <div className="flex items-center">
                  <img
                    src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/1667985694407.png"
                    className="h-4 w-[14px]"
                    alt="download"
                  />
                  <div className="ml-2">
                    <div className="text-sm font-medium underline cursor-pointer text-green md:text-base">
                      ডাউনলোড রুটিন
                    </div>
                  </div>
                </div>
              </div>
              <div className="html-content">
                <span
                  style={{ fontWeight: "normal" }}
                  id="docs-internal-guid-7ee35b42-7fff-e083-a37a-16c1b458a4de"
                >
                  <div dir="ltr" style={{ marginLeft: "0pt" }}>
                    <table style={{ border: "none" }}>
                      <colgroup>
                        <col width="194" />
                        <col width="251" />
                        <col width="193" />
                      </colgroup>
                      <tbody>
                        <tr style={{ height: "48.75pt" }}>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "700",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                মডিউল
                              </span>
                            </p>
                          </td>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "700",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                তারিখ
                              </span>
                            </p>
                          </td>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "700",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                মডিউল ভিত্তিক ক্লাস সংখ্যা
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr style={{ height: "16.5pt" }}>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                Introductory
                              </span>
                            </p>
                          </td>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                January 06, 2025
                              </span>
                            </p>
                          </td>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                1
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr style={{ height: "16.5pt" }}>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                Listening
                              </span>
                            </p>
                          </td>

                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <br />
                          </td>
                        </tr>
                        <tr style={{ height: "18.75pt" }}>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                মোট ক্লাস
                              </span>
                            </p>
                          </td>
                          <td
                            style={{
                              borderWidth: "0.625pt",
                              borderColor: "rgb(0, 0, 0)",
                              verticalAlign: "middle",
                              padding: "2pt",
                              overflow: "hidden",
                              overflowWrap: "break-word",
                            }}
                          >
                            <p
                              dir="ltr"
                              style={{
                                lineHeight: "1.38",
                                textAlign: "center",
                                marginTop: "0pt",
                                marginBottom: "0pt",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "11pt",
                                  fontFamily: "'Anek Bangla', sans-serif",
                                  backgroundColor: "transparent",
                                  fontWeight: "400",
                                  fontStyle: "normal",
                                  fontVariantNumeric: "normal",
                                  fontVariantEastAsian: "normal",
                                  fontVariantAlternates: "normal",
                                  fontVariantPosition: "normal",
                                  fontVariantEmoji: "normal",
                                  verticalAlign: "baseline",
                                  whiteSpaceCollapse: "preserve",
                                }}
                              >
                                36
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div id="free_items">
              <div className="mb-8 md:mb-14">
                <h2 className="my-3 md:my-5 text-lg md:text-xl font-semibold leading-[30px] text-black">
                  Free items with this products-
                </h2>
                <div
                  className="relative w-full overflow-hidden bg-no-repeat bg-cover bg-center md:bg-[0_50%] md:bg-[length:125%] rounded-lg bg-[url(https://cdn.10minuteschool.com/images/banner_background_1731401239364.png)]"
                  style={{ borderRadius: "16px" }}
                >
                  {/* Gradient overlay container */}
                  <div
                    className="p-2 md:p-4 absolute w-full h-full filter [&>*]:row-[1] [&>*]:col-[1]"
                    style={{ display: "grid", gridTemplateColumns: "1fr" }}
                  >
                    <div className="w-full h-full relative opacity-30 rounded-xl"></div>
                    <div className="rounded-2xl blur-sm mix-blend-hard-light overflow-hidden relative w-full h-full z-[1] before:content-[''] before:border-[6px] before:border-t-0 before:border-b-0 before:blur-[8px] before:absolute before:w-full before:h-full before:rounded-xl before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]"></div>
                    <div className="relative rounded-xl overflow-hidden w-full h-full z-[1] before:blur-[1.5px] before:absolute before:border before:w-full before:h-full before:content-[''] before:mix-blend-hard-light before:[border-image:conic-gradient(from_180deg_at_50%_50%,#FFE2BE_0deg,#FFA42D_36.0000005364418deg,#EDAE64_50.40000021457672deg,#8E9AFC_90.12555956840515deg,#67D1FF_102.59999871253967deg,#FFF_126.76394462585449deg,#FCD6F7_144.0000021457672deg,#F3CFFF_156.10909223556519deg,#CCA5F3_180deg,#E0CDF9_227.39765882492065deg,#472FFF_240.4190754890442deg,#479BFF_270deg,#B6E0FF_296.89493894577026deg,#FF8E75_323.99999141693115deg)_1]"></div>
                    <div className="rounded-xl w-full h-full z-[1] border-2 border-white blur-[1px] mix-blend-soft-light"></div>
                  </div>

                  {/* Content */}
                  <div className="text-white divide-y rounded-lg divide-dashed divide-slate-600 p-3 md:p-4 px-4 md:px-10 relative z-[1]">
                    {/* First Item */}
                    <div className="relative flex flex-col md:flex-row items-start justify-between gap-3 md:gap-4 px-2 md:px-5 py-3 md:py-5 overflow-hidden">
                      <div className="flex flex-col items-start gap-2">
                        <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold leading-tight text-white">
                          ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
                        </h2>
                        <div className="flex flex-col gap-1 md:gap-2">
                          <ul className="list-disc list-inside text-sm md:text-base">
                            {[
                              "360 পৃষ্ঠা",
                              "প্রিমিয়াম হার্ডকপি",
                              "ফ্রি ডেলিভারি",
                              "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি"
                            ].map((item, index) => (
                              <li key={index} className="flex items-center gap-2 mb-1">
                                <span className="opacity-60 text-xs md:text-sm">•</span>
                                <p className="text-sm md:text-base text-white">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="z-[1] flex justify-center md:justify-end w-full md:w-auto">
                        <div className="w-24 md:w-32 lg:w-40">
                          <img
                            alt="IELTS Book"
                            src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
                            className="w-full h-auto object-contain"
                            loading="lazy"
                            width="120"
                            height="150"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Second Item */}
                    <div className="relative flex flex-col md:flex-row items-start justify-between gap-3 md:gap-4 px-2 md:px-5 py-3 md:py-5 overflow-hidden">
                      <div className="flex flex-col items-start gap-2">
                        <h2 className="mb-2 text-base md:text-xl lg:text-2xl font-semibold leading-tight text-white">
                          English Foundation Course
                        </h2>
                        <div className="flex flex-col gap-1 md:gap-2">
                          <ul className="list-disc list-inside text-sm md:text-base">
                            {[
                              "৫৭টি Videos",
                              "IELTS প্রস্তুতির জন্য Basic to Advanced স্তরের বিভিন্ন Grammar এর গুরুত্বপূর্ণ টপিকসমূহ",
                              "অভিজ্ঞ শিক্ষকমণ্ডলী"
                            ].map((item, index) => (
                              <li key={index} className="flex items-center gap-2 mb-1">
                                <span className="opacity-60 text-xs md:text-sm">•</span>
                                <p className="text-sm md:text-base text-white">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="z-[1] flex justify-center md:justify-end w-full md:w-auto">
                        <div className="w-24 md:w-32 lg:w-40">
                          <img
                            alt="English Foundation Course"
                            src="https://cdn.10minuteschool.com/images/thumbnails/english-foundation-course-sqr-new.jpg"
                            className="w-full h-auto object-contain rounded-lg"
                            loading="lazy"
                            width="120"
                            height="150"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="testimonials">
              <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold">Students opinion</h2>
                <div className="relative">
                  <div className="tenms-carousel relative light right">
                    <div className="w-full overflow-hidden">
                      <div className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          className="xl:mr-[-40px]"
                        >
                          <path
                            fill="#000"
                            fillOpacity="0.5"
                            fillRule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="32"
                          fill="none"
                          viewBox="0 0 33 32"
                          className="rotate-180 xl:ml-[-40px]"
                        >
                          <path
                            fill="#000"
                            fillOpacity="0.5"
                            fillRule="evenodd"
                            d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                      <div className="mr-4">
                        <div
                          className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px] flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[297px]"
                          style={{ width: "372px" }}
                        >
                          <div>
                            <div
                              className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                              id="quote"
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="w-full mb-4 overflow-hidden rounded-md youtube-video aspect-video">
                              <div className="relative">
                                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                  <div
                                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: "0px", opacity: "1" }}
                                  >
                                    <img
                                      alt="Play The  Video"
                                      data-original-src="/images/annual_exam/play_icon_2.svg"
                                      draggable="false"
                                      fetchPriority="high"
                                      width="100"
                                      height="100"
                                      decoding="async"
                                      data-nimg="1"
                                      className="max-w-[20vw]"
                                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&amp;h=100"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </span>
                                <div className="thumb-wrap">
                                  <span>
                                    <div
                                      className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                      style={{ fontSize: "0px", opacity: "1" }}
                                    >
                                      <img
                                        alt="image"
                                        data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg"
                                        draggable="false"
                                        fetchPriority="high"
                                        width="867"
                                        height="480"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full"
                                        src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg?w=867&amp;h=480"
                                        style={{ color: "transparent" }}
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                            <div>
                              <div
                                className="rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: "0px", opacity: "1" }}
                              >
                                <img
                                  alt="image"
                                  data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg"
                                  draggable="false"
                                  loading="lazy"
                                  width="50"
                                  height="50"
                                  decoding="async"
                                  data-nimg="1"
                                  className=""
                                  src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/AvB2ibYd1z4-HD_1727177955435.jpg?w=50&amp;h=50"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                            <div>
                              <h3>Junaed Samad (Band Score: 8.5)</h3>
                              <p className="text-sm text-gray-400">
                                শিক্ষার্থী
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mr-4">
                        <div
                          className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px] flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[297px]"
                          style={{ width: "372px" }}
                        >
                          <div>
                            <div
                              className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                              id="quote"
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="w-full mb-4 overflow-hidden rounded-md youtube-video aspect-video">
                              <div className="relative">
                                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                  <div
                                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: "0px", opacity: "1" }}
                                  >
                                    <img
                                      alt="Play The  Video"
                                      data-original-src="/images/annual_exam/play_icon_2.svg"
                                      draggable="false"
                                      fetchPriority="high"
                                      width="100"
                                      height="100"
                                      decoding="async"
                                      data-nimg="1"
                                      className="max-w-[20vw]"
                                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&amp;h=100"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </span>
                                <div className="thumb-wrap">
                                  <span>
                                    <div
                                      className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                      style={{ fontSize: "0px", opacity: "1" }}
                                    >
                                      <img
                                        alt="image"
                                        data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg"
                                        draggable="false"
                                        fetchPriority="high"
                                        width="867"
                                        height="480"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full"
                                        src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg?w=867&amp;h=480"
                                        style={{ color: "transparent" }}
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                            <div>
                              <div
                                className="rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: "0px", opacity: "1" }}
                              >
                                <img
                                  alt="image"
                                  data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg"
                                  draggable="false"
                                  loading="lazy"
                                  width="50"
                                  height="50"
                                  decoding="async"
                                  data-nimg="1"
                                  className=""
                                  src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/KcwncFcSIOY-HD_1727178045711.jpg?w=50&amp;h=50"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                            <div>
                              <h3>Mohammad Rafi (Band Score: 8)</h3>
                              <p className="text-sm text-gray-400">
                                শিক্ষার্থী
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mr-4">
                        <div
                          className="TestimonialSlider_testimonial_card__qXBRd relative mt-5 w-[260px] rounded-lg border p-6 align-top md:w-[372px] flex min-h-[250px] flex-col justify-between bg-[#FFF] md:min-h-[297px]"
                          style={{ width: "372px" }}
                        >
                          <div>
                            <div
                              className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                              id="quote"
                            >
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="10"
                                  height="10"
                                  fill="none"
                                  viewBox="0 0 20 30"
                                >
                                  <path
                                    fill="#D33242"
                                    d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="w-full mb-4 overflow-hidden rounded-md youtube-video aspect-video">
                              <div className="relative">
                                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                  <div
                                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                    style={{ fontSize: "0px", opacity: "1" }}
                                  >
                                    <img
                                      alt="Play The  Video"
                                      data-original-src="/images/annual_exam/play_icon_2.svg"
                                      draggable="false"
                                      fetchPriority="high"
                                      width="100"
                                      height="100"
                                      decoding="async"
                                      data-nimg="1"
                                      className="max-w-[20vw]"
                                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=100&amp;h=100"
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                </span>
                                <div className="thumb-wrap">
                                  <span>
                                    <div
                                      className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                                      style={{ fontSize: "0px", opacity: "1" }}
                                    >
                                      <img
                                        alt="image"
                                        data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg"
                                        draggable="false"
                                        fetchPriority="high"
                                        width="867"
                                        height="480"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full"
                                        src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg?w=867&amp;h=480"
                                        style={{ color: "transparent" }}
                                      />
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TestimonialSlider_testimonial_user__2Uxrv flex gap-4">
                            <div>
                              <div
                                className="rounded-full overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                                style={{ fontSize: "0px", opacity: "1" }}
                              >
                                <img
                                  alt="image"
                                  data-original-src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg"
                                  draggable="false"
                                  loading="lazy"
                                  width="50"
                                  height="50"
                                  decoding="async"
                                  data-nimg="1"
                                  className=""
                                  src="https://cdn.10minuteschool.com/images/catalog/product/testimonial/uAQ-WjhZnl0-HD_%281%29_1727178007691.jpg?w=50&amp;h=50"
                                  style={{ color: "transparent" }}
                                />
                              </div>
                            </div>
                            <div>
                              <h3>Yeamin Farabi (Band Score: 7)</h3>
                              <p className="text-sm text-gray-400">
                                শিক্ষার্থী
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div>
            <div id="about">
              <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]">
                <div className="mt-10 md:mt-0">
                  <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
                    Course details
                  </h2>
                  <div className="rounded-lg py-2 md:border md:px-5">
                    <details
                      open={true}
                      className="mb-0 border-b border-dashed last:border-none"
                    >
                      <summary className="py-4 cursor-pointer">
                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              Who is this course for?
                            </span>
                          </p>
                        </div>
                      </summary>
                      <div className="px-0 pb-2 text-gray-500">
                        <div className="prose prose-ul:pl-4">
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - University students from various departments
                              interested in studying abroad.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Learners aiming for Honors, Masters, or PhD
                              programs overseas.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Individuals who are seeking scholarships for
                              international study opportunities.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Government and non-government employees.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Learners who are looking to enhance their
                              English fluency.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Candidates wanting to achieve higher IELTS band
                              scores.
                            </span>
                          </p>
                        </div>
                      </div>
                    </details>
                    <details className="mb-0 border-b border-dashed last:border-none">
                      <summary className="py-4 cursor-pointer">
                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                          <p className="tenms__paragraph" dir="ltr">
                            <b>
                              <strong
                                className="tenms__textBold"
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                Difficulty level of the course:
                              </strong>
                            </b>
                          </p>
                        </div>
                      </summary>
                      <div className="px-0 pb-2 text-gray-500">
                        <div className="prose prose-ul:pl-4">
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Beginner Level (Those Who Know the Basics of
                              English)
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - IELTS Band Score Target: 6.0 - 8.0
                            </span>
                          </p>
                        </div>
                      </div>
                    </details>
                    <details className="mb-0 border-b border-dashed last:border-none">
                      <summary className="py-4 cursor-pointer">
                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                          <p className="tenms__paragraph" dir="ltr">
                            <b>
                              <strong
                                className="tenms__textBold"
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                What you will be able to do after completion of
                                the course
                              </strong>
                            </b>
                          </p>
                        </div>
                      </summary>
                      <div className="px-0 pb-2 text-gray-500">
                        <div className="prose prose-ul:pl-4">
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Score well in questions from all modules:
                              Listening, Reading, Writing, and Speaking.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Understand and solve 11 different types of
                              Listening questions.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Navigate smoothly through 8 different Reading
                              question types.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Solve 2 types of Writing tasks effectively.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Excel in all 3 parts of the Speaking module with
                              smart answers.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Learn speed reading and time management
                              techniques.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Improve English speaking skills with expert
                              feedback.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Score higher in Writing with helpful strategies.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              - Understand the IELTS scoring system and question
                              patterns for your target band.
                            </span>
                          </p>
                        </div>
                      </div>
                    </details>
                    <details className="mb-0 border-b border-dashed last:border-none">
                      <summary className="py-4 cursor-pointer">
                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                          <p className="tenms__paragraph" dir="ltr">
                            <b>
                              <strong
                                className="tenms__textBold"
                                style={{ whiteSpace: "pre-wrap" }}
                              >
                                Why should you do this course?
                              </strong>
                            </b>
                          </p>
                        </div>
                      </summary>
                      <div className="px-0 pb-2 text-gray-500">
                        <div className="prose prose-ul:pl-4">
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              The International English Language Testing System
                              (IELTS) is a comprehensive language assessment
                              test designed to evaluate proficiency across all
                              four modules. To achieve a high band score,
                              candidates must fully grasp each module and
                              confidently tackle any question type.
                              Unfortunately, many IELTS candidates rely solely
                              on memorizing grammar rules and vocabulary,
                              neglecting essential techniques and practice
                              tests. Consequently, they need help identifying
                              weaknesses and gauging their progress, hindering
                              them from reaching their desired band score.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              IELTS LIVE Batch by 10 Minute School is the
                              ultimate solution to achieving your target band
                              score. This course offers a comprehensive
                              curriculum with hands-on training in the
                              Listening, Reading, Writing, and Speaking modules,
                              ensuring thorough preparation. With features such
                              as a detailed 12-week Study Plan, 36 Interactive
                              LIVE Classes led by expert instructors, 8 Reading
                              and Listening Practice Tests, 2 Complete Mock
                              Tests, an Exclusive IELTS Preparation Book, and
                              access to a dedicated 24/7 Facebook Community
                              Support Group, this LIVE course provides
                              everything you need to succeed.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              Join Bangladesh&apos;s leading IELTS preparation
                              course today and let our experienced instructors
                              guide you to your desired band score. Whether
                              aiming for Band 6.0 or Band 8.0, enroll in the
                              IELTS LIVE Batch now to secure your spot.
                            </span>
                          </p>
                          <p className="tenms__paragraph" dir="ltr">
                            <span style={{ whiteSpace: "pre-wrap" }}>
                              N.B. Limited Seats Are Available
                            </span>
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="feature_explanations"></div>
          </div>
          <div>
            <div id="certificate"></div>
          </div>
          <div>
            <div id="how_to_pay">
              <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                  Payment process
                </h2>
                <div className="rounded-md md:border md:p-4 xs:py-2">
                  <p>
                    কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে
                    <span
                      role="button"
                      className="underline cursor-pointer text-green"
                    >
                      এই ভিডিওটি দেখুন
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div id="faq">
              <div className="mb-0 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
                <div className="pb-1 bg-white md:pb-0">
                  <div className="mb-0">
                    <h2
                      className="mb-4 text-base font-semibold md:text-2xl"
                      id="faq"
                    >
                      Frequently Ask Questions
                    </h2>
                    <div className="relative mb-20">
                      <div className="rounded-md md:border md:px-5">
                        <details
                          open={true}
                          className="border-b border-dashed last:border-0"
                        >
                          <summary className="py-4 font-medium cursor-pointer">
                            <h3 className="text-sm font-semibold md:text-base">
                              Is it possible to achieve a good score by taking
                              an online IELTS course?
                            </h3>
                          </summary>
                          <div className="pb-4">
                            <div>
                              <p>
                                Yes, absolutely possible! In the IELTS Live
                                Batch-
                              </p>
                              <br />
                              <p>
                                1. You&apos;ll learn Listening, Reading,
                                Writing, and Speaking comprehensively through 36
                                live classes with hands-on practice.
                              </p>
                              <p>
                                2. You&apos;ll get the chance to take 2 complete
                                mock tests at the end of the classes to assess
                                yourself one last time.
                              </p>
                              <p>
                                3. There&apos;s a 1-on-1 consultancy opportunity
                                with the instructor to provide expert solutions
                                to your problems.
                              </p>
                              <p>
                                4. You&apos;ll have access to a &quot;Facebook
                                Support Group&quot; where expert teachers will
                                assist you with any course-related issues.
                              </p>
                              <p>
                                With our guidance and your dedicated effort,
                                achieving a good score is certainly possible!
                              </p>
                            </div>
                          </div>
                        </details>
                        <details className="border-b border-dashed last:border-0">
                          <summary className="py-4 font-medium cursor-pointer">
                            <h3 className="text-sm font-semibold md:text-base">
                              Can I speak directly with the instructor?
                            </h3>
                          </summary>
                          <div className="pb-4">
                            <div>
                              <p>
                                Yes, you can! In the IELTS Live Batch, you&apos;ll
                                have the opportunity for 1-on-1 consultancy with
                                the instructor, where you can directly discuss
                                and resolve your problems with an expert IELTS
                                instructor.
                              </p>
                              <br />
                            </div>
                          </div>
                        </details>
                        <details className="border-b border-dashed last:border-0">
                          <summary className="py-4 font-medium cursor-pointer">
                            <h3 className="text-sm font-semibold md:text-base">
                              Is there an arrangement for Speaking Practice?
                            </h3>
                          </summary>
                          <div className="pb-4">
                            <div>
                              <p>
                                Yes, there is! After the Speaking segment
                                classes, there will be Speaking Practice
                                Sessions through Zoom with the instructor, where
                                you can practice speaking.
                              </p>
                              <br />
                            </div>
                          </div>
                        </details>
                        <details className="border-b border-dashed last:border-0">
                          <summary className="py-4 font-medium cursor-pointer">
                            <h3 className="text-sm font-semibold md:text-base">
                              Is the IELTS Live Batch designed for Academic or
                              General IELTS preparation?
                            </h3>
                          </summary>
                          <div className="pb-4">
                            <div>
                              <p>
                                Whether you&apos;re preparing for Academic or
                                General IELTS, this course provides all the
                                necessary guidelines tailored to your needs.
                              </p>
                              <br />
                            </div>
                          </div>
                        </details>
                        <details className="border-b border-dashed last:border-0">
                          <summary className="py-4 font-medium cursor-pointer">
                            <h3 className="text-sm font-semibold md:text-base">
                              What are the benefits of preparing for IELTS in
                              the Live Batch without enrolling in offline or
                              external courses?
                            </h3>
                          </summary>
                          <div className="pb-4">
                            <div>
                              <p>
                                By enrolling in the IELTS Live Batch, you&apos;ll
                                enjoy the following benefits:
                              </p>
                              <br />
                              <p>
                                1. Comprehensive learning of Listening, Reading,
                                Writing, and Speaking through 36 live classes
                                with practice materials.
                              </p>
                              <p>
                                2. Access to 10 PDF mock tests for Reading and
                                Listening to self-assess your progress.
                              </p>
                              <p>
                                3. Opportunity to take 2 complete mock tests at
                                the end to evaluate yourself thoroughly.
                              </p>
                              <p>
                                4. 1-on-1 consultancy sessions with the
                                instructor to get expert solutions to your
                                problems.
                              </p>
                              <p>
                                5. Access to a &quot;Facebook Support
                                Group&quot; where expert teachers will address
                                any course-related issues.
                              </p>
                              <p>
                                6. Lastly, you&apos;ll receive Munzereen
                                Shahid&apos;s book &quot;ঘরে বসে IELTS
                                প্রস্তুতি&quot; (Prepare for IELTS at Home),
                                which will strengthen your preparation even
                                further.
                              </p>
                            </div>
                          </div>
                        </details>
                      </div>
                      <button className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                        See all
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="18"
                          width="18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="">
          <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
            <div className="bg-white pb-6 md:pb-0">
              <div className="mb-0">
                <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                  আরও কোন জিজ্ঞাসা আছে?
                </h2>
                <div className="md:max-w-[300px]">
                  <a href="tel:16910">
                    <div className="flex w-full items-center justify-center rounded border border-[#E5E7EB] py-3 hover:border-[#1CAB55] md:max-w-[300px] md:rounded-lg md:px-6 md:py-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        fill="none"
                        viewBox="0 0 29 28"
                        className="w-[17px] h-[17px] md:w-6 md:h-6"
                      >
                        <path
                          stroke="#1CAB55"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.223"
                          d="M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083"
                        ></path>
                        <path
                          stroke="#1CAB55"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.223"
                          d="M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <h3 className="ml-2 text-base font-medium text-[#1CAB55] md:text-lg">
                        কল করুন 16910 নম্বরে
                      </h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Section_1;
