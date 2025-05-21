module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',       // React components
        './docs/**/*.{md,mdx}',             // MDX docs
        './blog/**/*.{md,mdx}',             // Blog posts (if used)
        './docusaurus.config.js',           // Optional if you inline Tailwind classes here
        './src/css/_tw-apply.css',         // Optional if you use @apply
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',                   // Enable dark mode
    plugins: [],
};