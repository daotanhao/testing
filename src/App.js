// App.js

import React, { useState } from 'react';
import RequestList from './components/RequestList';
import RequestForm from './components/RequestForm';
import { useSelector } from 'react-redux';

const App = () => {
  console.log(useSelector((state) => state));

  return (
    <div className="app">
      <RequestList />
      <RequestForm />
    </div>
  );
};

export default App;
