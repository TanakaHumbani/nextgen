"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import styles from "../src/app/page.module.css";
import styles from "../styles/layout.module.css";


import { services } from "../data/services"; // Assuming services data is in this file


export default function Landing() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = services[count];

  return (
    <div className={styles.landingWrapper}>
      <div className={styles.textSection}>
        <h1>{current.name}</h1>
        {current.description.length > 0 && (
          <p className="styles.descriptionList">
            {current.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </p>
        )}
        <button
          className={styles.exploreButton}
          onClick={() => router.push(current.link || "/all-products")}
        >
          Explore more
        </button>
      </div>

      <div className={styles.imageGroup}>
        {current.image.map((imgSrc, index) => (
          <div key={index} className={styles.imageSlice}>
            <div
                className={styles.imageContent}
                style={{ backgroundImage: `url(${imgSrc})` }}
            />
        </div>
        ))}
      </div>
    </div>
  );
}
