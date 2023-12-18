// myAddresses.js
import GlobalLayout from "@/components/common/GlobalLayout";
import MyAddresses from "@/components/common/myAddresses";
import React from "react";

const MyAddressesPage = () => {
  return (
    <GlobalLayout userType="client">
      <div className="container mx-auto">
        <MyAddresses />
      </div>
    </GlobalLayout>
  );
};

export default MyAddressesPage;
