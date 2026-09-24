import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateQuotation() {
    const [termsList, setTermsList] = useState([]);
    const [selectedTerms, setSelectedTerms] = useState('');
    const [termsContent, setTermsContent] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        axios.get('/api/terms').then(res => setTermsList(res.data));
    }, []);

    const handleTermChange = (e) => {
        const termId = e.target.value;
        setSelectedTerms(termId);
        const selected = termsList.find(t => t.id === parseInt(termId));
        if (selected) {
            setTermsContent(selected.content);
        }
    };

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Fire Shield Bangladesh ERP - Create Quotation</h1>
            
            <div className="mb-4 bg-white p-4 rounded shadow">
                <label className="block text-sm font-medium mb-1">Select Preset Terms & Conditions:</label>
                <select 
                    value={selectedTerms} 
                    onChange={handleTermChange}
                    className="w-full border p-2 rounded mb-2"
                >
                    <option value="">-- Choose Terms Template --</option>
                    {termsList.map(t => (
                        <option key={t.id} value={t.id}>{t.title}</option>
                    ))}
                </select>

                <label className="block text-sm font-medium mb-1">Editable Terms Text:</label>
                <textarea 
                    value={termsContent} 
                    onChange={(e) => setTermsContent(e.target.value)}
                    rows="4" 
                    className="w-full border p-2 rounded"
                />
            </div>

            <button 
                onClick={() => setShowPreview(true)} 
                className="bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700"
            >
                Print Preview
            </button>

            {showPreview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg w-3/4 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold border-b pb-2 mb-4">Print Preview</h2>
                        <div className="border p-4 bg-white">
                            <h3 className="font-bold text-lg">FIRE SHIELD BANGLADESH</h3>
                            <p className="text-sm text-gray-600">Quotation Document</p>
                            <hr className="my-2" />
                            <div className="my-4">
                                <strong>Terms & Conditions:</strong>
                                <p className="whitespace-pre-wrap">{termsContent}</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                            <button onClick={() => setShowPreview(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Close</button>
                            <button onClick={() => window.print()} className="px-4 py-2 bg-blue-600 text-white rounded">Print Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
