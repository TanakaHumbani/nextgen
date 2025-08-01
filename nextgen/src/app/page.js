'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Landing from "../../components/landing";
import NavBar from "../../components/navbar";

export default function Home() {

  return (
    <>
      <NavBar/>
      <Landing/>
    </>
    
  );
}
