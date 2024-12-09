import Navbar from "@/app/(protected)/user/dashboard/_components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="mx-12 mt-12">{children}</div>
    </>
  );
}
