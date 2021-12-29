# Windi CSS Plugin Content Visibility

[![GitHub Actions](https://github.com/Felix-Icaza/windicss-content-visibility/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/Felix-Icaza/windicss-content-visibility/actions/workflows/test.yml)
[![Coverage Status](https://coveralls.io/repos/github/Felix-Icaza/windicss-content-visibility/badge.svg?branch=main)](https://coveralls.io/github/Felix-Icaza/windicss-content-visibility?branch=main)
[![Version](https://img.shields.io/github/package-json/v/Felix-Icaza/windicss-content-visibility)](https://github.com/Felix-Icaza/windicss-content-visibility/releases)

This plugin adds support for using the [`content-visibility`](https://developer.mozilla.org/en-US/docs/Web/CSS/content-visibility) and [`contain-intrinsic-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/contain-intrinsic-size) CSS properties in your Windi CSS project.

By default supports responsive variants.

## Installation

Using NPM:

```bash
npm i -D windicss-content-visibility
```

Using PNPM:

```bash
pnpm add -D windicss-content-visibility
```

Add the plugin to your windi config file.

```js
plugins: [
  require('windicss-content-visibility')
]
```

## Usage

Available utilities:

| Class | CSS Property |
| --- | --- |
| `content-auto` | `content-visibility: auto` |
| `content-visible` | `content-visibility: visible` |
| `content-hidden` | `content-visibility: hidden` |
| `intrinsic-size-${integer}` | `contain-intrinsic-size: ${integer}px` |

### Examples:

Basic:

```html
<section class="content-auto intrinsic-size-200">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
</section>
```

With responsive variants:

```html
<section class="sm:content-hidden md:content-visible md:intrinsic-size-320">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
</section>
```

## License

This project use the MIT License. Please see [License File](LICENSE) for more information.
