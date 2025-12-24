import { TextInput, TextInputProps, View } from 'react-native';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends TextInputProps {
    className?: string;
}

export function Input({ className, ...props }: InputProps) {
    return (
        <TextInput
            className={cn(
                "h-14 rounded-lg border border-gray-200 bg-white px-4 text-lg text-foreground focus:border-gray-400",
                className
            )}
            placeholderTextColor="#9CA3AF"
            {...props}
        />
    );
}
