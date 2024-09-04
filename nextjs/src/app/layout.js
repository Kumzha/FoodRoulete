import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { SearchProvider } from "@/context/SearchContext";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className} >
        <SearchProvider>
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
