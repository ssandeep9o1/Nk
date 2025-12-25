"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, ArrowUpRight, ArrowDownLeft, Phone, UserPlus } from "lucide-react";
import { AddCustomerModal } from "@/components/dashboard/add-customer-modal";
import { useRouter } from "next/navigation";

export default function CustomersPage() {
    const router = useRouter();
    const [filter, setFilter] = useState<"all" | "will_get" | "will_give">("all");
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const customers = [
        { id: 1, name: "Amit Kumar", mobile: "98765 00001", type: "will_get", amount: 1200, lastTxn: "2 days ago" },
        { id: 2, name: "Suresh Electrician", mobile: "98765 00002", type: "will_give", amount: 500, lastTxn: "Yesterday" },
        { id: 3, name: "Priya Sharma", mobile: "98765 00003", type: "settled", amount: 0, lastTxn: "1 week ago" },
        { id: 4, name: "Raju Milkman", mobile: "98765 00004", type: "will_give", amount: 450, lastTxn: "Today" },
        { id: 5, name: "Deepak General", mobile: "98765 00005", type: "will_get", amount: 2500, lastTxn: "3 days ago" },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
                    <p className="text-gray-500">View and manage all your customer accounts.</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                    <UserPlus className="w-5 h-5" />
                    Add Customer
                </button>
            </div>

            <AddCustomerModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or number..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626]"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex bg-gray-100 p-1 rounded-xl">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${filter === 'all' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("will_get")}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${filter === 'will_get' ? 'bg-white shadow text-[#16A34A]' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                        You'll Get
                    </button>
                    <button
                        onClick={() => setFilter("will_give")}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${filter === 'will_give' ? 'bg-white shadow text-[#DC2626]' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                        You'll Give
                    </button>
                </div>
            </div>

            {/* Customer List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50/50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase">
                    <div className="col-span-5">Name / Mobile</div>
                    <div className="col-span-3">Last Transaction</div>
                    <div className="col-span-4 text-right">Net Balance</div>
                </div>

                <div className="divide-y divide-gray-100">
                    {customers.map((customer) => (
                        <div
                            key={customer.id}
                            onClick={() => router.push(`/dashboard/customers/${customer.id}`)}
                            className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors group cursor-pointer"
                        >

                            {/* Name & Mobile */}
                            <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">
                                    {customer.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-[#DC2626] transition-colors">{customer.name}</h4>
                                    <div className="flex items-center text-xs text-gray-400 mt-0.5">
                                        <Phone className="w-3 h-3 mr-1" />
                                        {customer.mobile}
                                    </div>
                                </div>
                            </div>

                            {/* Last Txn */}
                            <div className="col-span-6 md:col-span-3 text-sm text-gray-500 font-medium">
                                {customer.lastTxn}
                            </div>

                            {/* Balance */}
                            <div className="col-span-6 md:col-span-4 text-right">
                                {customer.amount === 0 ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        Settled
                                    </span>
                                ) : (
                                    <div className={`flex flex-col items-end`}>
                                        <span className={`text-lg font-bold flex items-center gap-1 ${customer.type === 'will_get' ? 'text-[#16A34A]' : 'text-[#DC2626]'
                                            }`}>
                                            {customer.type === 'will_get' ? (
                                                <ArrowDownLeft className="w-4 h-4" />
                                            ) : (
                                                <ArrowUpRight className="w-4 h-4" />
                                            )}
                                            ₹ {customer.amount.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-gray-400 font-semibold uppercase">
                                            {customer.type === 'will_get' ? 'You will get' : 'You will give'}
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
