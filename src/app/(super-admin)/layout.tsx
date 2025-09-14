import SuperAdminLayout from "@/components/super-admin/SuperAdminLayout";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <SuperAdminLayout>{children}</SuperAdminLayout>;
};

export default Layout;
