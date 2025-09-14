import React from "react";

interface AdminHeaderProps {}

const AdminHeader: React.FC<AdminHeaderProps> = ({}) => {
  return (
    <header className="sticky top-0 z-10 bg-gray-50 p-4 shadow-md">
      Admin User
    </header>
  );
};

export default AdminHeader;
