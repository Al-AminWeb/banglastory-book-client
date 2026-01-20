import Image from "next/image";
import Hero from "@/components/home/Hero";
import Footer from "@/components/home/Footer";
import BooksSection from "@/components/home/BooksSection";

export default function Home() {
    return (
        <div>
            <Hero/>
            <BooksSection/>
            <Footer/>
        </div>
    );
}
