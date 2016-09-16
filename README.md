# svg-style-inliner

A pure JavaScript utility to inline styles of all elements in an SVG tree. Useful to get accurate screenshots of SVGs with libs like [html2canvas](https://github.com/niklasvh/html2canvas). This code was straight ripped from the NYT's excellent [svg-crowbar](https://github.com/NYTimes/svg-crowbar).

### Use

```javascript
import inliner from 'svg-style-inliner';

inliner(document.getElementById('your-svg'));
// ... or with jQuery
inliner($('#your-svg')[0]);
```
