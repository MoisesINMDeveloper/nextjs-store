import { Abril_Fatface, Poppins } from "next/font/google";

export const AbrilFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

export const PoppinsFamily = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
