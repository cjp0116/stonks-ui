export default function RecentOrders() {
    console.log('rerendering')
    const ordersData = [
        { symbol: 'XRP', status: 'Filled', side: 'Sell', type: 'Market', quantity: '21.408', avgPrice: '$2.45' },
        { symbol: 'XRP', status: 'Filled', side: 'Buy', type: 'Market', quantity: '21.408', avgPrice: '$2.31' },
    ];

    return (
        <div className="bg-gray-900 border border-gray-800 rounded-lg h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-800 flex-shrink-0">
                <h2 className="text-white font-medium">Recent orders</h2>
                <div className="flex gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M414h16M4 18h16" />
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
                            <th className="text-left p-3 text-gray-400 font-normal">Status</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Side</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Type</th>
                            <th className="text-left p-3 text-gray-400 font-normal">Quantity</th>
                            <th className="text-left p-3 text-gray-400 font-normal flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                                Avg Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersData.map((order, index) => (
                            <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                                <td className="p-3 text-white font-medium">{order.symbol}</td>
                                <td className="p-3">
                                    <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs">
                                        {order.status}
                                    </span>
                                </td>
                                <td className={`p-3 ${order.side === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
                                    {order.side}
                                </td>
                                <td className="p-3 text-gray-300">{order.type}</td>
                                <td className="p-3 text-white">{order.quantity}</td>
                                <td className="p-3 text-white">{order.avgPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }