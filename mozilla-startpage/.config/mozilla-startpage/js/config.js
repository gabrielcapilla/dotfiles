const CONFIG = {
  commands: [
    {
      name: "Duckduckgo",
      key: "*",
      url: "https://duckduckgo.com",
      search: "/?q={}",
    },

    /** ###### GENERAL ###### */

    {
      category: "General",
      name: "Proton",
      key: "proton",
      url: "https://mail.proton.me/",
      search: "/#search/text={}",
      color: "linear-gradient(0deg, #8B58B2, #5A4A7D)",
      icon: "proton",
      quickLaunch: true,
    },

    {
      category: "General",
      name: "Twitter",
      key: "twitter",
      url: "https://twitter.com/home",
      search: "/search?q={}&src=typed_query",
      color: "linear-gradient(0deg, #1DA1F2, #1A91DA)",
      icon: "twitter",
      quickLaunch: false,
    },

    {
      category: "General",
      name: "Reddit",
      key: "reddit",
      url: "https://reddit.com",
      search: "/r/{}",
      color: "linear-gradient(0deg, #FF8B60, #FF4500)",
      icon: "reddit",
      quickLaunch: false,
    },

    {
      category: "General",
      name: "Discord",
      key: "discord",
      url: "https://discord.com/app",
      color: "linear-gradient(0deg, #7289DA, #5865F2)",
      icon: "discord",
      quickLaunch: false,
    },

    /** ###### RECURSOS ###### */

    {
      category: "Recursos",
      name: "Pihole",
      key: "pihole",
      url: "http://192.168.0.15/admin/index.php",
      search: "/search?q={}",
      color: "#121116",
      icon: "pihole",
      quickLaunch: false,
    },

    {
      category: "Recursos",
      name: "GitHub",
      key: "github",
      url: "https://github.com",
      search: "/search?q={}",
      color: "linear-gradient(0deg, #0366d6, #1b6ac8)",
      icon: "github",
      quickLaunch: false,
    },

    {
      category: "Recursos",
      name: "ChatGPT",
      key: "gpt",
      url: "https://chat.openai.com/",
      color: "linear-gradient(0deg, #10a37f, #0e7a67)",
      icon: "gpt",
      quickLaunch: false,
    },

    {
      category: "Recursos",
      name: "Arch Linux",
      key: "arch",
      url: "https://arch.d3sox.me/",
      color: "linear-gradient(0deg, #1793d1, #1e90ff)",
      icon: "arch",
      quickLaunch: false,
    },

    /** ###### PIRACY ###### */

    {
      category: "Piracy",
      name: "Steamrip",
      key: "steamrip",
      url: "https://steamrip.com/",
      search: "/?s={}",
      color: "#512072",
      icon: "steamrip",
      quickLaunch: false,
    },

    {
      category: "Piracy",
      name: "Gamesfull",
      key: "gamesfull",
      url: "https://gamesfull.app/",
      color: "#F67D03",
      icon: "gamesfull",
      quickLaunch: false,
    },

    {
      category: "Piracy",
      name: "Don Torrent",
      key: "torrent",
      url: "https://donproxies.com/#proxy",
      color: "#04379C",
      icon: "dontorrent",
      quickLaunch: false,
    },

    {
      category: "Piracy",
      name: "TorrentGalaxy",
      key: "tgx",
      url: "https://tgx.rs",
      search: "/torrents.php?search={}#results",
      color: "#FE9903",
      icon: "tgx",
      quickLaunch: false,
    },

    /** ###### CLOUD ###### */

    {
      category: "Cloud",
      name: "Mega",
      key: "mega",
      url: "https://mega.nz",
      color: "linear-gradient(0deg, #d9e021, #afca08)",
      icon: "mega",
      quickLaunch: false,
    },

    {
      category: "Cloud",
      name: "Drive",
      key: "drive",
      url: "https://drive.proton.me",
      color: "#00023E",
      icon: "drive",
      quickLaunch: false,
    },

    {
      category: "Cloud",
      name: "Internxt",
      key: "internxt",
      url: "https://drive.internxt.com/",
      color: "#00023E",
      icon: "internxt",
      quickLaunch: false,
    },

    {
      category: "Cloud",
      name: "MediaFire",
      key: "mediafire",
      url: "https://app.mediafire.com/myfiles",
      color: "#00023E",
      icon: "mediafire",
      quickLaunch: false,
    },

    /** ####### OTROS ###### */

    {
      category: "Otros",
      name: "ProtonDB",
      key: "protondb",
      url: "https://protondb.com/",
      search: "/search?q={}",
      color: "#00023E",
      icon: "protondb",
      quickLaunch: false,
    },

    {
      category: "Otros",
      name: "SteamDB",
      key: "steamdb",
      url: "https://steamdb.info/",
      search: "/search/?a=all&q={}",
      color: "#00023E",
      icon: "steam",
      quickLaunch: false,
    },

    {
      category: "Otros",
      name: "SteamGridDB",
      key: "steamgrid",
      url: "https://www.steamgriddb.com/",
      search: "/search/grids?term={}",
      color: "#00023E",
      icon: "steam",
      quickLaunch: false,
    },

    {
      category: "Otros",
      name: "SteamCracked",
      key: "steam cracked",
      url: "https://steamcrackedgames.com",
      search: "/search/?q={}",
      color: "#00023E",
      icon: "steam",
      quickLaunch: false,
    },

    /** ###### OCULTO ###### */

    {
      key: "cachy",
      url: "https://cachyos.org/",
      color: "#3C4936",
      quickLaunch: false,
    },

    {
      key: "pass",
      url: "https://pass.proton.me",
      color: "#13131d",
      quickLaunch: false,
    },

    {
      key: "bsky",
      url: "https://bsky.app",
      search: "/search?q={}&src=typed_query",
      quickLaunch: false,
    },

    {
      key: "pinterest",
      url: "https://www.pinterest.es/",
      search: "/search/pins/?q={}&src=typed_query",
      color: "linear-gradient(0deg, #ff0000, #cc0000, #990000)",
      quickLaunch: false,
    },

    {
      key: "steam",
      url: "https://store.steampowered.com/?l=spanish",
      search: "/search/?term={}",
      quickLaunch: false,
    },

    {
      key: "tw",
      url: "https://www.twitch.tv",
      search: "/{}",
      color: "linear-gradient(0deg, #6441a5, #4b367c)",
      quickLaunch: false,
    },

    {
      key: "youtube",
      url: "https://youtube.com",
      search: "/#ysm-group-title={}",
      color: "linear-gradient(0deg, #ff0000, #cc0000, #990000)",
      quickLaunch: false,
    },

    {
      key: "deepl",
      url: "https://www.deepl.com/translator",
      search: "/translator#es/en/{}",
      color: "#1a73e8",
      quickLaunch: false,
    },
  ],

  suggestions: true /** Enable suggestions */,
  suggestionsLimit: 4 /** Suggestions num */,

  influencers: [
    { name: "Commands", limit: 2 },
    { name: "Default", limit: 4 },
    { name: "History", limit: 1 },
    { name: "DuckDuckGo", limit: 4 },
  ],

  defaultSuggestions: {
    r: ["r/unixporn", "r/linux_gaming", "r/Piracy"],
  },

  newTab: true /** Open newtab */,
  colors: true /** Dynamic background */,
  showKeys: false /** Show keys instead icons */,
  iconExtension: "png" /** Icons format */,
  pathDelimiter: ":" /** Path delimiter */,
  clockDelimiter: ":" /** Clock delimiter */,
  searchDelimiter: "/" /** Search delimiter */,
  instantRedirect: false /** Instant redirect */,
  twentyFourHourClock: true /** 24H clock */,
};
