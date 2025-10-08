import { useState } from 'react';
import { Sparkles, Zap } from 'lucide-react';
import { QueryFilters, InsuranceRecommendation } from '../types/insurance';


interface QueryInterfaceProps {
  onSubmit: (data: { results: InsuranceRecommendation[] }) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QueryInterface({ onSubmit, loading,setLoading }: QueryInterfaceProps) {
  const [filters, setFilters] = useState<QueryFilters>({
    query: '',
    category: 'Endowment Insurance',
    planType: 'Savings Plan',
    priority: 'High Coverage',
  });

  const categories = [
    'Endowment Insurance',
    'Money Back Insurance',
    'Term Insurance',
    'Whole Life Insurance',
    'Rider Insurance',
    'Micro Insurance',
    'Pension Plan',
    'Unit Linked Plan'
  ];

  const planTypes = [
    'Savings Plan',
    'Term Plan',
    'Family Plan',
    'Individual Plan',
    'Comprehensive Plan',
  ];
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  //     if (!baseUrl) throw new Error('API URL not defined in .env');

  //     // Build query params (exclude priority)
  //     const params = new URLSearchParams({
  //       user_query: filters.query,
  //       category: filters.category,
  //       plan_type: filters.planType,
  //       top_k: '4',
  //     });

  //     const res = await fetch(`${baseUrl}/search_with_jsons?${params.toString()}`);
  //     if (!res.ok) throw new Error('Failed to fetch recommendations');

  //     const data = await res.json();
  //     onSubmit({ results: data });
  //   } catch (err: any) {
  //     console.error('Error fetching recommendations:', err.message);
  //     onSubmit({ results: [] });
  //   }
  // };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    const baseUrl = " https://aadc56ce494b.ngrok-free.app";
    const params = new URLSearchParams({
      user_query: filters.query,
      category: filters.category,
      plan_type: filters.planType,
      top_k: '4',
    });

    const res = await fetch(`${baseUrl}/search_with_jsons?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch recommendations');

    const data = await res.json();
    console.log(data.results);
    
    onSubmit({ results: data.results || [] });
  } catch (err: any) {
    console.error('Error fetching recommendations:', err.message);
    onSubmit({ results: [] });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>AI Insurance Advisor</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tell Us What You Need
          </h2>
          <p className="text-gray-600">
            Answer a few questions and get personalized insurance recommendations
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Describe your insurance needs
              </label>
              <input
                type="text"
                value={filters.query}
                onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                placeholder="I need health insurance"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Plan Type
                </label>
                <select
                  value={filters.planType}
                  onChange={(e) => setFilters({ ...filters, planType: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  {planTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing your needs...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  <span>Get Recommendations</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
