import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://alessandrobaffa.com", // replace this with your deployed domain
  author: "Alessandro",
  desc: "Personal web log",
  title: "alebaffa's",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/alebaffa",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ab89f736492/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/alebaffa.bsky.social",
    linkTitle: `${SITE.title} on Bluesky`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://famichiki.jp/@alebaffa",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];
