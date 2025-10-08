import { TrendingUp, Users, Star, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Insurance Recommendations</span>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Find Your Perfect{' '}
              <span className="text-blue-600">Insurance Plan</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Let our AI analyze your needs and recommend the best insurance
              policies tailored just for you. Compare plans, understand coverage,
              and make informed decisions.
            </p>

            <div className="flex space-x-4 pt-4">
              <button
                onClick={() => onNavigate('chat')}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get Recommendations
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all border border-gray-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-teal-400 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy family"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
              <p className="text-xs text-gray-600 font-medium">Trusted By</p>
              <p className="text-2xl font-bold text-gray-900">15,000+ Users</p>
            </div>
            <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4">
              <p className="text-xs text-gray-600 font-medium">Quick Analysis</p>
              <p className="text-2xl font-bold text-gray-900">Under 2 min</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-2">50K+</p>
            <p className="text-gray-600">Policies Compared</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <Users className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-2">15K+</p>
            <p className="text-gray-600">Happy Users</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
              <Star className="w-6 h-6" />
            </div>
            <p className="text-3xl font-bold text-blue-600 mb-2">4.9/5</p>
            <p className="text-gray-600">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
