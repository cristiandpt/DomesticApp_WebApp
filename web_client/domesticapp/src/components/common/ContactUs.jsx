// components/contact-us.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            Our communicative channels will be available soon. We appreciate your patience.
          </p>

          <p className="text-lg mb-6">
            We look forward to connecting with you and providing excellent support.
          </p>
          <p className="text-lg mb-6">
            Thanks for your interest!
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

export default ContactUs;
