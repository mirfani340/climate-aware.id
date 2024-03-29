/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      ubuntu: ["Ubuntu"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },borderWidth: {
        "0px": "0px",
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
      },
      colors: {
        primary: "#552508",
        "orange-1": "#fb8c04",
        "orange-2": "#fcbc34",
        "brown-3": "#91430b",
        "green-1": "#8cbb8c", 
        "green-2": "#9cb49c",
        "grey-1": "#f4f4f3",
        "black": "#070808",
        "white-1": "#fbfcfb",

        secondary: "#e36b73",

        white: "#FFFFFF",
        backdrop: "rgb(13,12,12,0.6)",
        "backdrop-light": "rgb(70,65,65,0.6)",
        background: "#f5f6f7",
        headline: "#094067",
        paragraph: "#5F6C7B",
        danger: "#FF0000",
        success: "#3DA9FC",
        "danger-fade": "#F8D7DA",
      },
      borderRadius: {
        "10px": "10px",
      },
      borderColor: {
        secondary: "#90B4CE",
      },
      content: {
        empty: "''",
      },
      fontFamily: {
        poppins: ["Poppins"],
        sen: ["Sen"],
      },
      fontSize: {
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "20px": "20px",
        "24px": "24px",
        "30px": "30px",
        "36px": "36px",
      },
      flexBasis: {
        "50%": "50%",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "60%": "60%",
        "3/4": "75%",
        full: "100%",
        360: "360px",
        600: "600px",
        800: "800px",
        "600px": "600px",
        "800px": "800px",
        "180px": "180px",
      },
      maxWidth: {
        "300px": "300px",
        "600px": "600px",
        "800px": "800px",
        "180px": "180px",
      },
      minHeight: {
        0: "0",
        "16px": "16px",
        "20px": "20px",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      spacing: {
        "1px": "1px",
        "2px": "2px",
        "3px": "3px",
        "4px": "4px",
        "5px": "5px",
        "6px": "6px",
        "7px": "7px",
        "8px": "8px",
        "9px": "9px",
        "10px": "10px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "18px": "18px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "40px": "40px",
        "70px": "70px",
        "77px": "77px",
        "80px": "80px",
        "90px": "90px",
        "96px": "96px",
        "100px": "100px",
        "150px": "150px",
        "170px": "170px",
        "200px": "200px",
        "210px": "210px",
        "230px": "230px",
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "400px": "400px",
        "420px": "420px",
        "50%": "50%",
        "100%": "100%",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        1000: 1000,
      },
    },
  },
  plugins: [require("daisyui")],
}
