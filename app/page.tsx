'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState('mint')
  const [rotated, setRotated] = useState(false)

  const flavors = [
    { id: 'mint', name: 'Original', color: '#34D399' },
    { id: 'lemon', name: 'Lemon Lime', color: '#84CC16' },
    { id: 'berry', name: 'Berry', color: '#C026D3' },
    { id: 'mango', name: 'Mango', color: '#FBBF24' },
    { id: 'cola', name: 'Cola', color: '#78350F' },
    { id: 'watermelon', name: 'Watermelon', color: '#FB7185' }
  ]

  const handleTwist = () => {
    setRotated(!rotated)
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>TwistUp</div>
          <div className={styles.navLinks}>
            <a href="#brand">Brand</a>
            <a href="#flavors">Flavors</a>
            <a href="#identity">Identity</a>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Flavor<br />
              <span className={styles.heroTitleAccent}>Comes</span><br />
              <span className={styles.heroTitleLight}>Alive</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Modern refreshment.<br />One twist away.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <div
              className={`${styles.bottle} ${rotated ? styles.bottleRotated : ''}`}
              onClick={handleTwist}
            >
              <div className={styles.bottleCap} style={{ background: flavors.find(f => f.id === activeFlavor)?.color }}></div>
              <div className={styles.bottleBody}></div>
              <div className={styles.bottleLabel}>TwistUp</div>
            </div>
            <p className={styles.interactiveHint}>Click to twist →</p>
          </div>
        </div>
      </section>

      <section id="brand" className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Brand Philosophy</h2>
          <div className={styles.philosophy}>
            <div className={styles.philosophyItem}>
              <h3>Purity</h3>
              <p>Clean ingredients, honest taste. No compromises.</p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>Innovation</h3>
              <p>The twist-cap mechanism brings freshness to every sip.</p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>Balance</h3>
              <p>Modern simplicity meets refreshing energy.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="flavors" className={styles.flavorSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Flavor Collection</h2>
          <div className={styles.flavorGrid}>
            {flavors.map(flavor => (
              <div
                key={flavor.id}
                className={`${styles.flavorCard} ${activeFlavor === flavor.id ? styles.flavorCardActive : ''}`}
                onClick={() => setActiveFlavor(flavor.id)}
                style={{ borderColor: activeFlavor === flavor.id ? flavor.color : 'transparent' }}
              >
                <div className={styles.flavorColor} style={{ background: flavor.color }}></div>
                <h3>{flavor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="identity" className={styles.identitySection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Visual Identity</h2>

          <div className={styles.identityGrid}>
            <div className={styles.identityBlock}>
              <h3>Logo System</h3>
              <div className={styles.logoShowcase}>
                <div className={styles.logoVariant}>
                  <div className={styles.logoMain}>TwistUp</div>
                  <span>Primary</span>
                </div>
                <div className={styles.logoVariant}>
                  <div className={styles.logoAlt}>TwistUp</div>
                  <span>Reversed</span>
                </div>
                <div className={styles.logoVariant}>
                  <div className={styles.logoMark}>↻</div>
                  <span>Mark</span>
                </div>
              </div>
            </div>

            <div className={styles.identityBlock}>
              <h3>Color Palette</h3>
              <div className={styles.colorGrid}>
                <div className={styles.colorSwatch}>
                  <div className={styles.colorBox} style={{ background: '#F9FAFB' }}></div>
                  <span>Off White</span>
                  <code>#F9FAFB</code>
                </div>
                <div className={styles.colorSwatch}>
                  <div className={styles.colorBox} style={{ background: '#E5E7EB' }}></div>
                  <span>Mist Gray</span>
                  <code>#E5E7EB</code>
                </div>
                <div className={styles.colorSwatch}>
                  <div className={styles.colorBox} style={{ background: '#1F2937' }}></div>
                  <span>Charcoal</span>
                  <code>#1F2937</code>
                </div>
                <div className={styles.colorSwatch}>
                  <div className={styles.colorBox} style={{ background: '#34D399' }}></div>
                  <span>Mint Aqua</span>
                  <code>#34D399</code>
                </div>
                <div className={styles.colorSwatch}>
                  <div className={styles.colorBox} style={{ background: '#FB923C' }}></div>
                  <span>Tangerine</span>
                  <code>#FB923C</code>
                </div>
              </div>
            </div>

            <div className={styles.identityBlock}>
              <h3>Typography</h3>
              <div className={styles.typeShowcase}>
                <div className={styles.typeExample}>
                  <div className={styles.typeHeading}>Aa</div>
                  <p><strong>Headings:</strong> System Sans<br />Bold, 700 weight</p>
                </div>
                <div className={styles.typeExample}>
                  <div className={styles.typeBody}>Aa</div>
                  <p><strong>Body:</strong> System Sans<br />Regular, 400 weight</p>
                </div>
              </div>
            </div>

            <div className={styles.identityBlock}>
              <h3>Design Principles</h3>
              <ul className={styles.principlesList}>
                <li>Minimal and breathable layouts</li>
                <li>Generous whitespace</li>
                <li>Subtle motion and interaction</li>
                <li>Premium yet approachable</li>
                <li>Consistent flavor color system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.motionSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Brand Motion</h2>
          <p className={styles.motionDescription}>
            The twist action is central to our brand identity. Every interaction should feel smooth, intentional, and refreshing.
          </p>
          <div className={styles.motionDemo}>
            <div className={styles.motionElement}>↻</div>
            <div className={styles.motionElement} style={{ animationDelay: '0.2s' }}>↻</div>
            <div className={styles.motionElement} style={{ animationDelay: '0.4s' }}>↻</div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>TwistUp</div>
          <p className={styles.footerTagline}>Bringing flavor to life, one twist at a time.</p>
          <div className={styles.footerLinks}>
            <span>© 2024 TwistUp Brand Identity</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
