import React from 'react';
import Home from './screens/Home';
import Header from './components/Header';

import './styles/style.css';

const App: React.FC = () => {
  return (
    <>
      <Header />            
      <Home />
    </>
  );
};

export default App;
