"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/store";
import { api } from "@/lib/api";

const formSchema = z.object({
    shopName: z.string().min(2, "Shop Name is required"),
    userName: z.string().min(2, "Your Name is required"),
    language: z.string().min(1, "Please select a language"),
});

export default function OnboardingPage() {
    // const router = useRouter();
    const login = useAuthStore((state) => state.login);

    const { mutate: updateProfile, isPending } = useMutation({
        mutationFn: api.auth.updateProfile,
        onSuccess: (_, variables) => {
            login({ ...variables, name: variables.userName });
            alert("Onboarding Completed for: " + variables.shopName);
            // router.push('/dashboard'); 
        },
        onError: (error) => {
            alert("Error updating profile");
            console.error(error);
        }
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shopName: "",
            userName: "",
            language: "en",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        updateProfile(values);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Setup Your Shop</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Just a few details to get started
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="shopName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Shop Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="My Cool Shop" className="h-12" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="userName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" className="h-12" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="language"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Language</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select Language" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="hi">Hindi (हिंदी)</SelectItem>
                                            <SelectItem value="gu">Gujarati (ગુજરાતી)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-medium mt-6"
                            disabled={isPending}
                        >
                            Get Started
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
