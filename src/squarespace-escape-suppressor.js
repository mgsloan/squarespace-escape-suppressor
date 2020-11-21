function isSquareSpaceSite() {
  const headChildren = document.head.childNodes;
  for (let i = 0; i < 10; i++) {
    if (i >= headChildren.length) {
      return false;
    }
    const el = headChildren[i];
    if (el.nodeType === Node.COMMENT_NODE &&
        el.data === ' This is Squarespace. ') {
      return true;
    }
  }
  return false;
}

if (isSquareSpaceSite()) {
  console.log('squarespace-escape-suppressor:',
              'Squarespace site detected, installing escape suppressor.');
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
