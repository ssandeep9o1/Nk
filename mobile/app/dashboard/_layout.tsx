import { Tabs } from 'expo-router';
import { Home, Users, Package, Settings, FileText } from 'lucide-react-native';

export default function DashboardLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#DC2626',
                tabBarInactiveTintColor: '#6B7280',
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 10,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="customers"
                options={{
                    title: 'Customers',
                    tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="items"
                options={{
                    title: 'Items',
                    tabBarIcon: ({ color, size }) => <Package color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color, size }) => <Settings color={color} size={size} />,
                }}
            />
            <Tabs.Screen
                name="suppliers"
                options={{
                    href: null, // Hidden from tab bar, accessed via home
                }}
            />
        </Tabs>
    );
}
