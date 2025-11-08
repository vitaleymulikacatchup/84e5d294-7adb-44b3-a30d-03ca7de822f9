import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center text-sm text-cf-gray">
          <span>Cloudflare Ray ID: </span>
          <span className="font-mono">99b65d37ab86a455</span>
          <span className="mx-2">•</span>
          <span>Your IP: </span>
          <button className="text-cf-blue hover:underline">
            Click to reveal
          </button>
          <span className="mx-2">•</span>
          <span>Performance & security by </span>
          <a href="https://cloudflare.com" className="text-cf-blue hover:underline">
            Cloudflare
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;