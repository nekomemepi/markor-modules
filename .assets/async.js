<script type="module" src="../.assets/loader.js"></script>

(async function () {
  const basePath = '.app/modules/';
  const modules = {
    note: basePath + 'note.js',
    warning: basePath + 'warning.js',
    tip: basePath + 'tip.js',
    // Add more as needed
  };

  const loaded = new Set();

  document.querySelectorAll('.admonition-title').forEach(el => {
    const match = el.textContent.match(/^(\w+):/);
    if (match) {
      const key = match[1].toLowerCase();
      if (modules[key] && !loaded.has(key)) {
        const script = document.createElement('script');
        script.src = modules[key];
        script.type = 'module';
        document.head.appendChild(script);
        loaded.add(key);
      }
    }
  });
})();
