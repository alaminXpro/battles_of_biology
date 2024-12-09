import { SessionProvider } from "next-auth/react";
interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <SessionProvider>
      <div>
        {children}
      </div>
    </SessionProvider>
  );
};

export default ProtectedLayout;
