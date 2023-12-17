import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import WorkerNavMenu from '../worker/menus/WorkerNavMenu';
import ClientNavMenu from '../client/menus/ClientNavMenu';

const MyJobs = ({isWorker}) => {
  // Sample job list, replace with data fetched from the database
  
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Landscaping',
      paymentMethod: 'one-time-payment',
      pricePerUnit: 100,
    },
    {
      id: 2,
      title: 'Plumber',
      paymentMethod: 'per-project',
      pricePerUnit: 150,
    },
    {
      id: 3,
      title: 'Chef',
      paymentMethod: 'per-hour',
      pricePerUnit: 20,
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    paymentMethod: 'one-time-payment',
    pricePerUnit: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleAddJob = () => {
    setJobs((prevJobs) => [...prevJobs, { ...newJob, id: prevJobs.length + 1 }]);
    setNewJob({
      title: '',
      paymentMethod: 'one-time-payment',
      pricePerUnit: 0,
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
      {isMenuOpen && (isWorker ? <WorkerNavMenu /> : <ClientNavMenu />)}
        <h1 className="text-4xl font-bold mb-4">My Jobs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Job List</h2>
            <ul>
              {jobs.map((job) => (
                <li key={job.id} className="flex items-center justify-between border-b py-2">
                  <div>
                    <p className="font-bold">{job.title}</p>
                    <p>{job.paymentMethod}</p>
                    <p>${job.pricePerUnit}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleRemoveJob(job.id)}
                      className="text-red-500 mr-2"
                    >
                      Remove
                    </button>
                    <button className="text-blue-500">Edit</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
            <label htmlFor="title" className="block mb-2">
              Title:
              <input
                type="text"
                id="title"
                name="title"
                value={newJob.title}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full p-2"
              />
            </label>
            <label htmlFor="paymentMethod" className="block mb-2">
              Payment Method:
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={newJob.paymentMethod}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full p-2"
              >
                <option value="one-time-payment">One-Time Payment</option>
                <option value="per-project">Per Project</option>
                <option value="per-hour">Per Hour</option>
              </select>
            </label>
            <label htmlFor="pricePerUnit" className="block mb-2">
              Price Per Unit ($):
              <input
                type="number"
                id="pricePerUnit"
                name="pricePerUnit"
                value={newJob.pricePerUnit}
                onChange={handleInputChange}
                className="border border-gray-400 rounded w-full p-2"
              />
            </label>
            <button
              onClick={handleAddJob}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Add Job
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyJobs;
