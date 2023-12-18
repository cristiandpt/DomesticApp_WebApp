import React, { useState } from "react";
import AddressCard from "./AddressCard";
import { Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MyAddresses = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Home", location: "123 Main St", isFavorite: true },
    { id: 2, name: "Work", location: "456 Office St", isFavorite: false },
  ]);

  const [newAddressName, setNewAddressName] = useState("");
  const [newAddressLocation, setNewAddressLocation] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleCreateAddress = () => {
    if (newAddressName && newAddressLocation) {
      const newAddress = {
        id: addresses.length + 1,
        name: newAddressName,
        location: newAddressLocation,
        isFavorite: false,
      };

      setAddresses([...addresses, newAddress]);
      setNewAddressName("");
      setNewAddressLocation("");
      setDialogOpen(false);
    }
  };

  const handleEditAddress = (id, editedName, editedLocation) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, name: editedName, location: editedLocation } : address
    );
    setAddresses(updatedAddresses);
    setDialogOpen(false);
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
  };

  const handleFavoriteAddress = (id) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, isFavorite: !address.isFavorite } : { ...address, isFavorite: false }
    );
    setAddresses(updatedAddresses);
  };

  const handleOpenDialog = () => {
    setNewAddressName("");
    setNewAddressLocation("");
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Typography variant="h4">My Addresses</Typography>
      <div>
        {addresses.map((address) => (
          <div key={address.id} style={{ marginBottom: 20 }}>
            <AddressCard
              address={address}
              onEdit={handleEditAddress}
              onDelete={handleDeleteAddress}
              onFavorite={handleFavoriteAddress}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Typography variant="h5">Create New Address</Typography>
        <Button onClick={handleOpenDialog} startIcon={<AddIcon />}>
          Create
        </Button>
      </div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Create New Address</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newAddressName}
            onChange={(e) => setNewAddressName(e.target.value)}
          />
          <TextField
            label="Location"
            value={newAddressLocation}
            onChange={(e) => setNewAddressLocation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleCreateAddress} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyAddresses;
