import { Poppins } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/context/SearchContext";

const font = Poppins({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "FoodRoulette",
  description: "Version 1.0 of FoodRoulette app",
};

export default function RootLayout({ children }) {
  return (  
    <html lang="en" className="overscroll-contain">
      <head>
        <script async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjJX6jp9VYLMLc-9_HkYTJ3RkMC788oTQ&libraries=places&callback=initMap">
        </script> 
      </head>
      <body className={font.className} >
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
