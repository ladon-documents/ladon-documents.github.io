import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy setup",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Ladon was designed from the ground up to be easily installed and
        used to get your company up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Ladon lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into Ladon.
      </>
    ),
  },
  {
    title: "Expand with your needs",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your installation with plugins or custom ui components. 
        Ladon can be scaled to fit your needs.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
