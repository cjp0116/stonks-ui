export default function AccountSummary() {
    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-medium">Individual</h2>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                    Deposit
                </button>
            </div>

            <div className="mb-2">
                <div className="text-2xl font-bold text-white">$5,456.87</div>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-red-500 text-sm">$70.03 (1.27%)</span>
                <span className="text-gray-400 text-sm">Today</span>
            </div>

            <div className="h-16 bg-gray-800 rounded relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 200 64">
                    <polyline
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        points="0,32 20,28 40,35 60,30 80,25 100,32 120,28 140,35 160,40 180,38 200,42"
                    />
                </svg>
            </div>
        </div>
    );
  }