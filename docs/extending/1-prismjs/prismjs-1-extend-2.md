# Boomer Logic

## Extending Markor with PrismJS

### a possible solution

A wise (and lonely) man once said that documentation is like s3x. When
it's good, that's wonderful; when it's bad, it's better than nothing
at all. At least we found this bug report:

[Markor issue #2380](https://github.com/gsantner/markor/issues/2380):
>   
> Inject-Head not triggering - Undefined reference inside
> onPageLoaded_markor_private prevents execution of user injected
> definition onPageLoaded   
>   

<var idx="pre-0" no-line-numbers=""> </var>
From which we get this code snippet:
```js
function onPageLoaded(){
  document.querySelectorAll("p").forEach(
    el => el.setAttribute("style","color:red")
  );
}
```

Which gives us an idea as to how we can reference our PrismJS core
files in Markor's `Inject->Head`, and begin to adapt it by creating
our own CSS and JavaScript:

<var idx="pre-1" no-line-numbers=""> </var>
```css
<!-- PrismJS core -->
<script src="../.assets/prism-core.js"></script>
<link href="../.assets/prism-core.css" rel="stylesheet" />

<!-- Inject->Head CSS and JavaScript -->
<link href="../.assets/inject-head.css" rel="stylesheet" />
<script src="../.assets/inject-head.js"></script>
```
