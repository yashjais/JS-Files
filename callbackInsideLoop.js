const sanitizeHtml = require('sanitize-html')

const Publishers = {
  "edges": [
    {
      "node": {
        "Name": "<div>Pub-1</div>"
      }
    },
    {
      "node": {
        "Name": "<div>Pub-2</div>"
      }
    },
    {
      "node": {
        "Name": "Pub-3"
      }
    },
    {
      "node": {
        "Name": "Pub-4"
      }
    }
  ]
}

const resultArray = []

Publishers.edges.map(({ node }) => {
  let pubName
  (function() {
    const publisherName = node.Name
      return pubName = sanitizeHtml(publisherName, {
        allowedTags: [],
        allowedAttributes: {},
      });
  })();
  let publisherName = { value: pubName ? pubName : node.Name }
  resultArray.push(publisherName)
})

console.log(resultArray)
