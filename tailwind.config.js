/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
            fontFamily: {
                sans: ["var(--font-poppins)"],
                inter: ["var(--font-inter)"],
            },
            backgroundImage: {
                "header-bg": "url(/backgrounds/header-bg.webp)",
                "card1-bg": "url(/backgrounds/card1-bg.webp)",
                "card2-bg": "url(/backgrounds/card2-bg.webp)",
                "card3-bg": "url(/backgrounds/card3-bg.webp)",
                "card4-bg": "url(/backgrounds/card4-bg.webp)",
                "long-card-bg": "url(/backgrounds/long-card-bg.webp)",
                "about-bg": "url(/backgrounds/about-bg.webp)",
                "journey-bg": "url(/backgrounds/journey-bg.webp)",
                "inspiration-bg": "url(/backgrounds/inspiration-bg.webp)",
                "message-bg": "url(/backgrounds/message-bg.webp)",
                "footprint-bg": "url(/backgrounds/footprint-bg.webp)",
                "analytics-bg": "url(/backgrounds/analytics-bg.webp)",
                "media-bg": "url(/backgrounds/media-bg.webp)",
                "subscribe-bg": "url(/backgrounds/subscribe-bg.webp)",
            },
        },
        screens: {
            laptop13: "1300px",
            laptop12: "1200px",
            mobile: "420px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
