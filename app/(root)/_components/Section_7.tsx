const Section_7 = () => {
    return (
        <div className="my-20">
        <div className="container section visible">
            <div className="grid grid-cols-1 overflow-hidden rounded-[20px] bg-gradient-to-r from-[#050505] to-[#06081B] py-2 md:grid-cols-2 md:px-10">
                <div className="flex flex-col items-center justify-center flex-1 w-full section-content md:items-start">
                    <h2 className="mb-4 text-center text-[21px] font-[600] leading-[30px] text-white md:text-left md:text-[32px] md:leading-[48px]">সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?</h2>
                    <div className="w-full px-6 md:max-w-max md:px-0">
                        <a className="flex h-[42px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-green px-4 py-2 text-base text-white" href="/resource/">
                            <span className="flex gap-2">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                ফ্রি ডাউনলোড করুন
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center section-image md:justify-end">
                    <div className="w-full max-w-[250px] md:max-w-[356px] opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: '0px', opacity: 1 }}>
                        <img
                            alt="svg"
                            data-original-src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png"
                            draggable="false"
                            loading="lazy"
                            width="356"
                            height="341"
                            decoding="async"
                            data-nimg="1"
                            className=""
                            style={{ color: 'transparent' }}
                            src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png?w=356&amp;h=341"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Section_7;