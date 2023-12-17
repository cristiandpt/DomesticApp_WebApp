// myWallet.jsx

import React, { useState } from 'react';
import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from '@mui/material';
import GlobalLayout from './GlobalLayout';

const MyWallet = ({userType}) => {
  const [creditCards, setCreditCards] = useState([
    {
      id: 1,
      number: '**** **** **** 1234',
      type: 'Visa',
      category: 'Credit',
      dueDate: '11/27',
      name: 'John Doe',
      cvv: '123',
    },
    // Add more cards as needed
  ]);

  const [newCard, setNewCard] = useState({
    number: '',
    type: 'Visa',
    category: 'Credit',
    dueDate: '',
    name: '',
    cvv: '',
  });

  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleRemoveCard = (id) => {
    setCreditCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleAddCard = () => {
    setCreditCards((prevCards) => [
      ...prevCards,
      {
        id: prevCards.length + 1,
        ...newCard,
        number: `**** **** **** ${newCard.number.slice(-4)}`,
      },
    ]);
    setDialogOpen(false);
  };

  const handleOpenDialog = () => {
    setNewCard({
      number: '',
      type: 'Visa',
      category: 'Credit',
      dueDate: '',
      name: '',
      cvv: '',
    });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <GlobalLayout userType={userType}>
        <div>
      <Typography variant="h4" gutterBottom>
        My Wallet
      </Typography>
      <Grid container spacing={2}>
        {creditCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{card.number}</Typography>
                <Typography variant="body2">{`${card.type} - ${card.category}`}</Typography>
                <Typography variant="body2">{`Due Date: ${card.dueDate}`}</Typography>
                <Typography variant="body2">{`Name: ${card.name}`}</Typography>
                <Typography variant="body2">{`CVV: ${card.cvv}`}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleRemoveCard(card.id)} color="secondary">
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button onClick={handleOpenDialog} variant="outlined" color="primary">
        Add Payment Method
      </Button>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Add New Payment Method</DialogTitle>
        <DialogContent>
          <TextField
            label="Card Number"
            fullWidth
            value={newCard.number}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, number: e.target.value }))}
          />
          <TextField
            label="Brand"
            select
            fullWidth
            value={newCard.type}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, type: e.target.value }))}
          >
            <MenuItem value="Visa">Visa</MenuItem>
            <MenuItem value="MasterCard">MasterCard</MenuItem>
          </TextField>
          <TextField
            label="Category"
            select
            fullWidth
            value={newCard.category}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, category: e.target.value }))}
          >
            <MenuItem value="Credit">Credit</MenuItem>
            <MenuItem value="Debit">Debit</MenuItem>
          </TextField>
          <TextField
            label="Due Date"
            fullWidth
            value={newCard.dueDate}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, dueDate: e.target.value }))}
          />
          <TextField
            label="Name on Card"
            fullWidth
            value={newCard.name}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, name: e.target.value }))}
          />
          <TextField
            label="CVV"
            fullWidth
            value={newCard.cvv}
            onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, cvv: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddCard} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </GlobalLayout>
  );
};

export default MyWallet;
