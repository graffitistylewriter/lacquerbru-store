import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>LacquerBru - Procreate Brushes & Graffiti Assets</title>
        <meta name="description" content="Premium digital products for graffiti artists" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              LacquerBru
            </h1>
            <p className={styles.heroSubtitle}>
              Premium Procreate Brushes & Digital Graffiti Assets
            </p>
            <p className={styles.heroDescription}>
              Professional-grade tools for digital graffiti artists. Authentic spray can effects, realistic textures, and creative strokes.
            </p>
            <button className={styles.ctaButton}>
              Shop Now
            </button>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className={styles.featured}>
          <h2>Featured Products</h2>
          <div className={styles.productGrid}>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Graffiti Pro Brush Kit Vol. 1</h3>
              <p className={styles.price}>R149</p>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Urban Texture Pack</h3>
              <p className={styles.price}>R99</p>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>
            <div className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3>Lettering Fundamentals Guide</h3>
              <p className={styles.price}>R79</p>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className={styles.about}>
          <h2>About LacquerBru</h2>
          <p>
            We create premium digital products for graffiti artists and digital creatives.
            From Procreate brushes to design templates, everything you need to take your art to the next level.
          </p>
          <a href="/about" className={styles.learnMore}>Learn More</a>
        </section>
      </main>
    </>
  )
}
