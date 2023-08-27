import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
}