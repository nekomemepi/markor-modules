# markor-modules
Experimental repo to extend [markor](https://github.com/gsantner/markor) with custom modules.

## Extending Markor with PrismJS

### introduction

We use [Markor](https://github.com/gsantner/markor) to write
documentation with a lot of language-specific code. Although Markor
has support for [PrismJS](https://prismjs.com/index.html),
unfortunately this doesn't include the languages we use, and including
line numbers, syntax, and line highlighting for our code isn't
immediately possible.

Luckily for us, we can go to the PrismJS website to download the
plugins and CSS extensions we need: the solarizedlight theme; awk,
bash, css, python, and JavaScript languages; as well as the
line-highlight, line-numbers, remove-initial-line, and autoloader
plugins. And a bunch of others. 

Now, we can reference our PrismJS core files in Markor's `Inject->Head`,
and begin to adapt it by creating our own CSS and JavaScript:

```css
<!-- PrismJS core -->
<script src="../.assets/prism-core.js"></script>
<link href="../.assets/prism-core.css" rel="stylesheet" />

<!-- Inject->Head CSS and JavaScript -->
<link href="../.assets/inject-head.css" rel="stylesheet" />
<script src="../.assets/inject-head.js"></script>
```

The current `inject-head` files can be found in the .assets folder,
along with our preferred PrismJS core files, and a simple view-mode.js
script to copy/paste into markor's `inject->head`.

