import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
//
function HomepageHeader() {
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src='img/cropped-kfgqpc-logo2-1.png' />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
        <p className="hero__subtitle">{siteConfig.customFields.more}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/iimaan">
            📘正信原則
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/tafseer">
            📚古蘭經注
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Xiaohai's Mind Palace. A place for organizing notes across multiple domains. A place for writing blogs. A place for showcasing projects."
    >
      <HomepageHeader />
    </Layout>
  );
}
