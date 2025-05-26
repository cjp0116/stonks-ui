'use client';
import { useState } from 'react';

export default function MainChart() {
    const [activeTab, setActiveTab] = useState('Buy');

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg h-full flex flex-col">
            {/* Chart Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded"></div>
                        <span className="text-white font-medium">BITX</span>
                        <span className="text-white text-lg">$56.20</span>
                        <div className="flex items-center gap-1 text-red-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>$4.45 (7.34%)</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                    </button>
                    <div className="w-4 h-4 bg-orange-500 rounded"></div>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Buy/Sell Tabs and Indicators */}
            <div className="p-4 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex bg-gray-800 rounded">
                        <button
                            onClick={() => setActiveTab('Buy')}
                            className={`px-4 py-2 text-sm rounded ${activeTab === 'Buy' ? 'bg-yellow-500 text-black' : 'text-gray-300'}`}
                        >
                            Buy
                        </button>
                        <button
                            onClick={() => setActiveTab('Sell')}
                            className={`px-4 py-2 text-sm rounded ${activeTab === 'Sell' ? 'bg-red-500 text-white' : 'text-gray-300'}`}
                        >
                            Sell
                        </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-white">13C 56.20</span>
                        <span className="text-yellow-500">24.75K</span>
                    </div>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Volume</span>
                        <span className="text-yellow-500">24.75 K</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">EMA (9)</span>
                        <span className="text-red-500">56.41</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">VWAP</span>
                        <span className="text-blue-400">57.14</span>
                    </div>
                </div>
            </div>

            {/* Main Chart Area */}
            <div className="p-4 flex-1 overflow-auto">
                <div className="h-64 bg-gray-800 rounded relative mb-4">
                    {/* Price Chart */}
                    <svg className="w-full h-full" viewBox="0 0 800 256" preserveAspectRatio="none">
                        <polyline
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="2"
                            points="50,100 100,90 150,110 200,95 250,85 300,100 350,90 400,110 450,120 500,115 550,125 600,135 650,140 700,145 750,150"
                        />
                        <polyline
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="1"
                            points="50,105 100,95 150,115 200,100 250,90 300,105 350,95 400,115 450,125 500,120 550,130 600,140 650,145 700,150 750,155"
                        />
                    </svg>

                    {/* Volume bars */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-around px-4">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 ${ 0.5 ? 'bg-green-500' : 'bg-red-500'}`}
                                style={{ height: `${ 60 + 10}px` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* RSI Indicator */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 text-sm">RSI (14)</span>
                        <span className="text-white text-sm">31.23</span>
                    </div>
                    <div className="h-16 bg-gray-800 rounded relative">
                        <svg className="w-full h-full" viewBox="0 0 800 64" preserveAspectRatio="none">
                            <line x1="0" y1="16" x2="800" y2="16" stroke="#374151" strokeWidth="1" strokeDasharray="2,2" />
                            <line x1="0" y1="48" x2="800" y2="48" stroke="#374151" strokeWidth="1" strokeDasharray="2,2" />
                            <polyline
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1.5"
                                points="50,40 100,35 150,45 200,38 250,32 300,40 350,35 400,45 450,42 500,38 550,35 600,32 650,30 700,28 750,25"
                            />
                        </svg>
                    </div>
                </div>

                {/* MACD Indicator */}
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-gray-400 text-sm">MACD (12, 26, 9)</span>
                        <span className="text-white text-sm">-0.35</span>
                        <span className="text-orange-500 text-sm">-0.29</span>
                        <span className="text-blue-400 text-sm">-0.06</span>
                    </div>
                    <div className="h-16 bg-gray-800 rounded relative">
                        <div className="absolute bottom-0 left-0 right-0 h-full flex items-end justify-around px-2">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1 ${ 0.5 ? 'bg-green-500' : 'bg-orange-500'}`}
                                    style={{ height: `${ 40 + 5}px` }}
                                ></div>
                            ))}
                        </div>
                        <svg className="w-full h-full absolute top-0" viewBox="0 0 800 64" preserveAspectRatio="none">
                            <polyline
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="1.5"
                                points="50,45 100,42 150,48 200,45 250,40 300,45 350,42 400,48 450,50 500,48 550,45 600,42 650,40 700,38 750,35"
                            />
                            <polyline
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="1.5"
                                points="50,40 100,38 150,43 200,40 250,35 300,40 350,38 400,43 450,45 500,43 550,40 600,38 650,35 700,33 750,30"
                            />
                        </svg>
                    </div>
                </div>

                {/* Time axis */}
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>10:00</span>
                    <span>12:00</span>
                    <span>14:00</span>
                    <span>16:00</span>
                </div>
            </div>
        </div>
    );
}