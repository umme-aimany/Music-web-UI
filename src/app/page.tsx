import { Herosection } from "@/components/Herosection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white[0.02]">
    {/*//antialsed class is use to smooth fonts`*/ }
     
        <Herosection/>
    </main>
    );
}
