// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
        './node_modules/flowbite/**/*.js' // Add this line for Flowbite
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin') // Add the Flowbite plugin
    ],

     darkMode: 'class', 
};
