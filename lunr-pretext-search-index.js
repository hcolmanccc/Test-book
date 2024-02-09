var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
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
  "body": " First section  Text of section. For example   Create a Set  Create a variable. Do not use reserved word or white space for a variable name. After the variable, we use an equal sign to assign (store) value. Define a set by listing the contents separated by commas in between a pair of curly braces.     Intersection  Intersection of sets     "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
