import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'background-col': '#151515',
                'foreground-col': '#0B0B0B',
                'primary-col': '#FF0000',
                'secondary-col': '#AF0404',
                'tertiary-col': '#252525',
                'font-col': '#E4E4E4',

                'text-input-col': '#222222',
            },
        },
    },

    plugins: [forms],
};
