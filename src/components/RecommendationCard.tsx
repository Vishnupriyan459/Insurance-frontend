import { InsuranceRecommendation } from '../types/insurance';

interface RecommendationCardProps {
  recommendation: InsuranceRecommendation;
  onAskQuestion: (id: string) => void;
}

export default function RecommendationCard({
  recommendation,
  onAskQuestion,
}: RecommendationCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Term assurance': 'bg-blue-100 text-blue-700',
      Rider: 'bg-purple-100 text-purple-700',
      'Whole Insurance': 'bg-green-100 text-green-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{recommendation.name}</h3>
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(recommendation.category)}`}>
        {recommendation.category}
      </span>

      {recommendation.purpose && (
        <p className="text-gray-700 mt-2">{recommendation.purpose}</p>
      )}

      <ul className="text-gray-700 mt-2 space-y-1 text-sm">
        {recommendation.minAge && recommendation.maxAge && (
          <li>Age: {recommendation.minAge}–{recommendation.maxAge} yrs</li>
        )}
        {recommendation.policyTerm && <li>Policy Term: {recommendation.policyTerm}</li>}
        {recommendation.maxSumAssured && <li>Max Sum Assured: {recommendation.maxSumAssured}</li>}
        {recommendation.premiumOptions && recommendation.premiumOptions.length > 0 && (
          <li>Premium Options: {recommendation.premiumOptions.join(', ')}</li>
        )}
        {recommendation.optionalRiders && recommendation.optionalRiders.length > 0 && (
          <li>Optional Riders: {recommendation.optionalRiders.join(', ')}</li>
        )}
        {recommendation.deathBenefit && <li>Death Benefit: {recommendation.deathBenefit}</li>}
        {recommendation.purchaseChannel && <li>Purchase Channel: {recommendation.purchaseChannel}</li>}
      </ul>

      <button
        onClick={() => onAskQuestion(recommendation.id)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ask Question
      </button>
    </div>
  );
}
