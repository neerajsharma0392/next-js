import { Molle, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const molle = Molle({
  subsets: ["latin"],
  weight: "400",
  variable: "--molle",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  variable: "--roboto",
});

export const callheart = localFont({
  src: "./Callheart.ttf",
  variable: "--callheart",
});
export const kalam = localFont({
  src: "./KalamRegular.woff",
  variable: "--kalam",
});
