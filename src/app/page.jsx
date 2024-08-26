import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Dashtabs from "@/components/dashtabs/Dashtabs";
import Dashboardprj from "@/components/dashboardprj/Dashboardprj";

export default function Home() {
  return (
    <>
    <Dashboardprj />
    <Dashtabs />
    </>

  );
}

