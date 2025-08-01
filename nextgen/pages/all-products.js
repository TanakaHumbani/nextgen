"use client";
import Image from 'next/image';
import { products } from '../data/products';
import styles from '../styles/all-priducts.module.css';

import { useState } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function AllProducts() {
  const [searchTerm, setSearchTerm] = useState('');

  // Simple case-insensitive filter by product name or category
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <div className={styles.outerWrapper}>
            <NavBar />
            <div className={styles.pageWrapper}>
                
                <h1>All Products</h1>
                    <h2>Explore our wide range of products across various categories.</h2>
                
                    {/* Search input for filtering products */}
                <div className={styles.searchWrapper}>
                    <h2>Search here</h2> <input
                    type="search"
                    placeholder="Search by product or category"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                </div>

                <div className={styles.productGrid}>
                    {filteredProducts.map((product) => (
                    <div key={product.id} className={styles.productCard}>
                        {/* Using next/image for optimized image loading */}
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
                        {/* Optionally, add WhatsApp contact button linking with product info */}
                    </div>
                    ))}
                </div> 
            </div>
            <Footer />
        </div>
    
    
    </>
    
  );
}