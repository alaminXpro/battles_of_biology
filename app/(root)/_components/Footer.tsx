const Footer = () => {
  return (
    <div style={{ display: "block" }}>
      <div className="container mb-24 md:mb-0">
        <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <a className="mb-4" href="/">
              <div
                className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                style={{ fontSize: "0px", objectFit: "contain", opacity: 1 }}
              >
                <img
                  alt="Instructor"
                  data-original-src="/images/logo.svg"
                  draggable="false"
                  loading="lazy"
                  width="116"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className=""
                  style={{ color: "transparent" }}
                  src="/assets/images/bob.png"
                />
              </div>
            </a>
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              Download Our Mobile App
            </h3>
            <div className="flex">
              <div className="mr-4">
                <a href="">
                  <div
                    className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="google play"
                      data-original-src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                      draggable="false"
                      loading="lazy"
                      width="156"
                      height="49"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png?w=156&amp;h=49"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div
                    className="rounded-md opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="ios download"
                      data-original-src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                      draggable="false"
                      loading="lazy"
                      width="156"
                      height="49"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png?w=156&amp;h=49"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Company
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Career / Recruitment
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Join as a Teacher
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Join as an Affiliate
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Refund policy
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                  Others
                </h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/store/all"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Book Store
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Free Notes &amp; Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs-prep"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Job Preparation Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="/certificate"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Verify Certificate
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resource"
                      className="mb-2 text-sm font-medium hover:text-green md:text-base"
                    >
                      Free Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full ml-0 md:ml-4">
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                Keep up with us at
              </h3>
              <p className="mb-4 text-base font-normal">
                Call Us:
                <span>
                  <a className="text-green" href="tel:16910">
                    16910
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                whatsapp:
                <span>
                  <a
                    className="text-green"
                    href="https://api.whatsapp.com/send?phone=+8801896016252&amp;text=I need your assistance"
                  >
                    +8801896016252
                  </a>
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh:
                <span>
                  <a className="text-green" href="tel:+8809610916910">
                    +880 9610916910
                  </a>
                </span>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us:
                <span className="text-green">support@batb.io</span>
              </p>
            </div>
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <div>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="facebook"
                      data-original-src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png"
                      draggable="false"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png?w=32&amp;h=32"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="instagram"
                      data-original-src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png"
                      draggable="false"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png?w=32&amp;h=32"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="linkedin"
                      data-original-src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"
                      draggable="false"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png?w=32&amp;h=32"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="youtube"
                      data-original-src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png"
                      draggable="false"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png?w=32&amp;h=32"
                    />
                  </div>
                </a>
              </div>
              <div>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: "0px", opacity: 1 }}
                  >
                    <img
                      alt="Tiktok"
                      data-original-src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"
                      draggable="false"
                      loading="lazy"
                      width="32"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png?w=32&amp;h=32"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            2015 - 2024 Copyright © Battle Of Biology. All rights reserved.
          </p>
        </div>
        <button
          className="fixed right-0 bottom-[86px] z-10 md:bottom-0 flex gap-2 items-center m-5 px-2 py-2 md:px-6 md:py-[14px] text-white"
          style={{
            background:
              "linear-gradient(226.1deg, rgb(8, 206, 51) 0%, rgb(20, 156, 82) 101.24%)",
            borderRadius: "28px 28px 4px",
            zIndex: "49",
            right: "0px",
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
            <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
          </svg>
          <span className="hidden md:inline-block">সরাসরি কথা বলুন</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
