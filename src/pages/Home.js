import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <h2 className="page-heading">👋 Welcome to the Home Page!</h2>
      <p className="page-description">
        This is a modern React app with creative styling and functional components only.
      </p>

      <div className="counter-container">
        <h3 className="counter-heading">🎯 Counter</h3>
        <p className="counter-value">{count}</p>

        <button onClick={() => setCount(count + 1)} className="btn increase">
          ➕ Increase
        </button>

        <button 
          onClick={() => setCount(count - 1)} 
          disabled={count === 0}
          className={`btn decrease ${count === 0 ? 'disabled' : ''}`}
        >
          ➖ Decrease
        </button>

        {count === 0 && (
          <p className="counter-warning">Counter cannot go below 0</p>
        )}
      </div>
    </div>
  );
}

export default Home;
