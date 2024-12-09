const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-[600px]">
      {children}
    </main>
  );
}

export default RootLayout;