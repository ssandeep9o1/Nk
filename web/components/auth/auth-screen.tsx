"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Smartphone,
    User,
    Store,
    MapPin,
    ArrowRight,
    CheckCircle,
    Loader2
} from "lucide-react";

export function AuthScreen() {
    const [mode, setMode] = useState<"login" | "register">("register");
    const [isLoading, setIsLoading] = useState(false);

    // Form States
    const [mobile, setMobile] = useState("");
    const [shopName, setShopName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [address, setAddress] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setOtpSent(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4 font-sans text-gray-900">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                {/* Header / Logo */}
                <div className="bg-white p-6 text-center border-b border-gray-100">
                    <div className="relative w-16 h-16 mx-auto mb-3">
                        <Image src="/logo.png" alt="Naa Khata" fill className="object-contain" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Welcome to Naa Khata</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        {mode === "login"
                            ? "Login to access your ledger"
                            : "Create a free account for your shop"}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setMode("register")}
                        className={`flex-1 py-4 text-sm font-bold transition-colors relative ${mode === "register"
                                ? "text-[#DC2626] bg-red-50/50"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Create Account
                        {mode === "register" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DC2626]" />
                        )}
                    </button>
                    <button
                        onClick={() => setMode("login")}
                        className={`flex-1 py-4 text-sm font-bold transition-colors relative ${mode === "login"
                                ? "text-[#16A34A] bg-green-50/50"
                                : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        Login
                        {mode === "login" && (
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#16A34A]" />
                        )}
                    </button>
                </div>

                {/* Form Area */}
                <div className="p-8">
                    {otpSent ? (
                        // OTP VIEW (Mock)
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-[#16A34A]">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">OTP Sent!</h3>
                                <p className="text-sm text-gray-500">
                                    We sent a code to <span className="font-bold text-gray-900">+91 {mobile}</span>
                                </p>
                            </div>
                            <div className="flex gap-2 justify-center">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 border-2 border-gray-200 rounded-lg bg-gray-50"></div>
                                ))}
                            </div>
                            <button
                                onClick={() => setOtpSent(false)}
                                className="text-sm text-[#DC2626] font-bold hover:underline"
                            >
                                Change Number
                            </button>
                        </div>
                    ) : (
                        // INPUT FORM
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {mode === "register" && (
                                <>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Shop Name</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-3.5 text-gray-400">
                                                <Store className="w-5 h-5" />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                placeholder="e.g. Gupta General Store"
                                                value={shopName}
                                                onChange={(e) => setShopName(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Owner Name</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-3.5 text-gray-400">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                placeholder="e.g. Rahul Gupta"
                                                value={ownerName}
                                                onChange={(e) => setOwnerName(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Address</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-3.5 text-gray-400">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <input
                                                required
                                                type="text"
                                                placeholder="e.g. MG Road, Mumbai"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:border-transparent outline-none font-medium transition-all"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">Mobile Number</label>
                                <div className="relative">
                                    <div className="absolute left-4 top-3.5 text-gray-400">
                                        <Smartphone className="w-5 h-5" />
                                    </div>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="98765 43210"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-medium font-mono text-lg transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg flex items-center justify-center transition-all transform hover:-translate-y-0.5 ${mode === 'register'
                                            ? "bg-[#DC2626] hover:bg-[#b91c1c] shadow-red-200"
                                            : "bg-[#16A34A] hover:bg-[#15803d] shadow-green-200"
                                        }`}
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        <>
                                            {mode === 'register' ? 'Get Started' : 'Send OTP'}
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </button>
                            </div>

                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        By continuing, you agree to our Terms & Privacy Policy.
                    </p>
                </div>

            </div>
        </div>
    );
}
