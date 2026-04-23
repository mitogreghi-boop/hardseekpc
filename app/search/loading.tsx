export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="h-8 bg-gray-800 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-800 rounded animate-pulse w-1/3"></div>
          </div>
          <div className="flex space-x-4">
            <div className="h-10 w-24 bg-gray-800 rounded animate-pulse"></div>
            <div className="h-10 w-24 bg-gray-800 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800 animate-pulse"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="h-6 bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded animate-pulse w-2/3"></div>
                <div className="h-10 bg-gray-800 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
