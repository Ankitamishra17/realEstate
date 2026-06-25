"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/login" ||
    pathname === "/register";

//     const hideLayout = [
//   "/login",
//   "/register",
//   "/forgot-password",
//   "/admin",
// ].includes(pathname);
    

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}