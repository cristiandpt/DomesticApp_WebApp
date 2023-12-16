import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">About DomesticApp</h1>
          <p className="text-lg mb-6">
            DomesticApp is your go-to platform for convenient and reliable domestic services.
          </p>
          <p className="text-lg mb-6">
            We connect clients with skilled workers, making it easy to find assistance for
            household tasks, maintenance, and more.
          </p>
          <p className="text-lg mb-6">
            With DomesticApp, you can streamline the process of hiring professionals for
            various services, ensuring a hassle-free experience for both clients and workers.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
