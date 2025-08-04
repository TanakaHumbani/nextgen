"use client";
import Image from 'next/image';
import { products } from '../data/products';
import styles from '../styles/all-products.module.css';

import { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function AllProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories for filter
  const categories = ['All', ...new Set(products.map((p) => p.category))];

  // Filter logic
  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      (p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className={styles.outerWrapper}>
        <NavBar />
        <div className={styles.pageWrapper}>
          <h1>All Products</h1>
          <h2>Explore our wide range of products across various categories.</h2>
          <div className={styles.mainContent}>
            {/* Sidebar Filter */}
            <aside className={styles.sidebar}>
              <div className={styles.filterBlock}>
                <h2>Filter Products</h2>
                <div>
                  <label htmlFor="category">Category:</label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={styles.selectInput}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.searchWrapper}>
                  <label htmlFor="search">Search:</label>
                  <input
                    id="search"
                    type="search"
                    placeholder="Search by product or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                </div>
              </div>
            </aside>
            {/* Products Grid */}
            <div className={styles.productGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={300}
                      objectFit="fit"
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <p className={styles.category}>{product.category}</p>
                  <p>{product.description}</p>
                  <a
                    href={`https://wa.me/yourphonenumber?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        style={{ marginRight: "8px" }}
                      >
                        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.53 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.61-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.28C7.26 18.61 7 17.32 7 16c0-5.06 4.13-9.18 9.18-9.18S25.36 10.94 25.36 16 21.23 25.18 16 25.18zm5.03-6.47c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.26-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.54.13-.13.29-.34.43-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.22.69.27 1.23.43 1.65.55.69.22 1.32.19 1.81.12.55-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"/>
                      </svg>
                      Contact on WhatsApp
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}