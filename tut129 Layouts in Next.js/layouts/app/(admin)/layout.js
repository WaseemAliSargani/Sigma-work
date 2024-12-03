import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: " Admin: Facebook -  connect with friends and the world around you.",
    description: "Admin page: acebook is a social utilityy that connect people with friends and other who work, study and live around them. People use Facebook  to keep up with friends",
};

export default function AdminLayout({ children }) {
    return (
        <>
        <span>Admin Navbar: This is another Layout in Admin folder</span>
            {children}
        </>

    );
}
