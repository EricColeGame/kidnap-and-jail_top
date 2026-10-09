export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Kidnap and Jail Wiki",
  shortName: "Kidnap and Jail",
  logoText: "KJ",
  tagline: "Codes, Guides & Tips",
  description: "Explore Kidnap and Jail Wiki for gameplay guides, codes, tips, updates, strategies, and everything players need to master this multiplayer prison adventure game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kidnap-and-jail.top",
  supportEmail: "support@kidnap-and-jail.top",
  gameUrl: "https://www.roblox.com/games/72105128013629/Kidnap-And-Jail",
  heroVideoId: "DjKWoOYfssQ",
  social: {
    discord: "https://www.rodarkstudios.com/",
    youtube: "https://www.youtube.com/watch?v=DjKWoOYfssQ",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
