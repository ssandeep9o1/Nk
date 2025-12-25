"use client";

import { useState } from "react";
import { Plus, Search, Truck, Phone, ArrowUpRight } from "lucide-react";
import { AddSupplierModal } from "@/components/dashboard/add-supplier-modal";

export default function SuppliersPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: "Metro Wholesale", mobile: "98765 11111", balance: 12000 },
        { id: 2, name: "Sharma Distributors", mobile: "98765 22222", balance: 450 },
    ]);

    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Suppliers</h1>
                    <p className="text-gray-500">Manage people you buy from (Distributors/Wholesalers).</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                    Add Supplier
                </button>
            </div>

            <AddSupplierModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Search */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search suppliers..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626]"
                    />
                </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suppliers.map((supplier) => (
                    <div key={supplier.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between h-full group cursor-pointer relative overflow-hidden">

                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Truck className="w-24 h-24 text-gray-900" />
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-start justify-between">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-lg">
                                    {supplier.name.charAt(0)}
                                </div>
                                <div className="px-2 py-1 bg-red-50 text-[#DC2626] text-xs font-bold rounded-lg flex items-center">
                                    <ArrowUpRight className="w-3 h-3 mr-1" />
                                    You Give
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 leading-tight">{supplier.name}</h3>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                    <Phone className="w-3 h-3 mr-1" />
                                    {supplier.mobile}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-50">
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Balance Due</p>
                                <p className="text-2xl font-extrabold text-[#DC2626] mt-1">₹ {supplier.balance.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
