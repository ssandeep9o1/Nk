"use client";

import { useState, use } from "react";
import {
    ArrowLeft, Phone, MoreVertical, FileText,
    ArrowUpRight, ArrowDownLeft, Send, Calendar
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock Data Types
type Transaction = {
    id: string;
    date: string;
    amount: number;
    type: "gave" | "got"; // gave = red (you gave money/items), got = green (you got money)
    note?: string;
};

export default function CustomerLedgerPage({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter();
    // Unwrap params using React.use()
    const { id } = use(params);

    // Mock Customer Data
    const [customer, setCustomer] = useState({
        id: id,
        name: "Amit Kumar",
        mobile: "98765 00001",
        totalBalance: 1200, // Positive = You will get, Negative = You will give
        type: "will_get" as "will_get" | "will_give" | "settled"
    });

    const [transactions, setTransactions] = useState<Transaction[]>([
        { id: "1", date: "24 Dec 2024", amount: 500, type: "gave", note: "Milk & Bread" },
        { id: "2", date: "22 Dec 2024", amount: 200, type: "got", note: "Cash Payment" },
        { id: "3", date: "20 Dec 2024", amount: 1000, type: "gave", note: "Rice 20kg" },
        { id: "4", date: "15 Dec 2024", amount: 100, type: "gave", note: "Sugar" }
    ]);

    const handleTransaction = (type: "gave" | "got") => {
        // Determine amount based on type for demo
        const amount = type === "gave" ? 100 : 500;
        const newTxn: Transaction = {
            id: Date.now().toString(),
            date: "Today",
            amount: amount,
            type: type,
            note: type === "gave" ? "Goods sold" : "Payment received"
        };

        setTransactions([newTxn, ...transactions]);

        // Update balance logic
        setCustomer(prev => {
            const adjustment = type === "gave" ? amount : -amount;
            const newBalance = prev.totalBalance + adjustment;
            return {
                ...prev,
                totalBalance: newBalance,
                type: newBalance > 0 ? "will_get" : newBalance < 0 ? "will_give" : "settled"
            };
        });
    };

    const sendReminder = () => {
        alert(`Sending WhatsApp reminder to ${customer.mobile} for ₹${customer.totalBalance}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24 relative">

            {/* Top Bar */}
            <div className="bg-white sticky top-0 z-10 shadow-sm border-b border-gray-100">
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/customers" className="p-2 -ml-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
                            <ArrowLeft className="w-6 h-6" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900 leading-tight">{customer.name}</h1>
                            <div className="flex items-center text-xs text-gray-500">
                                <Phone className="w-3 h-3 mr-1" />
                                {customer.mobile}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={sendReminder}
                            className="p-2 text-green-600 bg-green-50 hover:bg-green-100 rounded-full transition-colors"
                            title="Send Reminder"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Balance Summary Header */}
                <div className="px-6 py-4 bg-white flex items-center justify-between border-t border-gray-50">
                    <div className="text-sm font-medium text-gray-500">Net Balance</div>
                    <div className={`text-2xl font-bold flex items-center gap-2 ${customer.type === 'will_get' ? 'text-[#16A34A]' :
                            customer.type === 'will_give' ? 'text-[#DC2626]' : 'text-gray-900'
                        }`}>
                        {customer.type === 'will_get' ? "You'll Get" : customer.type === 'will_give' ? "You'll Give" : "Settled"}
                        <span className="text-3xl">₹ {Math.abs(customer.totalBalance).toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Transactions List */}
            <div className="max-w-3xl mx-auto p-4 space-y-3">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Transaction History</h2>
                    <button
                        onClick={() => alert("Downloading PDF Statement...")}
                        className="flex items-center gap-1 text-xs font-medium text-[#DC2626] bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
                    >
                        <FileText className="w-3.5 h-3.5" />
                        Report
                    </button>
                </div>

                {transactions.map((txn) => (
                    <div key={txn.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {txn.date}
                            </span>
                            <span className="text-gray-900 font-medium">{txn.note || "Transaction"}</span>
                        </div>
                        <div className={`text-right font-bold text-lg ${txn.type === 'gave' ? 'text-[#DC2626]' : 'text-[#16A34A]'
                            }`}>
                            {txn.type === 'gave' ? '-' : '+'} ₹{txn.amount}
                            <div className="text-[10px] font-normal text-gray-400 uppercase tracking-wide">
                                {txn.type === 'gave' ? 'You Gave' : 'You Got'}
                            </div>
                        </div>
                    </div>
                ))}

                <div className="text-center py-8 text-gray-400 text-sm">
                    Start of records
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:pl-64">
                <div className="max-w-3xl mx-auto flex gap-4">
                    <button
                        onClick={() => handleTransaction('gave')}
                        className="flex-1 bg-[#DC2626] hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                        You Gave
                    </button>
                    <button
                        onClick={() => handleTransaction('got')}
                        className="flex-1 bg-[#16A34A] hover:bg-green-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                        <ArrowDownLeft className="w-5 h-5" />
                        You Got
                    </button>
                </div>
            </div>

        </div>
    );
}
