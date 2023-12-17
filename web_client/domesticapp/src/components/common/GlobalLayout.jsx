// components/GlobalLayout.jsx
import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WorkerNavMenu from '../worker/menus/WorkerNavMenu';
import ClientNavMenu from '../client/menus/ClientNavMenu';

const GlobalLayout = ({ userType, children }) => {  
  
    return (
      <div>
        <Header userType={userType}/>
        <main className="container mx-auto p-8">
          {children}
        </main>
        <Footer />
      </div>
    );
  };

export default GlobalLayout;
