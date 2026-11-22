import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
	title: string;
	icon: string;
	description: string;
	clientId: string;
	guide: string;
};

const FeatureList: FeatureItem[] = [
	{
		title: 'RifTicket',
		icon: 'img/rifticket.svg',
		description: 'チケット機能をサーバーに導入します！',
		clientId: '1188889219620413542',
		guide: '/docs/RifTicket/',
	},
	{
		title: 'AdsHelper',
		icon: 'img/adshelper.svg',
		description: 'Discordサーバー招待URLを自動で削除します！',
		clientId: '1203392567115382897',
		guide: '/docs/AdsHelper/',
	},
	{
		title: 'Pin',
		icon: 'img/pin.svg',
		description: 'メッセージを固定します！',
		clientId: '1299604436577943572',
		guide: '/docs/Pin/',
	},
];

function Feature({ title, icon, description, clientId, guide }: FeatureItem) {
	const iconUrl = useBaseUrl(icon);

	return (
		<li className={styles.feature}>
			<div className={styles.featureHeader}>
				<img src={iconUrl} className={styles.featureIcon} alt='' width={72} height={72} />
				<Heading as='h2' className={styles.featureTitle}>{title}</Heading>
			</div>
			<p className={styles.description}>{description}</p>
			<div className={styles.actions}>
				<Link
					href={`https://discord.com/oauth2/authorize?client_id=${clientId}`}
					className='button button--primary'
					aria-label={`${title}のBOTをサーバーに招待する（新しいタブで開きます）`}
					target='_blank'
					rel='noopener noreferrer'>
					BOTを招待
				</Link>
				<Link to={guide} className='button button--outline button--secondary' aria-label={`${title}のガイドを見る`}>
					ガイドを見る
				</Link>
			</div>
		</li>
	);
}

export default function HomepageFeatures(): ReactNode {
	return (
		<section className={styles.features}>
			<div className='container'>
				<ul className={styles.featureList} aria-label='アプリ一覧'>
					{FeatureList.map((feature) => (
						<Feature key={feature.clientId} {...feature} />
					))}
				</ul>
			</div>
		</section>
	);
}
