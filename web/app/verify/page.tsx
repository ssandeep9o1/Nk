"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/store";
import { api } from "@/lib/api";

const formSchema = z.object({
    otp: z.string().min(4, "Must be 4 digits").max(4),
});

export default function VerifyPage() {
    const router = useRouter();
    const mobile = useAuthStore((state) => state.mobile);
    const login = useAuthStore((state) => state.login);

    const { mutate: verifyOtp, isPending } = useMutation({
        mutationFn: (otp: string) => api.auth.verifyOtp(mobile!, otp),
        onSuccess: () => {
            // Mock user login for now
            login({ name: "User", shopName: "My Shop", language: "en" });
            router.push('/onboarding');
        },
        onError: (error) => {
            alert("Invalid OTP");
            console.error(error);
        }
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (!mobile) {
            alert("Mobile number missing");
            router.push("/");
            return;
        }
        verifyOtp(values.otp);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
            <div className="w-full max-w-sm space-y-8 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Verify & Log In</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the 4-digit code sent to your mobile
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col items-center">
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <InputOTP maxLength={4} {...field}>
                                            <InputOTPGroup className="gap-2">
                                                <InputOTPSlot index={0} className="w-14 h-14 text-2xl border-zinc-200" />
                                                <InputOTPSlot index={1} className="w-14 h-14 text-2xl border-zinc-200" />
                                                <InputOTPSlot index={2} className="w-14 h-14 text-2xl border-zinc-200" />
                                                <InputOTPSlot index={3} className="w-14 h-14 text-2xl border-zinc-200" />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-col gap-4 w-full">
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-medium"
                                disabled={isPending}
                            >
                                Verify
                            </Button>
                            <button
                                type="button"
                                className="text-sm font-medium text-blue-600 hover:text-blue-500"
                                onClick={() => alert("Resend Code Clicked")}
                            >
                                Resend Code
                            </button>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    );
}
