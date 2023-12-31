/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      sans:['Poppins', 'sans-serif'],
      inter:['Inter', 'sans-serif'],
      satisfy:['Satisfy','cursive'],
    },
    extend: {
      backgroundImage: {
        'header-bg':"url(/header-bg.png)",
        'card1-bg':"url(/card1-bg.png)",
        'card2-bg':"url(/card2-bg.png)",
        'card3-bg':"url(/card3-bg.png)",
        'card4-bg':"url(/card4-bg.png)",
        'long-card-bg':"url(/long-card-bg.png)",
        'about-bg':"url(/about-bg.png)",
        'journey-bg':"url(/journey-bg.png)",
        'inspiration-bg':"url(/inspiration-bg.png)",
        'message-bg':"url(/message-bg.png)",
        'footprint-bg':"url(/footprint-bg.png)",
        'project-afia-bg':"url(/project-afia.png)",
        'project-farmer-bg':"url(/project-farmer.png)",
        'project-scholarship-bg':"url(/project-scholarship.png)",
        'project-environment-bg':"url(/project-environment.png)",
        'analytics-bg':"url(/analytics-bg.png)",
        'media-bg':"url(/media-bg.png)",
        'subscribe-bg':"url(/subscribe-bg.png)",
      },
    },
    screens:{
      'laptop13':'1300px',
      'laptop12':'1200px',
      'mobile':'420px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',
    },
  },
  plugins: [],
}
