import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Plus, Phone, ArrowUpRight, ArrowDownLeft } from 'lucide-react-native';
import { useState } from 'react';

const MOCK_CUSTOMERS = [
    { id: '1', name: "Amit Kumar", mobile: "9876500001", amount: 1200, type: "got" },
    { id: '2', name: "Suresh Electrician", mobile: "9876500002", amount: 2000, type: "gave" },
    { id: '3', name: "Priya Sharma", mobile: "9876500003", amount: 0, type: "settled" },
    { id: '4', name: "Raju Milkman", mobile: "9876500004", amount: 450, type: "gave" },
    { id: '5', name: "Deepak General", mobile: "9876500005", amount: 2500, type: "got" },
];

export default function CustomersScreen() {
    const router = useRouter();
    const [filter, setFilter] = useState<'all' | 'got' | 'gave'>('all');
    const [search, setSearch] = useState("");

    const filtered = MOCK_CUSTOMERS.filter(c => {
        if (filter === 'got' && c.type !== 'got') return false;
        if (filter === 'gave' && c.type !== 'gave') return false;
        return c.name.toLowerCase().includes(search.toLowerCase());
    });

    const renderItem = ({ item }: { item: typeof MOCK_CUSTOMERS[0] }) => (
        <TouchableOpacity
            onPress={() => router.push({ pathname: "/dashboard/customers/[id]", params: { id: item.id } })}
            className="flex-row items-center justify-between p-4 bg-white mb-2 mx-4 rounded-xl shadow-sm border border-gray-100"
        >
            <View className="flex-row items-center gap-3">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center">
                    <Text className="text-lg font-bold text-gray-600">{item.name[0]}</Text>
                </View>
                <View>
                    <Text className="font-bold text-gray-900 text-lg">{item.name}</Text>
                    <View className="flex-row items-center gap-1">
                        <Phone size={12} color="#9CA3AF" />
                        <Text className="text-gray-400 text-sm">{item.mobile}</Text>
                    </View>
                </View>
            </View>

            <View className="items-end">
                {item.amount === 0 ? (
                    <Text className="text-gray-500 font-bold bg-gray-100 px-2 py-1 rounded-lg text-xs">Settled</Text>
                ) : (
                    <View>
                        <Text className={`font-extrabold text-lg ${item.type === 'got' ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                            ₹ {item.amount}
                        </Text>
                        <Text className="text-[10px] text-gray-400 font-bold uppercase text-right">
                            {item.type === 'got' ? 'You Get' : 'You Give'}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-gray-50 pt-12">

            {/* Header */}
            <View className="px-6 mb-4">
                <Text className="text-2xl font-bold text-gray-900 mb-4">Customers</Text>

                {/* Search */}
                <View className="bg-white flex-row items-center px-4 py-3 rounded-xl border border-gray-200">
                    <Search color="#9CA3AF" size={20} />
                    <TextInput
                        placeholder="Search Name or Mobile"
                        className="flex-1 ml-2 text-base"
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>

                {/* Filters */}
                <View className="flex-row gap-2 mt-4">
                    {['all', 'got', 'gave'].map((f) => (
                        <TouchableOpacity
                            key={f}
                            onPress={() => setFilter(f as any)}
                            className={`px-4 py-2 rounded-lg border ${filter === f ? 'bg-gray-900 border-gray-900' : 'bg-white border-gray-200'
                                }`}
                        >
                            <Text className={`font-bold capitalize ${filter === f ? 'text-white' : 'text-gray-600'}`}>
                                {f === 'got' ? "You'll Get" : f === 'gave' ? "You'll Give" : "All"}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* List */}
            <FlatList
                data={filtered}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            {/* Floating Add Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 w-14 h-14 bg-[#DC2626] rounded-full items-center justify-center shadow-lg"
                onPress={() => alert("Add Customer Mock")}
            >
                <Plus color="white" size={28} />
            </TouchableOpacity>

        </View>
    );
}
