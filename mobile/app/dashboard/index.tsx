import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../lib/store';
import { UserPlus, ArrowUpRight, ArrowDownLeft, ChevronRight, Bell, Search } from 'lucide-react-native';

export default function DashboardHome() {
    const router = useRouter();
    const user = useAuthStore((state) => state.user);

    return (
        <View className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="bg-white px-6 pt-12 pb-4 flex-row items-center justify-between border-b border-gray-100">
                <View>
                    <Text className="text-gray-500 text-xs font-bold uppercase tracking-wider">Dashboard</Text>
                    <Text className="text-xl font-bold text-gray-900">Hi, {user?.name || "Rahul"}</Text>
                </View>
                <View className="flex-row gap-4">
                    <TouchableOpacity>
                        <Search color="#6B7280" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Bell color="#6B7280" size={24} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }} className="p-6">

                {/* Action Banner */}
                <View className="bg-white p-4 rounded-2xl flex-row items-center justify-between mb-6 shadow-sm">
                    <Text className="text-gray-500 font-medium">Quick Add</Text>
                    <TouchableOpacity
                        onPress={() => router.push("/dashboard/customers/new")} // Or modal
                        className="bg-[#DC2626] px-4 py-2 rounded-xl flex-row items-center gap-2"
                    >
                        <UserPlus color="white" size={18} />
                        <Text className="text-white font-bold">Add Customer</Text>
                    </TouchableOpacity>
                </View>

                {/* Balance Cards */}
                <View className="flex-row gap-4 mb-8">
                    {/* GIVE (RED) */}
                    <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-[#DC2626]">
                        <View className="bg-red-50 w-8 h-8 rounded-full items-center justify-center mb-2">
                            <ArrowUpRight color="#DC2626" size={16} />
                        </View>
                        <Text className="text-xs font-bold text-gray-500 uppercase">You'll Give</Text>
                        <Text className="text-2xl font-extrabold text-[#DC2626] mt-1">₹ 12,450</Text>
                    </View>

                    {/* GET (GREEN) */}
                    <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-[#16A34A]">
                        <View className="bg-green-50 w-8 h-8 rounded-full items-center justify-center mb-2">
                            <ArrowDownLeft color="#16A34A" size={16} />
                        </View>
                        <Text className="text-xs font-bold text-gray-500 uppercase">You'll Get</Text>
                        <Text className="text-2xl font-extrabold text-[#16A34A] mt-1">₹ 45,200</Text>
                    </View>
                </View>

                {/* Recent Customers */}
                <View>
                    <View className="flex-row items-center justify-between mb-4">
                        <Text className="text-lg font-bold text-gray-900">Recent Activity</Text>
                        <TouchableOpacity onPress={() => router.push("/dashboard/customers")}>
                            <Text className="text-[#DC2626] font-bold text-sm">View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        {[
                            { name: "Amit Kumar", amount: "₹ 500", type: "got", time: "2m ago" },
                            { name: "Suresh Electrician", amount: "₹ 2,000", type: "gave", time: "1h ago" },
                            { name: "Priya Sharma", amount: "₹ 150", type: "got", time: "4h ago" }
                        ].map((c, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => router.push("/dashboard/customers/1")}
                                className="flex-row items-center justify-between p-4 border-b border-gray-100"
                            >
                                <View className="flex-row items-center gap-3">
                                    <View className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                                        <Text className="font-bold text-gray-600">{c.name[0]}</Text>
                                    </View>
                                    <View>
                                        <Text className="font-bold text-gray-900">{c.name}</Text>
                                        <Text className="text-xs text-gray-400">{c.time}</Text>
                                    </View>
                                </View>
                                <View className="items-end">
                                    <Text className={`font-bold ${c.type === 'got' ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                                        {c.type === 'got' ? '+' : '-'} {c.amount}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}
