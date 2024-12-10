"use client";

import Hero from "./_components/Hero";
import Section_1 from "./_components/Section_1";
import Section_2 from "./_components/Section_2";
import Section_3 from "./_components/Section_3";
const ProductPage = ({params}: {params: {productId: string}}) => {
    return (
        <div className="">
            <Hero />
            <main className="container flex flex-col gap-4 md:flex-row md:gap-12 ">
                <Section_1 />
                <Section_2 />
            </main>
            <Section_3 />
        </div>
    );
};

export default ProductPage;