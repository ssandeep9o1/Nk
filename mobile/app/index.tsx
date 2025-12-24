import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuthStore } from '../lib/store';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';
import { z } from 'zod';

// Simple validation manually since we don't have a form library installed for RN yet
// or we can use generic logic.
const mobileSchema = z.string().min(10).max(10).regex(/^[0-9]+$/);

export default function MobileLogin() {
    const router = useRouter();
    const setMobile = useAuthStore((state) => state.setMobile);
    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const { mutate: requestOtp, isPending } = useMutation({
        mutationFn: api.auth.requestOtp,
        onSuccess: (_, variables) => {
            setMobile(variables);
            router.push("/verify");
        },
        onError: (err) => {
            console.error(err);
            setError("Failed to send OTP");
        }
    });

    const handlePress = () => {
        try {
            mobileSchema.parse(input);
            setError("");
            requestOtp(input);
        } catch (e) {
            setError("Enter a valid 10-digit number");
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-background px-6">
            <View className="w-full max-w-sm space-y-8">
                <View className="items-center">
                    <Text className="text-3xl font-bold text-foreground">Welcome Back</Text>
                    <Text className="mt-2 text-sm text-gray-500">
                        Enter your mobile number to sign in
                    </Text>
                </View>

                <View className="space-y-4 w-full mt-8">
                    <Input
                        className="bg-white"
                        placeholder="98765 43210"
                        keyboardType="number-pad"
                        maxLength={10}
                        value={input}
                        onChangeText={setInput}
                    />
                    {error ? <Text className="text-red-500 text-sm ml-1">{error}</Text> : null}

                    <Button
                        title={isPending ? "Sending..." : "Request OTP"}
                        onPress={handlePress}
                        disabled={isPending}
                        className="mt-4"
                    />
                </View>
            </View>
        </View>
    );
}
