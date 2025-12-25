import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Phone, MoreVertical, Calendar, ArrowUpRight, ArrowDownLeft, Send } from 'lucide-react-native';
import { useState } from 'react';

const MOCK_TXNS = [
    { id: '1', date: "24 Dec", amount: 500, type: "gave", note: "Milk & Bread" },
    { id: '2', date: "22 Dec", amount: 200, type: "got", note: "Payment" },
    { id: '3', date: "20 Dec", amount: 1000, type: "gave", note: "Rice 20kg" },
];

export default function CustomerLedger() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const [txns, setTxns] = useState(MOCK_TXNS);
    const [balance, setBalance] = useState(1300); // Mock starting balance

    const handleTxn = (type: 'gave' | 'got') => {
        const amount = 100;
        const newTxn = {
            id: Date.now().toString(),
            date: "Today",
            amount,
            type,
            note: type === 'gave' ? "Goods Sold" : "Payment Received"
        };
        setTxns([newTxn, ...txns]);
        setBalance(prev => type === 'gave' ? prev + amount : prev - amount);
    };

    return (
        <View className="flex-1 bg-gray-50">
            {/* Header */}
            <View className="bg-white pt-12 px-4 pb-4 border-b border-gray-100 flex-row items-center justify-between shadow-sm z-10">
                <View className="flex-row items-center gap-3">
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft color="#374151" size={24} />
                    </TouchableOpacity>
                    <View>
                        <Text className="text-xl font-bold text-gray-900">Amit Kumar</Text>
                        <Text className="text-xs text-gray-500">Last txn: 2 days ago</Text>
                    </View>
                </View>
                <View className="flex-row gap-4">
                    <TouchableOpacity className="bg-green-50 p-2 rounded-full">
                        <Phone color="#16A34A" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-green-50 p-2 rounded-full">
                        <Send color="#16A34A" size={20} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Balance Banner */}
            <View className="bg-white px-6 py-4 border-b border-gray-100 flex-row justify-between items-center">
                <Text className="font-bold text-gray-500">Net Balance</Text>
                <View className="items-end">
                    <Text className={`text-2xl font-extrabold ${balance > 0 ? 'text-[#16A34A]' : 'text-[#DC2626]'}`}>
                        ₹ {Math.abs(balance)}
                    </Text>
                    <Text className="text-[10px] uppercase font-bold text-gray-400">
                        {balance > 0 ? "You'll Get" : "You'll Give"}
                    </Text>
                </View>
            </View>

            {/* Transactions List */}
            <FlatList
                data={txns}
                keyExtractor={item => item.id}
                contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <View className="bg-white p-4 mb-3 rounded-xl shadow-sm border border-gray-100 flex-row justify-between items-center">
                        <View>
                            <Text className="text-gray-400 text-xs font-bold mb-1 flex-row items-center">
                                {item.date} • {item.note}
                            </Text>
                            <View className="flex-row items-center gap-2">
                                <View className={`w-2 h-2 rounded-full ${item.type === 'gave' ? 'bg-[#DC2626]' : 'bg-[#16A34A]'}`} />
                                <Text className="font-bold text-gray-700 capitalize">
                                    {item.type === 'gave' ? 'You Gave' : 'You Got'}
                                </Text>
                            </View>
                        </View>
                        <Text className={`text-xl font-bold ${item.type === 'gave' ? 'text-[#DC2626]' : 'text-[#16A34A]'}`}>
                            ₹ {item.amount}
                        </Text>
                    </View>
                )}
            />

            {/* Bottom Actions */}
            <View className="absolute bottom-0 w-full flex-row bg-white p-4 py-4 border-t border-gray-100 gap-4 shadow-lg">
                <TouchableOpacity
                    onPress={() => handleTxn('gave')}
                    className="flex-1 bg-[#DC2626] py-4 rounded-xl flex-row items-center justify-center gap-2 shadow-sm active:opacity-90"
                >
                    <ArrowUpRight color="white" size={20} />
                    <Text className="text-white font-bold text-lg">You Gave</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleTxn('got')}
                    className="flex-1 bg-[#16A34A] py-4 rounded-xl flex-row items-center justify-center gap-2 shadow-sm active:opacity-90"
                >
                    <ArrowDownLeft color="white" size={20} />
                    <Text className="text-white font-bold text-lg">You Got</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
