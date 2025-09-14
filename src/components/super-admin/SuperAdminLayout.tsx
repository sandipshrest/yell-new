import React from "react";
import { SidebarProvider } from "../ui/sidebar";
import AdminSidebar from "./Sidebar";
import AdminHeader from "./Header";

interface SuperAdminLayoutProps {
  children: React.ReactNode;
}

const SuperAdminLayout: React.FC<SuperAdminLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider className="w-full h-screen flex">
      <AdminSidebar />
      <main className="flex-grow relative h-full">
        <AdminHeader />
        <div className="p-8 bg-gray-50 h-[90%]">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default SuperAdminLayout;
