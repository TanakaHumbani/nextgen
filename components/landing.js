"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import styles from "../styles/layout.module.css";
import { services } from "../data/services";

export default function Landing() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % services.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const current = services[count];

  // Animation variants for slide in/out
  const flyVariant = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <>
      <Head>
        <title>NextGen Construction Solutions</title>
        <meta name="description" content="Your trusted partner in quality construction materials and services." />
        {/* Add more meta tags as needed */}
      </Head>
      <div className={styles.landingWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current.name}`}
            initial={flyVariant.initial}
            animate={flyVariant.animate}
            exit={flyVariant.exit}
            transition={flyVariant.transition}
            className={styles.textSection}
          >
            <h1>{current.name}</h1>
            {current.description.length > 0 && (
              <ul className={styles.descriptionList}>
                {current.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <button
              className={styles.exploreButton}
              onClick={() => router.push(current.link || "/all-products")}
            >
              Explore more
            </button>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${current.name}`}
            initial={flyVariant.initial}
            animate={flyVariant.animate}
            exit={flyVariant.exit}
            transition={flyVariant.transition}
            className={styles.imageGroup}
          >
            {current.image.map((imgSrc, index) => (
              <div key={index} className={styles.imageSlice}>
                <div
                  className={styles.imageContent}
                  style={{ backgroundImage: `url(${imgSrc})` }}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
