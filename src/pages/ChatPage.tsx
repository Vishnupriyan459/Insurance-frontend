import { useState } from 'react';
import QueryInterface from '../components/QueryInterface';
import RecommendationsDisplay from '../components/RecommendationsDisplay';
import FollowUpModal from '../components/FollowUpModal';
import LoadingSkeleton from '../components/LoadingSkeleton';
import { InsuranceRecommendation } from '../types/insurance';

export default function ChatPage() {
  const [recommendations, setRecommendations] = useState<InsuranceRecommendation[]>([]);
  const [recommendationdata, setRecommendationdata] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState<InsuranceRecommendation | null>(null);

  // Receives results from QueryInterface and maps raw API response
  // const handleQuery = (data: { results: any[] }) => {
   
  //   const mappedResults: InsuranceRecommendation[] = (data.results || []).map((apiData: any) => ({
  //     id: apiData.id,
  //     name: apiData.plan_name,
  //     category: apiData.category,
  //     planType: (apiData.plan_type || apiData.plan) ?? undefined,
  //     purpose: apiData.purpose ?? undefined,
  //     minAge: apiData.linked_data?.eligibility?.min_age,
  //     maxAge: apiData.linked_data?.eligibility?.max_age,
  //     maxSumAssured: apiData.linked_data?.eligibility?.max_basic_sum_assured,
  //     policyTerm: apiData.linked_data?.eligibility?.policy_term
  //       ? `${apiData.linked_data.eligibility.policy_term.min}–${apiData.linked_data.eligibility.policy_term.max_level_option} yrs`
  //       : undefined,
  //     premiumOptions: apiData.linked_data?.key_features?.premium_options ?? [],
  //     deathBenefit: apiData.linked_data?.benefits?.death_benefit?.regular_limited_premium,
  //     optionalRiders: apiData.linked_data?.key_features?.optional_riders ?? [],
  //     purchaseChannel: apiData.linked_data?.plan_basics?.availability

  //   }));
  //   console.log(mappedResults);

  //   setRecommendations(mappedResults);

  //   ;

  // };
const handleQuery = (data: { results: any[] }) => {
  const mappedResults: InsuranceRecommendation[] = (data.results || []).map((apiData: any) => {
    // Extract from linked_json if available
    let categoryFromPath: string | undefined;
    let planNameFromPath: string | undefined;
    if (apiData.linked_json) {
      const parts = apiData.linked_json.split('/');
      if (parts.length >= 3) {
        categoryFromPath = parts[1]; // folder after 'Insurance Plan'
        const filename = parts[parts.length - 1];
        planNameFromPath = filename.replace('.json', '');
      }
    }

    return {
      id: apiData.id,
      // linked_json has first priority
      name: planNameFromPath || apiData.plan_name,
      category: categoryFromPath || apiData.category,
      planType: categoryFromPath || apiData.plan_type || apiData.plan,
      purpose: apiData.purpose ?? undefined,
      minAge: apiData.linked_data?.eligibility?.min_age,
      maxAge: apiData.linked_data?.eligibility?.max_age,
      maxSumAssured: apiData.linked_data?.eligibility?.max_basic_sum_assured,
      policyTerm: apiData.linked_data?.eligibility?.policy_term
        ? `${apiData.linked_data.eligibility.policy_term.min}–${apiData.linked_data.eligibility.policy_term.max_level_option} yrs`
        : undefined,
      premiumOptions: apiData.linked_data?.key_features?.premium_options ?? [],
      deathBenefit: apiData.linked_data?.benefits?.death_benefit?.regular_limited_premium,
      optionalRiders: apiData.linked_data?.key_features?.optional_riders ?? [],
      purchaseChannel: apiData.linked_data?.plan_basics?.availability,
       originalData: apiData
    };
  });

  // console.log(mappedResults);
  setRecommendations(mappedResults);
};

  // Handles when user clicks "Ask Question" on a recommendation
  const handleAskQuestion = (id: string) => {
    const rec = recommendations.find((r) => r.id === id);
    if (!rec) return;
    setSelectedRecommendation( rec );
    console.log("Full JSON:", rec.originalData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Query interface for user input */}
      <QueryInterface onSubmit={handleQuery} loading={loading} setLoading={setLoading} />

      {/* Loading skeleton */}
      {loading && <LoadingSkeleton />}

      {/* Recommendations display */}
      {!loading && recommendations.length > 0 && (
        <RecommendationsDisplay
          recommendations={recommendations}
          onAskQuestion={handleAskQuestion}
        />
      )}

      {/* Follow-up modal */}
      {/* {selectedRecommendation && (
        <FollowUpModal
          isOpen={!!selectedRecommendation}
          onClose={() => setSelectedRecommendation(null)}
          recommendationId={selectedRecommendation.id}
          recommendationName={selectedRecommendation.name}
        />
      )} */}
      {selectedRecommendation && (
  <FollowUpModal
    isOpen={!!selectedRecommendation}
    onClose={() => setSelectedRecommendation(null)}
    recommendation={selectedRecommendation} // full object including originalData
  />
)}

    </div>
  );
}
