export interface ApiError {
    message: string;
}

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
    auth: {
        requestOtp: async (_mobile: string) => {
            await delay(1000);
            return { success: true, message: "OTP sent successfully" };
        },
        verifyOtp: async (mobile: string, otp: string) => {
            await delay(1000);
            if (otp === "1234") { // Mock hardcoded OTP
                return { success: true, token: "mock-jwt-token" };
            }
            throw new Error("Invalid OTP");
        },
        updateProfile: async (data: { shopName: string; userName: string; language: string }) => {
            await delay(1000);
            return { success: true, user: data };
        },
    },
};
