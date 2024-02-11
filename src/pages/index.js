import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
//

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src='img/kfgqpc-logo.png' />
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
      // <a href="https://mapmyvisitors.com/web/1bvtj" title="Visit tracker">
      //   <img src="https://mapmyvisitors.com/map.png?cl=ffffff&w=a&t=n&d=hAXPF74EKhb3TbYWaLc9YVBKaaWfsMZLOg5kHX_RKsA" />
      // </a>
      <script type="text/javascript" id="mmvst_globe" src="//mapmyvisitors.com/globe.js?d=6QLOGp5CjxJNohPgjukzWM0iBjjyNXAKldbbHoHJmSo"></script>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="古蘭經印刷局中文出版物 官方授權電子版"
    >
      <HomepageHeader />
    </Layout>
  );
}
