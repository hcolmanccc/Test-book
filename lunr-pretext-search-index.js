var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-name",
  "level": "1",
  "url": "sec-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "First section",
  "body": " First section  Text of section. For example \\begin{tikzpicture} \\begin{axis}[ axis lines = center, xlabel = \\(x\\), ylabel = {\\(y\\)}, domain = -1:1, ymin = -1, ymax = 2, ] \\addplot [] {x^2}; \\end{axis} \\end{tikzpicture}  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
