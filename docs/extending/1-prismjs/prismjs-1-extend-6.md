# Boomer Logic

## Extending Markor with PrismJS

### custom fenced code block highlighting

Finally, because we use `vim`, it would be nice if our line highlighting was
similar to the solarized light theme with `set cursorline`:

<var idx="pre-0" data-line="10-12, 14-20" data-start="1"> </var>
```css
:root {
  --body-background: #fafad7;
  --vim-background: #ffffd7;
  --vim-highlight: #d7d7af30;
  --vim-block: #d7d7af60;
  --vim-status: #4e4e4e;
  --no-highlight: #00000000;
}

.line-numbers span:before {
  background: var(--vim-highlight) !important;
}

.line-highlight {
  background: linear-gradient(to right,
    var(--no-highlight) 0px,
    var(--no-highlight) 38px,
    var(--vim-block) 38px,
    var(--vim-block) 100%  
  );
}
```

We're close. We can mimic vim's visual highlighting, but changing the
background color of a single line to represent the cursor position is
proving difficult.

Finally, although the width of the line number column should always be
static, we could do with some JavaScript to set the width dynamically
just in case.
