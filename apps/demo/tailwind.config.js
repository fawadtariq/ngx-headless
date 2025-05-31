module.exports = {
    content: [
        './index.html',
        './src/**/*.{html,ts}', // Angular components
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#fff0f2',
                    '100': '#ffe2e7',
                    '200': '#ffc9d5',
                    '300': '#ff9db3',
                    '400': '#ff668c',
                    '500': '#ff3168',
                    '600': '#f11056',
                    'default': '#f11056', // Default primary color
                    '700': '#cb0547',
                    '800': '#aa0743',
                    '900': '#910a40',
                    '950': '#51001e',
                },
                'secondary': {
                    '50': '#fdf3ff',
                    '100': '#f9e6ff',
                    '200': '#f2cdff',
                    '300': '#eba5ff',
                    '400': '#e16fff',
                    '500': '#cf39fc',
                    '600': '#bf28e7',
                    'default': '#bf28e7', // Default secondary color
                    '700': '#9a11ba',
                    '800': '#801098',
                    '900': '#6c137c',
                    '950': '#470054',
                },
                'tertiary': {
                    '50': '#fff3fc',
                    '100': '#ffe6fb',
                    '200': '#ffccf6',
                    '300': '#ffa3ec',
                    '400': '#ff6dde',
                    '500': '#ff30d8',
                    'default': '#ff30d8', // Default tertiary color
                    '600': '#e316b8',
                    '700': '#bd0e95',
                    '800': '#9a0e78',
                    '900': '#7e1161',
                    '950': '#55003f',
                },



            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Default sans-serif font
                serif: ['Merriweather', 'serif'], // Default serif font
            },
        },
    },      // Enable dark mode
    plugins: [],
};