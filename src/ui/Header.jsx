export default function Header() {
    return (
        <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                    <span className="text-white font-medium">Stock trading</span>
                </div>
                <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-red-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">0.83%</span>
                </div>
                <span className="text-white text-sm">Today</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-gray-300 hover:text-white text-sm">Add widget</button>
                <div className="flex items-center gap-2">
                    <span className="text-white text-sm">Individual</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="relative">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5V7a12 12 0 1 1 24 0v10z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-black font-bold">4</span>
                    </div>
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                <button className="text-gray-400 hover:text-white cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
            </div>
        </header>
    );
}