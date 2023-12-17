
import MyJobs from '@/components/common/MyJobs';

import React from 'react';

const MyJobsPage = () => {

  const userType = 'worker'; // or 'client'
  return <MyJobs userType={userType}/>;
};

export default MyJobsPage;
