import { getMetaData } from "@/utils/metadata";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

export const revalidate = 0;
const inter = Inter({
    subsets: ["latin"],
    weight: ["700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "900"],
    variable: "--font-poppins",
    display: "swap",
});



export async function generateMetadata() {
    const metadata = await getMetaData('');
    return {
        title: metadata.meta_title,
        description: metadata.meta_description,
        alternates: {
            canonical: metadata.canonical,
        },
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className="m-0">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
