'use client';
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <header className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">b
                        <div className="w-6 h-6 bg-orange-500 rounded"></div>
                        <span className="text-white font-medium">Stock trading</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg animate-pulse"></div>
                </div>
            </header>
        );
    }

    return (
        <header className="bg-gray-900 dark:bg-gray-900 border-b border-gray-800 dark:border-gray-800 px-4 py-3 flex items-center justify-between transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded transition-all duration-300"></div>
                    <span className="text-white dark:text-white text-gray-900 font-medium transition-colors duration-300">Stock trading</span>
                </div>
                <button className="text-gray-400 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-200">
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
                <span className="text-white dark:text-white text-gray-900 text-sm transition-colors duration-300">Today</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-gray-300 dark:text-gray-300 text-gray-700 hover:text-white dark:hover:text-white hover:text-gray-900 text-sm transition-colors duration-200">Add widget</button>
                <div className="flex items-center gap-2">
                    <span className="text-white dark:text-white text-gray-900 text-sm transition-colors duration-300">Individual</span>
                    <svg className="w-4 h-4 text-gray-400 dark:text-gray-400 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>


                <button
                    onClick={toggleTheme}
                    className={`
                        relative p-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95
                        ${theme === 'dark'
                            ? 'bg-gray-800 hover:bg-gray-700 shadow-lg'
                            : 'bg-gray-100 hover:bg-gray-200 shadow-md'
                        }
                        border-2 transition-colors duration-300
                        ${theme === 'dark'
                            ? 'border-gray-700 hover:border-gray-600'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                    `}
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    <div className="relative w-6 h-6">
                        {theme === 'dark' ? (

                            <svg
                                className="w-6 h-6 text-yellow-400 transition-all duration-300 transform rotate-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (

                            <svg
                                className="w-6 h-6 text-gray-700 transition-all duration-300 transform rotate-0"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </div>


                    <div className={`
                        absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300
                        ${theme === 'dark' ? 'bg-yellow-400' : 'bg-blue-500'}
                    `}></div>
                </button>

                <div className="relative">
                    <svg className="w-5 h-5 text-gray-400 dark:text-gray-400 text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1 0-15 0v5h5l-5 5-5-5h5V7a12 12 0 1 1 24 0v10z" />
                    </svg>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-black font-bold">4</span>
                    </div>
                </div>
                <div className="w-8 h-8 bg-gray-600 dark:bg-gray-600 bg-gray-300 rounded-full transition-colors duration-300"></div>
                <button className="text-gray-400 dark:text-gray-400 text-gray-600 hover:text-white dark:hover:text-white hover:text-gray-900 cursor-pointer transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
            </div>
        </header>
    );
}