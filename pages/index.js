import Head from "next/head";
import ApplicationBar from "../components/applicationBar/AppBar";
import SideBar from "../components/applicationBar/SideBar";
import Section1 from "../components/section1/Section1.jsx";
import LRSvg from "../components/section1/LRSvg";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import ScrollTrigger from "../components/trigger/ScrollTrigger";

export default function Home() {
  return (
    <>
      <div id="main">
        <Head>
          <title>Lazy Resume</title>
          <meta name="description" content="The Lazy Resume Maker" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ScrollTrigger />
        <ApplicationBar />
        <SideBar />
        <Section1 />
        <LRSvg />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}
