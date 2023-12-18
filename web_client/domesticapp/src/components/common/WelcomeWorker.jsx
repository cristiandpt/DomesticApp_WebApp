// components/welcome-worker.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const WelcomeWorker = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">Join Our Team at DomesticApp!</h1>
          <p className="text-lg mb-6">
            Explore exciting opportunities and be a part of a dynamic workforce.
          </p>
          <p className="text-lg mb-6">
            Make a difference by providing valuable services and connecting with clients.
          </p>
          <p className="text-lg mb-6">
            Join DomesticApp today and embark on a rewarding journey with us.
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

export default WelcomeWorker;
