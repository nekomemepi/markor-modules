## Extending Markor with PrismJS, Admonitions, and modules

### introduction

We use [Markor](https://github.com/gsantner/markor) to write
documentation with a lot of language-specific code. Although Markor
has support for [PrismJS](https://prismjs.com/index.html),
unfortunately this doesn't include the languages we use, and including
line numbers, syntax, and line highlighting for our code isn't
immediately possible.

The files in these directories describe our process of extending
Markor to support code languages and options beyond those included in
a default markor installation, and a module-based approach to extend
Markor's capabilities.

```bash
$ tree ~
.
├── .app
│   ├── fonts
│   ├── modules
│   │   ├── Admonition
│   │   ├── JSME
│   │   ├── Smiles
│   └── snippets
├── .assets
│   ├── async.js
│   ├── inject-head.css
│   ├── inject-head.js
│   ├── loader.js
│   ├── prism-core.css
│   ├── prism-core.js
│   └── view-mode.js
└── docs
```

> [!NOTE]
> The files in these directories will _only_ render correctly in
> Markor with the `.assets` and `.app` directories present, and the
> contents of `view-mode.js` pasted into `inject->head`.
>
> Use the latest
> [tag](https://github.com/nekomemepi/markor-modules/tags) zip or tar
> file, and extract to your notebook home.

The latest tag includes _an updated version_ of the external library,
`smilesDrawer`. This leverages the use of `Admonitions` as a container
to display chemical formulae using keywords and `SMILES` notation.
