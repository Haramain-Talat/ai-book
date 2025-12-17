import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>

        <p className={styles.heroSubtitle}>
          {siteConfig.tagline}
        </p>

        <p className={styles.heroDescription}>
          Learn how to design and build intelligent systems that perceive,
          reason, and act in the physical world using modern AI techniques.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--primary button--lg',
              styles.primaryButton
            )}
            to="/ai-book/docs/chapter2">
            Start Reading
          </Link>

          <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.secondaryButton
            )}
            href="https://github.com/Haramain-Talat/ai-book"
            target="_blank">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="A hands-on guide to building intelligent physical AI systems.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
