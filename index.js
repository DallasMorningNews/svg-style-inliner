// This script is adapted from The New York Times' svg-crowbar-2
// https://github.com/NYTimes/svg-crowbar/blob/gh-pages/svg-crowbar-2.js

function traverse(obj) {
    var tree = [];
    tree.push(obj);
    visit(obj);
    function visit(node) {
      if (node && node.hasChildNodes()) {
        var child = node.firstChild;
        while (child) {
          if (child.nodeType === 1 && child.nodeName !== 'SCRIPT'){
            tree.push(child);
            visit(child);
          }
          child = child.nextSibling;
        }
      }
    }
    return tree;
}

function explicitlySetStyle(element) {
    var cSSStyleDeclarationComputed = getComputedStyle(element);
    var i, len, key, value;
    var computedStyleStr = "";
    for (i=0, len=cSSStyleDeclarationComputed.length; i<len; i++) {
        key = cSSStyleDeclarationComputed[i];
        value = cSSStyleDeclarationComputed.getPropertyValue(key);
        // Write style if not a null value AND not set by an inline style
        // or set with !important.
        if (
          value !== '' &&
          (element.attributes.getNamedItem(key) === null || value.indexOf('!important') > -1)
        ) {
            computedStyleStr += key + ":" + value + ";";
        }
    }
    element.setAttribute('style', computedStyleStr);
}


module.exports = function(svg) {
    var allElements = traverse(svg);
    var i = allElements.length;
    while (i--) {
      explicitlySetStyle(allElements[i]);
    }
}
