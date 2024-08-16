// Edge-Frfox - user.js
// https://github.com/bmFtZQ/edge-frfox
// This file contains the settings required for the theme to function correctly.

// Enables the userChrome.css and userContent.css files.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Allows the theme's SVG icons to be coloured properly.
user_pref("svg.context-properties.content.enabled", true);
// Allows colours used in the theme to be mixed with others.
user_pref("layout.css.color-mix.enabled", true);
// Allows theme to use different colours for light/dark mode.
user_pref("layout.css.light-dark.enabled", true);
// Enables the CSS :has() selector, required for hide tabs toolbar tweak.
user_pref("layout.css.has-selector.enabled", true);


// https://github.com/gabrielcapilla

// Extra settings
user_pref("uc.tweak.hide-tabs-bar", true);
user_pref("uc.tweak.rounded-corners", true); // If you use Adaptative Tab Color set to `false`
user_pref("uc.tweak.disable-drag-space", true);
user_pref("uc.tweak.hide-forward-button", true);

// For KDE users
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
user_pref("widget.use-xdg-desktop-portal.mime-handler", 1);

// Experimental
user_pref("uc.tweak.sidebar-hover", false);
user_pref("uc.tweak.translucent-window", false);
user_pref("uc.tweak.vertical-context-navigation", false);


// FASTFOX

// General
user_pref("content.notify.interval", 100000);

// GFX
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

// Disk Cache
user_pref("browser.cache.jsbc_compression_level", 3);

// Media Cache
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

// Image Cache
user_pref("image.mem.decode_bytes_at_a_time", 32768);

// Network
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

// Spectulative loading
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// Experimental
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("dom.security.sanitizer.enabled", true);
