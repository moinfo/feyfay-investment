export default function EventsLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header skeleton */}
        <div className="mb-12">
          <div className="h-4 w-24 bg-[var(--background-elevated)] rounded-full mb-4 animate-pulse" />
          <div className="h-14 w-80 bg-[var(--background-elevated)] rounded-xl mb-4 animate-pulse" />
          <div className="h-5 w-96 bg-[var(--background-elevated)] rounded-full animate-pulse" />
        </div>

        {/* Filter skeleton */}
        <div className="flex gap-3 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-28 bg-[var(--background-elevated)] rounded-xl animate-pulse" />
          ))}
        </div>

        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="h-48 bg-[var(--background-elevated)] animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-5 bg-[var(--background-elevated)] rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-[var(--background-elevated)] rounded animate-pulse" />
                <div className="h-4 w-1/2 bg-[var(--background-elevated)] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
