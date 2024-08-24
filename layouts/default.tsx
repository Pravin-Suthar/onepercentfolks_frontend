import { Link } from "@nextui-org/link";

import { Head } from "./head";
import style from "./../styles/homepage/index.module.css";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      {children}
      <footer className="w-full flex items-center justify-center py-3">
        <h1>Made In India</h1>
      </footer>
    </div>
  );
}
