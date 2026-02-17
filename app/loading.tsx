export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-black flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-2 border-secondary-gold border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-neutral-cream/60 text-sm font-mono">Loading FarmSense...</p>
      </div>
    </div>
  );
}
