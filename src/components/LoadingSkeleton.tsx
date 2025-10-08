export default function LoadingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded w-64 mb-4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-48 animate-pulse" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-3 animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
                </div>
              </div>

              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse" />
                  <div className="h-8 bg-gray-200 rounded w-32 animate-pulse" />
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse" />
                  <div className="h-8 bg-gray-200 rounded w-32 animate-pulse" />
                </div>
              </div>

              <div className="space-y-3 mt-6">
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
                {[1, 2, 3].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-4 h-4 bg-gray-200 rounded-full mr-2 flex-shrink-0 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="space-y-3 mt-6">
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
                {[1, 2].map((j) => (
                  <div key={j} className="flex items-start">
                    <div className="w-4 h-4 bg-gray-200 rounded-full mr-2 flex-shrink-0 animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse" />
                  </div>
                ))}
              </div>

              <div className="flex space-x-3 mt-6">
                <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="w-32 h-12 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
