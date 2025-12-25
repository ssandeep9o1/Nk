import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { Truck, Plus, Search, Phone, Edit2 } from 'lucide-react-native';

const MOCK_SUPPLIERS = [
    { id: '1', name: "Mahajan Traders", mobile: "98765 11111", items: "Rice, Dal" },
    { id: '2', name: "Amul Distributor", mobile: "98765 22222", items: "Milk, Curd" },
    { id: '3', name: "Coca Cola Agency", mobile: "98765 33333", items: "Beverages" },
];

export default function SuppliersScreen() {
    return (
        <View className="flex-1 bg-gray-50 pt-12">
            <View className="px-6 mb-6 flex-row justify-between items-center">
                <Text className="text-2xl font-bold text-gray-900">Suppliers</Text>
                <TouchableOpacity onPress={() => alert("Search Mock")} className="bg-white p-2 rounded-full border border-gray-200">
                    <Search color="black" size={20} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={MOCK_SUPPLIERS}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <View className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-gray-100 flex-row justify-between items-center">
                        <View className="flex-row items-center gap-3">
                            <View className="w-10 h-10 bg-orange-50 rounded-lg items-center justify-center">
                                <Truck color="#EA580C" size={20} />
                            </View>
                            <View>
                                <Text className="font-bold text-gray-900 text-base">{item.name}</Text>
                                <Text className="text-gray-400 text-xs">{item.items}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-3">
                            <TouchableOpacity onPress={() => Linking.openURL(`tel:${item.mobile}`)} className="bg-green-50 p-2 rounded-full">
                                <Phone color="#16A34A" size={16} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert(`Edit ${item.name}`)}>
                                <Edit2 color="#9CA3AF" size={16} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/* Floating Add Button */}
            <TouchableOpacity
                className="absolute bottom-6 right-6 w-14 h-14 bg-[#EA580C] rounded-full items-center justify-center shadow-lg"
                onPress={() => alert("Add Supplier Mock")}
            >
                <Plus color="white" size={28} />
            </TouchableOpacity>
        </View>
    );
}
