/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vysec-green': {
          DEFAULT: '#0A4D2E', // Dark royal green
          light: '#1A6D4E',
          dark: '#073D24',
        },
        'vysec-gray': {
          light: '#F5F7FA',
          DEFAULT: '#E2E8F0',
          dark: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'slide-left': 'slide-left 0.8s ease-out',
        'slide-right': 'slide-right 0.8s ease-out',
        'scale-in': 'scale-in 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wave': 'wave 12s linear infinite',
        'data-flow': 'data-flow 15s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'wave': {
          '0%': {
            transform: 'translateX(0) translateY(0)',
          },
          '25%': {
            transform: 'translateX(10px) translateY(-5px)',
          },
          '50%': {
            transform: 'translateX(0) translateY(0)',
          },
          '75%': {
            transform: 'translateX(-10px) translateY(5px)',
          },
          '100%': {
            transform: 'translateX(0) translateY(0)',
          },
        },
        'data-flow': {
          '0%': {
            'stroke-dashoffset': '1000',
          },
          '100%': {
            'stroke-dashoffset': '0',
          },
        },
        'glow': {
          '0%': {
            'box-shadow': '0 0 5px rgba(10, 77, 46, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 20px rgba(10, 77, 46, 0.8)',
          },
        },
      },
      backgroundImage: {
        'neural-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnpNNTQgMzZjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDQyYy0xLjIgMC0yLjEtLjktMi4xLTIuMVYzOC4xYzAtMS4yLjktMi4xIDIuMS0yLjFoMTJ6TTE4IDM2YzEuMiAwIDIuMS45IDIuMSAyLjF2MTkuOGMwIDEuMi0uOSAyLjEtMi4xIDIuMUg2Yy0xLjIgMC0yLjEtLjktMi4xLTIuMVYzOC4xYzAtMS4yLjktMi4xIDIuMS0yLjFoMTJ6TTM2IDBjMS4yIDAgMi4xLjkgMi4xIDIuMXYxOS44YzAgMS4yLS45IDIuMS0yLjEgMi4xSDI0Yy0xLjIgMC0yLjEtLjktMi4xLTIuMVYyLjFDMjEuOS45IDIyLjggMCAyNCAwaDEyeiIgc3Ryb2tlPSIjMEE0RDJFIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBmaWxsPSIjMEE0RDJFIiBvcGFjaXR5PSIwLjEiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBmaWxsPSIjMEE0RDJFIiBvcGFjaXR5PSIwLjEiIGN4PSIxMiIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBmaWxsPSIjMEE0RDJFIiBvcGFjaXR5PSIwLjEiIGN4PSI0OCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBmaWxsPSIjMEE0RDJFIiBvcGFjaXR5PSIwLjEiIGN4PSIzMCIgY3k9IjEyIiByPSIyIi8+PGNpcmNsZSBmaWxsPSIjMEE0RDJFIiBvcGFjaXR5PSIwLjEiIGN4PSIzMCIgY3k9IjQ4IiByPSIyIi8+PC9nPjwvc3ZnPg==')",
        'circuit-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAxMGg4MHY4MEgxMFYxMHoiIHN0cm9rZT0iIzBBNEQyRSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjxwYXRoIGQ9Ik0zMCAxMHYyMGgyMFYxME0zMCA3MHYyMGgyMFY3ME0xMCAzMGgyMHYyMEgxME03MCAzMGgyMHYyMEg3MCIgc3Ryb2tlPSIjMEE0RDJFIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTAiIHN0cm9rZT0iIzBBNEQyRSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMiIGZpbGw9IiMwQTREMkUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iMzAiIHI9IjMiIGZpbGw9IiMwQTREMkUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNzAiIHI9IjMiIGZpbGw9IiMwQTREMkUiIG9wYWNpdHk9IjAuMSIvPjxjaXJjbGUgY3g9IjcwIiBjeT0iNzAiIHI9IjMiIGZpbGw9IiMwQTREMkUiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')",
        'digital-grid': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMFYweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgwVjB6TTM5IDBoMXY0MEgzOVYwek0wIDBoNDB2MUgwVjB6TTAgMzloNDB2MUgwVjM5eiIgZmlsbD0iIzBBNEQyRSIgb3BhY2l0eT0iMC4xIi8+PC9nPjwvc3ZnPg==')",
      },
      boxShadow: {
        'glow-green': '0 0 15px rgba(10, 77, 46, 0.5)',
      },
    },
  },
  plugins: [],
};