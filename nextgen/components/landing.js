import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import styles from "../src/app/page.module.css";
import styles from "../styles/layout.module.css";


const services = [
  { name: "Construction materials", 
    description: "" 
    , image: ["/images/red-brick.jpg","/images/aggregates.jpg",]
  },
  {
    name: "Electrical Products",
    description: "",
    image: ["/images/red-brick.jpg","/images/aggregates.jpg"]
  },
  { name: "Lubricants", 
    description: "" ,
    image: ["/images/red-brick.jpg","/images/aggregates.jpg"],
  },
  {
    name: "Furnishings",
    description: "",
    image: ["/images/red-brick.jpg","/images/aggregates.jpg"]
  },
  {
    name: "Tools and Hardware",
    description: "",
    image: ["/images/red-brick.jpg","/images/aggregates.jpg"]
  },
  {
    name: "Solar Products",
    description: "",
    image: ["/images/aggregates.jpg","/images/aggregates.jpg"]
  }
]


export default function Landing() {
  const [count, setCount] = useState(0);

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
        <p>{current.description}</p>
        <button
          className={styles.exploreButton}
          onClick={() => router.push(current.link || "/")}
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
