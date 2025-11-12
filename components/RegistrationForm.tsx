import React, { useState } from 'react';
import type { Recipient } from '../types';

const bankOptions = [
    { code: "004", name: "004 臺灣銀行" },
    { code: "005", name: "005 土地銀行" },
    { code: "006", name: "006 合作金庫" },
    { code: "007", name: "007 第一銀行" },
    { code: "008", name: "008 華南銀行" },
    { code: "009", name: "009 彰化銀行" },
    { code: "012", name: "012 台北富邦" },
    { code: "013", name: "013 國泰世華" },
    { code: "808", name: "808 玉山銀行" },
    { code: "822", name: "822 中國信託" },
];


const RegistrationForm: React.FC = () => {
    const [idNumber, setIdNumber] = useState('');
    const [bankCode, setBankCode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [recipients, setRecipients] = useState<Recipient[]>([{ id: Date.now(), healthCardNumber: '' }]);

    const handleAddRecipient = () => {
        if (recipients.length < 5) { // Up to 5 people total (applicant + 4 others)
            setRecipients([...recipients, { id: Date.now(), healthCardNumber: '' }]);
        }
    };

    const handleDeleteRecipient = (id: number) => {
        if (recipients.length > 1) {
            setRecipients(recipients.filter(r => r.id !== id));
        }
    };

    const handleRecipientChange = (id: number, value: string) => {
        setRecipients(recipients.map(r => r.id === id ? { ...r, healthCardNumber: value } : r));
    };


    return (
        <div className="w-full relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-pink-100 rounded-full opacity-50 hidden md:block"></div>
            <div className="relative z-10">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-[#d93025] mb-2">資料登記</h1>
                    <p className="text-red-600 font-semibold">請備妥發放對象之健保卡號 與 本人/代領人之身分證統一編號或居留證統一證號及金融機構帳號</p>
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                        <label className="md:col-span-1 text-right text-gray-700 font-medium">本人/代領人身分證統一編號<br/>或居留證統一證號</label>
                        <div className="md:col-span-3">
                            <input type="text" placeholder="10位英數字(必填)" className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c1316f]"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                        <label className="md:col-span-1 text-right text-gray-700 font-medium">本人/代領人金融機構代號</label>
                        <div className="md:col-span-3">
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#c1316f] appearance-none" value={bankCode} onChange={(e) => setBankCode(e.target.value)}>
                                <option value="" disabled>選擇金融機構代號</option>
                                {bankOptions.map(opt => <option key={opt.code} value={opt.code}>{opt.name}</option>)}
                            </select>
                             <p className="text-xs text-red-600 mt-1 pl-4">* 限本人/代領人同身分證統一編號/居留證統一證號之金融機構代號</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                        <label className="md:col-span-1 text-right text-gray-700 font-medium">本人/代領人金融機構帳號</label>
                        <div className="md:col-span-3">
                            <input type="text" placeholder="8-16位數字(必填)" className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c1316f]"/>
                            <p className="text-xs text-red-600 mt-1 pl-4">* 限本人/代領人同身分證統一編號/居留證統一證號之金融機構帳號</p>
                        </div>
                    </div>
                    
                    {recipients.map((recipient) => (
                        <div key={recipient.id} className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                            <label className="md:col-span-1 text-right text-gray-700 font-medium">發放對象健保卡號</label>
                            <div className="md:col-span-3 flex items-center space-x-2">
                                <input 
                                    type="text" 
                                    placeholder="12位數字(必填)" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c1316f]"
                                    value={recipient.healthCardNumber}
                                    onChange={(e) => handleRecipientChange(recipient.id, e.target.value)}
                                />
                                <button onClick={() => handleDeleteRecipient(recipient.id)} disabled={recipients.length <= 1} className="flex-shrink-0 bg-red-600 text-white px-4 py-2 rounded-full flex items-center space-x-1 hover:bg-red-700 transition-colors disabled:bg-red-300 disabled:cursor-not-allowed">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span>刪除</span>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                        <div className="md:col-span-1"></div>
                        <div className="md:col-span-3">
                             <p className="text-xs text-red-600 pl-4">* 持居留證者, 不適用登記人帳的代領功能</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">
                        <div className="md:col-span-1"></div>
                        <div className="md:col-span-3 flex justify-between items-center">
                            <p className="text-sm text-red-600">* 每人最多代領4人 (含本人最多共5人)</p>
                            <button onClick={handleAddRecipient} disabled={recipients.length >= 5} className="bg-teal-600 text-white px-5 py-2 rounded-full flex items-center space-x-2 hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                                <span>新增</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center space-x-4">
                    <button className="bg-gray-700 text-white font-bold px-10 py-3 rounded-md hover:bg-gray-800 transition-colors">回前頁</button>
                    <button className="bg-red-600 text-white font-bold px-10 py-3 rounded-md hover:bg-red-700 transition-colors">下一頁</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;