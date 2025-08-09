import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {

  // const [darkMode, setDarkMode] = useState(true);

  return (
    // <main className="container">
    //  <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 transition-colors duration-300">
    //   <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    // </div>
    //   </main>
    <Home />

  );
}

export default App;