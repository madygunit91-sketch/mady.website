import React from 'react';
import ReactDOM from 'react-dom/client';
import FounderSection from './components/FounderSection';
import './index.css';

function StandaloneFounder() {
  return (
    <div className="relative min-h-[100svh] bg-ink font-sans text-bone antialiased flex items-center justify-center p-4">
      <FounderSection />
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(<StandaloneFounder />);
}
