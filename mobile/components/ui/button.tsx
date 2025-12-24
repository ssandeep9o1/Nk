import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    className?: string;
    textClassName?: string;
}

export function Button({ title, className, textClassName, children, ...props }: ButtonProps) {
    return (
        <TouchableOpacity
            className={cn(
                "h-12 items-center justify-center rounded-lg bg-foreground active:opacity-80",
                props.disabled && "opacity-50",
                className
            )}
            {...props}
        >
            {title ? (
                <Text className={cn("text-lg font-medium text-background", textClassName)}>
                    {title}
                </Text>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}
