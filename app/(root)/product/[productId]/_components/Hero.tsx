"use client";

import { useEffect, useState, useRef } from "react";

const Hero = () => {
  // Add state for selected image and countdown
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 12,
    minutes: 10,
    seconds: 1,
  });
  const [isSticky, setIsSticky] = useState(false);
  const variantRef = useRef<HTMLDivElement>(null);

  // Add gallery images array
  const galleryImages = [
    {
      id: 0,
      src: "https://batb.io/wp-content/uploads/2024/11/Website-Cover.png",
      thumbnail: "https://batb.io/wp-content/uploads/2024/11/Website-Cover.png",
    },
    {
      id: 1,
      src: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png",
      thumbnail:
        "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png",
    },
    {
      id: 2,
      src: "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png",
      thumbnail:
        "https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png",
    },
  ];

  // Add handlers for navigation
  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2025-01-06T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        // Optional: Handle what happens when countdown reaches zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    // Cleanup timer
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1, rootMargin: "0px 0px -10px 0px" }
    );

    if (variantRef.current) {
      observer.observe(variantRef.current);
    }

    return () => {
      if (variantRef.current) {
        observer.unobserve(variantRef.current);
      }
    };
  }, []);

  // Add click handlers directly to both mobile and desktop sections
  const handleThumbnailClick = (index: number) => {
    console.log("Thumbnail clicked:", index); // Debug log
    setSelectedIndex(index);
  };

  return (
    <>
      <div
        id="skills-landing"
        className="min-h-[900px] md:min-h-[300px]"
        style={{
          backgroundImage:
            "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <div className="block mt-4 md:mt-0 md:hidden">
              <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                <img
                  alt="image"
                  className="w-full"
                  src={galleryImages[selectedIndex].src}
                  style={{ color: "transparent" }}
                />
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    fill="none"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="28"
                      fill="#fff"
                      fillOpacity="0.5"
                    ></circle>
                    <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    ></path>
                  </svg>
                </span>
                <div>
                  <div
                    className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
                    onClick={handlePrevious}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      color="white"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                    </svg>
                  </div>
                  <div
                    className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
                    onClick={handleNext}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      color="white"
                      height="25"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => handleThumbnailClick(index)}
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className={`relative w-[55px] rounded cursor-pointer overflow-hidden ${
                        selectedIndex === index
                          ? "outline outline-[2px] outline-[#1CAB55]"
                          : ""
                      }`}
                    >
                      <img
                        alt="preview_gallery"
                        src={image.thumbnail}
                        className="w-full h-full object-cover"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="block md:hidden">
                <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl"></h1>
                <div className="mb-4 text-sm font-normal"></div>
              </div>
            </div>
            <div
              className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
              style={{ fontSize: "0px", opacity: "1" }}
            >
              <img
                alt="image"
                data-original-src="https://cdn.10minuteschool.com/images/live_icon_1712036077434.png"
                draggable="false"
                loading="lazy"
                width="105"
                height="40"
                decoding="async"
                data-nimg="1"
                className="mb-2"
                src="https://cdn.10minuteschool.com/images/live_icon_1712036077434.png?w=105&amp;h=40"
                style={{ color: "transparent" }}
              />
            </div>
            <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
              The Last Run – Medical FMT Batch
            </h1>
            <div className="mb-2"></div>
            <div>
              <div
                className="text-gray-400"
                style={{
                  overflow: "hidden",
                  height: "auto",
                  maskImage: "none",
                }}
              >
                <div>
                  <p className="tenms__paragraph" dir="ltr">
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      Get the best IELTS preparation with direct guidance and
                      feedback from the country`&apos;`s top IELTS instructors,
                      all in one course. With this live course, learn hands-on
                      techniques for Listening, Reading, Writing, and Speaking.
                      Join our live batch now to achieve your desired IELTS
                      score in just 12 weeks.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-6">
              <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex col-auto gap-2 py-1 text-white">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/calendar_icon_1712035999525.png"
                      draggable="false"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      src="https://cdn.10minuteschool.com/images/calendar_icon_1712035999525.png?w=25&amp;h=25"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-base md:text-lg flex-1">
                    Course duration: 3 month
                  </p>
                </div>
                <div className="flex col-auto gap-2 py-1 text-white">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/clock_icon_1712036033856.png"
                      draggable="false"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      src="https://cdn.10minuteschool.com/images/clock_icon_1712036033856.png?w=25&amp;h=25"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-base md:text-lg flex-1">
                    Sat, Mon, Wed (6PM - 7:30PM)
                  </p>
                </div>
                <div className="flex col-auto gap-2 py-1 text-white">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/timer_icon_1712036115283.png"
                      draggable="false"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      src="https://cdn.10minuteschool.com/images/timer_icon_1712036115283.png?w=25&amp;h=25"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-base md:text-lg flex-1">
                    Enrollment of the 10th batch is ongoing
                  </p>
                </div>
                <div className="flex col-auto gap-2 py-1 text-white">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png"
                      draggable="false"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png?w=25&amp;h=25"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-base md:text-lg flex-1">
                    Seat remaining: 98
                  </p>
                </div>
                <div className="flex col-auto gap-2 py-1 text-white">
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: "1" }}
                  >
                    <img
                      alt="image"
                      data-original-src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png"
                      draggable="false"
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png?w=25&amp;h=25"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <p className="text-base md:text-lg flex-1">
                    1st to 9th Batch: 1030 Students
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-4 text-gray-400">
                  Enrollment of the 10th Batch will end on:
                </p>
                <div className="flex gap-4">
                  <div className="text-white">
                    <span
                      className="flex items-center justify-center text-2xl md:text-4xl"
                      style={{
                        borderRadius: "14px",
                        border: "3px solid rgb(74, 74, 74)",
                        background:
                          "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                        height: "70px",
                        width: "65px",
                      }}
                    >
                      {timeLeft.days.toString().padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm text-center text-gray-300">
                      Days
                    </p>
                  </div>
                  <div className="text-white">
                    <span
                      className="flex items-center justify-center text-2xl md:text-4xl"
                      style={{
                        borderRadius: "14px",
                        border: "3px solid rgb(74, 74, 74)",
                        background:
                          "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                        height: "70px",
                        width: "65px",
                      }}
                    >
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm text-center text-gray-300">
                      Hours
                    </p>
                  </div>
                  <div className="text-white">
                    <span
                      className="flex items-center justify-center text-2xl md:text-4xl"
                      style={{
                        borderRadius: "14px",
                        border: "3px solid rgb(74, 74, 74)",
                        background:
                          "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                        height: "70px",
                        width: "65px",
                      }}
                    >
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm text-center text-gray-300">
                      Minutes
                    </p>
                  </div>
                  <div className="text-white">
                    <span
                      className="flex items-center justify-center text-2xl md:text-4xl"
                      style={{
                        borderRadius: "14px",
                        border: "3px solid rgb(74, 74, 74)",
                        background:
                          "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                        height: "70px",
                        width: "65px",
                      }}
                    >
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm text-center text-gray-300">
                      Seconds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
            <div className="md:sticky md:top-[112px]">
              <div className="md:border">
                <div className="hidden p-1 md:block" id="">
                  <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                    <img
                      alt="preview_gallery"
                      className="w-full"
                      src={galleryImages[selectedIndex].src}
                      style={{ color: "transparent" }}
                    />
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fillOpacity="0.5"
                        ></circle>
                        <circle
                          cx="27.999"
                          cy="28"
                          r="25.415"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <div
                        className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer"
                        onClick={handlePrevious}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="white"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "white" }}
                        >
                          <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
                        </svg>
                      </div>
                      <div
                        className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
                        onClick={handleNext}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          color="white"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ color: "white" }}
                        >
                          <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
                    {galleryImages.map((image, index) => (
                      <div
                        key={image.id}
                        onClick={() => handleThumbnailClick(index)}
                        role="button"
                        tabIndex={0}
                      >
                        <div
                          className={`relative w-[55px] rounded cursor-pointer overflow-hidden ${
                            selectedIndex === index
                              ? "outline outline-[2px] outline-[#1CAB55]"
                              : ""
                          }`}
                        >
                          <img
                            alt="preview_gallery"
                            src={image.thumbnail}
                            className="w-full h-full object-cover"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="block md:hidden">
                    <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                      IELTS LIVE Batch
                    </h1>
                    <div className="mb-4 text-sm font-normal"></div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="w-full p-4 md:h-auto" id="variant">
                    <div className="relative md:static">
                      <div>
                        <div className="flex flex-col w-full">
                          <div>
                            <div className="flex items-center justify-between md:flex-col md:items-start">
                              <div className="md:mb-3">
                                <div className="inline-block text-2xl font-semibold">
                                  ৳8500
                                </div>
                                <span className="infline-flex">
                                  <del className="ml-2 text-base font-normal md:text-xl">
                                    ৳10000
                                  </del>
                                  <div className="c-Tukmu inline-block">
                                    <p className="card-price">1500 ৳ ছাড়</p>
                                  </div>
                                </span>
                                <p className="text-xs font-normal text-gray-500 md:text-base">
                                  Batch 10: 6 January, 2025 - March 19, 2025
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mb-2"></div>
                          </div>

                          <button className="md:w-full px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
                            Enroll
                          </button>
                        </div>
                      </div>
                      <div className="absolute md:static top-[-45px] left-0">
                        <p className="hidden md:block text-base text-[#F3764E] py-4">
                          Enrollment of the 10th Batch will end on:৬ জানুয়ারী,
                          ২০২৫
                        </p>
                        <p className="md:hidden text-xs text-white bg-[#DA4C5A] p-2 rounded-full">
                          Enrollment of the 10th Batch will end on: 26:19:50:44
                        </p>
                      </div>
                      <div className="hidden md:block"></div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="grid py-2 md:p-4">
                    <p className="mb-4 text-xl font-semibold">
                      এই কোর্সে যা থাকছে
                    </p>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          36 LIVE Classes (50 mins lecture+ 30 mins Q/A)
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          8 Practice Reading Mock Test
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          8 Practice Listening Mock Test
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          2 Complete Mock Test
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          10 Full Mock Test Questions to practice at home
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          1:1 Consultation Sessions from Mentors
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          Facebook Support Group
                        </h4>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-3 leading-5">
                        <div
                          className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: "0px", opacity: "1" }}
                        >
                          <img
                            alt="icon"
                            data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                            draggable="false"
                            loading="lazy"
                            width="20"
                            height="20"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png?w=20&amp;h=20"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                          Course Validity 12 Months
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                  <span className="ml-1">ফোন করুন (16910)</span>
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="block md:hidden">
        <div
          ref={variantRef}
          className={
            isSticky
              ? "w-full p-4 md:h-auto bg-white bottom-0 fixed z-50 left-0 right-0 mx-md:drop-shadow-[0_-3px_15px_rgba(0,0,0,0.20)]"
              : "w-full p-4 md:h-auto"
          }
          id="variant"
        >
          <div className="relative md:static">
            <div>
              <div className="flex flex-col w-full">
                <div>
                  <div className="flex items-center justify-between md:flex-col md:items-start">
                    <div className="md:mb-3">
                      <div className="inline-block text-2xl font-semibold">
                        ৳8500
                      </div>
                      <span className="infline-flex">
                        <del className="ml-2 text-base font-normal md:text-xl">
                          ৳10000
                        </del>
                        <div className="c-Tukmu inline-block">
                          <p className="card-price">1500 ৳ ছাড়</p>
                        </div>
                      </span>
                      <p className="text-xs font-normal text-gray-500 md:text-base">
                        Batch 10: 6 January, 2025 - March 19, 2025
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2"></div>
                </div>
                <button className="md:w-full px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-green-500 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none">
                  Enroll
                </button>
              </div>
            </div>
            <div className="absolute md:static top-[-45px] left-0">
              <p className="hidden md:block text-base text-[#F3764E] py-4">
                Enrollment of the 10th Batch will end on:৬ জানুয়ারী, ২০২৫
              </p>
              <p className="md:hidden text-xs text-white bg-[#DA4C5A] p-2 rounded-full">
                Enrollment of the 10th Batch will end on:{" "}
                {timeLeft.days.toString().padStart(2, "0")}:
                {timeLeft.hours.toString().padStart(2, "0")}:
                {timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </div>
      </div>

      <div className="block px-4 bg-white md:hidden">
        <div className="grid py-2 md:p-4">
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                36 LIVE Classes (50 mins lecture+ 30 mins Q/A)
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                8 Practice Reading Mock Test
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                8 Practice Listening Mock Test
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                2 Complete Mock Test
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                10 Full Mock Test Questions to practice at home
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                1:1 Consultation Sessions from Mentors
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                Facebook Support Group
              </h4>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3 leading-5">
              <div
                className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", opacity: "1" }}
              >
                <img
                  alt="icon"
                  data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                  draggable="false"
                  loading="lazy"
                  width="20"
                  height="20"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png?w=20&amp;h=20"
                />
              </div>
              <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                Course Validity 12 Months
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
