const $ = {
  bodyClassAdd: (c) => document.body.classList.add(c),
  bodyClassRemove: (c) => document.body.classList.remove(c),
  el: (s) => document.querySelector(s),
  els: (s) => Array.from(document.querySelectorAll(s) || []),
  escapeRegex: (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
  flattenAndUnique: (arr) => [...new Set(arr.flat())],
  ieq: (a, b) => a.toLowerCase() === b.toLowerCase(),
  iin: (a, b) => a.toLowerCase().includes(b.toLowerCase()),
  isDown: (e) => ["c-n", "down", "tab"].includes($.key(e)),
  isRemove: (e) => ["backspace", "delete"].includes($.key(e)),
  isUp: (e) => ["c-p", "up", "s-tab"].includes($.key(e)),

  jsonp: (url) => {
    const script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
  },

  key: (e) => {
    const { ctrlKey, shiftKey, which } = e;
    switch (which) {
      case 8: return "backspace";
      case 9: return shiftKey ? "s-tab" : "tab";
      case 13: return ctrlKey ? "c-enter" : "enter";
      case 16: return "shift";
      case 17: return "ctrl";
      case 18: return "alt";
      case 27: return "escape";
      case 38: return "up";
      case 40: return "down";
      case 46: return "delete";
      case 78: return ctrlKey ? "c-n" : "n";
      case 80: return ctrlKey ? "c-p" : "p";
      case 189: return "dash";
      case 91: case 93: case 224: return "super";
      default: return null;
    }
  },

  pad: (v) => v.toString().padStart(2, "0"),
};
