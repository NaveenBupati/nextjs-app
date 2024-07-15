import Image from "next/image";
import Header from "../components/Header"  
import Heading from "@/components/Heading";
import WeeklyDiscount from "@/components/Weeklydiscount";
import MactopSellings from"@/components/MactopSellings";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
     <Heading/>
     <WeeklyDiscount/>
     <MactopSellings/>
     <Footer/>
    </main>
    
  );
}
