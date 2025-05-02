import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import WorkspaceScreen from './screens/WorkspaceScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router> {/* Wrap everything in Router */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Routes> {/* Define routes */}
        <Route path="/" element={<HomeScreen darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/profile" element={<ProfileScreen darkMode={darkMode} />} />
        <Route path="/workspaces" element={<WorkspaceScreen darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
};

export default App;
