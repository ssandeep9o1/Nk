import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuthStore } from '../../lib/store';
import { User, Globe, Cloud, LogOut, ChevronRight, ShieldCheck } from 'lucide-react-native';

export default function SettingsScreen() {
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);

    const handleLogout = () => {
        logout();
        router.replace("/");
    };

    const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <View className="mb-6">
            <Text className="px-6 text-sm font-bold text-gray-400 uppercase mb-2 ml-1">{title}</Text>
            <View className="bg-white border-y border-gray-100">{children}</View>
        </View>
    );

    const Item = ({ icon: Icon, label, value, onPress, color = "black" }: any) => (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className="flex-row items-center justify-between px-6 py-4 border-b border-gray-50 bg-white"
        >
            <View className="flex-row items-center gap-3">
                <Icon size={20} color={color === 'red' ? '#DC2626' : '#4B5563'} />
                <Text className={`font-medium ${color === 'red' ? 'text-red-600' : 'text-gray-900'}`}>{label}</Text>
            </View>
            <View className="flex-row items-center gap-2">
                {value && <Text className="text-gray-400 text-sm">{value}</Text>}
                <ChevronRight size={16} color="#D1D5DB" />
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView className="flex-1 bg-gray-50 pt-12">
            <View className="px-6 mb-8">
                <Text className="text-3xl font-bold text-gray-900">Settings</Text>
            </View>

            <Section title="Profile">
                <Item icon={User} label="Name" value={user?.name || "Rahul"} onPress={() => { }} />
                <Item icon={ShieldCheck} label="Shop Details" value={user?.shopName || "Rahul General Store"} onPress={() => { }} />
            </Section>

            <Section title="Preferences">
                <Item icon={Globe} label="Language" value="English" onPress={() => alert("Language change mock")} />
                <Item icon={Cloud} label="Backup Data" value="On" onPress={() => alert("Backup started")} />
            </Section>

            <Section title="Account">
                <Item icon={LogOut} label="Log Out" color="red" onPress={handleLogout} />
            </Section>

            <View className="items-center pb-12">
                <Text className="text-gray-400 text-xs">Version 1.0.0 (Build 2024)</Text>
            </View>
        </ScrollView>
    );
}
