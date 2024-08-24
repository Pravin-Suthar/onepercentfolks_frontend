export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
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
      href: "/InvestementTools/return-calculator",
    },
    {
      label: "Traders Corner",
      href: "/TradersCorner/live-market",
    },
    {
      label: "About",
      href: "/About/aboutUs",
    },
  ],
  navMenuTradersCornerItems: [
  
    {
      label: "Live Market",
      href: "/TradersCorner/live-market",
    },
    {
      label: "Coming soon... stay tuned",
      href: "/",
    },
  ],

  returnCalculatorTools: [
    {
      label: "SIP Calculator",
      href: "/InvestementTools/sip-calculator",
    },
    {
      label: "Lumpsum Calculator",
      href: "/InvestementTools/lumpsum-calculator",
    },
  ],

  loginSigninSignup: [
    {
      label: "Login",
      href: "/Auth/login",
    },
    {
      label: "Signup",
      href: "/Auth/signup",
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
