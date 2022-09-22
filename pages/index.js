import Head from "next/head";
import ApplicationBar from "../components/applicationBar/AppBar";
import SideBar from "../components/applicationBar/SideBar";
import Section1 from "../components/section1/Section1.jsx";
import LRSvg from "../components/section1/LRSvg";
import Section2 from "../components/section2/Section2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lazy Resume</title>
        <meta name="description" content="The Lazy Resume Maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApplicationBar />
      <SideBar />
      <Section1 />
      <LRSvg />
      <Section2 />
    </>
  );
}
