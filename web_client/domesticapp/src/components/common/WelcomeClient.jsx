// pages/welcome-client.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';


const WelcomeClient = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to DomesticApp!</h1>
          <p className="text-lg mb-6">
            Discover reliable and efficient domestic services tailored to your needs.
          </p>
          <p className="text-lg mb-6">
            Let us handle your home tasks, so you can focus on what matters most to you.
          </p>
          <p className="text-lg mb-6">
            Join DomesticApp today and experience a new level of convenience.
          </p>
          <p className="text-lg mb-6">
            Sincerely, DomesticApp team.

          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomeClient;
