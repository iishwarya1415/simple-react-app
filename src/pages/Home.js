import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>👋 Welcome to the Home Page!</h2>
      <p style={{ fontSize: '18px' }}>
        This is a modern React app with creative styling and functional components only.
      </p>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ fontSize: '24px' }}>🎯 Counter</h3>
        <p style={{ fontSize: '40px', margin: '20px 0' }}>{count}</p>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>➕ Increase</button>
        <button onClick={() => setCount(count - 1)} style={{ ...buttonStyle, backgroundColor: '#f28b82' }}>
          ➖ Decrease
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '12px 24px',
  fontSize: '16px',
  margin: '10px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#a7ffeb',
  cursor: 'pointer',
  transition: 'all 0.2s',
};

export default Home;
