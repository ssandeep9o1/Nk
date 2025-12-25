"use client";

import { useState } from "react";
import { Plus, Search, Tag, Edit2, Trash2 } from "lucide-react";
import { AddItemModal } from "@/components/dashboard/add-item-modal";

export default function ItemsPage() {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [items, setItems] = useState([
        { id: 1, name: "Sugar", price: 40, unit: "kg" },
        { id: 2, name: "Rice (Basmati)", price: 80, unit: "kg" },
        { id: 3, name: "Oil (Sunflower)", price: 150, unit: "ltr" },
        { id: 4, name: "Milk", price: 32, unit: "pkt" },
    ]);

    return (
        <div className="max-w-5xl mx-auto space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Shop Items</h1>
                    <p className="text-gray-500">Manage your product prices and inventory.</p>
                </div>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#b91c1c] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                    <Plus className="w-5 h-5" />
                    Add New Item
                </button>
            </div>

            <AddItemModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
            />

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#DC2626]"
                    />
                </div>
                {/* Filter Placeholder */}
            </div>

            {/* Items List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Item Name</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">Price / Unit</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                                            <Tag className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-gray-900">{item.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-600">
                                    ₹ {item.price} <span className="text-gray-400 text-sm">/ {item.unit}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => alert(`Edit ${item.name}`)}
                                            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (confirm(`Are you sure you want to delete ${item.name}?`)) {
                                                    alert("Item deleted!");
                                                }
                                            }}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {items.length === 0 && (
                    <div className="p-12 text-center text-gray-400">
                        No items found. Add your first item!
                    </div>
                )}
            </div>

        </div>
    );
}
