export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Traders Corner",
      href: "/TradersCorner/pattern-detection",
    },
    {
      label: "Return Calculator",
      href: "/returnCalculator/return-calculator",
    },
    {
      label: "About",
      href: "/About/aboutUs",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Return Calculator",
      href: "/returnCalculator/return-calculator",
    },
    {
      label: "Traders Corner",
      href: "/TradersCorner/pattern-detection",
    },
    {
      label: "About",
      href: "/About/aboutUs",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
