import React from 'react';
import Header from './components/Header';
import ErrorDiagram from './components/ErrorDiagram';
import ErrorDetails from './components/ErrorDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <ErrorDiagram />
        <ErrorDetails />
      </main>
      <Footer />
    </div>
  );
}

export default App;