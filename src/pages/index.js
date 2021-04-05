import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to use and deploy',
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Develop your app in R and deploy it as a standalone HTML webpage (via R Markdown document), a Shiny app or even a JavaScript library!
      </>
    ),
  },
  {
    title: 'Work with any JavaScript library',
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Step up your visualisation game leveraging the popular JavaScript visualisation libraries like p5, d3, vegalite, threejs and leaflet.
      </>
    ),
  },
  {
    title: 'Full-featured',
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Support DOM manipulation, R-like data structure, loading of tabular data, modules development, transpiler customisation and R6-like object-oriented programming.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <iframe src='html/logo.html' class="logoBanner"></iframe>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
