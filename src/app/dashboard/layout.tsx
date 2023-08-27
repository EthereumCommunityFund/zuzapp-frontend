import { Metadata } from "next";

import DashboardNavigation from "@/components/navigation/Dashboard";
import DashboardHeader from "@/components/navigation/Header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <div className="flex">
          <DashboardNavigation />
          <div className="flex-1">
            <DashboardHeader />
            {children}
          </div>
        </div>
      </>
  );
}