// components/Notifications.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalLayout from './GlobalLayout';

const MyServices = ({userType}) => {
  const [jobRecords, setJobRecords] = useState([
    {
      id: 1,
      requester: 'Alice',
      jobName: 'Plumbing',
      status: 'Completed',
      earnings: 50,
      rating: 4,
    },
    {
      id: 2,
      requester: 'Bob',
      jobName: 'Landscaping',
      status: 'In Progress',
      earnings: 75,
      rating: 5,
    },
    // Add more job records as needed
  ]);

  return (
    <div>
      <GlobalLayout userType={userType}>
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">My services</h1>
        <div>
          {jobRecords.map((job) => (
            <div key={job.id} className="border p-4 mb-4">
              <p>
                Requester: {job.requester} | Job: {job.jobName} | Status: {job.status} | Earnings: ${job.earnings} | Rating: {job.rating}/5
              </p>
            </div>
          ))}
        </div>
      </main>
      </GlobalLayout>
    </div>
  );
};

export default MyServices;
