import React from 'react';

export default function DashboardView() {
    const stats = [
        { label: 'Unpaid Sales', value: '৳ 4,85,000', icon: '💰', color: 'border-l-red-500' },
        { label: 'Unpaid Purchase', value: '৳ 1,20,000', icon: '🛒', color: 'border-l-orange-500' },
        { label: 'Total Clients', value: '148', icon: '🏢', color: 'border-l-blue-500' },
        { label: 'Total Stock Products', value: '1,240 Pcs', icon: '🔥', color: 'border-l-emerald-500' },
    ];

    return (
        <div className="p-6 space-y-6 bg-slate-50 min-h-[calc(100vh-73px)]">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`bg-white p-5 rounded-xl border border-slate-200 shadow-sm border-l-4 ${stat.color} flex justify-between items-center`}>
                        <div>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
                        </div>
                        <span className="text-3xl">{stat.icon}</span>
                    </div>
                ))}
            </div>

            {/* Main Section: Quick Workflow Actions & Recent Activity Log */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Workflow Quick Actions */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Quick ERP Actions</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all text-center">
                            ➕ New Quotation
                        </button>
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all text-center">
                            📄 Work Order Entry
                        </button>
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 transition-all text-center">
                            🚚 Delivery Challan
                        </button>
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all text-center">
                            🏬 Stock Transfer
                        </button>
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-amber-50 hover:border-amber-300 hover:text-amber-600 transition-all text-center">
                            🛠️ Manufacturing BOM
                        </button>
                        <button className="p-4 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-600 transition-all text-center">
                            💵 Salary Payment
                        </button>
                    </div>
                </div>

                {/* Audit Trail Log View */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex justify-between items-center">
                        <span>Activity Audit Log</span>
                        <span className="text-xs text-slate-400 font-normal">Admin Only</span>
                    </h3>
                    <div className="space-y-3 text-sm max-h-[280px] overflow-y-auto pr-1">
                        <div className="p-3 bg-slate-50 rounded border-l-2 border-emerald-500">
                            <p className="font-semibold text-slate-700">User #1 (Rakibul) created Quotation #QT-1024</p>
                            <span className="text-xs text-slate-400">Today at 10:15 PM</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded border-l-2 border-blue-500">
                            <p className="font-semibold text-slate-700">User #3 updated stock for Cooper Panel</p>
                            <span className="text-xs text-slate-400">Today at 08:30 PM</span>
                        </div>
                        <div className="p-3 bg-slate-50 rounded border-l-2 border-purple-500">
                            <p className="font-semibold text-slate-700">Master Admin updated System Settings</p>
                            <span className="text-xs text-slate-400">Yesterday at 11:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
