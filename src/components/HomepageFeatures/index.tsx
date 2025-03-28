import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Png?: string | null;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "RifTicket",
    Svg: require("@site/static/img/rifticket.svg").default,
    description: (
      <>
        チケット機能をサーバーに導入します！
        <br />
        <a href="/docusaurus/docs/RifTicket" rel="noopener noreferrer">
          もっと詳しく
        </a>
      </>
    ),
  },
  {
    title: "Adblock",
    Png: require("@site/static/img/adblock.png").default,
    description: (
      <>
        Discordサーバー招待URLを自動で削除します！ <br />
        <a href="/docusaurus/docs/AdBlock" rel="noopener noreferrer">
          もっと詳しく
        </a>
      </>
    ),
  },
  {
    title: "Pin",
    Png: require("@site/static/img/pin.png").default,
    description: (
      <>
        特定のメッセージを常にチャンネルの下に固定します！
        <br />
        <a href="/docusaurus/docs/Pin" rel="noopener noreferrer">
          もっと詳しく
        </a>
      </>
    ),
  },
];

function Feature({ title, Svg, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Png && <img src={Png} className={styles.featurePng} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
