// pages/my-account.js
import MyAccount from '@/components/common/MyAccount';
import React from 'react';

const MyAccountPage = () => {
  // Assume userType is passed or fetched based on the user type
  const userType = 'worker'; // or 'client'
  return <MyAccount userType={userType} />;
};

export default MyAccountPage;
