# Boomer Logic

## Extending Markor with PrismJS

### styling the solution

Ideally, we want to have the minimum amount of CSS and JavaScript in
our markdown, so we add our own JavaScript customization:

```js
  /* header elements */
  document.querySelectorAll('[class^="header"]').forEach(el => {
    el.style.color = "green"
    el.style.fontFamily = '"Sour Gummy", "Caveat"'
  })

  /* Set paragraph text color and size and font family */
  document.querySelectorAll("p").forEach(el => {
    el.style.color = "dimgray"
    el.style.fontSize = "95%"
    el.style.fontFamily = '"Shantell Sans", "Caveat"'
  })

  /* Set inline code color and size */
  document.querySelectorAll("p > code").forEach(el => {
    el.style.color = "darkorange"
    el.style.fontSize = "120%"
  })
```
