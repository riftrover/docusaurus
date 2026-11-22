import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "RiftRover",
  tagline: "-昨日の明日は明日の昨日-",
  favicon: "img/favicon.ico",

  url: "https://riftrover.github.io/",
  baseUrl: "/docusaurus/",

  organizationName: "riftrover",
  projectName: "docusaurus",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/logo.svg",
    navbar: {
      title: "RiftRover",
      logo: {
        alt: "RiftRover",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          position: "left",
          label: "Guide",
        },
        { to: "/blog", label: "Blog", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ページ一覧",
          items: [
            {
              label: "Guide",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "コミュニティ",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/txt2HrmAXv",
            },
            {
              label: "X",
              href: "https://x.com/riftrover",
            },
          ],
        },
        {
          title: "規約とポリシー",
          items: [
            {
              label: "利用規約",
              to: "/terms-of-use",
            },
            {
              label: "個人情報保護方針",
              to: "/privacy-policy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RiftRover, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    blog: {
      sidebar: {
        groupByYear: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
