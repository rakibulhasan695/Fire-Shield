import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import CreateQuotation from './components/CreateQuotation';

export default function App() {
    const [activeModule, setActiveModule] = useState('dashboard');
    const [user] = useState({ name: 'Rakibul Hasan', role: 'master_admin' });
    const [isSystemLocked] = useState(false);

    return (
        <div className="flex bg-slate-100 min-h-screen font-sans">
            {/* Sidebar Navigation */}
            <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} userRole={user.role} />

            {/* Main Application Container */}
            <div className="flex-1 flex flex-col">
                <Header user={user} isSystemLocked={isSystemLocked} />

                {/* Dynamic Module Rendering */}
                <main className="flex-1">
                    {activeModule === 'dashboard' && <DashboardView />}
                    {activeModule === 'sales' && <CreateQuotation />}
                    {activeModule !== 'dashboard' && activeModule !== 'sales' && (
                        <div className="p-8 text-center text-slate-500 font-medium">
                            Module <strong className="uppercase text-slate-700">{activeModule}</strong> is currently active and loading interface...
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
