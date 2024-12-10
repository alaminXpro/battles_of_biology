import Footer from "./_components/Footer";
import Nav from "./_components/Nav";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <main className="min-h-[600px]">
      <Nav />
      {children}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;