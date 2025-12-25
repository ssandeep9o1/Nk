"use client";

import { useState } from "react";
import { X, Loader2, Truck, Smartphone, IndianRupee } from "lucide-react";

interface AddSupplierModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AddSupplierModal({ isOpen, onClose }: AddSupplierModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [balance, setBalance] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onClose();
            alert(`Supplier "${name}" added!`);
            setName("");
            setMobile("");
            setBalance("");
        }, 1000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden scale-100 animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900">Add Supplier</h3>
                    <button
                        onClick={onClose}
                        className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Supplier Name</label>
                        <div className="relative">
                            <div className="absolute left-4 top-3.5 text-gray-400">
                                <Truck className="w-5 h-5" />
                            </div>
                            <input
                                required
                                type="text"
                                placeholder="e.g. Metro Wholesale"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Mobile Number</label>
                        <div className="relative">
                            <div className="absolute left-4 top-3.5 text-gray-400">
                                <Smartphone className="w-5 h-5" />
                            </div>
                            <input
                                required
                                type="tel"
                                placeholder="98765 00000"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium font-mono text-lg transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Opening Balance (Due)</label>
                        <div className="relative">
                            <div className="absolute left-4 top-3.5 text-gray-400">
                                <IndianRupee className="w-5 h-5" />
                            </div>
                            <input
                                type="number"
                                placeholder="0.00"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium transition-all"
                            />
                        </div>
                        <p className="text-[10px] text-gray-400 ml-1">Amount you already owe them.</p>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 rounded-xl text-white font-bold text-lg shadow-lg bg-[#DC2626] hover:bg-[#b91c1c] flex items-center justify-center transition-all disabled:opacity-70"
                        >
                            {isLoading ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                "Save Supplier"
                            )}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
