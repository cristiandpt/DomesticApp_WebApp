import React, { useState } from 'react';
import AddressCard from './AddressCard';

const MyAddresses = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, name: 'Home', location: '123 Main St', isFavorite: true },
    { id: 2, name: 'Work', location: '456 Office St', isFavorite: false },
  ]);

  const [newAddress, setNewAddress] = useState({
    name: '',
    location: '',
  });

  const handleCreateAddress = (e) => {
    e.preventDefault();
    if (newAddress.name && newAddress.location) {
      const createdAddress = {
        id: addresses.length + 1,
        name: newAddress.name,
        location: newAddress.location,
        isFavorite: false,
      };

      setAddresses([...addresses, createdAddress]);
      setNewAddress({ name: '', location: '' });
    }
  };

  const handleEditAddress = (id, editedName, editedLocation) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, name: editedName, location: editedLocation } : address
    );
    setAddresses(updatedAddresses);
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

  return (
    <div>
      <h4>My Addresses</h4>
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
        <h5>Create New Address</h5>
        <form onSubmit={handleCreateAddress}>
          <label htmlFor="newAddressName">Name:</label>
          <input
            type="text"
            id="newAddressName"
            value={newAddress.name}
            onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
          />
          <label htmlFor="newAddressLocation">Location:</label>
          <input
            type="text"
            id="newAddressLocation"
            value={newAddress.location}
            onChange={(e) => setNewAddress({ ...newAddress, location: e.target.value })}
          />
          <button type="submit">Create Address</button>
        </form>
      </div>
    </div>
  );
};

export default MyAddresses;
