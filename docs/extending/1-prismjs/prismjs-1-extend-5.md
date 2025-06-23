# Boomer Logic

## Extending Markor with PrismJS

### custom fonts

We can also use fonts from [fonts.google.com](). Locally, we can use [eruda]()
to inspect the DOM, but loading fonts this way is necessary for ~~tracking~~ security
reasons when we debug our code in ~~Chrome~~ ~~Edge~~ ~~elinks~~ Vivaldi. 

```js
  /* use the fonts we downloaded to ../.app/fonts */
  const font1 = new FontFace("Caveat", 
    'url(../.app/fonts/Caveat.ttf)')
  const font2 = new FontFace("Fuzzy Bubbles", 
    'url(../.app/fonts/FuzzyBubbles-Regular.ttf)')
  const font3 = new FontFace("Sour Gummy", 
    'url(../.app/fonts/SourGummy.ttf)')
  const font4 = new FontFace("Shantell Sans", 
    'url(../.app/fonts/ShantellSans.ttf)')
  
  Promise.all(
    [font1.load(), font2.load(), font3.load(), font4.load()]
  )
  .then(function(loadedFonts) {
      loadedFonts.forEach(function(font) 
      {document.fonts.add(font)})
  })
```

!!! note ""
    eruda: https://github.com/liriliri/eruda
