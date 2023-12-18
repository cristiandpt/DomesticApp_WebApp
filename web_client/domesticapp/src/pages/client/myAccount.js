// pages/my-account.js
import MyAccount from '@/components/common/MyAccount';
import React from 'react';

const MyAccountPage = () => {
  // Assume userType is passed or fetched based on the user type
  return <MyAccount userType={'client'} />;
};

export default MyAccountPage;
