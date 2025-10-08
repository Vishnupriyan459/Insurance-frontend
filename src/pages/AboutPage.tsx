import {
  Sparkles,
  Target,
  Shield,
  Users,
  TrendingUp,
  Award,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>About InsureAI</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Trusted AI Insurance Advisor
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We leverage advanced artificial intelligence to help you navigate the
            complex world of insurance, making it simple to find the perfect
            coverage for your unique needs.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to quality insurance advice by providing
              intelligent, personalized recommendations that empower individuals
              and families to make informed decisions about their financial
              protection.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Traditional insurance shopping is overwhelming. We simplify the
              process using AI to analyze thousands of policies, understand your
              unique situation, and recommend plans that truly fit your needs and
              budget.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Tell Us Your Needs
              </h3>
              <p className="text-gray-600">
                Answer a few simple questions about your insurance requirements,
                preferences, and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our advanced AI analyzes thousands of policies to find the best
                matches for your unique situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Get Recommendations
              </h3>
              <p className="text-gray-600">
                Receive personalized recommendations with clear comparisons,
                benefits, and considerations.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Makes Us Different
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                User-Centric
              </h3>
              <p className="text-gray-600">
                We put your needs first, providing unbiased recommendations based
                solely on what's best for you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <TrendingUp className="w-10 h-10 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data-Driven
              </h3>
              <p className="text-gray-600">
                Our AI analyzes real-time data from thousands of policies to
                ensure accurate, up-to-date recommendations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Award className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparent
              </h3>
              <p className="text-gray-600">
                Clear explanations of benefits, drawbacks, and costs with no
                hidden fees or surprises.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Insurance Plan?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied users who found their ideal coverage in
            under 2 minutes.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}
