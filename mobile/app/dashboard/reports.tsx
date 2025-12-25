import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FileText, Download, Calendar, Share2, ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ReportsScreen() {
    const router = useRouter();

    const ReportCard = ({ title, desc }: { title: string, desc: string }) => (
        <TouchableOpacity
            onPress={() => alert(`Generating ${title}...`)}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 flex-row items-center justify-between"
        >
            <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 bg-blue-50 rounded-xl items-center justify-center">
                    <FileText color="#3B82F6" size={24} />
                </View>
                <View>
                    <Text className="font-bold text-gray-900 text-base">{title}</Text>
                    <Text className="text-gray-400 text-xs mt-0.5">{desc}</Text>
                </View>
            </View>
            <Download color="#9CA3AF" size={20} />
        </TouchableOpacity>
    );

    return (
        <View className="flex-1 bg-gray-50 pt-12">
            <View className="px-6 mb-6 flex-row items-center gap-3">
                <TouchableOpacity onPress={() => router.back()} className="p-1 -ml-1">
                    <ArrowLeft color="black" size={24} />
                </TouchableOpacity>
                <Text className="text-2xl font-bold text-gray-900">Reports</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}>
                <Text className="text-sm font-bold text-gray-400 uppercase mb-4">Financial Reports</Text>

                <ReportCard title="Day Book" desc="Daily transactions statement" />
                <ReportCard title="Customer Ledger" desc="Individual customer statements" />
                <ReportCard title="Profit & Loss" desc="Monthly profit analysis" />
                <ReportCard title="Inventory Report" desc="Stock levels and value" />

                <Text className="text-sm font-bold text-gray-400 uppercase mb-4 mt-4">Share</Text>
                <TouchableOpacity
                    className="bg-[#DC2626] p-4 rounded-xl flex-row items-center justify-center gap-2 shadow-sm"
                    onPress={() => alert("Share PDF Mock")}
                >
                    <Share2 color="white" size={20} />
                    <Text className="text-white font-bold">Share Today's Report</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
