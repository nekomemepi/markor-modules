function onPageLoaded() {
  document.querySelectorAll('pre').forEach((pre, index) => {
    if (!pre.classList.contains("line-numbers")) {
      pre.classList.add("line-numbers")
    }
    pre.id = `pre-${index}`
    document.querySelectorAll(`[idx="${pre.id}"]`).forEach(el => {
      Array.from(el.attributes).forEach(function(attr) {
      pre.setAttribute(attr.name, attr.value);
        if (el.hasAttribute("no-line-numbers")) {
          pre.classList.remove("line-numbers")
        }
      })
    })
  }) 

  /* load custom fonts */
  const font1 = new FontFace("Caveat", 'url(../.app/fonts/Caveat.ttf)')
  const font2 = new FontFace("Fuzzy Bubbles", 'url(../.app/fonts/FuzzyBubbles-Regular.ttf)')
  const font3 = new FontFace("Sour Gummy", 'url(../.app/fonts/SourGummy.ttf)')
  const font4 = new FontFace("Shantell Sans", 'url(../.app/fonts/ShantellSans.ttf)')
  const font5 = new FontFace("Reddit Mono", 'url(../.app/fonts/RedditMono.ttf)')
  Promise.all([font1.load(), font2.load(), font3.load(), font4.load(), font5.load()])
    .then(function(loadedFonts) {
      loadedFonts.forEach(function(font) {
        document.fonts.add(font)
      })
    })

  // header elements 
  document.querySelectorAll('[class^="header"]').forEach(el => {
    el.style.color = "green"
    el.style.fontFamily = '"Sour Gummy", "Caveat"'
  })

  /* Set paragraph text color and size and font family */
  document.querySelectorAll("body > p").forEach(el => {
    el.style.color = "black"
    el.style.fontSize = "105%"
    el.style.fontFamily = "Shantell Sans"
  })

  /* Set inline code color and size */
  document.querySelectorAll("p > code").forEach(el => {
    el.style.color = "darkorange"
    el.style.fontSize = "110%"
  })

  Prism.highlightAll()
  SmilesInAdmonitions();
}
