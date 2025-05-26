export default function WatchlistPanel() {
    const watchlistData = [
        { symbol: 'QUBT', netChange: '$1.22', changePercent: '10.11%', lastPrice: '$13.34', isPositive: true },
        { symbol: 'CRWV', netChange: '$3.14', changePercent: '3.13%', lastPrice: '$103.45', isPositive: true },
        { symbol: 'CORT', netChange: '$1.92', changePercent: '2.52%', lastPrice: '$78.23', isPositive: true },
        { symbol: 'AZ', netChange: '$0.15', changePercent: '1.65%', lastPrice: '$9.25', isPositive: true },
        { symbol: 'ALKT', netChange: '$0.07', changePercent: '0.24%', lastPrice: '$29.14', isPositive: false },
        { symbol: 'QBTS', netChange: '$0.08', changePercent: '0.42%', lastPrice: '$19.23', isPositive: false },
    ];

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <h2 className="text-white font-medium">Gamble</h2>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-auto flex-1">
                <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-gray-900">
                        <tr className="border-b border-gray-800">
                            <th className="text-left p-3 text-gray-400 font-normal">#</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Symbol</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Net chg</th>
                            <th className="text-left p-3 text-gray-400 font-normal flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Change %
                            </th>
                            <th className="text-left p-3 text-gray-400 font-normal">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        {watchlistData.map((item, index) => (
                            <tr key={item.symbol} className="border-b border-gray-800 hover:bg-gray-800/50">
                                <td className="p-3 text-gray-400">{index + 1}</td>
                                <td className="p-3 text-white font-medium">{item.symbol}</td>
                                <td className={`p-3 ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d={item.isPositive ? "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"} clipRule="evenodd" />
                                        </svg>
                                        {item.netChange}
                                    </div>
                                </td>
                                <td className={`p-3 ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                    <div className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d={item.isPositive ? "M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L10 4.414 4.707 9.707a1 1 0 01-1.414 0z" : "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"} clipRule="evenodd" />
                                        </svg>
                                        {item.changePercent}
                                    </div>
                                </td>
                                <td className="p-3 text-white">{item.lastPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }