import Grid from "@/components/grid/grid";
import Header from "@/components/navigation/header";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <Header />

      <div className="flex w-full h-full ">
        <Sidebar />
        <Grid />
      </div>
    </main>
  );
}
