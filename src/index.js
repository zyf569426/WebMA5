import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent'
import { ParentProvider } from './ParentProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParentProvider>
      <Parent />
    </ParentProvider>
  </React.StrictMode>
);

