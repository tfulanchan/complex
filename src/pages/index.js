import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(" hero--primary", styles.heroBanner)}>
      <div class="fixed inset-0 flex items-center justify-center">
        <div className="prose container">
          <div className="mb-3.5 grid gap-4 place-content-center">
            <img
              className="relative bg-fixed bg-center bg-cover bg-no-repeat"
              src="img/kfgqpc-logo.png"
            />
          </div>
          {/* <img className="relative mt-1 w-3/4" src='img/cropped-kfgqpc-logo2-1.png' /> */}
          <h1 className="mb-2.5 hero__title">{siteConfig.title}</h1>
          {/* hero__subtitle */}
          <h2 className="mb-1.5 ">{siteConfig.tagline}</h2>
          <p className="mb-2.5 hero__subtitle">
            {siteConfig.customFields.more}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/iimaan"
            >
              📘正信原則
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/tafseer"
            >
              📚古蘭經注
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/interactive"
            >
              💬互動問答
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
    </Layout>
  );
}
