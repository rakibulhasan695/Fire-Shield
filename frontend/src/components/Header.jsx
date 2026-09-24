import React from 'react';

export default function Header({ user, isSystemLocked }) {
    return (
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-slate-800">System Dashboard</h2>
                {isSystemLocked && (
                    <span className="bg-red-100 text-red-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-red-200 animate-pulse">
                        🔒 System Maintenance Locked
                    </span>
                )}
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm font-semibold text-slate-800">{user?.name || 'Rakibul Hasan'}</p>
                    <p className="text-xs text-slate-500 capitalize">{user?.role || 'Master Admin'}</p>
                </div>
                <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold">
                    {user?.name ? user.name[0] : 'R'}
                </div>
            </div>
        </header>
    );
}
