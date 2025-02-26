export function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-8 border-gray-200"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-8 border-purple-500 border-t-transparent"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-sm font-medium text-gray-500">Loading...</span>
        </div>
      </div>
    </div>
  );
} 