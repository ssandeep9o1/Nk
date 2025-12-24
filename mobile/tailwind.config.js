/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                background: "#F9FAFB",
                foreground: "#1F2937",
                gave: "#DC2626",
                got: "#16A34A",
            },
        },
    },
    plugins: [],
}
