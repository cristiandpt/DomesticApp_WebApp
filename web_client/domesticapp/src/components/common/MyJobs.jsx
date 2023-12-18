import React, { useState } from 'react';
import GlobalLayout from './GlobalLayout';
import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MyJobs = ({ userType }) => {
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

  const [isDialogOpen, setDialogOpen] = useState(false);

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
    setDialogOpen(false);
  };

  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const handleOpenDialog = () => {
    setNewJob({
      title: '',
      paymentMethod: 'one-time-payment',
      pricePerUnit: 0,
    });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <GlobalLayout userType={userType}>
      <main className="container mx-auto p-8">
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
                    <button onClick={() => handleRemoveJob(job.id)} className="text-red-500 mr-2">
                      Remove
                    </button>
                    <button onClick={handleOpenDialog} className="text-blue-500">
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
            <Button onClick={handleOpenDialog} startIcon={<AddIcon />}>
              Add Job
            </Button>
          </div>
        </div>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Edit Job</DialogTitle>
          <DialogContent>
            <TextField label="Title" name="title" value={newJob.title} onChange={handleInputChange} />
            <Select
              label="Payment Method"
              name="paymentMethod"
              value={newJob.paymentMethod}
              onChange={handleInputChange}
            >
              <MenuItem value="one-time-payment">One-Time Payment</MenuItem>
              <MenuItem value="per-project">Per Project</MenuItem>
              <MenuItem value="per-hour">Per Hour</MenuItem>
            </Select>
            <TextField
              label="Price Per Unit ($)"
              name="pricePerUnit"
              type="number"
              value={newJob.pricePerUnit}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleAddJob} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </GlobalLayout>
  );
};

export default MyJobs;
