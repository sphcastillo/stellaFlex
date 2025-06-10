module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
		gradientShift: {
			'0%': { 'background-position': '0% 50%' },
			'50%': { 'background-position': '100% 50%' },
			'100%': { 'background-position': '0% 50%' },
		  },
		  morphFloat: {
			'0%, 100%': {
			  transform: 'translateY(0px) rotate(0deg) scale(1)',
			  'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
			},
			'25%': {
			  transform: 'translateY(-20px) rotate(90deg) scale(1.1)',
			  'border-radius': '58% 42% 75% 25% / 76% 46% 54% 24%',
			},
			'50%': {
			  transform: 'translateY(-40px) rotate(180deg) scale(0.9)',
			  'border-radius': '50% 50% 33% 67% / 55% 27% 73% 45%',
			},
			'75%': {
			  transform: 'translateY(-20px) rotate(270deg) scale(1.05)',
			  'border-radius': '33% 67% 58% 42% / 63% 68% 32% 37%',
			},
		  },
		  orbPulse: {
			'0%, 100%': {
			  transform: 'scale(1)',
			  opacity: '0.4',
			},
			'50%': {
			  transform: 'scale(1.2)',
			  opacity: '0.6',
			},
		  },
		  particleFloat: {
			'0%': {
			  transform: 'translateY(100vh) translateX(0px)',
			  opacity: '0',
			},
			'10%': {
			  opacity: '0.8',
			},
			'90%': {
			  opacity: '0.8',
			},
			'100%': {
			  transform: 'translateY(-100px) translateX(50px)',
			  opacity: '0',
			},
		  },
		  enhancedSparkle: {
			'0%, 100%': {
			  opacity: '0',
			  transform: 'scale(0) rotate(0deg)',
			},
			'50%': {
			  opacity: '1',
			  transform: 'scale(1.5) rotate(180deg)',
			},
		  },
		  meshMove: {
			'0%, 100%': { opacity: '0.3' },
			'50%': { opacity: '0.5' },
		  },
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'morph-float': 'morphFloat 12s infinite ease-in-out',
        'orb-pulse': 'orbPulse 8s infinite ease-in-out',
        'particle-float': 'particleFloat 25s infinite linear',
        'enhanced-sparkle': 'enhancedSparkle 3s infinite ease-in-out',
        'mesh-move': 'meshMove 20s ease infinite',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
	  backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  backdropBlur: {
        'xs': '2px',
      },
      
      // Add custom z-index values
      zIndex: {
        '-10': '-10',
        '9999': '9999',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
