import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'chat':
        return <ChatPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              &copy; 2024 InsureAI. Your trusted AI insurance advisor.
            </p>
            <p className="text-sm text-gray-500">
              Powered by advanced AI to help you make informed insurance
              decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
