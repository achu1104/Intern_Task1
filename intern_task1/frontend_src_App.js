import React from 'react';
import InternList from './components/InternList';
import AddIntern from './components/AddIntern';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Intern Dashboard</h2>
      <AddIntern />
      <InternList />
    </div>
  );
}

export default App;
