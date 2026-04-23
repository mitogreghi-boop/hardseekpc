export default function CompareLoading() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-8 bg-gray-800 rounded animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-800 rounded animate-pulse w-1/2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="h-48 bg-gray-800 rounded animate-pulse mb-4"></div>
                <div className="h-6 bg-gray-800 rounded animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-800 rounded animate-pulse w-1/3 mb-6"></div>

                <div className="space-y-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-12 bg-gray-800 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="h-6 bg-gray-800 rounded animate-pulse mb-6"></div>
          <div className="h-64 bg-gray-800 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
