"use client";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
    <div className="sticky top-0 left-0 right-0 w-full z-50">
      <div className="border-b bg-white md:h-[65px]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7">
          <div className="flex gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden"
              type="button"
              name="menu-toggle"
            >
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "hidden" : "block"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-3 w-3 ${
                  isOpen ? "block" : "hidden"
                }`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
              <span className="sr-only">menu</span>
            </button>

            <div className="md:hidden">
              <a className="h-[27px] w-[100px]" href="/">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: "0px", opacity: 1 }}
                >
                  <img
                    alt="10ms"
                    data-original-src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                    draggable="false"
                    fetchPriority="high"
                    width="60"
                    height="27"
                    decoding="async"
                    data-nimg="1"
                    className=""
                    style={{ color: "transparent" }}
                    src="/assets/images/bob.png"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="items-center hidden gap-9 md:flex">
            <a className="h-[27px] w-[100px]" href="/">
              <div
                className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: 1 }}
              >
                <img
                  alt="10ms"
                  data-original-src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                  draggable="false"
                  fetchPriority="high"
                  width="60"
                  height="27"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="/assets/images/bob.png"
                />
              </div>
            </a>
          </div>
          <div className="flex-1 hidden w-full pr-4 md:block">
            <div className="w-full">
              <div className="relative flex w-full flex-col items-center bg-white z-50">
                <div className="shadow-0 rounded-b-[23px] flex w-full items-center gap-2 rounded-t-[23px] border-0 px-[12px] py-2 md:border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="24"
                    fill="none"
                    viewBox="0 0 27 24"
                  >
                    <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
                    <path
                      fill="#111827"
                      d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                    ></path>
                    <path
                      fill="#F1844C"
                      d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                    className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
                    value=""
                  />
                </div>
              </div>
            </div>
          </div>
          <nav className="hidden mr-4 xl:block">
            <ul className="flex items-center gap-2 lg:gap-4">
              <li className="relative">
                <div
                  aria-label="Customise options"
                  className="cursor-pointer"
                  data-state="closed"
                >
                  <div className="text-base">
                    <a
                      className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                      href="/academic/"
                    >
                      <p className="relative mb-0">Class 6-12</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
              <li className="relative">
                <div
                  aria-label="Customise options"
                  className="cursor-pointer"
                  data-state="closed"
                >
                  <div className="text-base">
                    <a
                      className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                      href="/skills/"
                    >
                      <p className="relative mb-0">Skills</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
              <li className="relative">
                <a
                  className="text-[#4B5563] text-sm font-medium hover:text-green"
                  href="/admission/"
                >
                  Admission
                </a>
              </li>
              <li className="relative">
                <div
                  aria-label="Customise options"
                  className="cursor-pointer"
                  data-state="closed"
                >
                  <div className="text-base">
                    <a
                      className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                      href="/hsc-preparation/"
                    >
                      <p className="relative mb-0">Online Batch</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
              <li className="relative">
                <div
                  aria-label="Customise options"
                  className="cursor-pointer"
                  data-state="closed"
                >
                  <div className="text-base">
                    <a
                      className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                      href="/english-centre/"
                    >
                      <p className="relative mb-0">English Centre</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
              <li className="relative">
                <div
                  aria-label="Customise options"
                  className="cursor-pointer"
                  data-state="closed"
                >
                  <div className="text-base">
                    <a
                      className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-[#4B5563] hover:text-green"
                      href="#"
                    >
                      <p className="relative mb-0">More</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center gap-3 rounded-md border-1 max-h-96 md:gap-6">
              <span className="block bg-white md:hidden">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="24"
                    fill="none"
                    viewBox="0 0 27 24"
                  >
                    <path fill="#fff" d="M0 0H26.514V23.99H0z"></path>
                    <path
                      fill="#111827"
                      d="M21.247 20.065l-2.83-2.82a6.59 6.59 0 001.407-4.078 6.657 6.657 0 10-6.657 6.657 6.59 6.59 0 004.077-1.407l2.82 2.83a.834.834 0 001.365-.271.833.833 0 00-.182-.911zM8.174 13.167a4.993 4.993 0 119.985 0 4.993 4.993 0 01-9.985 0z"
                    ></path>
                    <path
                      fill="#F1844C"
                      d="M3.875.975l1.238 1.807c.33.481.853.794 1.433.857l2.178.236-1.807 1.239c-.481.33-.794.852-.857 1.432l-.237 2.178-1.238-1.807a1.998 1.998 0 00-1.432-.857L.974 5.824l1.808-1.239c.48-.33.794-.853.857-1.432L3.875.975zM8.59 19.77l-.337.54a1.998 1.998 0 00-.21 1.656l.19.607-.54-.337a1.998 1.998 0 00-1.655-.21l-.607.19.337-.54c.308-.494.385-1.099.21-1.655l-.19-.607.54.337c.494.308 1.099.385 1.655.21l.607-.19zM23.575 6.068l.223 1.396c.092.576.43 1.083.927 1.388l1.205.74-1.396.222a1.998 1.998 0 00-1.388.928l-.74 1.204-.222-1.396a1.997 1.997 0 00-.927-1.387l-1.205-.74 1.396-.223a1.997 1.997 0 001.388-.927l.74-1.205z"
                    ></path>
                  </svg>
                </button>
              </span>
              <span className="hidden cursor-pointer items-center gap-1 rounded border px-2 py-[2px] hover:bg-slate-50 md:flex">
                <svg
                  className="hidden md:block"
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9494_69309)">
                    <path
                      d="M8.4129 12.71C8.34261 12.8852 8.17283 13 7.98407 13C7.65462 13 7.43101 12.6651 7.5573 12.3608L10.0079 6.45676C10.1226 6.18024 10.3926 6 10.692 6C10.9914 6 11.2613 6.18024 11.3761 6.45676L13.8267 12.3608C13.953 12.6651 13.7294 13 13.3999 13C13.2112 13 13.0414 12.8852 12.9711 12.71L10.7344 7.13611C10.7275 7.11878 10.7107 7.10742 10.692 7.10742C10.6733 7.10742 10.6565 7.11878 10.6496 7.13611L8.4129 12.71ZM8.66745 10.6416C8.66745 10.434 8.83578 10.2656 9.04342 10.2656H12.3406C12.5482 10.2656 12.7165 10.434 12.7165 10.6416C12.7165 10.8492 12.5482 11.0176 12.3406 11.0176H9.04342C8.83578 11.0176 8.66745 10.8492 8.66745 10.6416Z"
                      fill="#6B7280"
                    ></path>
                    <path
                      d="M8.75662 1C8.94575 1 9.09907 1.15332 9.09907 1.34244C9.09907 1.53157 8.94575 1.68489 8.75662 1.68489H8.0862V6.54228C8.0862 6.79507 7.88128 7 7.62848 7C7.45399 7 7.29663 6.8996 7.2092 6.74859C7.0493 6.47242 6.86254 6.22503 6.64891 6.00643C6.37238 5.71704 6.07656 5.46945 5.76145 5.26367L6.0026 4.62701C6.24698 4.76849 6.50099 4.96141 6.76466 5.20579C7.02833 5.45016 7.2309 5.69775 7.37238 5.94855C7.36595 5.85209 7.35952 5.76206 7.35309 5.67846C7.35309 5.59485 7.34987 5.50804 7.34344 5.41801C7.34344 5.32797 7.34344 5.23151 7.34344 5.12862V1.68489H0.634436C0.445309 1.68489 0.291992 1.53157 0.291992 1.34244C0.291992 1.15332 0.44531 1 0.634436 1H8.75662ZM4.01546 6.12219C3.57817 6.12219 3.16016 6.01929 2.76145 5.8135C2.36273 5.60772 1.98653 5.26045 1.63283 4.7717C1.33459 4.34644 1.05532 3.78598 0.795026 3.09035C0.722542 2.89664 0.82885 2.68352 1.02533 2.61892C1.21787 2.55562 1.42501 2.65882 1.49615 2.8486C1.68952 3.36445 1.88942 3.7997 2.09585 4.15434C2.35309 4.57878 2.63926 4.89068 2.95437 5.09003C3.26948 5.28939 3.62961 5.38907 4.03476 5.38907C4.38845 5.38907 4.67141 5.3344 4.88363 5.22508C5.10228 5.10932 5.25984 4.95498 5.3563 4.76206C5.45276 4.5627 5.501 4.34405 5.501 4.10611C5.501 3.73312 5.3981 3.43087 5.19231 3.19936C4.99296 2.96785 4.74215 2.85209 4.4399 2.85209C4.22768 2.85209 4.06691 2.90032 3.95759 2.99678C3.84826 3.08682 3.7936 3.22508 3.7936 3.41158C3.7936 3.45659 3.80003 3.51768 3.81289 3.59486C3.83172 3.70781 3.76689 3.82758 3.65455 3.84975L3.44714 3.89069C3.27022 3.9256 3.09239 3.82419 3.04741 3.64955C3.04177 3.62763 3.03648 3.60618 3.03154 3.58521C3.01225 3.46945 3.0026 3.36013 3.0026 3.25723C3.0026 3.01929 3.06691 2.81994 3.19553 2.65916C3.33058 2.49839 3.50099 2.37942 3.70678 2.30225C3.919 2.21865 4.14087 2.17685 4.37238 2.17685C4.7518 2.17685 5.07977 2.26367 5.3563 2.4373C5.63283 2.6045 5.84826 2.83601 6.0026 3.13183C6.15694 3.42765 6.23411 3.7717 6.23411 4.16399C6.23411 4.51125 6.15373 4.83601 5.99296 5.13826C5.83219 5.43408 5.58781 5.67203 5.25984 5.85209C4.93186 6.03215 4.51707 6.12219 4.01546 6.12219ZM3.70678 2.51447C3.67463 2.30868 3.57817 2.12862 3.41739 1.97428C3.26305 1.8135 3.03476 1.70096 2.73251 1.63666L2.96402 1.20257L3.3981 1.31833C3.76466 1.45981 4.02833 1.62058 4.1891 1.80064C4.34987 1.98071 4.44312 2.209 4.46884 2.48553L3.70678 2.51447Z"
                      fill="#6B7280"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_9494_69309">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.291992)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span>বাং</span>
              </span>
              <a
                className="items-center hidden gap-1 text-green md:flex"
                href="tel:16910"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  ></path>
                </svg>
                <span className="inline-block">16910</span>
              </a>
              <a
                className="flex items-center gap-1 text-black md:hidden"
                href="tel:16910"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="#130F26"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.61 10.394c3.325 3.323 4.079-.522 6.195 1.594 2.04 2.04 3.214 2.448.628 5.033-.323.26-2.381 3.391-9.612-3.838C-.41 5.953 2.72 3.893 2.98 3.57c2.592-2.592 2.993-1.412 5.034.628 2.116 2.116-1.727 2.873 1.597 6.196z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="rounded-md overflow-hidden">
              <a
                className="flex items-center px-3 py-1.5 text-white bg-green-500 hover:bg-emerald-700 transition-colors md:px-6 font-bold"
                href="/login/"
              >
                <span
                  id="login-button"
                  className="whitespace-nowrap text-[13px] font-medium leading-normal md:text-[15px]"
                >
                  লগ-ইন
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="flex items-center justify-between p-4 max-w-[350px] mx-auto">
            <li className="relative list-none">
              <div
                aria-label="Customise options"
                className="cursor-pointer"
                data-state="closed"
              >
                <div className="text-base">
                  <a
                    className="flex cursor-pointer items-center gap-2 hover:text-green text-[#4B5563] text-xs font-medium mt-0.5"
                    href=""
                  >
                    <div className="flex items-center justify-center relative">
                      <p className="relative mb-0">Class 6-12</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="relative list-none">
              <div
                aria-label="Customise options"
                className="cursor-pointer"
                data-state="closed"
              >
                <div className="text-base">
                  <a
                    className="flex cursor-pointer items-center gap-2 hover:text-green text-[#4B5563] text-xs font-medium mt-0.5"
                    href=""
                  >
                    <div className="flex items-center justify-center relative">
                      <p className="relative mb-0">Skills</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li className="relative list-none">
              <a
                href="/admission"
                className="text-[#4B5563] text-xs font-medium hover:text-green"
              >
                Admission
              </a>
            </li>
            <li className="relative list-none">
              <div
                aria-label="Customise options"
                className="cursor-pointer"
                data-state="closed"
              >
                <div className="text-base">
                  <a
                    className="flex cursor-pointer items-center gap-2 hover:text-green text-[#4B5563] text-xs font-medium mt-0.5"
                    href=""
                  >
                    <div className="flex items-center justify-center relative">
                      <p className="relative mb-0">More</p>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full flex-grow lg:items-center lg:w-auto bg-gray-100 shadow-md`}
        >
          <div className="text-sm lg:flex-grow px-4 py-2">
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              First Link
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              Second Link
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              Third Link
            </a>
            <a
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-gray-900 mr-4"
            >
              Fourth Link
            </a>
          </div>
        </div>
      </div>
      
    </div>
    <div className={`relative z-[2] aspect-auto ${isClosed ? "hidden" : ""}`}>
        <div style={{ background: "#170808" }}>
          <div className="relative">
            <div>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="items-center flex justify-center relative z-[1]"
              >
                <img
                  className="hidden w-auto sm:block"
                  src="https://cdn.10minuteschool.com/images/web_banner_1733505715137.jpg?w=1800"
                />
                <img
                  className="w-auto sm:hidden"
                  src="https://cdn.10minuteschool.com/images/mobile_banner_1733505702239.jpg?w=768"
                />
              </a>
              <svg
                onClick={handleClose}
                className="absolute z-10 w-2 h-2 cursor-pointer right-2 top-1 md:top-2 md:h-3 md:w-3"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.410704 0.410734C0.736141 0.0852972 1.26378 0.0852972 1.58921 0.410734L5.99996 4.82148L10.4107 0.410734C10.7361 0.0852972 11.2638 0.0852972 11.5892 0.410734C11.9147 0.736171 11.9147 1.26381 11.5892 1.58925L7.17847 5.99999L11.5892 10.4107C11.9147 10.7362 11.9147 11.2638 11.5892 11.5892C11.2638 11.9147 10.7361 11.9147 10.4107 11.5892L5.99996 7.1785L1.58921 11.5892C1.26378 11.9147 0.736141 11.9147 0.410704 11.5892C0.0852667 11.2638 0.0852667 10.7362 0.410704 10.4107L4.82145 5.99999L0.410704 1.58925C0.0852667 1.26381 0.0852667 0.736171 0.410704 0.410734Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
