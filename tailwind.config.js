/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inputBackgroundWhite: "var(--input-bg)",
        colorWhite: "var(--text-white)",
        colorBlack: "var(--text-black)",
        colorGray: "var(--color-gray)",
        qrcodeHeight: "var(--qrcode-height)",
        qrcodeWidth: "var(--qrcode-width)",
        imageAccountHeight: "var(--image-account-height)",
        imageAccountWidth: "var(--image-account-width)",
        imageAccountPadding: "var(--image-account-padding)",
      },
    },
  },
  plugins: [],
};
