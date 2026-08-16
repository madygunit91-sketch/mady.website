import React from 'react';
import Background3D from './Background3D';

export default function Layout({ children }) {
  return (
    <>
      <Background3D />
      <div className="relative">
        {children}
      </div>
    </>
  );
}
