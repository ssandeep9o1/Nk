import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Package, Plus, Search, Edit2 } from 'lucide-react-native';

const MOCK_ITEMS = [
    { id: '1', name: "Amul Milk 500ml", price: 34, unit: "pkt" },
    { id: '2', name: "Basmati Rice", price: 120, unit: "kg" },
    { id: '3', name: "Sugar", price: 44, unit: "kg" },
    { id: '4', name: "Tata Salt", price: 28, unit: "pkt" },
    { id: '5', name: "Coke 2.5L", price: 95, unit: "btl" },
];

export default function ItemsScreen() {
    return (
        <View className="flex-1 bg-gray-50 pt-12">
            <View className="px-6 mb-6 flex-row justify-between items-center">
                <Text className="text-2xl font-bold text-gray-900">Items Rate List</Text>
                <TouchableOpacity onPress={() => alert("Search Mock")} className="bg-white p-2 rounded-full border border-gray-200">
                    <Search color="black" size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={MOCK_ITEMS}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <View className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-gray-100 flex-row justify-between items-center">
                        <View className="flex-row items-center gap-3">
                            <View className="w-10 h-10 bg-blue-50 rounded-lg items-center justify-center">
                                <Package color="#3B82F6" size={20} />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 text-base">{item.name}</Text>
                                <Text className="text-gray-400 text-xs">Per {item.unit}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-4">
                            <Text className="font-bold text-lg text-gray-900">₹{item.price}</Text>
                            <TouchableOpacity onPress={() => alert(`Edit ${item.name}`)}>
                                <Edit2 color="#9CA3AF" size={16} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Floating Add Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full items-center justify-center shadow-lg"
                onPress={() => alert("Add Item Mock")}
            >
                <Plus color="white" size={28} />
            </TouchableOpacity>
        </View>
    );
}
