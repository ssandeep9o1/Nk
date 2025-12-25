import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuthStore } from '../lib/store';
import { useMutation } from '@tanstack/react-query';
import { api } from '../lib/api';
import { z } from 'zod';
import { Store, User, ArrowRight, Loader2 } from 'lucide-react-native';

// Validation Schemas
const mobileSchema = z.string().min(10, "Mobile number must be 10 digits").max(10).regex(/^[0-9]+$/, "Only numbers allowed");
const registerSchema = z.object({
    shopName: z.string().min(3, "Shop name is too short"),
    ownerName: z.string().min(3, "Owner name is too short"),
    mobile: z.string().min(10).max(10).regex(/^[0-9]+$/),
});

export default function MobileLogin() {
    const router = useRouter();
    const setMobile = useAuthStore((state) => state.setMobile);
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

    // Login State
    const [loginMobile, setLoginMobile] = useState("");
    const [loginError, setLoginError] = useState("");

    // Register State
    const [formData, setFormData] = useState({
        shopName: "",
        ownerName: "",
        mobile: "",
        address: ""
    });
    const [registerError, setRegisterError] = useState("");

    // Mutations
    const { mutate: requestOtp, isPending: isOtpPending } = useMutation({
        mutationFn: api.auth.requestOtp,
        onSuccess: (_, variables) => {
            setMobile(variables);
            router.push("/verify");
        },
        onError: () => setLoginError("Failed to send OTP")
    });

    const { mutate: register, isPending: isRegisterPending } = useMutation({
        mutationFn: async (data: any) => {
            // Mock registration API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            return data;
        },
        onSuccess: (_, variables) => {
            setMobile(variables.mobile);
            router.push("/verify");
        },
        onError: () => setRegisterError("Registration failed")
    });

    const handleLogin = () => {
        try {
            mobileSchema.parse(loginMobile);
            setLoginError("");
            requestOtp(loginMobile);
        } catch (e: any) {
            setLoginError(e.issues?.[0]?.message || "Invalid mobile number");
        }
    };

    const handleRegister = () => {
        try {
            registerSchema.parse(formData);
            setRegisterError("");
            register(formData);
        } catch (e: any) {
            setRegisterError(e.issues?.[0]?.message || "Invalid details");
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1 bg-white"
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                {/* Hero / Header */}
                <View className="items-center pt-16 pb-8 bg-gray-50">
                    {/* Placeholder for Logo - You can replace specific icon or use Image */}
                    <View className="w-16 h-16 bg-red-100 rounded-2xl items-center justify-center mb-4">
                        <Store color="#DC2626" size={32} />
                    </View>
                    <Text className="text-2xl font-bold text-gray-900">Naa Khata</Text>
                    <Text className="text-gray-500 mt-1">Digital India ka Digital Khata</Text>
                </View>

                {/* Tab Switcher */}
                <View className="flex-row mx-6 mt-6 bg-gray-100 p-1 rounded-xl">
                    <TouchableOpacity
                        onPress={() => setActiveTab('login')}
                        className={`flex-1 py-3 rounded-lg items-center ${activeTab === 'login' ? 'bg-white shadow-sm' : ''}`}
                    >
                        <Text className={`font-bold ${activeTab === 'login' ? 'text-gray-900' : 'text-gray-500'}`}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setActiveTab('register')}
                        className={`flex-1 py-3 rounded-lg items-center ${activeTab === 'register' ? 'bg-white shadow-sm' : ''}`}
                    >
                        <Text className={`font-bold ${activeTab === 'register' ? 'text-gray-900' : 'text-gray-500'}`}>Create Account</Text>
                    </TouchableOpacity>
                </View>

                <View className="p-6 space-y-6">
                    {activeTab === 'login' ? (
                        /* Login Form */
                        <View className="space-y-4">
                            <View>
                                <Text className="text-sm font-medium text-gray-700 mb-1.5 ml-1">Mobile Number</Text>
                                <Input
                                    placeholder="Enter 10-digit number"
                                    keyboardType="number-pad"
                                    maxLength={10}
                                    value={loginMobile}
                                    onChangeText={setLoginMobile}
                                    className="bg-gray-50 border-gray-200"
                                />
                                {loginError ? <Text className="text-red-500 text-xs mt-1 ml-1">{loginError}</Text> : null}
                            </View>

                            <TouchableOpacity
                                onPress={handleLogin}
                                disabled={isOtpPending}
                                className="bg-[#16A34A] py-4 rounded-xl items-center flex-row justify-center gap-2 active:opacity-90 mt-4"
                            >
                                {isOtpPending ? (
                                    <Loader2 color="white" size={20} className="animate-spin" />
                                ) : (
                                    <>
                                        <Text className="text-white font-bold text-lg">Send OTP</Text>
                                        <ArrowRight color="white" size={20} />
                                    </>
                                )}
                            </TouchableOpacity>
                        </View>
                    ) : (
                        /* Register Form */
                        <View className="space-y-4">
                            <View>
                                <Text className="text-sm font-medium text-gray-700 mb-1.5 ml-1">Shop Name</Text>
                                <Input
                                    placeholder="e.g. Gupta General Store"
                                    value={formData.shopName}
                                    onChangeText={(t) => setFormData({ ...formData, shopName: t })}
                                    className="bg-gray-50 border-gray-200"
                                />
                            </View>

                            <View>
                                <Text className="text-sm font-medium text-gray-700 mb-1.5 ml-1">Owner Name</Text>
                                <Input
                                    placeholder="Your Full Name"
                                    value={formData.ownerName}
                                    onChangeText={(t) => setFormData({ ...formData, ownerName: t })}
                                    className="bg-gray-50 border-gray-200"
                                />
                            </View>

                            <View>
                                <Text className="text-sm font-medium text-gray-700 mb-1.5 ml-1">Mobile Number</Text>
                                <Input
                                    placeholder="98765 43210"
                                    keyboardType="number-pad"
                                    maxLength={10}
                                    value={formData.mobile}
                                    onChangeText={(t) => setFormData({ ...formData, mobile: t })}
                                    className="bg-gray-50 border-gray-200"
                                />
                            </View>

                            {registerError ? <Text className="text-red-500 text-xs ml-1">{registerError}</Text> : null}

                            <TouchableOpacity
                                onPress={handleRegister}
                                disabled={isRegisterPending}
                                className="bg-[#DC2626] py-4 rounded-xl items-center flex-row justify-center gap-2 active:opacity-90 mt-4"
                            >
                                {isRegisterPending ? (
                                    <Loader2 color="white" size={20} className="animate-spin" />
                                ) : (
                                    <Text className="text-white font-bold text-lg">Create Account</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}
