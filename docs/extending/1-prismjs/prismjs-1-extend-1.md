# Boomer Logic

## Extending Markor with PrismJS

### introduction

We use [Markor](https://github.com/gsantner/markor) to write
documentation with a lot of language-specific code. Although Markor
has support for [PrismJS](https://prismjs.com/index.html), a
feature-rich syntax highlighter, unfortunately this doesn't include
the languages we use, and including line numbers, syntax, and line
highlighting for our code isn't immediately possible.

Luckily for us, we can go to the PrismJS website to download the
plugins and CSS extensions we need. Several times. Until we get it
right. Eventually. Probably.

So, we select the solarizedlight theme; awk, bash, css, python, and
JavaScript languages; as well as the line-highlight, line-numbers,
remove-initial-line, and autoloader plugins. And a bunch of others.
Because.

All we have to do now is get Markor to use them.

Obviously, we ask `Gemini`. And when that doesn't work, we ask
`Claude`, `Llama`, and `Mistral`. Finally, in desperation, we ask
`Copilot`. And when that doesn't work either, we try ~~google~~
~~bing~~
[presearch](https://presearch.com/search?q=markor%20inject%20head%20onPageLoaded).

This is how we discover Markor's limitations and, thanks to a
wonderful bug report, a possible solution.

!!! note ""
    [Markor]: https://github.com/gsantner/markor   
    [PrismJS]: https://prismjs.com/index.html   
    [presearch]: https://presearch.com/
