"use client";
import Navbar from "./Navbar";
import Authprovider from "../Auth/Authprovider";

export default function ClientLayout({ children }) {
  return (
    <Authprovider>
      <Navbar />
      {children}
    </Authprovider>
  );
}













