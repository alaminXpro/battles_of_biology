
import Hero from "./_components/Hero";
import Section_1 from "./_components/Section_1";
import Section_2 from "./_components/Section_2";
import Section_3 from "./_components/Section_3";
import Section_4 from "./_components/Section_4";
import Section_5 from "./_components/Section_5";
import Section_6 from "./_components/Section_6";
import Section_7 from "./_components/Section_7";
import Section_8 from "./_components/Section_8";
import Footer from "./_components/Footer";
import Nav from "./_components/Nav";
const RootPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Nav />
      <div>
        <h1 className="sr-only">10 minute school home page</h1>
        <Hero />
      </div>
      <div className="">
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      </div>
      <Footer />
    </>
  );
}

export default RootPage;