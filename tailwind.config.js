module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'home-bg-img': "url('/background.svg')",
			}),
			colors: {
				'primary': '#3490dc',
				'secondary': '#ffed4a',
				'danger': '#e3342f',
			},
      
		},
		screens: {
			xs: '480px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			xxl: '1600px',
		},
    fontSize: {
    
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
  },
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
