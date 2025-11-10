import Header from "@/components/layout/header";
import MainLayout from "@/components/layout/main";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

export default function Home() {
  return (
    <>
      <Header />
      <MainLayout>
        <Section1 />
        <Section2 />
        <Section3 />
      </MainLayout>
    </>
  );
}
