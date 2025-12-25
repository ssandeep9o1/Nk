"use client";

import { FileText, Download, Calendar, ArrowRight } from "lucide-react";

export default function ReportsPage() {

    const reports = [
        {
            id: "daybook",
            title: "Day Book",
            description: "View daily transactions (In/Out) with opening and closing balance.",
            color: "bg-blue-50 text-blue-600",
            icon: Calendar
        },
        {
            id: "defaulters",
            title: "Defaulter List",
            description: "List of customers with pending dues exceeding a specific limit.",
            color: "bg-red-50 text-red-600",
            icon: FileText
        },
        {
            id: "statement",
            title: "All Transactions",
            description: "Complete statement of all transactions for a specific period.",
            color: "bg-purple-50 text-purple-600",
            icon: FileText
        },
        {
            id: "suppliers",
            title: "Supplier Statement",
            description: "Report of payments made and pending dues to suppliers.",
            color: "bg-orange-50 text-orange-600",
            icon: FileText
        }
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-8">

            <div>
                <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
                <p className="text-gray-500">Download statements and analyze your business performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report) => (
                    <div
                        key={report.id}
                        onClick={() => alert(`Generating ${report.title}...\nThis will download a PDF file.`)}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${report.color}`}>
                                <report.icon className="w-6 h-6" />
                            </div>
                            <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:text-gray-900 group-hover:bg-gray-100 transition-colors">
                                <Download className="w-5 h-5" />
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-6">
                            {report.description}
                        </p>

                        <button className="w-full py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center justify-center transition-colors">
                            View Report
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Mock Generated Report View (Optional visual) */}
            <div className="bg-gray-900 rounded-2xl p-8 text-center text-gray-400 space-y-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="text-gray-200 font-bold text-lg">Detailed Analysis Coming Soon</h4>
                <p className="max-w-md mx-auto text-sm">
                    We are building advanced analytics to help you grow your business.
                    Soon you will be able to see profit/loss graphs here.
                </p>
            </div>

        </div>
    );
}
