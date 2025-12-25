import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Input } from '../components/ui/input';
import { useAuthStore } from '../lib/store';
import { ArrowRight, Loader2, ArrowLeft } from 'lucide-react-native';

export default function VerifyScreen() {
    const router = useRouter();
    const mobile = useAuthStore((state) => state.mobile);
    const login = useAuthStore((state) => state.login);
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleVerify = async () => {
        if (otp.length !== 4) {
            setError("Enter valid 4-digit OTP");
            return;
        }

        setIsLoading(true);
        setError("");

        // Mock verification
        setTimeout(() => {
            if (otp === "1234") {
                login({
                    id: "1",
                    name: "Rahul",
                    mobile: mobile,
                    shopName: "Rahul General Store"
                });
                router.replace("/dashboard");
            } else {
                setError("Invalid OTP. Try 1234");
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-white px-6 pt-12"
        >
            <TouchableOpacity onPress={() => router.back()} className="mb-8 w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                <ArrowLeft color="#374151" size={20} />
            </TouchableOpacity>

            <View>
                <Text className="text-3xl font-bold text-gray-900">Verify OTP</Text>
                <Text className="text-gray-500 mt-2">
                    We sent a code to <Text className="font-bold text-gray-900">+91 {mobile}</Text>
                </Text>
            </View>

            <View className="mt-10 space-y-6">
                <Input
                    placeholder="0 0 0 0"
                    keyboardType="number-pad"
                    maxLength={4}
                    value={otp}
                    onChangeText={setOtp}
                    className="text-center text-3xl tracking-[10px] font-bold h-16 border-b-2 border-gray-200 bg-transparent rounded-none border-t-0 border-x-0 focus:border-black"
                />
                {error ? <Text className="text-red-500 text-center">{error}</Text> : null}

                <TouchableOpacity
                    onPress={handleVerify}
                    disabled={isLoading}
                    className="bg-black py-4 rounded-xl items-center flex-row justify-center gap-2 mt-4"
                >
                    {isLoading ? (
                        <Loader2 color="white" size={20} className="animate-spin" />
                    ) : (
                        <>
                            <Text className="text-white font-bold text-lg">Verify & Login</Text>
                            <ArrowRight color="white" size={20} />
                        </>
                    )}
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text className="text-center text-gray-500 font-medium mt-4">Resend Code in 30s</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
