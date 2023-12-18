import React, { useState } from 'react';
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

  const [isFormOpen, setFormOpen] = useState(false);

  const handleRemoveCard = (id) => {
    setCreditCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    setCreditCards((prevCards) => [
      ...prevCards,
      {
        id: prevCards.length + 1,
        ...newCard,
        number: `**** **** **** ${newCard.number.slice(-4)}`,
      },
    ]);
    setFormOpen(false);
  };

  const handleOpenForm = () => {
    setNewCard({
      number: '',
      type: 'Visa',
      category: 'Credit',
      dueDate: '',
      name: '',
      cvv: '',
    });
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <GlobalLayout userType={userType}>
      <div>
        <h4>My Wallet</h4>
        {creditCards.map((card) => (
          <div key={card.id}>
            <p>{card.number}</p>
            <p>{`${card.type} - ${card.category}`}</p>
            <p>{`Due Date: ${card.dueDate}`}</p>
            <p>{`Name: ${card.name}`}</p>
            <p>{`CVV: ${card.cvv}`}</p>
            <button onClick={() => handleRemoveCard(card.id)}>Remove</button>
          </div>
        ))}
        <button onClick={handleOpenForm}>Add Payment Method</button>
        {isFormOpen && (
          <form onSubmit={handleAddCard}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              value={newCard.number}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, number: e.target.value }))}
            />
            <label htmlFor="brand">Brand:</label>
            <select
              id="brand"
              value={newCard.type}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, type: e.target.value }))}
            >
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={newCard.category}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, category: e.target.value }))}
            >
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="text"
              id="dueDate"
              value={newCard.dueDate}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, dueDate: e.target.value }))}
            />
            <label htmlFor="nameOnCard">Name on Card:</label>
            <input
              type="text"
              id="nameOnCard"
              value={newCard.name}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, name: e.target.value }))}
            />
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={newCard.cvv}
              onChange={(e) => setNewCard((prevCard) => ({ ...prevCard, cvv: e.target.value }))}
            />
            <button type="submit">Add</button>
            <button type="button" onClick={handleCloseForm}>Cancel</button>
          </form>
        )}
      </div>
    </GlobalLayout>
  );
};

export default MyWallet;
