import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={`hero hero--primary ${styles.heroBanner}`}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro"
        >
          BOTの利用方法を確認する - 5min ⏱️
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="ホーム" description="RiftRoverの公式サイトです。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
