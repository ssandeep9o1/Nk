"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    LogOut
} from "lucide-react";

const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/items", label: "Items", icon: FileText }, // Reusing FileText or unique icon
    { href: "/dashboard/suppliers", label: "Suppliers", icon: Users }, // Reusing Users or unique icon
    { href: "/dashboard/customers", label: "Customers", icon: Users },
    { href: "/dashboard/reports", label: "Reports", icon: FileText },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
            {/* Brand */}
            <div className="flex items-center space-x-2 px-6 h-16 border-b border-gray-100">
                <div className="relative w-8 h-8">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">Naa Khata</span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${isActive
                                ? "bg-red-50 text-[#DC2626]"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                        >
                            <Icon className={`w-5 h-5 mr-3 ${isActive ? "text-[#DC2626]" : "text-gray-400"}`} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* User Profile / Logout */}
            <div className="p-4 border-t border-gray-100">
                <Link href="/dashboard/settings" className="block">
                    <div className="flex items-center p-3 rounded-xl bg-gray-50 mb-2 hover:bg-gray-100 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold group-hover:bg-blue-200 transition-colors">
                            RG
                        </div>
                        <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-bold text-gray-900 truncate">Rahul Gupta</p>
                            <p className="text-xs text-gray-500 truncate">Gupta Store</p>
                        </div>
                    </div>
                </Link>
                <button className="flex items-center justify-center w-full px-4 py-2 text-xs font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
