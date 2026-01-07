import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import About from './pages/About';
import Learn from './pages/Learn';
import Results from './pages/Results';

// Placeholder components for routes not fully implemented in this snippet to avoid errors
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen pt-32 pb-20 px-6 bg-neutral-light text-center">
    <h1 className="text-4xl font-heading font-bold text-primary-navy mb-4">{title}</h1>
    <p className="text-gray-600 max-w-2xl mx-auto">
      This page is under construction. The Dr. BioReset team is currently compiling the best scientific resources for this section.
    </p>
    <div className="mt-12 p-8 bg-white rounded-xl shadow-md max-w-md mx-auto">
       <p className="font-bold text-primary-teal mb-2">Want to get started?</p>
       <a href="/" className="text-secondary-wellness underline">Return to Home</a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/:id" element={<ProgramDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/results" element={<Results />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/quiz" element={<PlaceholderPage title="Health Reversal Quiz" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;