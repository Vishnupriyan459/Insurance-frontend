export interface InsuranceRecommendation {
  id: string;                   // Unique plan ID
  name: string;                 // Plan name, e.g., "LIC’s New Tech-Term"
  category: string;             // Plan category, e.g., "Term Insurance"
  planType?: string;            // Optional, plan type description
  purpose?: string;             // Optional, short tagline/purpose
  minAge?: number;              // Optional, eligibility min age
  maxAge?: number;              // Optional, eligibility max age
  maxSumAssured?: string;       // Optional, max coverage e.g., "5 Cr+" or "Subject to underwriting"
  policyTerm?: string;          // Optional, e.g., "10–40 yrs"
  premiumOptions?: string[];    // Optional, e.g., ["Single", "Regular"]
  deathBenefit?: string;        // Optional, short summary of death benefit
  optionalRiders?: string[];    // Optional, e.g., ["Accident Benefit Rider"]
  purchaseChannel?: string;
  originalData?: any;            // Optional, to store the original API response
}


export interface QueryFilters {
  query: string;
  category: string;
  planType: string;
  priority: string;
}

export interface FollowUpMessage {
  id: string;
  question: string;
  answer: string;
  timestamp: Date;
}
