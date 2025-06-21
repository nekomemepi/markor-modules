<script type="module" src="../.assets/loader.js"></script>

(async function () {
  const basePath = '.app/modules/'
  const modules = {
    footer: basePath + 'warning.js',
    splash: basePath + 'note.js',
    smiles: basePath + 'Smiles/smilestip.js',
    // Add more as needed
  }

  /* Recognised admonitions:
   * abstract, summary, tldr, bug, danger, error, example, snippet,
   * failure, fail, missing, question, help, faq, info, todo, note,
   * seealso, quote, cite, success, check, done, tip, hint, important,
   * warning, caution, attention.
   */

  // Use info admonitions
  const admonitions = document.querySelectorAll('.adm-info')
  const loaded = new Set()

  admonitions.forEach((admonition, index) => {
    const heading = admonition.querySelector('.adm-heading span')
    if (!heading) return

    const match = heading.textContent.split(/[:|]/)
    if (match) {
      const key = match[0].trim().toLowerCase()
      if (modules[key] && !loaded.has(key)) {
        script.src = modules[key]
        script.type = 'module'
        document.head.appendChild(script)
        loaded.add(key)
      }
    }
  })
})()
