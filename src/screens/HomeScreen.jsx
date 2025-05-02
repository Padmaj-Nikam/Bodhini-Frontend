import React, { useState } from 'react';

const HomeScreen = ({ darkMode, toggleDarkMode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateWorkspace = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/workspaces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'New Workspace' }),
      });

      if (!response.ok) {
        throw new Error('Failed to create workspace');
      }

      const data = await response.json();
      console.log('Workspace created:', data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`text-center d-flex flex-column justify-content-center align-items-center ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ height: '80vh' }}>
      <h1 className="display-4 fw-bold">Welcome to Bodhini</h1>
      <p className="lead text-muted w-75">
        Create workspace to create customer churn or inventory management projects.
      </p>
      <button 
        className="btn btn-outline-primary btn-lg mt-4" 
        onClick={handleCreateWorkspace} 
        disabled={loading}
      >
        {loading ? 'Creating...' : '+ Create Workspace'}
      </button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default HomeScreen;
