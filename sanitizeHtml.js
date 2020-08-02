const sanitizeHtml = require('sanitize-html')

const dirty = '<div>some really tacky HTML<div>';
// const clean = sanitizeHtml(dirty)

// console.log(clean)

const html = "<strong>hello world</strong>";
console.log(sanitizeHtml(html));

const clean = sanitizeHtml(dirty, {
  // I don't want to allow any tag or any any attribute to pass
  allowedTags: [],
  allowedAttributes: {},
})

console.log(clean)

