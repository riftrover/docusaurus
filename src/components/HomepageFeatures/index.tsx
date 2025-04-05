import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Png?: string | null;
  description: ReactNode;
  inviteURL: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "RifTicket",
    Svg: require("@site/static/img/rifticket.svg").default,
    description: <>チケット機能をサーバーに導入します！</>,
    inviteURL:
      "https://discord.com/oauth2/authorize?client_id=1188889219620413542",
  },
  {
    title: "Adblock",
    Svg: require("@site/static/img/adblock.svg").default,
    description: <>Discordサーバー招待URLを自動で削除します！</>,
    inviteURL:
      "https://discord.com/oauth2/authorize?client_id=1188889219620413542",
  },
  {
    title: "Pin",
    Png: require("@site/static/img/pin.png").default,
    description: <>特定のメッセージを常にチャンネルの下に固定します！</>,
    inviteURL:
      "https://discord.com/oauth2/authorize?client_id=1299604436577943572",
  },
];

function Feature({ title, Svg, Png, description, inviteURL }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Png && <img src={Png} className={styles.featurePng} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <a
          href={inviteURL}
          className={styles.inviteButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          BOTをサーバーに招待する
        </a>
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
