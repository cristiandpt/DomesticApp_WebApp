// components/MyAccount.jsx
import React, { useState } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import GlobalLayout from './GlobalLayout';

const MyAccount = ({ userType }) => {
  // Sample user information, replace with actual data fetched from the database
  const [user, setUser] = useState({
    profile: userType, // 'client' or 'worker'
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg', // Set a default profile photo
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    email: 'john.doe@example.com',
    birthdate: '01/01/1990',
  });

  const [newEmail, setNewEmail] = useState(user.email);
  const [newPhoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setNewEmail(user.email);
    setNewPhoneNumber(user.phoneNumber);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveChanges = () => {
    setUser((prevUser) => ({
      ...prevUser,
      email: newEmail,
      phoneNumber: newPhoneNumber,
    }));
    setDialogOpen(false);
  };

  return (
    <div>
      <GlobalLayout userType={userType}>
        <main className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">My Account</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img src={user.photo} alt="Profile" className="rounded-full w-32 h-32 mb-4" />
              <p className="text-lg mb-2">Profile: {user.profile}</p>
              <p className="text-lg mb-2">Name: {user.name}</p>
              <p className="text-lg mb-2">Phone Number: {user.phoneNumber}</p>
              <p className="text-lg mb-2">Email: {user.email}</p>
              <p className="text-lg mb-2">Birthdate: {user.birthdate}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Edit Information</h2>
              <Button
                onClick={handleOpenDialog}
                variant="outlined"
                color="primary"
                className="mb-4"
              >
                Change Information
              </Button>
            </div>
          </div>
          <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>Change Information</DialogTitle>
            <DialogContent>
              <TextField
                label="Email"
                fullWidth
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <TextField
                label="Phone Number"
                fullWidth
                value={newPhoneNumber}
                onChange={(e) => setNewPhoneNumber(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color="secondary">
                Cancel
              </Button>
              <Button onClick={handleSaveChanges} color="primary">
                Save Changes
              </Button>
            </DialogActions>
          </Dialog>
        </main>
      </GlobalLayout>
    </div>
  );
};

export default MyAccount;
