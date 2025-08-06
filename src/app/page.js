'use client';
// import 'normalize-css';
import Landing from "../../components/landing";
import NavBar from "../../components/navbar";
import Head from "next/head";

export default function Home() {

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon-for-public/web-app-manifest-192x192.png"></link>
    </Head>
      <NavBar/>
      <Landing/>
    </>
    
  );
}
