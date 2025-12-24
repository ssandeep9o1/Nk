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
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/store";
import { api } from "@/lib/api";

// Zod Schema for Phone Number
const formSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(10, "Mobile number must be 10 digits") // Assuming 10 digit standard
    .regex(/^[0-9]+$/, "Must be only numbers"),
});

export default function MobileLoginPage() {
  const router = useRouter();
  const setMobile = useAuthStore((state) => state.setMobile);

  const { mutate: requestOtp, isPending } = useMutation({
    mutationFn: api.auth.requestOtp,
    onSuccess: (_, variables) => {
      setMobile(variables);
      router.push("/verify");
    },
    onError: (error) => {
      alert("Error sending OTP");
      console.error(error);
    }
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobile: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    requestOtp(values.mobile);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your mobile number to sign in
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="98765 43210"
                      className="text-lg h-14 bg-white border-zinc-200 focus-visible:ring-zinc-400"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, "");
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-medium bg-foreground text-background hover:bg-zinc-800 transition-colors"
              disabled={isPending}
            >
              Request OTP
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
