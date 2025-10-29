import { useState } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { FollowUpMessage, InsuranceRecommendation } from '../types/insurance';

interface FollowUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendation: InsuranceRecommendation; // full recommendation object
}

export default function FollowUpModal({
  isOpen,
  onClose,
  recommendation,
}: FollowUpModalProps) {
  const [messages, setMessages] = useState<FollowUpMessage[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentQuestion.trim()) return;

    const newMessage: FollowUpMessage = {
      id: Date.now().toString(),
      question: currentQuestion,
      answer: '',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setCurrentQuestion('');
    setLoading(true);

    try {
      // Prepare payload
      const payload = {
        user_query: currentQuestion,
        policy_json: recommendation.originalData || recommendation,
      };

      // Send POST request to ngrok endpoint
      const response = await fetch(' http://127.0.0.1:8000/ask_policy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      // data: { query: "...", answer: "..." }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id ? { ...msg, answer: data.answer || "No answer available." } : msg
        )
      );
    } catch (error) {
      console.error('Error fetching policy answer:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newMessage.id
            ? { ...msg, answer: "Failed to get answer. Please try again." }
            : msg
        )
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Ask a Question</h3>
            <p className="text-sm text-gray-600 mt-1">About {recommendation.name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <Bot className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">
                Ask me anything about this insurance plan
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Coverage details, claims process, exclusions, and more
              </p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 bg-blue-50 rounded-2xl rounded-tl-none p-4">
                    <p className="text-gray-900">{msg.question}</p>
                  </div>
                </div>

                {msg.answer && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-none p-4">
                      <p className="text-gray-900">{msg.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}

          {loading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1 bg-gray-50 rounded-2xl rounded-tl-none p-4">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-6 border-t border-gray-200">
          <div className="flex space-x-3">
            <input
              type="text"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              placeholder="Type your question here..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !currentQuestion.trim()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
