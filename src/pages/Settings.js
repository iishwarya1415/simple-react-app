import React from 'react';

function Settings() {
  return (
    <div>
      <h2>Settings ⚙️</h2>
      <p>These settings don’t actually do anything (yet!), but here’s what you might add later:</p>
      <ul>
        <li>Theme toggle (light/dark mode)</li>
        <li>User preferences</li>
        <li>Account info and privacy</li>
      </ul>
      <p>
        You can use localStorage, Redux, or Context API to make these real.
      </p>
    </div>
  );
}

export default Settings;
