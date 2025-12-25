import { Sidebar } from "@/components/dashboard/sidebar";
import { Menu, Search, Bell } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#F3F4F6] font-sans text-gray-900">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="md:ml-64 min-h-screen flex flex-col">

                {/* Top Header */}
                <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3 md:hidden">
                        <button className="p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <Menu className="w-6 h-6" />
                        </button>
                        <span className="font-bold text-lg">Naa Khata</span>
                    </div>

                    {/* Desktop Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-6">
                        <div className="relative w-full text-gray-500 focus-within:text-[#DC2626]">
                            <div className="absolute left-3 top-2.5">
                                <Search className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search customers..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-[#DC2626] focus:bg-white transition-all outline-none text-sm font-medium"
                            />
                        </div>
                    </div>

                    {/* Mobile Search Icon (only visible on small screens to save space) */}
                    <button className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                        <Search className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>

            </div>
        </div>
    );
}
