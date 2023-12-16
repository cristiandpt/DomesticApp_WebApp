// components/worker/settings.jsx
import React from 'react';
import Link from "next/link";
import Header from './Header';
import Footer from './Footer';

const SettingsW = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Settings</h1>
        <p className="text-lg mb-6">
          Customize your experience on DomesticApp and make the most of our platform.
        </p>
        <Link href="/contactUs">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get in touch with us
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsW;
