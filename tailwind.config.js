const newLocal = 'flowbite/plugin';
module.exports = {
  content: [
    "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.js",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require(newLocal)
  ]

}