import { useState } from 'react';
import { Grid2x2 as Grid, List, Sparkles } from 'lucide-react';
import { InsuranceRecommendation } from '../types/insurance';
import RecommendationCard from './RecommendationCard';

interface RecommendationsDisplayProps {
  recommendations: InsuranceRecommendation[];
  onAskQuestion: (id: string) => void;
}

export default function RecommendationsDisplay({
  recommendations,
  onAskQuestion,
}: RecommendationsDisplayProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  if (recommendations.length === 0) return null;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Results</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Your Personalized Recommendations
            </h2>
          </div>

          {/* View toggle */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-blue-600 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-blue-600 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Recommendations grid/list */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-2 gap-6'
              : 'space-y-6'
          }
        >
          {recommendations.map((rec) => (
            <RecommendationCard
              key={rec.id}
              recommendation={rec}
              onAskQuestion={onAskQuestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
