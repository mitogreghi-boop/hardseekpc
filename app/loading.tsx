export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4 shadow-lg shadow-orange-500/25"></div>
        <p className="text-white text-lg font-semibold">Cargando HardSeek...</p>
        <p className="text-gray-400 text-sm mt-2">Preparando el metabuscador</p>
      </div>
    </div>
  )
}
