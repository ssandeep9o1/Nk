import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuthStore } from '../lib/store';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';

export default function Onboarding() {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const [shopName, setShopName] = useState("");
    const [userName, setUserName] = useState("");

    const { mutate: updateProfile, isPending } = useMutation({
        mutationFn: api.auth.updateProfile,
        onSuccess: (_, variables) => {
            login({ ...variables, name: variables.userName });
            alert("Onboarding Complete!");
        },
        onError: () => {
            alert("Error updating profile");
        }
    });

    const handleStart = () => {
        if (!shopName || !userName) {
            alert("Please fill all fields");
            return;
        }
        updateProfile({ shopName, userName, language: "en" });
    };

    return (
        <View className="flex-1 items-center justify-center bg-background px-6">
            <View className="w-full max-w-sm">
                <View className="items-center mb-8">
                    <Text className="text-3xl font-bold text-foreground">Setup Your Shop</Text>
                    <Text className="mt-2 text-sm text-gray-500">
                        Just a few details to get started
                    </Text>
                </View>

                <View className="space-y-4 w-full">
                    <Text className="font-medium text-foreground ml-1">Shop Name</Text>
                    <Input
                        placeholder="My Cool Shop"
                        value={shopName}
                        onChangeText={setShopName}
                    />

                    <Text className="font-medium text-foreground ml-1 mt-2">Your Name</Text>
                    <Input
                        placeholder="John Doe"
                        value={userName}
                        onChangeText={setUserName}
                    />

                    {/* Dropdown for language is complex in RN without library, 
              simulating with a default 'English' text or just omitting for MVP simplicity 
              since 1 screen = 1 thing. We can add it later. */}

                    <Button
                        title={isPending ? "Starting..." : "Get Started"}
                        onPress={handleStart}
                        disabled={isPending}
                        className="mt-6"
                    />
                </View>
            </View>
        </View>
    );
}
