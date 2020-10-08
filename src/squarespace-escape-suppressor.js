function isSquareSpaceSite() {
  // A quick check which will rule out most non-squarespace sites.
  if (!document.body.hasAttribute('data-controllers-bound')) {
    return false;
  }

  // A more definitive check.
  const scriptRegex = new RegExp('^https://static[^.]*.squarespace.com/.*site-bundle.js$');
  for (const script of document.getElementsByTagName('script')) {
    if (script.hasAttribute('src')) {
      console.log('checking', script.src);
      if (scriptRegex.test(script.src)) {
        return true;
      }
    }
  }
  return false;
}

if (isSquareSpaceSite()) {
  console.log('Squarespace site detected, installing escape suppressor.');
  document.addEventListener('keyup', (ev) => {
    if (ev.key === 'Escape') {
      const element = ev.target;
      if (element.tagName !== 'INPUT' &&
          element.tagName !== 'SELECT' &&
          element.tagName !== 'TEXTAREA' &&
          !element.isContentEditable) {
        ev.stopPropagation();
      }
    }
  }, true);
}
