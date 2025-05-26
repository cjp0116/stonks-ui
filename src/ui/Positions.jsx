export default function Positions() {
    const positionsData = [
        { symbol: 'AAPL', quantity: '100', avgPrice: '$150.25', marketValue: '$15,025.00', unrealizedPL: '+$125.50', isPositive: true },
        { symbol: 'TSLA', quantity: '50', avgPrice: '$245.80', marketValue: '$12,290.00', unrealizedPL: '-$89.25', isPositive: false },
    ];

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
                <h2 className="text-white font-medium">Positions</h2>
                <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            <div className="overflow-auto flex-1">
                <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-gray-900">
                        <tr className="border-b border-gray-800">
                            <th className="text-left p-3 text-gray-400 font-normal">Symbol</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Quantity</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Avg Price</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Market Value</th>
                            <th className="text-left p-3 text-gray-400 font-normal flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Unrealized P&L
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {positionsData.map((position, index) => (
                            <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                                <td className="p-3 text-white font-medium">{position.symbol}</td>
                                <td className="p-3 text-white">{position.quantity}</td>
                                <td className="p-3 text-white">{position.avgPrice}</td>
                                <td className="p-3 text-white">{position.marketValue}</td>
                                <td className={`p-3 ${position.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                    {position.unrealizedPL}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
  