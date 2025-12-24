import "../global.css";
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Providers from '../components/providers';

export default function Layout() {
    return (
        <Providers>
            <SafeAreaProvider>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: '#F9FAFB' },
                    }}
                />
            </SafeAreaProvider>
        </Providers>
    );
}
