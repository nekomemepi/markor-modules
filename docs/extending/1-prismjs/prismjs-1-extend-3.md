# Boomer Logic

## Extending Markor with PrismJS

### ensuring line numbers

For best performance, Markor quite properly supports only a limited
number of PrismJS languages and plugins. We can try to extend Markor
by ensuring that every `<pre>` includes the line-numbers class by
default. Then, we will misuse `<var>` elements in our markdown for our
attribute and class variables.

This is our markdown for `pre-0` with `no-line-numbers=""` and our
JavaScript to achieve this in `pre-1`.

<var idx="pre-0" no-line-numbers=""> </var>
```css
<var idx="pre-0" no-line-numbers=""> </var>
<var idx="pre-1" data-line="8-18" data-start="2"> </var>
```

<var idx="pre-1" data-line="8-18" data-start="2"> </var>
```js
function onPageLoaded() {
  document.querySelectorAll('pre')
    .forEach((pre, index) => {
      if (!pre.classList.contains("line-numbers")) {
        pre.classList.add("line-numbers")
      }
      pre.id = `pre-${index}`
      document.querySelectorAll(`[idx="${pre.id}"]`)
        .forEach(el => {
          Array.from(el.attributes)
            .forEach(function(attr) {
              pre.setAttribute(attr.name, attr.value);
              if (el.hasAttribute("no-line-numbers")) {
                pre.classList.remove("line-numbers")
              }
            })
        })
    })
  Prism.highlightAll()}
```
