import React from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-normal text-cf-dark-gray">Bad gateway</h1>
          <span className="error-badge">Error code 502</span>
        </div>
        <div className="text-cf-gray">
          <span>Visit </span>
          <a href="https://cloudflare.com" className="text-cf-blue hover:underline">
            cloudflare.com
          </a>
          <span> for more information.</span>
        </div>
        <div className="text-cf-gray text-sm mt-1">
          2025-11-08 16:14:34 UTC
        </div>
      </div>
    </header>
  );
}

export default Header;