"use client";

import { useState } from "react";
import { Plus, ArrowUpRight, ArrowDownLeft, ChevronRight, UserPlus, ArrowRight } from "lucide-react";
import { AddCustomerModal } from "@/components/dashboard/add-customer-modal";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
    const router = useRouter();

    const mockCustomers = [
        { id: 1, name: "Amit Kumar", time: "2 mins ago", amount: "₹ 500", type: "got", balance: "₹ 1,200 Due" },
        { id: 2, name: "Suresh Electrician", time: "1 hour ago", amount: "₹ 2,000", type: "gave", balance: "₹ 2,000 Adv" },
        { id: 3, name: "Priya Sharma", time: "4 hours ago", amount: "₹ 150", type: "got", balance: "Settled" },
        { id: 4, name: "Raju Milkman", time: "Yesterday", amount: "₹ 60", type: "gave", balance: "₹ 450 Adv" },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8">

            {/* Welcome & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-500">Welcome back, Rahul 👋</p>
                </div>
                <button
                    onClick={() => setIsAddCustomerOpen(true)}
                    className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold rounded-xl shadow-lg shadow-red-200 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                    <UserPlus className="w-5 h-5" />
                    Add Customer
                </button>
            </div>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* YOU WILL GIVE (RED) */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowUpRight className="w-24 h-24 text-[#DC2626]" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626]">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">You will Give</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#DC2626] mt-2">₹ 12,450</h2>
                        <p className="text-sm text-gray-400 mt-2">to 3 suppliers/customers</p>
                    </div>
                </div>

                {/* YOU WILL GET (GREEN) */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <ArrowDownLeft className="w-24 h-24 text-[#16A34A]" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#16A34A]">
                                <ArrowDownLeft className="w-5 h-5" />
                            </span>
                            <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">You will Get</span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-[#16A34A] mt-2">₹ 45,200</h2>
                        <p className="text-sm text-gray-400 mt-2">from 12 customers</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity / Customers */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-800">Recent Customers</h2>
                    <Link href="/dashboard/customers" className="text-sm font-semibold text-[#DC2626] hover:text-[#b91c1c] flex items-center gap-1">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {mockCustomers.map((customer) => {
                        return (
                            <div
                                key={customer.id}
                                onClick={() => router.push(`/dashboard/customers/${customer.id}`)}
                                className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 bg-gray-50/50 border border-transparent hover:border-gray-100 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm">
                                        {customer.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{customer.name}</h4>
                                        <p className="text-xs text-gray-500">{customer.time}</p>
                                    </div>
                                </div>

                                <div className="text-right flex items-center gap-4">
                                    <div>
                                        <p className={`font-bold ${customer.type === 'got' ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                                            {customer.type === 'got' ? '+' : '-'} {customer.amount}
                                        </p>
                                        <p className="text-xs text-gray-400 font-medium">{customer.balance}</p>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-300" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Add Customer Modal */}
            <AddCustomerModal
                isOpen={isAddCustomerOpen}
                onClose={() => setIsAddCustomerOpen(false)}
            />

        </div>
    );
}
