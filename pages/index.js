import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Education from "../components/Education/Education";
import Courses from "../components/Courses/Courses";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Vilius Portfolio</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/front-end-relicon.jpg" />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Education />
      <Courses />
      <Contact />
    </Layout>
  );
}
