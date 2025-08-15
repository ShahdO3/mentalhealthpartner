import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

// const heading = Geist({
//   variable: "--font-heading",
//   subsets: ["latin"],
//   display: "swap",
// });
const heading = localFont({
  src: 'fonts/Poppins-Medium.ttf',
  variable:'--font-poppins-medium',
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: heading,
  label: label,
  code: code,
};

export { fonts };