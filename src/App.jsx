import React from 'react';
import { Spinner, Navbar } from 'flowbite-react';
import Topbar from './components/Topbar';

const App = () => (
  <div>
    <Spinner show={true} bgColor="bg-white" position="fixed translate-middle" size="3rem" />
    <Topbar />

    {/* Main Content */}
    <div className="my-8 mx-auto">
      <div className="py-4">
        {/* Your main content goes here */}
      </div>
    </div>

    {/* Navbar */}
    <Navbar className="bg-white sticky top-0 p-0 wow fadeIn" data-wow-delay="0.1s">
      {/* ... (rest of the code for Navbar) */}
    </Navbar>
  </div>
);

export default App;
