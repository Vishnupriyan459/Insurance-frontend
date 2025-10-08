import { Shield } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">InsureAI</h1>
              <p className="text-xs text-gray-600">Smart Insurance Advisor</p>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'contact'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => onNavigate('chat')}
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
