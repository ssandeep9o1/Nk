"use client";

import { Save, User, Globe, Download, Trash2, ArrowRight } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                <p className="text-gray-500">Manage your profile and application preferences.</p>
            </div>

            {/* Profile Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        Profile Details
                    </h3>
                    <button className="text-sm font-bold text-[#DC2626] hover:underline">Edit</button>
                </div>
                <div className="p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Shop Name</label>
                            <div className="font-medium text-gray-900 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200">Gupta General Store</div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Owner Name</label>
                            <div className="font-medium text-gray-900 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200">Rahul Gupta</div>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">Mobile Number</label>
                            <div className="font-medium text-gray-900 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-200 flex items-center justify-between">
                                <span>98765 43210</span>
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-gray-500" />
                        App Preferences
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-gray-900">App Language</p>
                            <p className="text-sm text-gray-500">Select your preferred language.</p>
                        </div>
                        <select className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#DC2626] focus:border-[#DC2626] block w-32 p-2.5">
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                        </select>
                    </div>
                    {/* More prefs like Notifications toggle could go here */}
                </div>
            </div>

            {/* Data & Backup */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Download className="w-4 h-4 text-gray-500" />
                        Data & Backup
                    </h3>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
                        <div>
                            <p className="font-bold text-blue-900">Cloud Backup Active</p>
                            <p className="text-xs text-blue-600">Last backup: Today, 10:30 AM</p>
                        </div>
                        <button onClick={() => alert("Backup initiated!")} className="text-sm font-bold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            Backup Now
                        </button>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <button onClick={() => alert("Account deletion initiated!")} className="text-red-600 font-bold text-sm flex items-center hover:underline">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete My Account
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
