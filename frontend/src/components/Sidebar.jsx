import React from 'react';

export default function Sidebar({ activeModule, setActiveModule, userRole }) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊', roles: ['admin', 'master_admin', 'staff'] },
        { id: 'sales', label: 'Sales & Quotations', icon: '🧾', roles: ['admin', 'master_admin', 'staff'] },
        { id: 'inventory', label: 'Inventory Logistics', icon: '📦', roles: ['admin', 'master_admin'] },
        { id: 'manufacturing', label: 'Manufacturing (BOM)', icon: '⚙️', roles: ['admin', 'master_admin'] },
        { id: 'hr', label: 'HR & Payroll', icon: '👥', roles: ['admin', 'master_admin'] },
        { id: 'reports', label: 'Automated Reports', icon: '📈', roles: ['admin', 'master_admin'] },
        { id: 'settings', label: 'Settings & Master Access', icon: '🛠️', roles: ['master_admin'] },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 px-2 py-4 border-b border-slate-800">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-lg">F</div>
                    <span className="font-bold text-lg tracking-wide text-red-500">FIRE SHIELD ERP</span>
                </div>
                <nav className="mt-6 space-y-1">
                    {menuItems.map((item) => {
                        if (!item.roles.includes(userRole)) return null;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveModule(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                    activeModule === item.id 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>
            <div className="border-t border-slate-800 pt-4 text-xs text-slate-500 text-center">
                Fire Shield Bangladesh Ltd. © 2026
            </div>
        </aside>
    );
}
