import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuthStore } from '../lib/store';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';

export default function Verify() {
    const router = useRouter();
    const mobile = useAuthStore((state) => state.mobile);
    const login = useAuthStore((state) => state.login);
    const [otp, setOtp] = useState("");

    const { mutate: verifyOtp, isPending } = useMutation({
        mutationFn: (code: string) => api.auth.verifyOtp(mobile!, code),
        onSuccess: () => {
            login({ name: "User", shopName: "My Shop", language: "en" });
            router.push("/onboarding");
        },
        onError: () => {
            alert("Invalid OTP");
        }
    });

    return (
        <View className="flex-1 items-center justify-center bg-background px-6">
            <View className="w-full max-w-sm">
                <View className="items-center mb-8">
                    <Text className="text-3xl font-bold text-foreground">Verify & Log In</Text>
                    <Text className="mt-2 text-sm text-gray-500">
                        Enter the 4-digit code sent to {mobile}
                    </Text>
                </View>

                <View className="space-y-6 w-full">
                    {/* Simple OTP Input using standard Input for now. 
              Ideally we'd build a 4-box input, but standard input is fine for MVP. */}
                    <Input
                        className="text-center tracking-widest text-2xl"
                        placeholder="0000"
                        keyboardType="number-pad"
                        maxLength={4}
                        value={otp}
                        onChangeText={setOtp}
                    />

                    <Button
                        title={isPending ? "Verifying..." : "Verify"}
                        onPress={() => verifyOtp(otp)}
                        disabled={isPending || otp.length < 4}
                        className="mt-4"
                    />

                    <TouchableOpacity onPress={() => alert("Resend Code")}>
                        <Text className="text-center text-blue-600 font-medium mt-4">Resend Code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
